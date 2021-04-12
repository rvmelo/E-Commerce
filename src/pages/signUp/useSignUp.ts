/* eslint-disable no-unused-vars */
import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface ReturnValue {
  formRef: React.RefObject<FormHandles>;
  handleSubmit(data: SignUpFormData): void;
  isLoading: boolean;
}

function SignUp(): ReturnValue {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        setIsLoading(true);
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Name required'),
          email: Yup.string()
            .required('Email required')
            .email('Type a valid email'),
          password: Yup.string().min(6, 'At least 6 digits'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/customers', data);

        addToast({
          type: 'success',
          title: 'Account created!',
          description: 'You are now able to log in at virtual coffee',
        });

        setIsLoading(false);

        history.push('/');
      } catch (err) {
        setIsLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'SignUp Error',
          description: 'Sign up failed, try again',
        });
      }
    },
    [addToast, history],
  );

  return {
    formRef,
    handleSubmit,
    isLoading,
  };
}

export default SignUp;
