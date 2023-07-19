import React from 'react';
import { BackDropContainer } from './styles';

interface Props {
  show: boolean;
  onClose: () => void;
}

const BackDrop = ({ show, onClose }: Props) => {
  return show ? <BackDropContainer onClick={onClose}></BackDropContainer> : null;
};

export default BackDrop;
