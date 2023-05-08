import { BsSearch } from 'react-icons/bs';

import LogoWithName from '../../assets/LogoWithName.svg';
import Dogs from '../../assets/Dogs.svg';

import { SelectState } from './components/SelectState';

import {
  ContainerHome,
  ImageLogo,
  TitlePage,
  DescriptionPage,
  ImageDogs,
  WrapperSelects,
  DescriptionSelect,
  ButtonSearchPet,
} from './styles';

export function Home() {
  const states = [{ text: 'SP', value: 'SP' }];
  const citys = [{ text: 'São Paulo', value: 'saopaulo' }];

  return (
    <ContainerHome>
      <ImageLogo src={LogoWithName} />
      <TitlePage>Leve a felicidade para o seu lar</TitlePage>
      <DescriptionPage>
        Encontre o animal de estimação ideal para seu estilo de vida!
      </DescriptionPage>
      <ImageDogs src={Dogs} />
      <WrapperSelects>
        <DescriptionSelect>Busque um amigo:</DescriptionSelect>
        <SelectState placeholder="UF" select="state" item={states} />
        <SelectState placeholder="Estado" select="city" item={citys} />
        <ButtonSearchPet>
          <BsSearch />
        </ButtonSearchPet>
      </WrapperSelects>
    </ContainerHome>
  );
}
