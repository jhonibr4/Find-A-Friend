import {
  ContainerFormFriend,
  WrapperFormFriend,
  LineTitle,
  LabelInput,
  ContentFormFriend,
  InputInfos,
  TextareaInfos,
  AlertText,
  ButtonRegister,
  WrapperOrgFriend,
  ImageDog,
  WrapperInfoOrg,
  NameOrg,
  AddressOrg,
  ButtonLoguot,
} from './styles';
import { Title } from '../../components/Title';
import { SelectForm } from '../../components/SelectForm';

import { FiLogOut } from 'react-icons/fi';
import Logo from '../../assets/Logo.svg';

export function RegisterFriend() {
  const agePet = [
    { text: 'Neonatal', value: 'neonatal' },
    { text: 'Filhotes', value: 'filhotes' },
    { text: 'Adolescência', value: 'adolescencia' },
    { text: 'Adulta', value: 'adulta' },
    { text: 'Terceira Idade', value: 'terceira-idade' },
  ];
  const bearingPet = [
    { text: 'Pequenino', value: 'small' },
    { text: 'Medio', value: 'mean' },
    { text: 'Grande', value: 'big' },
  ];
  const energyPet = [
    { text: 'Baixa', value: 'low' },
    { text: 'Mediana', value: 'median' },
    { text: 'Alta', value: 'high' },
    { text: 'Muito Alta', value: 'very-high' },
  ];
  const dependencyPet = [
    { text: 'Baixa (Precisa de companhia sempre)', value: 'low' },
    { text: 'Mediana (Precisa de companhia as vezes)', value: 'median' },
    { text: 'Alta (Precisa de companhia poucas vezes)', value: 'high' },
  ];
  const ambiencePet = [
    { text: 'Ambiente Fechado', value: 'low' },
    { text: 'Ambiente Amplo', value: 'median' },
  ];

  return (
    <ContainerFormFriend>
      <WrapperOrgFriend>
        <ImageDog src={Logo} alt="Image Logo" />
        <WrapperInfoOrg>
          <NameOrg>Seu Cãopanhiro</NameOrg>
          <AddressOrg>Rua do meio, 123 , Boa viagem, Recife - PE </AddressOrg>
        </WrapperInfoOrg>
        <ButtonLoguot>
          <FiLogOut />
        </ButtonLoguot>
      </WrapperOrgFriend>
      <WrapperFormFriend>
        <Title title="Adicionar um pet" />
        <LineTitle />
        <ContentFormFriend>
          <LabelInput>Nome</LabelInput>
          <InputInfos />
          <LabelInput>
            Sobre <AlertText>Máximo de 300 caracteres</AlertText>
          </LabelInput>
          <TextareaInfos />
          <LabelInput>Idade</LabelInput>
          <SelectForm
            size={100}
            typeSelect="form"
            placeholder="Selecione a idade do pet..."
            item={agePet}
          />
          <LabelInput>Porte</LabelInput>
          <SelectForm
            size={100}
            typeSelect="form"
            placeholder="Porte do pet..."
            item={bearingPet}
          />
          <LabelInput>Nível de energia</LabelInput>
          <SelectForm
            size={100}
            typeSelect="form"
            placeholder="Selecione o nível de energia do pet..."
            item={energyPet}
          />
          <LabelInput>Nível de independência</LabelInput>
          <SelectForm
            size={100}
            typeSelect="form"
            placeholder="Selecione o nível de independência do pet..."
            item={dependencyPet}
          />
          <LabelInput>Ambiente</LabelInput>
          <SelectForm
            size={100}
            typeSelect="form"
            placeholder="Ambiente necessário para o pet..."
            item={ambiencePet}
          />
          <ButtonRegister>Confirmar</ButtonRegister>
        </ContentFormFriend>
      </WrapperFormFriend>
    </ContainerFormFriend>
  );
}
