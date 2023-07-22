import React from 'react';
import { BackDropContainer } from './styles';

interface Props {
  onClose: () => void;
}
const BackDrop = ({ onClose }: Props) => {
  return <BackDropContainer onClick={onClose}></BackDropContainer>;
};

export default BackDrop;
