import {
  MenuInfoContainer,
  MenuInfoContentSearch,
  RowLogo,
  RowSelect,
  ImgLogo,
  ButtonSearchPet,
  ContentFilterPet,
  TitleFilter,
  LabelSelect,
} from './styles';
import { SelectState } from '../../pages/Home/components/SelectState';
import { SelectForm } from '../SelectForm';

import { BsSearch } from 'react-icons/bs';

import Logo from '../../assets/Logo.svg';

export function MenuInfo() {
  const states = [{ text: 'SP', value: 'SP' }];
  const citys = [{ text: 'São Paulo', value: 'saopaulo' }];

  return (
    <MenuInfoContainer>
      <MenuInfoContentSearch>
        <RowLogo>
          <ImgLogo src={Logo} />
        </RowLogo>
        <RowSelect>
          <SelectState
            placeholder="UF"
            select="state"
            item={states}
          ></SelectState>
          <SelectState
            placeholder="Estado"
            select="city"
            item={citys}
          ></SelectState>
          <ButtonSearchPet>
            <BsSearch />
          </ButtonSearchPet>
        </RowSelect>
      </MenuInfoContentSearch>
      <ContentFilterPet>
        <TitleFilter>Filtro</TitleFilter>
        <LabelSelect>Idade</LabelSelect>
        <SelectForm
          size={100}
          typeSelect="filter"
          placeholder="fdsaf"
          item={citys}
        ></SelectForm>
        <LabelSelect>Nível de Energia</LabelSelect>
        <SelectForm
          size={100}
          typeSelect="filter"
          placeholder="fdsaf"
          item={citys}
        ></SelectForm>
        <LabelSelect>Porte do Animal</LabelSelect>
        <SelectForm
          size={100}
          typeSelect="filter"
          placeholder="fdsaf"
          item={citys}
        ></SelectForm>
        <LabelSelect>Nível de Independência</LabelSelect>
        <SelectForm
          size={100}
          typeSelect="filter"
          placeholder="fdsaf"
          item={citys}
        ></SelectForm>
      </ContentFilterPet>
    </MenuInfoContainer>
  );
}
