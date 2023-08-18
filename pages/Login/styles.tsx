import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ButtonProps = {
  color?: 'red' | 'dodgerblue' | '#00BB9D' | '#8e8e8e' | '#60d6bf';
  marginRight?: string;
  marginBottom?: string;
  opacity?: string;
  width?: string;
};

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 108px;
  /* justify-content: center; */
  /* align-items: center; */
  /* width: 100%; */
  /* height: 100%; */
  /* background-color: #60d6bf;////// */
`;

export const LoginContents = styled.div`
  width: 300px;
  height: 500px;
  background-color: #fff;
  /* border: 1px solid black; */
`;

export const Form = styled.form`
  position: relative;

  margin: 0 auto;
  width: 400px;
  max-width: 400px;
  background: #fff;
  /* padding: 30px; */
  /* border: 1px solid #c6c6c6; */
  border-radius: 6px;
`;

export const Label = styled.label`
  margin-bottom: 16px;
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  /* border: 1px solid var(--saf-0); */
  border: 1px solid rgba(29, 28, 29, 0.3);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  flex-shrink: 1;
  /* opacity: ${(props) => props.opacity}; */
  color: white;
  border-radius: 8px;
  font-size: 15px;
  height: 40px;
  background: none;
  border: 1px solid black;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const FillButton = styled(Button)`
  background: ${(props) => props.color};
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const SignUpContainer = styled.div`
  /* text-align: right; */
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Header = styled.header`
  text-align: center;
  font-family: Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-bottom: 50px;
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;
