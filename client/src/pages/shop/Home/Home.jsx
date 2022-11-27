import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { devicesFiltersState } from '~/store/selectors';
import { getDevices } from '~/store/actions';
import IntroHomePage from '~/components/intro/IntroHomePage';
import MainPage from './MainPage';

function Home() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const laptops = useSelector(devicesFiltersState);

  useEffect(() => {
    dispatch(getDevices.getDevicesRequest('laptops'));
  }, [dispatch, location.pathname]);

  return (
    <>
      <IntroHomePage />
      <MainPage data={laptops} />
    </>
  );
}

export default Home;
