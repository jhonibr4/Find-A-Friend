import { TextTitle } from './styles';

interface ITitle {
  title: string;
}

export function Title({ title }: ITitle) {
  return <TextTitle>{title}</TextTitle>;
}
