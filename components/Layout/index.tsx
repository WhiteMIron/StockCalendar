import React, { useState } from 'react';
import SideNav from '@components/SideNav/SideNav';
import Content from '@pages/Content';
import Header from '@components/Header/Header';
import { IUser } from '@typings/db';

const Layout = (props: { children: React.ReactNode; user: IUser | undefined | false }) => {
  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <Header user={props.user}></Header>
      <div style={{ display: 'flex', width: '100%', height: '100%', minHeight: '800px' }}>
        <SideNav></SideNav>
        <Content>{props.children}</Content>
      </div>
    </div>
  );
};

export default Layout;
