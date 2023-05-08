import { BsFullscreen, BsWhatsapp } from 'react-icons/bs';
import { IoFlashSharp, IoFlashOutline } from 'react-icons/io5';

import { Title } from '../../components/Title';
import ItemRequirement from './components/ItemRequirement';
import {
  ContainerFriendPet,
  TextYourPet,
  ImgFriend,
  RowPhotos,
  ImgThumbnail,
  ContentFriendPet,
  ContentInfoPet,
  DescriptionPet,
  RowFeaturesPet,
  FeaturePet,
  TextFeaturePet,
  RowEnergy,
  RowSize,
  IconSizePetFilled,
  IconSizePet,
  LineDivide,
  WrapperInfoOrg,
  NameOrg,
  AddressOrg,
  IconDogOrg,
  WrapperOrgFriend,
  ButtonWhatsApp,
  TitleRequirement,
  ButtonContact,
} from './styles';

import DogFriend from '../../assets/Pets/DogFriend.svg';
import DogFriendThumbnail1 from '../../assets/Pets/thumbnail1.svg';
import DogFriendThumbnail2 from '../../assets/Pets/thumbnail2.svg';
import DogFriendThumbnail3 from '../../assets/Pets/thumbnail3.svg';
import DogFriendThumbnail4 from '../../assets/Pets/thumbnail4.svg';
import DogFriendThumbnail5 from '../../assets/Pets/thumbnail5.svg';
import DogFriendThumbnail6 from '../../assets/Pets/thumbnail6.svg';
import Logo from '../../assets/Logo.svg';

export function NewFriend() {
  return (
    <ContainerFriendPet>
      <TextYourPet>Seu novo pet</TextYourPet>
      <ContentFriendPet>
        <ImgFriend src={DogFriend} />
        <ContentInfoPet>
          <RowPhotos>
            <ImgThumbnail src={DogFriendThumbnail1} />
            <ImgThumbnail src={DogFriendThumbnail2} />
            <ImgThumbnail src={DogFriendThumbnail3} />
            <ImgThumbnail src={DogFriendThumbnail4} />
            <ImgThumbnail src={DogFriendThumbnail5} />
            <ImgThumbnail src={DogFriendThumbnail6} />
          </RowPhotos>
          <Title title="Alfredo" />
          <DescriptionPet>
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
            fazer companhia, uma bagunça mas também ama uma soneca.
          </DescriptionPet>
          <RowFeaturesPet>
            <FeaturePet>
              <RowEnergy>
                <IoFlashSharp />
                <IoFlashSharp />
                <IoFlashSharp />
                <IoFlashSharp />
                <IoFlashOutline />
              </RowEnergy>
              <TextFeaturePet>Muita Energia</TextFeaturePet>
            </FeaturePet>
            <FeaturePet>
              <BsFullscreen />
              <TextFeaturePet>Ambiente Amplo</TextFeaturePet>
            </FeaturePet>
            <FeaturePet>
              <RowSize>
                <IconSizePetFilled />
                <IconSizePet />
                <IconSizePet />
              </RowSize>
              <TextFeaturePet>Pequenino</TextFeaturePet>
            </FeaturePet>
          </RowFeaturesPet>
          <LineDivide />
          <WrapperOrgFriend>
            <IconDogOrg src={Logo} alt="Image Logo" />
            <WrapperInfoOrg>
              <NameOrg>Seu Cãopanhiro</NameOrg>
              <AddressOrg>
                Rua do meio, 123 , Boa viagem, Recife - PE{' '}
              </AddressOrg>
            </WrapperInfoOrg>
          </WrapperOrgFriend>
          <ButtonWhatsApp>
            <BsWhatsapp />
            11 98162-5429
          </ButtonWhatsApp>
          <LineDivide />

          <TitleRequirement>Requesitos para adoção</TitleRequirement>
          <ItemRequirement text="Local grande para o animal correr e brincar" />
          <ItemRequirement text="Proibido apartamento" />
          <ItemRequirement text="Ambiente frio, pois possui muito pelo." />
          <ItemRequirement text="Cão com intolerância a lactose." />
          <ButtonContact>
            <BsWhatsapp />
            Entrar em contato
          </ButtonContact>
        </ContentInfoPet>
      </ContentFriendPet>
    </ContainerFriendPet>
  );
}
