import { useState } from 'react';
import {
  ContainerLogin,
  ContentImg,
  ContentForm,
  ImgLogo,
  ImgDogs,
  TitleForm,
  LabelText,
  InputForm,
  WrapperInput,
  Button,
  WrapperButtons,
  ContentLogin,
  ContentRegister,
} from './styles';
import { InputPassword } from './components/InputPassword';

import Logo from '../../assets/LogoWithName.svg';
import Dogs from '../../assets/Dogs.svg';

export function Login() {
  type TypeFormOrRegister = 'login' | 'register';

  const [changeForm, setChangeForm] = useState<TypeFormOrRegister>('login');

  return (
    <ContainerLogin>
      <ContentImg>
        <ImgLogo src={Logo} alt="Image Logo" />
        <ImgDogs src={Dogs} alt="Image Dogs" />
      </ContentImg>
      <ContentForm>
        {changeForm === 'login' ? (
          <ContentLogin>
            <TitleForm name="login">Boas-vindas!</TitleForm>
            <WrapperInput>
              <LabelText page="login">E-mail</LabelText>
              <InputForm
                typeInput="info"
                type="text"
                placeholder="Digite seu e-mail..."
              />
              <LabelText page="login">Senha</LabelText>
              <InputPassword />
            </WrapperInput>
            <WrapperButtons>
              <Button name="login">Login</Button>

              <Button name="register" onClick={() => setChangeForm('register')}>
                Cadastrar minha organização
              </Button>
            </WrapperButtons>
          </ContentLogin>
        ) : (
          <ContentRegister>
            <TitleForm name="register">Cadastre Sua Organização</TitleForm>
            <LabelText page="register">Nome do responsável</LabelText>
            <InputForm
              typeInput="info"
              type="text"
              placeholder="Digite o nome do responsável..."
            />
            <LabelText page="register">E-mail</LabelText>
            <InputForm
              typeInput="info"
              type="text"
              placeholder="Digite o e-mail da organização.."
            />
            <LabelText page="register">CEP</LabelText>
            <InputForm
              typeInput="info"
              type="text"
              placeholder="Digite o CEP..."
            />
            <LabelText page="register">Endereço</LabelText>
            <InputForm
              typeInput="info"
              type="text"
              placeholder="Digite o Endereço ..."
            />
            <LabelText page="register">WhatsApp</LabelText>
            <InputForm
              typeInput="info"
              type="text"
              placeholder="(xx)-xxxxx-xxxx"
            />
            <LabelText page="register">Senha</LabelText>
            <InputPassword />
            <LabelText page="register">Confimar Senha</LabelText>
            <InputPassword />
            <Button name="login" onClick={() => setChangeForm('login')}>
              Cadastrar
            </Button>
            <Button name="register" onClick={() => setChangeForm('login')}>
              Já possui conta ?
            </Button>
          </ContentRegister>
        )}
      </ContentForm>
    </ContainerLogin>
  );
}
