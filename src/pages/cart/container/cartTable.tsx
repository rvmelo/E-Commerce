/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { Order, OrderProduct } from '../../../interfaces';
import { RemoveButton } from './styles';

interface Total {
  price: number;
  quantity: number;
}

interface CartTableProps {
  total: Total;
  order: Order;
  removeOrderProduct(orderProduct: OrderProduct): void;
}

const CartTable: React.FC<CartTableProps> = ({
  order,
  total,
  removeOrderProduct,
}) => (
  <table>
    <tbody>
      <tr>
        <th>Café</th>
        <th>SubTotal</th>
        <th className="quantity">Quantidade</th>
        <th className="action">Ação</th>
      </tr>

      {order?.order_products &&
        order.order_products.map(orderProduct => (
          <tr key={orderProduct.product_id}>
            <td>{orderProduct.name}</td>
            <td>
              {(orderProduct.price * orderProduct.quantity).toFixed(2)} R$
            </td>
            <td className="quantity">{orderProduct.quantity}</td>
            <td className="action">
              <RemoveButton onClick={() => removeOrderProduct(orderProduct)}>
                Remover
              </RemoveButton>
            </td>
          </tr>
        ))}
      <tr>
        <th>Total: </th>
        <th>{total.price.toFixed(2)} R$</th>
        <th className="quantity">{total.quantity}</th>
      </tr>
    </tbody>
  </table>
);

export default memo(CartTable);
