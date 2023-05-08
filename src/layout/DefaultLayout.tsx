import { Outlet } from 'react-router-dom';
import { ContainerMain } from './styles';
import { Menu } from '../components/Menu';
import { MenuInfo } from '../components/MenuInfo';

type TypeProps = 'menu' | 'info';
interface IProps {
  name: TypeProps;
}

export function DefaultLayout({ name }: IProps) {
  return (
    <ContainerMain>
      {name === 'menu' ? <Menu /> : <MenuInfo />}

      <Outlet />
    </ContainerMain>
  );
}
export default DefaultLayout;
