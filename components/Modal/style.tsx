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
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ state }) => {
    switch (state) {
      case 'entering':
        return css`
          animation: ${fadeIn} 200ms ease-out 1 forwards;
        `;
      case 'exiting':
        return css`
          animation: ${fadeOut} 200ms ease-out 1 forwards;
        `;
      default:
        return;
    }
  }}
`;

const fadeIn = keyframes`
    0%{
      transform: translateX(-1.5rem);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
`;

const fadeOut = keyframes`
    0%{
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(1.5rem);
      opacity: 0;
    }
`;

const scaleUp = keyframes`
    0%{
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
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

export const ModalCancelButton = styled.button`
  /* background-image: ; */
`;
