import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
type ModalProps = {
  isOpen?: boolean;
  fadeType?: string;
  state?: string;
  animationDuration?: string;
};

export const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25vw;
  height: 25vh;
  min-width: 330px;
  height: fit-content;
  background-color: #e5e5e5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.modal-enter {
    opacity: 0;
  }
  &.modal-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  &.modal-exit {
    opacity: 1;
  }
  &.modal-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

export const BackDropContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;

  &.backdrop-enter {
    opacity: 0;
  }
  &.backdrop-enter-active {
    opacity: 1;
    transition: all 300ms;
  }
  &.backdrop-exit {
    opacity: 1;
  }
  &.backdrop-exit-active {
    opacity: 0;
    transition: all 300ms;
  }
`;

export const ModalOverLay = styled.div<ModalProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div<ModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 360px;
  min-width: 300px;
  min-height: 100px;
  width: 33%;
  text-align: center;
  padding: 10px 10px;
  border-radius: 5px;
  background: #fff;
`;

export const ModalTitle = styled.div<ModalProps>`
  padding: 20px 0 30px;
  font-size: 16px;
  letter-spacing: -0.5px;
`;
