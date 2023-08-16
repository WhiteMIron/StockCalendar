import React, { useEffect, useState } from 'react';
import { NavContainer, NavContents, NavTitle } from './style';
import { NavLink, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
const SideNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const CategorySubMenu = () => {
    return (
      <NavSubMenu>
        <StyledNavLink to="/category-view">
          <NavTitle>카테고리 분류 </NavTitle>
        </StyledNavLink>
        <StyledNavLink to="/category-edit">
          <NavTitle>카테고리 편집</NavTitle>
        </StyledNavLink>
      </NavSubMenu>
    );
  };
  const handleMenuClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (location.pathname.includes('/category-view') || location.pathname.includes('/category-edit')) {
      setOpen(true);
    }
    return;
  }, [location]);

  return (
    <NavContainer>
      <h1
        style={{
          paddingLeft: '10px',
          color: '#fff',
        }}
      >
        주식 캘린더
      </h1>
      <NavContents>
        <StyledNavLink to="/stock-record">
          <NavTitle>종목기록</NavTitle>
        </StyledNavLink>
        <StyledNavLink to="/interest">
          <NavTitle>관심종목</NavTitle>
        </StyledNavLink>
        <NavTitle onClick={handleMenuClick}>카테고리 {open ? '▲' : '▼'}</NavTitle>
        {open && <CategorySubMenu />}

        <StyledNavLink to="/my-page">
          <NavTitle>마이 페이지</NavTitle>
        </StyledNavLink>
      </NavContents>
    </NavContainer>
  );
};

const StyledNavLink = styled(NavLink)`
  display: block;

  &.active {
    background-color: #189cda;
  }
`;
const NavSubMenu = styled.ul`
  padding: 0 22px;
`;

export default SideNav;
