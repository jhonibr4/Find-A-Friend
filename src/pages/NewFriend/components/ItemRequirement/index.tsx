import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

import { ContainerItem, TextItem } from './styles';

interface IText {
  text: string;
}

const ItemRequirement: React.FC<IText> = ({ text }) => {
  return (
    <ContainerItem>
      <RiErrorWarningLine />
      <TextItem>{text}</TextItem>
    </ContainerItem>
  );
};

export default ItemRequirement;
