import React, { useCallback, useState } from 'react';
import {
  Button,
  ButtonGroup,
  FillButton,
  Form,
  Header,
  Input,
  Label,
  LoginContainer,
  LoginContents,
  SignUpContainer,
  Error,
} from './styles';
// import { Link, Redirect, useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';

import useSWR from 'swr';
import useInput from '@hooks/useInput';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const { data, error, revalidate, mutate } = useSWR('/api/users', fetcher);
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          '/api/users/login',
          { email, password },
          {
            withCredentials: true,
          },
        )
        .then((response) => {
          revalidate();
        })
        .catch((error) => {
          setLogInError(error.response?.status === 401);
        });
    },
    [email, password],
  );

  if (data === undefined) {
    return <div>로딩중...</div>;
  }

  if (data) {
    navigate('/stockrecord');
  }

  return (
    <LoginContainer>
      <Header>주식 캘린더</Header>
      <Form onSubmit={onSubmit}>
        <Label>
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label>
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <FillButton type="submit" color="#60d6bf" marginBottom="20px">
          로그인
        </FillButton>
      </Form>
      <SignUpContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입</Link>
      </SignUpContainer>
    </LoginContainer>
  );
};

export default Login;
