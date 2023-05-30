import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

type ModalProps = {
  isOpen?: boolean;
  fadeType?: string;
  state?: string;
  activate?: boolean;
  animateScale?: boolean;
};

const fadeIn = keyframes`
0%{
  transform: translateX(-1.5rem);
  opacity: 0;
}
to {
  opacity: 1;
  transform: translateX(0)};
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

export const P = styled.p<ModalProps>`
  ${({ state }) => {
    switch (state) {
      case 'entering':
        return css`
          font-weight: 700;
          animation: ${fadeIn} 200ms ease-out 1 forwards;
        `;
      case 'exiting':
        return css`
          animation: ${fadeOut} 200ms ease-out 1 forwards;
        `;
      default:
    }
  }}/* ${({ activate }) =>
    activate
      ? css`
          color: red;
          transform: scale(1.2);
        `
      : css`
          color: black;
          transform: scale(1);
        `}
${({ animateScale, activate }) => {
    if (animateScale) {
      if (activate) {
        return css`
          animation: ${scaleUp} 100ms ease-out 1 forwards;
        `;
      } else {
        return css`
          animation: ${scaleUp} 100ms ease-out 1 reverse forwards;
        `;
      }
    }
  }} */
`;
