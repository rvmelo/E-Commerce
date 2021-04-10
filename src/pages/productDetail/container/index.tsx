import React, { memo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useProductDetail from '../useProductDetail';

import Header from '../../../components/header';
import FormComponent from './formComponent';
import Button from '../../../components/button';

import { Container, ProductImage, ProductData } from './styles';

interface RouterProps {
  product_id: string;
  name: string;
  price: number;
  image: string;
}

const ProductDetail: React.FC = () => {
  const { name, price, image, product_id } = useLocation().state as RouterProps;
  const history = useHistory();

  const {
    quantity,
    setQuantity,
    isProductOnCart,
    setNote,
    note,
    handleSubmit,
  } = useProductDetail({
    product_id,
  });

  return (
    <>
      <Header />
      <Container>
        <ProductData>
          <ProductImage>
            <img src={image} alt={name} />
          </ProductImage>

          <h1>{name}</h1>
          <h2>${(quantity * price).toFixed(2)} </h2>
        </ProductData>

        {isProductOnCart ? (
          <Button type="submit" onClick={() => history.push('/cart')}>
            Check Cart
          </Button>
        ) : (
          <FormComponent
            quantity={quantity}
            setQuantity={setQuantity}
            note={note}
            setNote={setNote}
            handleSubmit={handleSubmit}
          />
        )}
      </Container>
    </>
  );
};

export default memo(ProductDetail);
