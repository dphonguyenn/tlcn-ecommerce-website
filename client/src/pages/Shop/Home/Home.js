import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { devicesFiltersState } from '../../../redux/selectors';
import { getDevices } from '../../../redux/actions';
import IntroHomePage from '../../../components/Intro/IntroHomePage/index.js';
import { useLocation } from 'react-router-dom';
import SubHeader from '../../../components/SubHeader/index.js';
const ReadyMainPage = lazy(() => import('../../../components/MainPage/index.js'));

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getDevices.getDevicesRequest('laptops'));
  }, [dispatch, location.pathname]);

  const laptops = useSelector(devicesFiltersState);

  return (
    <div>
      <SubHeader />
      <IntroHomePage />
      <Suspense
        fallback={
          <>
            <h1>Loading data...</h1>
          </>
        }
      >
        <ReadyMainPage data={laptops} />
      </Suspense>
      {/* <MainPage data={ laptops }/> */}
    </div>
  );
}

export default Home;
