/* eslint-disable no-unused-vars */
import React, { FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { OrderProduct } from '../../../interfaces';

import Button from '../../../components/button';

import { Form, TextAreaContainer } from './styles';

interface RouterProps {
  product_id: string;
  name: string;
  price: number;
}

interface FormProps {
  quantity: number;
  setQuantity(quantity: number): void;
  setNote(note: string): void;
  note: string;
  handleSubmit(
    event: FormEvent<HTMLFormElement>,
    orderProduct: OrderProduct,
  ): void;
}

const FormComponent: React.FC<FormProps> = ({
  quantity,
  setQuantity,
  note,
  setNote,
  handleSubmit,
}) => {
  const { product_id, name, price } = useLocation().state as RouterProps;

  return (
    <Form
      onSubmit={e =>
        handleSubmit(e, {
          product_id,
          name,
          price,
          quantity,
          note,
        })
      }
    >
      <label htmlFor="quantity">
        Quantidade:
        <input
          type="number"
          onChange={e => setQuantity(Number(e.target.value))}
          id="quantity"
          min={1}
          max={5}
          defaultValue={1}
        />
      </label>

      <TextAreaContainer>
        <textarea
          id="observation"
          onChange={e => setNote(e.target.value)}
          placeholder="Digite observação sobre pedido"
        />
      </TextAreaContainer>
      <Button type="submit">Adicionar ao carrinho</Button>
    </Form>
  );
};

export default FormComponent;
