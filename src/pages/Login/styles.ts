import styled from 'styled-components';

type TypesForm = 'login' | 'register';

export const ContainerLogin = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const ContentImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 75%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme['red-400']};
`;
export const ImgLogo = styled.img`
  margin-top: 6rem;
`;
export const ImgDogs = styled.img`
  margin-bottom: 3rem;
`;
export const ContentForm = styled.div`
  margin-right: 8rem;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 70%;
`;
export const ContentLogin = styled.div`
  animation: fadeInLogin 0.8s;
  @keyframes fadeInLogin {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

interface ITitleForm {
  name: TypesForm;
}

export const TitleForm = styled.h1<ITitleForm>`
  display: flex;
  text-align: ${({ name }) => name === 'register' && 'center'};
  margin-top: ${({ name }) => (name === 'register' ? '1rem' : '4rem')};
  font-size: 3.5rem;
  color: ${({ theme }) => theme['blue-700']};
`;

// EXEMPLE
// interface ILabelText {
//   text: string;
// }
// export const LabelText = styled.h1<ILabelText>`

// `;
export const WrapperInput = styled.div`
  margin-top: 6rem;
`;

type TypesLabel = 'login' | 'register';
interface ILabel {
  page: TypesLabel;
}

export const LabelText = styled.p<ILabel>`
  margin-top: ${({ page }) => (page === 'register' ? '1.5rem' : '0.8rem')};
  font-weight: 600;
  color: ${({ theme }) => theme['blue-700']};
`;

type TypesInput = 'info' | 'password';

interface IInput {
  typeInput: TypesInput;
}
export const WrapperInputPassword = styled.span`
  display: flex;
  align-items: center;
`;

export const InputForm = styled.input<IInput>`
  border: 2px solid ${({ theme }) => theme['gray-300']};
  border-right: ${({ theme, typeInput }) =>
    typeInput === 'password' ? '0px' : `2px solid ${theme['gray-300']}`};

  margin-top: 0.5rem;
  width: ${({ typeInput }) => (typeInput === 'info' ? '97%' : '100%')};
  height: 60px;
  border-radius: ${({ typeInput }) =>
    typeInput === 'info' ? '8px' : '8px 0 0 8px'};
  padding-left: 1rem;
  background-color: ${({ theme }) => theme['gray-200']};
  color: ${({ theme }) => theme['blue-700']};
`;

export const WrapperButtons = styled.div`
  margin-top: 3rem;
`;

interface IButtonProps {
  name: TypesForm;
}

export const Button = styled.button<IButtonProps>`
  margin-top: 1rem;
  border-radius: 15px;
  width: 100%;
  height: 60px;
  background-color: ${({ theme, name }) =>
    name === 'login' ? theme['blue-700'] : theme.white};
  color: ${({ theme, name }) =>
    name === 'register' ? theme['blue-700'] : theme.white};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
  border: 3px solid ${({ name }) => name === 'register' && '#356fa6'};

  :hover {
    background-color: ${({ name }) => name && '#356fa6'};
    border: 3px solid ${({ name }) => name === 'register' && '#356fa6'};
    color: ${({ theme, name }) => name === 'register' && theme.white};
  }
`;
export const ContentRegister = styled.div`
  animation: fadeInRegister 1s;
  padding-bottom: 6rem;

  @keyframes fadeInRegister {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
