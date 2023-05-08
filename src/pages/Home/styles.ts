import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme['red-400']};
  width: 100vw;
  height: 100vh;

  grid-template-areas:
    'logo .'
    'textBig imageDogs'
    'textSmall selects';
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: 50px 4fr 1fr;
`;
export const ImageLogo = styled.img`
  margin-top: 7rem;
  margin-left: 7rem;
  grid-area: logo;
`;
export const TitlePage = styled.h1`
  margin-top: 13rem;
  margin-left: 7rem;
  font-weight: bold;
  width: 26rem;
  height: 50%;
  text-align: start;
  font-size: 4rem;

  grid-area: textBig;
  color: ${({ theme }) => theme.white};
`;
export const DescriptionPage = styled.p`
  width: 70%;
  font-size: 1.5rem;
  margin-left: 7rem;
  margin-bottom: 4rem;
  grid-area: textSmall;
  color: ${({ theme }) => theme.white};
`;
export const ImageDogs = styled.img`
  margin-top: 10rem;
  margin-left: 4rem;
  width: 70%;

  grid-area: imageDogs;
`;
export const WrapperSelects = styled.div`
  width: 70%;
  margin-left: 5rem;
  margin-bottom: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: selects;
`;
export const DescriptionSelect = styled.p`
  color: ${({ theme }) => theme.white};
`;
export const ButtonSearchPet = styled.button`
  width: 60px;
  height: 60px;
  margin-left: 1.2rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme['yellow-500']};
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: ${({ theme }) => theme['yellow-300']};
  }
  svg {
    color: ${({ theme }) => theme['blue-500']};
    font-size: 1.3rem;
  }
`;
