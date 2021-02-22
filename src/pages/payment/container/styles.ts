import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 20px;
    margin: 30px 0 30px 0;
  }

  div {
    width: 500px;
    div {
      position: absolute;
      margin-left: 450px;
    }

    span {
      left: 10px;
      bottom: 50px;
    }
  }

  button {
    margin-top: 30px;
  }

  @media (max-width: 510px) {
    div {
      max-width: 300px;
      div {
        display: none;
      }
    }
  }
`;
