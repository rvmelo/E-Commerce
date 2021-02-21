import React from 'react';
import { useLocation } from 'react-router-dom';
import useProductDetail from '../useProductDetail';

import {
  Container,
  ProductImage,
  Form,
  ProductData,
  TextAreaContainer,
} from './styles';

interface RouterProps {
  product_id: string;
  name: string;
  price: number;
  image: string;
}

const ProductDetail: React.FC = () => {
  const { product_id, name, price, image } = useLocation().state as RouterProps;

  const {
    handleSubmit,
    setQuantity,
    quantity,
    setNote,
    note,
  } = useProductDetail();

  return (
    <Container>
      <ProductData>
        <ProductImage>
          <img src={image} alt={name} />
        </ProductImage>

        <h1>{name}</h1>
        <h2>Preço: {(quantity * price).toFixed(2)} R$</h2>
      </ProductData>

      <Form
        onSubmit={e =>
          handleSubmit(e, {
            product_id,
            name,
            price,
            quantity,
            note,
          })
        }
      >
        <label htmlFor="quantity">
          Quantidade:
          <input
            type="number"
            onChange={e => setQuantity(Number(e.target.value))}
            id="quantity"
            min={1}
            max={5}
            defaultValue={1}
          />
        </label>

        <TextAreaContainer>
          <textarea
            id="observation"
            onChange={e => setNote(e.target.value)}
            placeholder="Digite observação sobre pedido"
          />
        </TextAreaContainer>

        <button type="submit">Adicionar ao carrinho</button>
      </Form>
    </Container>
  );
};

export default ProductDetail;
