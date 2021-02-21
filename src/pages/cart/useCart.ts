import { useMemo } from 'react';
import { Order } from '../../interfaces';
import { useRecord } from '../../hooks/record';

interface Total {
  price: number;
  quantity: number;
}

interface ReturnValue {
  total: Total;
  order: Order;
}

function useCart(): ReturnValue {
  const { order } = useRecord();

  const total = useMemo(
    () =>
      order.order_products.reduce(
        (totalPrice, orderProduct) => {
          totalPrice.price += orderProduct.price * orderProduct.quantity;
          totalPrice.quantity += orderProduct.quantity;
          return totalPrice;
        },
        { price: 0, quantity: 0 },
      ),
    [order.order_products],
  );

  return { total, order };
}

export default useCart;
