/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useAuth } from './auth';

import { OrderProduct, Order } from '../interfaces';

interface RecordContextData {
  addOrderProduct(orderProduct: OrderProduct): void;
  setOrder(order: Order): void;
  retrieveOrder(): void;
  order: Order;
}

const RecordContext = createContext<RecordContextData>({} as RecordContextData);

const RecordProvider: React.FC = ({ children }) => {
  const { customer } = useAuth();

  const [order, setOrder] = useState<Order>({} as Order);

  useEffect(() => {
    if (customer && order.order_products) {
      localStorage.setItem(
        `@E-Commerce-${customer.id}:order`,
        JSON.stringify(order),
      );
    }

    // localStorage.clear();
  }, [order, customer]);

  const retrieveOrder = useCallback(() => {
    const storedOrder = customer
      ? localStorage.getItem(`@E-Commerce-${customer.id}:order`)
      : undefined;

    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  }, [customer]);

  const addOrderProduct = useCallback((orderProduct: OrderProduct) => {
    setOrder(prev => {
      const orderProductIndex = prev.order_products
        ? prev.order_products.findIndex(
            op => op.product_id === orderProduct.product_id,
          )
        : -1;

      if (orderProductIndex >= 0) {
        prev.order_products[orderProductIndex].quantity +=
          orderProduct.quantity;
        return { ...prev };
      }

      return {
        ...prev,
        order_products: prev.order_products
          ? [...prev.order_products, orderProduct]
          : [{ ...orderProduct }],
      };
    });
  }, []);

  return (
    <RecordContext.Provider
      value={{ addOrderProduct, order, setOrder, retrieveOrder }}
    >
      {children}
    </RecordContext.Provider>
  );
};

function useRecord(): RecordContextData {
  const context = useContext(RecordContext);

  if (!context) {
    throw new Error('Must have a provider');
  }

  return context;
}

export { RecordProvider, useRecord };
