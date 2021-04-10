/* eslint-disable no-unused-vars */
import { useMemo } from 'react';
import { Order, OrderProduct } from '../../interfaces';
import { useRecord } from '../../hooks/record';

interface Total {
  price: number;
  quantity: number;
}

interface ReturnValue {
  total: Total;
  order: Order;
  removeOrderProduct(orderProduct: OrderProduct): void;
}

function useCart(): ReturnValue {
  const { order, removeOrderProduct } = useRecord();

  const total = useMemo(() => {
    if (order?.order_products) {
      return order.order_products.reduce(
        (totalPrice, orderProduct) => {
          totalPrice.price += orderProduct.price * orderProduct.quantity;
          totalPrice.quantity += orderProduct.quantity;
          return totalPrice;
        },
        { price: 0, quantity: 0 },
      );
    }

    return { price: 0, quantity: 0 };
  }, [order]);

  return { total, order, removeOrderProduct };
}

export default useCart;
