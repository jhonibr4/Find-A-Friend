import IItem from './ItemSelect';

type TypeSelect = 'state' | 'city';

export interface IItemProps {
  item: IItem[];
  select: TypeSelect;
  placeholder: string;
}
