/* eslint-disable no-unused-vars */
import React, { FormEvent, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { OrderProduct } from '../../../interfaces';

import Button from '../../../components/button';

import { Form, TextAreaContainer } from './styles';

interface RouterProps {
  product_id: string;
  name: string;
  price: number;
}

interface FormProps {
  quantity: number;
  setQuantity(quantity: number): void;
  setNote(note: string): void;
  note: string;
  handleSubmit(
    event: FormEvent<HTMLFormElement>,
    orderProduct: OrderProduct,
  ): void;
}

const FormComponent: React.FC<FormProps> = ({
  quantity,
  setQuantity,
  note,
  setNote,
  handleSubmit,
}) => {
  const { product_id, name, price } = useLocation().state as RouterProps;

  return (
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
        Quantity:
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
          placeholder="Type observations related to your order"
        />
      </TextAreaContainer>
      <Button type="submit">Add to Cart</Button>
    </Form>
  );
};

export default memo(FormComponent);
