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

import IItem from '../../interfaces/ItemSelect';

interface IItemProps {
  item: IItem[];
  placeholder: string;
  typeSelect: string;
  size: number;
}

// export const SelectForm: React.FC<IItemProps> = ({ item }: IItemProps) => {
export function SelectForm({
  item,
  placeholder,
  typeSelect,
  size,
}: IItemProps) {
  return (
    <SelectRoot>
      <SelectTrigger size={size} name={typeSelect}>
        <SelectValue placeholder={placeholder}></SelectValue>
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
