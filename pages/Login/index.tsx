import React, { useCallback, useState } from 'react';
import { FillButton, Form, Header, Input, Label, LoginContainer, SignUpContainer, Error } from './styles';
import useSWR from 'swr';
import useInput from '@hooks/useInput';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import defines from '@constants/defines';
import Loading from '@components/Loading/Loading';

const Login = () => {
  const { data, error, revalidate, mutate } = useSWR(`${defines.server.url}/api/users`, fetcher);
  const [logInError, setLogInError] = useState('');

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (email && password) {
        setIsLoading(true);
        axios
          .post(
            `${defines.server.url}/api/users/login`,
            { email, password },
            {
              withCredentials: true,
            },
          )
          .then((response) => {
            revalidate();
          })
          .catch((error) => {
            if (error.response?.status === 401) {
              setLogInError('이메일과 비밀번호 조합이 일치하지 않습니다.');
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        if (!email) {
          setLogInError('아이디를 입력해주세요.');
        } else if (email && !password) {
          setLogInError('비밀번호를 입력해주세요.');
        }
      }
    },
    [email, password],
  );

  if (data === undefined) {
    return <Loading />;
  }

  if (data) {
    // navigate('/stock-record');
    return <Navigate to="/stock-record"></Navigate>;
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
          {logInError && <Error>{logInError}</Error>}
          {isLoading ? <Loading></Loading> : <></>}
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
