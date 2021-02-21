import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    margin: 30px 0;
  }

  button {
    width: 300px;
  }

  table {
    width: 50vw;
    background: #3e3b47;
    padding: 30px;
    border-radius: 10px;
    margin: 30px 0;
  }

  table tr td {
    text-align: center;
    padding: 30px 0;
  }

  table th {
    padding: 30px 0;
  }

  @media (max-width: 650px) {
    h1 {
      display: none;
    }

    .quantity {
      display: none;
    }

    table {
      padding: 15px;
      width: 100vw;
    }

    button {
      width: 200px;
    }
  }
`;
