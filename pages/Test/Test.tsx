import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import styled from '@emotion/styled';
import fetcher from '@utils/fetcher';
import { IUser } from '@typings/db';
import useSWR from 'swr';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Test = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const CategorySubMenu = () => {
    return (
      <NavSubMenu>
        <StyledNavLink to="/category-view">
          <NavTitle>카테고리 현황 </NavTitle>
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
const NavContents = styled.ul`
  font-size: 17px;
`;
const NavContainer = styled.div`
  min-height: 900px;
  width: 13%;
  padding: 0 10px;
  background: #222;
`;

const NavTitle = styled.li`
  color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: #189cda;
    color: white;
  }
`;

const NavSubMenu = styled.ul`
  padding: 0 22px;
`;

export default Test;
