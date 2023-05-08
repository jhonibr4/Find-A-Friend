import styled from 'styled-components';

import * as Select from '@radix-ui/react-select';

type TypeSelect = 'state' | 'city';

interface ISelect {
  select: TypeSelect;
}

export const SelectRoot = styled(Select.Root)``;
export const SelectTrigger = styled(Select.Trigger)<ISelect>`
  padding-inline: 1rem;
  padding-block: 2rem;
  margin-left: 1rem;
  width: ${({ select }) => (select === 'state' ? '25%' : '50%')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme['gray-300']};
  background-color: ${({ theme }) => theme['red-400']};
  color: ${({ theme }) => theme.white};
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
  color: ${({ theme }) => theme['blue-700']};
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
