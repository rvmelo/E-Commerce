import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/header';

import { ListContainer, ProductContainer } from './styles';

import useProductList from '../useProductList';

const ProductList: React.FC = () => {
  const { products } = useProductList();

  return (
    <>
      <Header />
      <ListContainer>
        {products.map(product => (
          <Link
            key={product.id}
            to={{
              pathname: '/product',
              state: {
                product_id: product.id,
                name: product.name,
                price: parseFloat(product.price),
                image: product.image,
              },
            }}
          >
            <ProductContainer>
              <img src={product.image} alt={product.name} />

              <h1>{product.name}</h1>
              <span>${Number(product.price).toFixed(2)} </span>
            </ProductContainer>
          </Link>
        ))}
      </ListContainer>
    </>
  );
};

export default memo(ProductList);
