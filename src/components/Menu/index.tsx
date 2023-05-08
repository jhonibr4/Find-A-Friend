import { ContainerMenu, ButtonBottomMenu, IconArrowLeft } from './styles';

import Logo from '../../assets/Logo.svg';

export function Menu() {
  return (
    <ContainerMenu>
      <a href="/">
        <img src={Logo} alt="Logo Find A Friend" />
      </a>
      <ButtonBottomMenu>
        <IconArrowLeft />
      </ButtonBottomMenu>
    </ContainerMenu>
  );
}
