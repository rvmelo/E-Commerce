import React, { memo } from 'react';
import { Form } from '@unform/web';
import { BsCreditCard, BsPerson, BsCalendar, BsMap } from 'react-icons/bs';
import Header from '../../../components/header';
import { Container } from './styles';
import Input from '../../../components/input';
import usePayment from '../usePayment';
import Button from '../../../components/button';

const Payment: React.FC = () => {
  const { handleSubmit, formRef } = usePayment();

  return (
    <>
      <Header />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Informação do Cartão</h1>

          <Input
            className="card_information"
            name="card_number"
            icon={BsCreditCard}
            placeholder="1234 1234 1234 1234"
          />

          <Input
            className="card_information"
            name="card_validation_date"
            icon={BsCalendar}
            placeholder="MM/AA"
          />
          <Input
            className="card_information"
            name="cvc"
            icon={BsCreditCard}
            placeholder="CVC"
          />

          <h1>Nome no Cartão</h1>

          <Input
            name="name_on_card"
            icon={BsPerson}
            placeholder="Wesley Snipes (Nome no Cartão)"
          />

          <h1>País ou Região</h1>

          <Input name="country" icon={BsMap} placeholder="Brazil" />
          <Button type="submit">Efetuar Compra</Button>
        </Form>
      </Container>
    </>
  );
};

export default memo(Payment);
