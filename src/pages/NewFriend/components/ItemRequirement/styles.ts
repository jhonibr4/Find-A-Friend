import styled from 'styled-components';

export const ContainerItem = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-self: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme['red-100']};
  border: 1px solid ${({ theme }) => theme['red-400']};
  border-radius: 10px;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['red-400']};
    margin-left: 2.5rem;
  }
`;
export const TextItem = styled.p`
  font-size: 1.2rem;
  margin-left: 1rem;
  color: ${({ theme }) => theme['red-400']};
`;
