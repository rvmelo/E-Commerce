import React, { memo } from 'react';

import { css } from '@emotion/react';

import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { FadeLoader } from 'react-spinners';

import { Form } from '@unform/web';
import {
  Container,
  Content,
  Background,
  AnimationContainer,
  SpinnerContainer,
} from './styles';
import logoImg from '../../../assets/logo.png';

import Button from '../../../components/button';
import Input from '../../../components/input';

import useSignIn from '../useSignIn';

const override = css`
  display: flex;
  margin: auto;
`;

const SignIn: React.FC = () => {
  const { formRef, handleSubmit, loading } = useSignIn();

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
            {!loading ? (
              <Button type="submit">Entrar</Button>
            ) : (
              <SpinnerContainer>
                <FadeLoader css={override} color="#ff9000" />
              </SpinnerContainer>
            )}
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
