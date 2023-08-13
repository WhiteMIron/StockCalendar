import React, { useState } from 'react';
import SideNav from '@components/SideNav/SideNav';
import Content from '@components/Content';
import Header from '@components/Header/Header';
import { IUser } from '@typings/db';
import Test from '@pages/Test/Test';

const Layout = (props: { children: React.ReactNode; user: IUser | undefined | false }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <SideNav></SideNav>
      <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column' }}>
        <Header user={props.user}></Header>
        <div style={{ display: 'flex', width: '100%', height: '100%', minHeight: '800px' }}>
          <Content>{props.children}</Content>
        </div>
      </div>
    </div>
  );
};

export default Layout;
