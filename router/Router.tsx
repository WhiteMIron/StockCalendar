import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StockRecord from '@pages/StockRecord';
// import ModalTest from '@pages/ModalTest';
import SideNav from '@components/SideNav/SideNav';
import Main from '@pages/Content';
import Header from '@components/Header/Header';
import loadable from '@loadable/component';
const SignUp = loadable(() => import('@pages/SignUp'));
const Login = loadable(() => import('@pages/Login'));
// const StockRecord = loadable(() => import('@pages/StockRecord'));
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/stockrecord" element={<StockRecord />} />
    </Routes>
  );
};

export { Router };
