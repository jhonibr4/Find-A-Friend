import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const ContainerMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 40rem;
  left: 0;
  width: 90px;
  height: 100%;
  background-color: ${({ theme }) => theme['red-400']};
`;
export const ButtonBottomMenu = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme['yellow-500']};
  cursor: pointer;
`;
export const IconArrowLeft = styled(FaArrowLeft)`
  margin-top: 4px;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme['blue-700']};
`;
