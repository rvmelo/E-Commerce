/* eslint-disable prefer-arrow-callback */

/* eslint-disable no-unused-vars */
import React from 'react';
import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';
import { useRecord } from '../../hooks/record';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { Order } from '../../interfaces';

interface PaymentFormData {
  card_number: string;
  cvc: string;
  card_validation_date: string;
  name_on_card: string;
  country: string;
}

interface ReturnValue {
  handleSubmit(data: PaymentFormData): void;
  formRef: React.RefObject<FormHandles>;
}

function usePayment(): ReturnValue {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { addToast } = useToast();
  const { order, setOrder } = useRecord();
  const { customer } = useAuth();

  const handleSubmit = useCallback(
    async (paymentData: PaymentFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          card_number: Yup.string()
            .required('Número do cartão obrigatório')
            .min(16, 'Cartão inválido'),
          cvc: Yup.string()
            .min(3, 'CVC inválido')
            .max(3, 'CVC inválido')
            .required('CVC obrigatório'),
          card_validation_date: Yup.string()
            .min(5, 'Data inválida')
            .max(5, 'Data inválida')
            .test('date-test', 'Data inválida', function validate(value) {
              const dataValues = value?.split('/');
              if (
                dataValues &&
                Number(dataValues[0]) >= 1 &&
                Number(dataValues[0]) <= 12 &&
                Number(dataValues[1]) >= 21
              ) {
                return true;
              }
              return false;
            })
            .required('Data obrigatória'),
          name_on_card: Yup.string()
            .min(3, 'Nome inválido')
            .required('Nome obrigatório'),
          country: Yup.string()
            .min(3, 'País não existe')
            .required('País obrigatório'),
        });

        await schema.validate(paymentData, {
          abortEarly: false,
        });

        addToast({
          type: 'success',
          title: 'Pagamento',
          description: 'Pagamento realizado com sucesso!',
        });

        const orderResponse = await api.post('/orders', {
          order_products: order.order_products,
        });
        await api.post('/transactions', {
          ...paymentData,
          order_id: orderResponse.data.id,
        });

        localStorage.removeItem(`@E-Commerce-${customer.id}:order`);
        setOrder({} as Order);

        history.push('/productlist');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Falha no pagamento',
          description:
            'Ocorreu um erro ao efetuar pagamento, cheque os dados de seu cartão',
        });
      }
    },
    [addToast, history, order.order_products, customer.id, setOrder],
  );

  return { handleSubmit, formRef };
}

export default usePayment;
