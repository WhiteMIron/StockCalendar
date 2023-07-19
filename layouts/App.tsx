import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import StockRecord from '@pages/StockRecord';
import './App.css';
import ModalTest from '@pages/ModalTest';
const SignUp = loadable(() => import('@pages/SignUp'));
const Login = loadable(() => import('@pages/Login'));
const App = () => {
  const isLoggedIn = false;
  return (
    <Switch>
      <Redirect exact path="/" to="/login"></Redirect>
      <Route path="/stockrecord" component={StockRecord} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/mt" component={ModalTest} />
    </Switch>
  );
};

export default App;
