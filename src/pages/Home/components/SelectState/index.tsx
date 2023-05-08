import { FiChevronDown } from 'react-icons/fi';
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
} from './styles';

import { IItemProps } from '../../../../interfaces/ItemSelectLocation';

export function SelectState({ item, select, placeholder }: IItemProps) {
  return (
    <SelectRoot>
      <SelectTrigger select={select}>
        <SelectValue placeholder={`${placeholder}`}></SelectValue>
        <SelectIcon>
          <FiChevronDown />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectViewport>
            {item.map((item) => (
              <SelectItem value={item.value} key={item.value}>
                <SelectItemText>{item.text}</SelectItemText>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
}
