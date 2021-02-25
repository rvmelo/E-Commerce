import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogOut, FiShoppingCart, FiCoffee } from 'react-icons/fi';
import { HeaderContainer } from './styles';

import useHeader from './useHeader';
import { useRecord } from '../../hooks/record';

const Header: React.FC = () => {
  const { handleSignOut, customer } = useHeader();
  const { order } = useRecord();

  return (
    <HeaderContainer>
      <div id="left-div">
        <FiCoffee />

        <div>
          <span>Bem vindo,</span>
          <span className="userName">{customer.name}</span>
        </div>
      </div>
      <div id="right-div">
        <nav>
          <ul>
            <li>
              <NavLink to="/cart" exact activeClassName="is-active">
                <FiShoppingCart />
              </NavLink>
            </li>
            <li id="quantity_indicator">
              {order.order_products && (
                <span className="circled-number">
                  {order.order_products.reduce((total, orderProduct) => {
                    total += orderProduct.quantity;
                    return total;
                  }, 0)}
                </span>
              )}
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
