import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Header from '../../../components/header';
import useCart from '../useCart';
import Button from '../../../components/button';

const Cart: React.FC = () => {
  const { total, order } = useCart();
  const history = useHistory();

  return (
    <>
      <Header />
      <Container>
        <h1>Carrinho de Compras</h1>
        <table>
          <tbody>
            <tr>
              <th>Café</th>
              <th>SubTotal</th>
              <th className="quantity">Quantidade</th>
            </tr>

            {order.order_products.map(orderProduct => (
              <tr key={orderProduct.product_id}>
                <td>{orderProduct.name}</td>
                <td>
                  {(orderProduct.price * orderProduct.quantity).toFixed(2)} R$
                </td>
                <td className="quantity">{orderProduct.quantity}</td>
              </tr>
            ))}
            <tr>
              <th>Total: </th>
              <th>{total.price.toFixed(2)} R$</th>
              <th className="quantity">{total.quantity}</th>
            </tr>
          </tbody>
        </table>

        <Button type="submit" onClick={() => history.push('/payment')}>
          Concluir Compra
        </Button>
      </Container>
    </>
  );
};

export default Cart;
