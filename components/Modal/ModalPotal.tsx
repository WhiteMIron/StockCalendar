import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import BackDrop from './BackDrop';

interface Props {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
}

const ModalPortal = ({ children, show, onClose }: Props) => {
  const backDropEl = document.getElementById('backdrop') as HTMLElement;
  const modalEl = document.getElementById('modal') as HTMLElement;

  // return ReactDOM.createPortal(children, el);

  return (
    <div>
      {ReactDOM.createPortal(<BackDrop show={show} onClose={onClose} />, backDropEl)}
      {ReactDOM.createPortal(children, modalEl)}
    </div>
  );
};

export default ModalPortal;
