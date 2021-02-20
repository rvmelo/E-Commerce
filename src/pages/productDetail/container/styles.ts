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

  #quantity {
    margin-left: 30px;
  }

  div {
    display: flex;
    align-items: flex-start;
    margin-top: 30px;

    #observation {
      margin-left: 30px;
      width: 350px;
      height: 125px;
    }
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
    div {
      flex-direction: column;
      align-items: center;
    }

    #observation {
      margin-top: 30px;
      max-width: 250px;
    }
  }
`;
