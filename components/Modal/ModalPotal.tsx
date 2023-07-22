import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import BackDrop from './BackDrop';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const ModalPortal = ({ children, onClose }: Props) => {
  const modalEl = document.getElementById('modal') as HTMLElement;

  return <>{ReactDOM.createPortal(children, modalEl)}</>;
};

export default ModalPortal;
