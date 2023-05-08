import { useState } from 'react';
import {
  ContainerPets,
  ContentPets,
  TextTotalFriend,
  WrapperFilter,
  WrapperPet,
  WrapperResults,
  ImagePet,
  NamePet,
  WrapperLogoPet,
  LogoPet,
} from './styles';

import { SelectForm } from '../../components/SelectForm';

import Pet1 from '../../assets/PetsResults/pet1.svg';
import Pet2 from '../../assets/PetsResults/pet2.svg';
import Pet3 from '../../assets/PetsResults/pet3.svg';
import Pet4 from '../../assets/PetsResults/pet4.svg';
import Pet5 from '../../assets/PetsResults/pet5.svg';
import Pet6 from '../../assets/PetsResults/pet6.svg';
import Logo from '../../assets/Logo.svg';

export function PagePets() {
  const [totalFriend, setTotalFriend] = useState(0);

  const pets = [
    {
      text: 'Cachorros e Gatos',
      value: 'dogcat',
    },
  ];

  return (
    <ContainerPets>
      <ContentPets>
        <WrapperFilter>
          <TextTotalFriend>
            Encontre <b>{totalFriend} amigos</b> na sua cidade
          </TextTotalFriend>
          <SelectForm
            size={25}
            placeholder="Pet"
            typeSelect="form"
            item={pets}
          />

          {/* Component Pet */}
        </WrapperFilter>
        <WrapperResults>
          <WrapperPet>
            <ImagePet src={Pet1} />
            <WrapperLogoPet id="imgChild">
              <LogoPet src={Logo} />
            </WrapperLogoPet>
            <NamePet id="textChild">Alfredo</NamePet>
          </WrapperPet>
          <WrapperPet>
            <ImagePet src={Pet2} />
            <WrapperLogoPet id="imgChild">
              <LogoPet src={Logo} />
            </WrapperLogoPet>
            <NamePet id="textChild">Alfredo</NamePet>
          </WrapperPet>
          <WrapperPet>
            <ImagePet src={Pet3} />
            <WrapperLogoPet id="imgChild">
              <LogoPet src={Logo} />
            </WrapperLogoPet>
            <NamePet id="textChild">Alfredo</NamePet>
          </WrapperPet>
          <WrapperPet>
            <ImagePet src={Pet4} />
            <WrapperLogoPet id="imgChild">
              <LogoPet src={Logo} />
            </WrapperLogoPet>
            <NamePet id="textChild">Alfredo</NamePet>
          </WrapperPet>
          <WrapperPet>
            <ImagePet src={Pet5} />
            <WrapperLogoPet id="imgChild">
              <LogoPet src={Logo} />
            </WrapperLogoPet>
            <NamePet id="textChild">Alfredo</NamePet>
          </WrapperPet>
          <WrapperPet>
            <ImagePet src={Pet6} />
            <WrapperLogoPet id="imgChild">
              <LogoPet src={Logo} />
            </WrapperLogoPet>
            <NamePet id="textChild">Alfredo</NamePet>
          </WrapperPet>
          <WrapperPet>
            <ImagePet src={Pet1} />
            <WrapperLogoPet id="imgChild">
              <LogoPet src={Logo} />
            </WrapperLogoPet>
            <NamePet id="textChild">Alfredo</NamePet>
          </WrapperPet>
        </WrapperResults>
      </ContentPets>
    </ContainerPets>
  );
}
