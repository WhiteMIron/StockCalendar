import React from 'react';
import SideNav from '@components/SideNav/SideNav';
import Content from '@pages/Content';
import Header from '@components/Header/Header';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Header></Header>
      <div style={{ display: 'flex', width: '100%', height: '90%', minHeight: '800px' }}>
        <SideNav></SideNav>
        <Content>{props.children}</Content>
      </div>
    </div>
  );
};

export default Layout;
