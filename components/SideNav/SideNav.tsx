import React, { useEffect, useState } from 'react';
import { NavContainer, NavContents, NavTitle, Icon } from './style';
import { NavLink, useLocation } from 'react-router-dom';
import star from '@images/star.png';
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
  const handleSubMenuClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (location.pathname.includes('/category-view') || location.pathname.includes('/category-edit')) {
      setOpen(true);
    } else {
      setOpen(false);
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
        <NavTitle onMouseEnter={handleSubMenuClick}>카테고리 {open ? '▲' : '▼'}</NavTitle>
        {open && <CategorySubMenu />}
        <StyledNavLink to="/my-page">
          <NavTitle>마이 페이지</NavTitle>
        </StyledNavLink>
        {/* <NavTitle>📈 기록 분석</NavTitle> */}
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
