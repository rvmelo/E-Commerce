import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogOut, FiShoppingCart, FiCoffee } from 'react-icons/fi';
import { HeaderContainer } from './styles';

import useHeader from './useHeader';

const Header: React.FC = () => {
  const { handleSignOut, customer } = useHeader();

  return (
    <HeaderContainer>
      <div className="left-div">
        <FiCoffee />

        <div>
          <span>Bem vindo,</span>
          <span className="userName">{customer.name}</span>
        </div>
      </div>
      <div className="right-div">
        <nav>
          <ul>
            <li>
              <NavLink to="/cart" exact activeClassName="is-active">
                <FiShoppingCart />
                Carrinho
              </NavLink>
            </li>
            <li>
              <NavLink to="/productlist" activeClassName="is-active">
                <FiCoffee />
                Produtos
              </NavLink>
            </li>
          </ul>
        </nav>
        <button onClick={handleSignOut} type="submit">
          <FiLogOut />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default memo(Header);
