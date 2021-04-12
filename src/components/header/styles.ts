import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 100px;
  background: #28262e;
  display: flex;
  justify-content: space-around;
  align-items: center;

  #left-div {
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

  .circled-number {
    color: #ff9000;
    background: white;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5em;
    height: 1.5em;
  }

  #right-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

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

      height: 100%;

      svg {
        margin-right: 7px;
      }

      ul {
        display: flex;
        list-style: none;

        #quantity_indicator {
          margin-left: 1px;
          margin-top: 25px;
        }

        li {
          margin: auto 0 auto 30px;
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
    #left-div {
      display: none;
    }
  }
`;
