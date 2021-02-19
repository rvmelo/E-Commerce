import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/signIn/container';
import SignUp from '../pages/signUp/container';
import ProductList from '../pages/productList/container';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/productlist" exact component={ProductList} />
  </Switch>
);

export default Routes;
