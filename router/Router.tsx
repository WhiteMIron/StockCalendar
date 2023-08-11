import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StockRecord from '@pages/StockRecord';
import SideNav from '@components/SideNav/SideNav';
import Main from '@components/Content';
import Header from '@components/Header/Header';
import loadable from '@loadable/component';
import Interest from '@pages/Interest';
import Test from '@pages/Test/Test';
const SignUp = loadable(() => import('@pages/SignUp'));
const Login = loadable(() => import('@pages/Login'));
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/stockrecord" element={<StockRecord />} />
      <Route path="/interest" element={<Interest />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export { Router };
