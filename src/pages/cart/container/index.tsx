import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Header from '../../../components/header';
import useCart from '../useCart';
import Button from '../../../components/button';
import CartTable from './cartTable';

const Cart: React.FC = () => {
  const { total, order } = useCart();
  const history = useHistory();

  return (
    <>
      <Header />
      <Container>
        <h1>Carrinho de Compras</h1>

        <CartTable total={total} order={order} />

        {order.order_products && (
          <Button type="submit" onClick={() => history.push('/payment')}>
            Concluir Compra
          </Button>
        )}
      </Container>
    </>
  );
};

export default memo(Cart);
