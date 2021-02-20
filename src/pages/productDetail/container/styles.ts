import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #ff9000;
    margin-top: 15px;
    text-align: center;
  }

  h2 {
    text-align: center;
    margin-top: 5px;
    color: white;
  }
`;

export const ProductImage = styled.div`
  width: 500px;
  height: 500px;
  margin-top: 30px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 490px) {
    width: 250px;
    height: 250px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  #quantity {
    margin-left: 30px;
    margin-bottom: 30px;
    color: #666360;
    background: #232129;
    border: 2px solid #232129;
    border-radius: 5px;
  }

  label {
    font-size: 16px;
    font-weight: 500;
  }

  button {
    margin-top: 30px;
    padding: 15px;
    border-radius: 10px;
    color: white;
    background: #ff9000;
    border-width: 0;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }

  @media (max-width: 490px) {
    margin-top: 0;
    div {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const TextAreaContainer = styled.div`
  color: #666360;
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  border: 2px solid #232129;

  #observation {
    width: 350px;
    height: 125px;
    margin: auto;
  }

  textarea {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
  }

  @media (max-width: 490px) {
    margin-top: 0px;
    max-width: 250px;
    padding: 10px;
  }
`;
