import Menu from '@components/Menu/Menu';
import defines from '@constants/defines';
import styled from '@emotion/styled';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import Clock from 'react-live-clock';
import useSWR from 'swr';
const Header = (props: { user: IUser | undefined | false }) => {
  const {
    data: userData,
    error,
    revalidate,
    mutate,
  } = useSWR<IUser | false>(`${defines.server.url}/api/users`, fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const onCloseUserProfile = useCallback((e) => {
    e.stopPropagation();
    setShowUserMenu(false);
  }, []);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const onLogout = useCallback(() => {
    axios
      .post(`${defines.server.url}/api/users/logout`, null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      });
  }, []);

  return (
    <Container
      style={{
        background: '#60d6bf',
        display: 'flex',
        justifyContent: 'end',
        alignContent: 'center',
        minHeight: '80px',
        minWidth: '1400px',
        paddingRight: '22px',
      }}
    >
      <h1 style={{ color: '#fff' }}>
        {<Clock format={'M월 D일 HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />}{' '}
        {props.user ? (
          <>
            <NameInfo
              onClick={() => {
                setShowUserMenu(true);
              }}
            >
              {props.user.email}
            </NameInfo>
            <Menu style={{ right: 4, top: 63 }} show={showUserMenu} onCloseModal={onCloseUserProfile}>
              <ProfileModal>
                <div>
                  <span id="profile-name">{props.user.email}</span>
                </div>
              </ProfileModal>
              <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
            </Menu>
          </>
        ) : (
          <></>
        )}
      </h1>
    </Container>
  );
};

const Container = styled.div`
  background: #60d6bf;
  display: flex;
  justify-content: end;
  align-content: center;
  min-height: 80px;
  min-width: 1400px;
  padding-right: 22px;
`;

const NameInfo = styled.span`
  cursor: pointer;
  position: relative;

  &:hover {
    > div {
      display: block;
    }
  }
`;

const MenuBox = styled.div`
  display: none;
  position: absolute;
  right: 20;
`;
const ProfileModal = styled.div`
  display: flex;
  padding: 20px;
  & img {
    display: flex;
  }
  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  & #profile-name {
    font-weight: bold;
    display: inline-flex;
  }
  & #profile-active {
    font-size: 13px;
    display: inline-flex;
  }
`;
const LogOutButton = styled.button`
  border: none;
  width: 100%;
  border-top: 1px solid rgb(29, 28, 29);
  background: transparent;
  display: block;
  height: 33px;
  padding: 5px 20px 5px;
  outline: none;
  cursor: pointer;
`;
export default Header;
