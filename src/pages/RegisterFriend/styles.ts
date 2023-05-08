import styled from 'styled-components';

export const ContainerFormFriend = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const WrapperOrgFriend = styled.div`
  margin-top: 4rem;
  padding: 0.5rem 5rem;
  border-radius: 20px;
  width: 40%;
  height: 100px;
  background-color: ${({ theme }) => theme['blue-700']};
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
  color: ${({ theme }) => theme.white};
  font-weight: bold;
`;
export const AddressOrg = styled.p`
  color: ${({ theme }) => theme.white};
  font-weight: bold;
`;
export const ButtonLoguot = styled.button`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  border-radius: 15px;
  font-size: 25px;
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme['blue-600']};
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: ${({ theme }) => theme['blue-500']};
  }
`;

export const WrapperFormFriend = styled.div`
  border-radius: 15px;
  height: 80%;
  width: 40%;
  padding: 5rem;
  margin-block: 4rem;
  background-color: ${({ theme }) => theme.white};
`;
export const LineTitle = styled.hr`
  border: 1px solid ${({ theme }) => theme['gray-200']};
  border-radius: 15px;
  font-size: 3rem;
  color: ${({ theme }) => theme['blue-700']};
`;

export const ContentFormFriend = styled.div`
  margin-top: 4rem;
`;
export const LabelInput = styled.span`
  margin-block: 1rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme['blue-700']};
`;
export const AlertText = styled.p`
  margin-left: 1.5rem;
  color: ${({ theme }) => theme['gray-500']};
  font-size: ${({ theme }) => theme.fontSize.md};
`;
export const InputInfos = styled.input`
  padding-inline: 5px;
  color: ${({ theme }) => theme['blue-700']};
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme['gray-300']};
  background-color: ${({ theme }) => theme['gray-200']};
`;
export const TextareaInfos = styled.textarea`
  padding: 5px;
  resize: none;
  color: ${({ theme }) => theme['blue-700']};
  width: 100%;
  height: 120px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme['gray-300']};
  background-color: ${({ theme }) => theme['gray-200']};
`;

export const ButtonRegister = styled.button`
  margin-top: 5rem;
  width: 100%;
  height: 60px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.base};
  border-radius: 20px;
  color: ${({ theme }) => theme['blue-700']};
  background-color: ${({ theme }) => theme['yellow-500']};
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: ${({ theme }) => theme['yellow-300']};
  }
`;
