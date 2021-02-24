import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background, AnimationContainer } from './styles';
import logoImg from '../../../assets/logo.png';

import Button from '../../../components/button';
import Input from '../../../components/input';

import useSignIn from '../useSignIn';

const SignIn: React.FC = () => {
  const { formRef, handleSubmit } = useSignIn();

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Virtual Coffee" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <Link to="/">Esqueci minha senha</Link>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default memo(SignIn);
