import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiLogOut,
  FiShoppingCart,
  FiCoffee,
  FiCreditCard,
} from 'react-icons/fi';
import { HeaderContainer } from './styles';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { customer, signOut } = useAuth();

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
              <NavLink to="/" exact activeClassName="is-active">
                <FiCreditCard />
                Pagamento
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeClassName="is-active">
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
        <button onClick={signOut} type="submit">
          <FiLogOut />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
