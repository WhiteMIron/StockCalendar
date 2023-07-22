import React, { ReactNode, SetStateAction, useEffect, useState } from 'react';
import { ModalContainer, ModalContent, ModalOverLay, ModalTitle } from './styles';
import { CSSTransition } from 'react-transition-group';

interface Props {
  children?: ReactNode;
  title?: string;
}

const Modal = ({ children, title }: Props) => {
  return (
    <ModalContainer>
      <ModalTitle>{title}</ModalTitle>
      {children}
    </ModalContainer>
  );
};

export default Modal;
