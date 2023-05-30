import React, { ReactNode, SetStateAction, useEffect, useState } from 'react';
import { ModalContainer, ModalContent, ModalOverLay, ModalTitle } from './style';

interface Props {
  children?: ReactNode;
  title?: string;
  visible?: boolean;
  onClose?: () => void;
}

const Modal = ({ children, title, visible, onClose }: Props) => {
  return (
    <ModalContainer isOpen={visible}>
      <ModalOverLay isOpen={visible}>
        <ModalContent>
          <ModalTitle>{title}</ModalTitle>
          {children}
        </ModalContent>
      </ModalOverLay>
    </ModalContainer>
  );
};

export default Modal;
