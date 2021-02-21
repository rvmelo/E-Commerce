import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/header';

import { ListContainer, ProductContainer } from './styles';

import api from '../../../services/api';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('/products').then(productList => {
      setProducts([...productList.data.products]);
    });
  }, []);

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
              <span>Preço: {product.price} R$</span>
            </ProductContainer>
          </Link>
        ))}
      </ListContainer>
    </>
  );
};

export default ProductList;
