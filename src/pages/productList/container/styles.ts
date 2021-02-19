import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: 960px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: space-around;

  a {
    text-decoration: none;
    transition: transform 0.2s;

    h1 {
      color: #ff9000;
      margin-top: 15px;
      text-decoration: none;
    }

    span {
      font-size: 16px;
      font-weight: bold;
      margin-top: 5px;
      color: white;
    }
    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const ProductContainer = styled.div`
  max-width: 350px;
  height: 350px;
  border-radius: 10px;
  background: #3e3b47;
  margin: 25px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 350px;
    height: 250px;
  }
`;
