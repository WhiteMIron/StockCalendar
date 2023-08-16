import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StockRecord from '@pages/StockRecord';
import loadable from '@loadable/component';
import Interest from '@pages/Interest';
import Category from '@pages/Category';
import MyPage from '@pages/MyPage';
import Test from '@pages/Test/Test';
import CategoryEdit from '@pages/CategoryEdit';
const SignUp = loadable(() => import('@pages/SignUp'));
const Login = loadable(() => import('@pages/Login'));
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/stock-record" element={<StockRecord />} />
      <Route path="/interest" element={<Interest />} />
      <Route path="/category-view" element={<Category />} />
      <Route path="/category-edit" element={<CategoryEdit />} />

      <Route path="/my-page" element={<MyPage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export { Router };
