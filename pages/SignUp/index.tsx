import React, { useCallback, useEffect, useState } from 'react';
import { Header, SingUpContainer, Success, Error } from './styles';
import { FillButton, Form, Input, Label, SignUpContainer } from '@pages/Login/styles';
import { Link } from 'react-router-dom';
import useInput from '@hooks/useInput';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import { isEmpty } from '@utils/common';

const SignUp = () => {
  const { data, error, revalidate } = useSWR('/api/users', fetcher);
  const [email, onChangeEmail] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);

  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!mismatchError && email && password && passwordCheck) {
        setSignUpSuccess(false);
        axios
          .post('/api/users', {
            email,
            password,
          })
          .then((response) => {
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      } else {
        if (!email) {
          setSignUpError('아이디를 입력해주세요.');
        } else if (email && !password) {
          setSignUpError('비밀번호를 입력해주세요.');
        } else {
          setSignUpError('비밀번호가 일치하지 않습니다.');
        }
      }
    },
    [email, password, mismatchError],
  );

  if (data === undefined) {
    return <div>로딩중...</div>;
  }

  return (
    <SingUpContainer>
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
        </Label>
        <Label>
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>

          {!signUpError && mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {signUpError && <Error>{signUpError}</Error>}

          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <FillButton type="submit" color="#60d6bf" marginBottom="20px">
          회원가입
        </FillButton>
      </Form>
      <SignUpContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/login">로그인</Link>
      </SignUpContainer>
    </SingUpContainer>
  );
};

export default SignUp;
