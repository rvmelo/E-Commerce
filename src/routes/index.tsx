import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';
import SignIn from '../pages/signIn/container';
import SignUp from '../pages/signUp/container';
import Cart from '../pages/cart/container';
import Payment from '../pages/payment';
import ProductList from '../pages/productList/container';
import ProductDetail from '../pages/productDetail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/cart" component={Cart} isPrivate />
    <Route path="/payment" component={Payment} isPrivate />
    <Route path="/product" component={ProductDetail} isPrivate />
    <Route path="/productlist" component={ProductList} isPrivate />
  </Switch>
);

export default Routes;
