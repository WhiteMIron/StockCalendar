import React from 'react';
import { Container } from './styles';

const Content = (props: { children: React.ReactNode }) => {
  return <Container>{props.children}</Container>;
};

export default Content;
