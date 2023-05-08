import styled from 'styled-components';

export const ContainerPets = styled.div`
  position: absolute;
  right: 120px;
  width: calc(100% - 550px);
  height: 100vh;
`;
export const ContentPets = styled.div`
  margin-top: 10rem;
  width: 100%;
  height: 100%;
`;
export const TextTotalFriend = styled.p`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  color: ${({ theme }) => theme['blue-700']};
`;
export const WrapperFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99.5%;
`;
export const WrapperResults = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
export const WrapperPet = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  width: 18rem;
  height: 220px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.8s;

  :hover {
    background-color: ${({ theme }) => theme['blue-700']};
  }
  :hover #textChild {
    color: white;
  }
  :hover #imgChild {
    border: 3px solid ${({ theme }) => theme['blue-700']};
  }
  :nth-child(odd) #imgChild {
    background-color: ${({ theme }) => theme['red-500']};
  }
  :nth-child(even) #imgChild {
    background-color: ${({ theme }) => theme['yellow-500']};
  }
`;
export const WrapperLogoPet = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 3rem;
  border: 3px solid ${({ theme }) => theme.white};

  border-radius: 10px;
`;
export const LogoPet = styled.img`
  width: 25px;
`;
export const ImagePet = styled.img`
  margin-top: 2px;
  width: 98%;
`;
export const NamePet = styled.p`
  margin-top: 2rem;
  color: ${({ theme }) => theme['blue-700']};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
`;
