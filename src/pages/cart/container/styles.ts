import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    margin: 30px 0;
  }

  #conclude-button {
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

    .action {
      display: none;
    }

    table {
      padding: 15px;
      width: 100vw;
    }

    #conclude-button {
      width: 200px;
    }
  }
`;

export const RemoveButton = styled.button`
  background: #c53030;
  height: 46px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#c53030')};
  }
`;
