/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

interface InputProps {
  name: string;
}

interface ReturnValue {
  defaultValue: any;
  error: string | undefined;
  isFocused: boolean;
  isFilled: boolean;
  handleInputFocus(): void;
  handleInputBlur(): void;
  inputRef: React.RefObject<HTMLInputElement>;
}

function useInput({ name }: InputProps): ReturnValue {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return {
    defaultValue,
    error,
    isFocused,
    isFilled,
    handleInputFocus,
    handleInputBlur,
    inputRef,
  };
}

export default useInput;
