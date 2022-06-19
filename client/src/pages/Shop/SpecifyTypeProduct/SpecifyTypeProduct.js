import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getDevices } from '../../../redux/actions';
import { devicesFiltersState } from '../../../redux/selectors';
import { getEndPointURL } from '../../../helpers';
import SubHeader from '../../../components/SubHeader/index.js';
const ReadyIntroTypeProduct = lazy(() => import('../../../components/Intro/IntroTypeProduct/index.js'));
const ReadyMainPage = lazy(() => import('../../../components/MainPage/index.js'));

function SpecifyTypeProduct() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getDevices.getDevicesRequest(getEndPointURL(location.pathname)));
  }, [dispatch, location.pathname]);

  return (
    <div>
      <SubHeader />
      <Suspense
        fallback={
          <>
            <h1>Loading data...</h1>
          </>
        }
      >
        <ReadyIntroTypeProduct />
      </Suspense>
      <Suspense
        fallback={
          <>
            <h1>Loading data...</h1>
          </>
        }
      >
        <ReadyMainPage />
      </Suspense>
    </div>
  );
}

export default SpecifyTypeProduct;
