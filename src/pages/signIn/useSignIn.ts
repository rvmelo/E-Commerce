/* eslint-disable no-unused-vars */
import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

interface ReturnValue {
  formRef: React.RefObject<FormHandles>;
  handleSubmit(data: SignInFormData): void;
  isLoading: boolean;
}

function useSignIn(): ReturnValue {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        setIsLoading(true);
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email required')
            .email('Type a valid email'),
          password: Yup.string().required('Password required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        setIsLoading(false);

        history.push('/productlist');
      } catch (err) {
        setIsLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Authentication Error',
          description: 'Failed to login, check your credentials',
        });
      }
    },
    [signIn, addToast, history],
  );

  return {
    formRef,
    handleSubmit,
    isLoading,
  };
}

export default useSignIn;
