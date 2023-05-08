import styled from 'styled-components';

export const ContainerFriendPet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
`;
export const TextYourPet = styled.p`
  margin-top: 2rem;
  color: ${({ theme }) => theme['gray-500']};
`;
export const ContentFriendPet = styled.div`
  margin-block: 3rem 5rem;
  width: 45%;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.white};
`;
export const ContentInfoPet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  height: 100%;
`;
export const RowPhotos = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const ImgThumbnail = styled.img`
  width: 15%;
  cursor: pointer;
`;
export const ImgFriend = styled.img`
  width: 100%;
`;
export const DescriptionPet = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme['blue-500']};
`;
export const RowFeaturesPet = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-around;
`;
export const FeaturePet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  width: 25%;
  height: 4.5rem;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme['gray-300']};
  svg {
    color: ${({ theme }) => theme['blue-500']};
    font-size: 1.5rem;
  }
`;
export const TextFeaturePet = styled.p`
  color: ${({ theme }) => theme['blue-500']};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
`;
export const RowEnergy = styled.div`
  display: flex;
`;
export const RowSize = styled.div`
  display: flex;
`;
export const IconSizePetFilled = styled.div`
  margin-right: 2px;
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme['blue-500']};
  border-radius: 25px;
  content: '.';
`;
export const IconSizePet = styled.div`
  margin-right: 2px;
  width: 12px;
  height: 12px;
  border: 2px solid ${({ theme }) => theme['blue-500']};
  border-radius: 25px;
  content: '.';
`;
export const LineDivide = styled.hr`
  margin-block: 4rem;
  display: flex;
  align-self: center;
  border-top: 2px solid ${({ theme }) => theme['gray-300']};
  width: 90%;
`;
export const WrapperOrgFriend = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
export const ImageDog = styled.img`
  border-radius: 15px;
  padding: 20px;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme['orange-500']};
`;
export const WrapperInfoOrg = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  width: 65%;
  height: 70px;
`;

export const NameOrg = styled.h1`
  color: ${({ theme }) => theme['blue-500']};
  font-weight: bold;
`;
export const AddressOrg = styled.p`
  color: ${({ theme }) => theme['blue-500']};
  font-weight: bold;
`;

export const IconDogOrg = styled.img`
  border-radius: 15px;
  padding: 20px;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme['orange-500']};
`;
export const ButtonWhatsApp = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  width: 35%;
  height: 50px;
  margin-left: 5.5rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme['gray-300']};
  color: ${({ theme }) => theme['blue-700']};
  font-size: ${({ theme }) => theme.fontSize.sb};
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: ${({ theme }) => theme['gray-400']};
  }
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['blue-500']};
  }
`;
export const TitleRequirement = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme['blue-700']};
`;
export const ButtonContact = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2rem;
  height: 56px;
  border-radius: 15px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['green-500']};
  transition: 0.5s;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme['green-600']};
  }
  svg {
    margin-right: 0.5rem;
  }
`;
