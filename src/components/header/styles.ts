import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 100px;
  background: #28262e;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .left-div {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 30px;
      margin-left: 30px;
      width: 30px;
      height: 30px;
      color: #ff9000;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    .userName {
      margin-top: 5px;
      color: #ff9000;
    }
  }

  .right-div {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      svg {
        width: 20px;
        height: 20px;
      }

      margin-left: 30px;
      color: white;
      background: transparent;
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }

    nav {
      display: flex;
      flex-direction: column;

      svg {
        margin-right: 7px;
      }

      ul {
        display: flex;
        list-style: none;

        li {
          margin-left: 30px;
        }

        .is-active {
          color: #ff9000;
        }

        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }

  @media (max-width: 490px) {
    .left-div {
      display: none;
    }
    .right-div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      button {
        margin-top: 15px;
      }
    }
  }
`;
