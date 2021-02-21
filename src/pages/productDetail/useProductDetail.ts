/* eslint-disable no-unused-vars */
import { FormEvent, useCallback, useState } from 'react';
import { useRecord } from '../../hooks/record';
import { OrderProduct } from '../../interfaces';

interface ReturnValue {
  handleSubmit(
    event: FormEvent<HTMLFormElement>,
    orderProduct: OrderProduct,
  ): void;
  quantity: number;
  setQuantity(q: number): void;
  note: string;
  setNote(n: string): void;
}

function useProductDetail(): ReturnValue {
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');

  const { addOrderProduct } = useRecord();

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>, orderProduct: OrderProduct): void => {
      event.preventDefault();

      addOrderProduct(orderProduct);
    },
    [addOrderProduct],
  );

  return {
    handleSubmit,
    quantity,
    setQuantity,
    note,
    setNote,
  };
}

export default useProductDetail;
