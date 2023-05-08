import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';

export const SelectRoot = styled(Select.Root)``;

interface ISelect {
  name: string;
  size: number;
}

export const SelectTrigger = styled(Select.Trigger)<ISelect>`
  padding-inline: 1rem;
  width: ${({ size }) => `${size}%`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ name }) => (name === 'form' ? '4px' : '20px')};
  height: ${({ name }) => (name === 'form' ? '3rem' : '3.8rem')};
  border: 1px solid
    ${({ theme, name }) =>
      name === 'form' ? theme['gray-300'] : theme['red-600']};
  background-color: ${({ theme, name }) =>
    name === 'form' ? theme['gray-200'] : theme['red-600']};
  color: ${({ theme, name }) =>
    name === 'form' ? theme['blue-700'] : theme.white};
  cursor: pointer;
  transition: 0.5s;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
export const SelectValue = styled(Select.Value)``;
export const SelectIcon = styled(Select.Icon)``;
export const SelectPortal = styled(Select.Portal)``;
export const SelectContent = styled(Select.Content)`
  margin-top: 3.03rem;
  position: absolute;
  width: calc(100%);
  font-weight: 600;
  background-color: ${({ theme }) => theme['gray-300']};
  border-radius: 4px;
`;
export const SelectViewport = styled(Select.Viewport)`
  border-radius: 8px;
`;
export const SelectItem = styled(Select.Item)`
  height: 3rem;
  padding-left: 1rem;
  color: ${({ theme }) => theme['blue-500']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.fontSize.lg};
  cursor: pointer;
  transition: 0.2s;
  background-color: ${({ theme }) => theme['gray-300']};
  &:hover {
    background-color: ${({ theme }) => theme['gray-200']};
  }
`;

export const SelectItemText = styled(Select.ItemText)``;
