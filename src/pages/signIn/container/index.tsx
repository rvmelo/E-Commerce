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
  const { formRef, handleSubmit, isLoading } = useSignIn();

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Virtual Coffee" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>User Login</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            {!isLoading ? (
              <Button type="submit">Login</Button>
            ) : (
              <SpinnerContainer>
                <FadeLoader css={override} color="#ff9000" />
              </SpinnerContainer>
            )}
            <Link to="/">Forgot Username/Password</Link>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Create Account
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default memo(SignIn);
