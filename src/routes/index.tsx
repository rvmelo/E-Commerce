import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';
import SignIn from '../pages/signIn/container';
import SignUp from '../pages/signUp/container';
import ProductList from '../pages/productList/container';
import ProductDetail from '../pages/productDetail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/product" component={ProductDetail} isPrivate />
    <Route path="/productlist" component={ProductList} isPrivate />
  </Switch>
);

export default Routes;
