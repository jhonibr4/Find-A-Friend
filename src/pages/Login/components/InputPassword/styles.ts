import styled from 'styled-components';

export const WrapperInputPassword = styled.span`
  display: flex;
  align-items: center;
`;

export const ButtonEye = styled.button`
  border-block: 2px solid ${({ theme }) => theme['gray-300']};
  border-right: 2px solid ${({ theme }) => theme['gray-300']};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  width: 10%;
  height: 64px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: ${({ theme }) => theme['gray-200']};
  cursor: pointer;
  svg {
    font-size: 1.2rem;
  }
`;
