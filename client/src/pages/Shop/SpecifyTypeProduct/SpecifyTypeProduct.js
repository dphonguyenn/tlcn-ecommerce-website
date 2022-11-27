import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getDevices } from '~/store/actions';
import { getEndPointURL } from '~/helpers';
import IntroTypeProduct from '~/components/intro/IntroTypeProduct';
import MainPage from '~/pages/Shop/Home/MainPage';

function SpecifyTypeProduct() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getDevices.getDevicesRequest(getEndPointURL(location.pathname)));
  }, [dispatch, location.pathname]);

  return (
    <div>
      <IntroTypeProduct />
      <MainPage />
    </div>
  );
}

export default SpecifyTypeProduct;
