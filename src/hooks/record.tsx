/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { OrderProduct, Order } from '../interfaces';

interface RecordContextData {
  addOrderProduct(orderProduct: OrderProduct): void;
  order: Order;
}

const RecordContext = createContext<RecordContextData>({} as RecordContextData);

const RecordProvider: React.FC = ({ children }) => {
  const [order, setOrder] = useState<Order>(() => {
    const storedOrder = localStorage.getItem('@E-Commerce:order');

    if (storedOrder) {
      return JSON.parse(storedOrder);
    }

    return {} as Order;
  });

  useEffect(() => {
    localStorage.setItem('@E-Commerce:order', JSON.stringify(order));
    // localStorage.removeItem('@E-Commerce:order');
  }, [order]);

  const addOrderProduct = useCallback((orderProduct: OrderProduct) => {
    setOrder(prev => ({
      ...prev,
      order_products: prev.order_products
        ? [...prev.order_products, orderProduct]
        : [{ ...orderProduct }],
    }));
  }, []);

  return (
    <RecordContext.Provider value={{ addOrderProduct, order }}>
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
