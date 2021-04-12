/* eslint-disable no-unused-vars */
import { FormEvent, useCallback, useState } from 'react';
import { useRecord } from '../../hooks/record';
import { useToast } from '../../hooks/toast';
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
  isProductOnCart: boolean;
}

interface ProductProps {
  product_id?: string;
}

function useProductDetail({ product_id }: ProductProps): ReturnValue {
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');

  const { addOrderProduct, order } = useRecord();

  const { addToast } = useToast();

  const [isProductOnCart, setIsProductOnCart] = useState(() => {
    if (product_id && order.order_products) {
      return !!order.order_products.find(
        orderProduct => orderProduct.product_id === product_id,
      );
    }
    return false;
  });

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>, orderProduct: OrderProduct): void => {
      event.preventDefault();

      setIsProductOnCart(true);

      addOrderProduct(orderProduct);

      addToast({
        type: 'success',
        title: 'Cart',
        description: 'Coffee added to cart!',
      });
    },
    [addOrderProduct, addToast],
  );

  return {
    handleSubmit,
    quantity,
    setQuantity,
    note,
    setNote,
    isProductOnCart,
  };
}

export default useProductDetail;
