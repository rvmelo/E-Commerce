import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Header from '../../../components/header';
import useCart from '../useCart';
import Button from '../../../components/button';
import CartTable from './cartTable';

const Cart: React.FC = () => {
  const { total, order, removeOrderProduct } = useCart();
  const history = useHistory();

  return (
    <>
      <Header />
      <Container>
        <h1>Shopping Cart</h1>

        <CartTable
          total={total}
          order={order}
          removeOrderProduct={removeOrderProduct}
        />

        {order.order_products && order.order_products.length > 0 && (
          <Button
            id="conclude-button"
            type="submit"
            onClick={() => history.push('/payment')}
          >
            Concluir Compra
          </Button>
        )}
      </Container>
    </>
  );
};

export default memo(Cart);
