import { useSelector } from 'react-redux';
import IntroHomePage from './IntroHomePage';
import IntroTypeProduct from './IntroTypeProduct';
import { devicesState } from '../../redux/selectors';
function Intro() {
  const devices = useSelector(devicesState);
  const currentPath = localStorage.getItem('_pathname');
  return currentPath === '/' ? (
    <IntroHomePage />
  ) : currentPath.includes('/product/') && currentPath.split('/').length - 1 === 2 ? (
    <IntroTypeProduct />
  ) : (
    <></>
  );
}
export default Intro;
