import React, { FC } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import './App.css';
import ModalTest from '@pages/ModalTest';
import SideNav from '@components/SideNav/SideNav';
import Main from '@pages/Content';
import Header from '@components/Header/Header';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';
import { Router } from '../router';
const SignUp = loadable(() => import('@pages/SignUp'));
const Login = loadable(() => import('@pages/Login'));
// const StockRecord = loadable(() => import('@pages/StockRecord'));

import { Routes, Route, Navigate } from 'react-router-dom';
import StockRecord from '@pages/StockRecord';
// import { Routes, Route, Navigate } from 'react-router-dom';
const App = () => {
  const isLoggedIn = false;
  const { data, error, revalidate, mutate } = useSWR('/api/users', fetcher);

  return (
    <div className="App">
      {/* <div className="wrap"> */}
      <Router />
    </div>
  );
};

export default App;
