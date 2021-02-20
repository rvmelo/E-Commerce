import React, { FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, ProductImage, Form, ProductData } from './styles';

interface ProductProps {
  name: string;
  price: string;
  image: string;
}

const Product: React.FC = () => {
  const { name, price, image } = useLocation().state as ProductProps;

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <Container>
      <ProductData>
        <ProductImage>
          <img src={image} alt={name} />
        </ProductImage>

        <h1>{name}</h1>
        <h2>Preço: {price} R$</h2>
      </ProductData>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="quantity">
          Quantidade:
          <input type="number" id="quantity" min={1} max={5} defaultValue={1} />
        </label>
        <div>
          <label htmlFor="observation">Observação:</label>
          <textarea
            id="observation"
            placeholder="Digite observação sobre pedido"
          />
        </div>
        <button type="submit">Adicionar ao carrinho</button>
      </Form>
    </Container>
  );
};

export default Product;
