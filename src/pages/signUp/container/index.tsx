import React, { memo } from 'react';
import { css } from '@emotion/react';
import { Form } from '@unform/web';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { FadeLoader } from 'react-spinners';

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

import useSignUp from '../useSignUp';

const override = css`
  display: flex;
  margin: auto;
`;

const SignUp: React.FC = () => {
  const { formRef, handleSubmit, isLoading } = useSignUp();

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Virtual-Cafe" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            {!isLoading ? (
              <Button type="submit">Cadastrar</Button>
            ) : (
              <SpinnerContainer>
                <FadeLoader css={override} color="#ff9000" />
              </SpinnerContainer>
            )}
            <Link to="/signup">Esqueci minha senha</Link>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default memo(SignUp);
