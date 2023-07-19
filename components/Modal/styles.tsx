import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
type ModalProps = {
  isOpen?: boolean;
  fadeType?: string;
  state?: string;
  animationDuration?: string;
};

const moveUp = keyframes`
    0% {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;
const moveDown = keyframes`
   0% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
  `;

export const ModalContainer = styled.div<ModalProps>`
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  z-index: 100;
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
  /* background: #fff; */
  background: blue;
  /* 
  &.modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.modal-exit {
    opacity: 1;
  }
  &.modal-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  } */

  /* &.modal-enter-active {
    animation: ${moveUp} 0.7s ease-out forwards;
  }

  &.modal-exit-active {
    animation: ${moveDown} 0.4s ease-out forwards;
  } */

  /* &.modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.modal-exit {
    opacity: 1;
  }
  &.modal-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  } */
`;

export const BackDropContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
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
