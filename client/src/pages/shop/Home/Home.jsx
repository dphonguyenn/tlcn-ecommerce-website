import { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';

// import { devicesFiltersState } from '~/store/selectors';
// import { getDevices } from '~/store/actions';
import IntroHomePage from '~/components/intro/IntroHomePage';
import MainPage from './MainPage';
import { fetchLaptops } from '~/apis/index.js';
import SpinnerLoader from '~/components/common/SpinnerLoader/Spinner.jsx';

function Home() {
  const [loading, setLoading] = useState(true);
  const [laptops, setLaptops] = useState(null);
  
  // const location = useLocation();
  // // const dispatch = useDispatch();
  // // const laptops = useSelector(devicesFiltersState);

  const fetchDataPage = async () => {
    const rs = await fetchLaptops();
    if (rs && rs?.data) {
      setLaptops(rs?.data);
    }
    else {
      return <h1>Something wrong</h1>
    }
  }

  useEffect(() => {
    // dispatch(getDevices.getDevicesRequest('laptops'));
    fetchDataPage().then(() => setLoading(false))
      .catch(err => {
        console.log('error at Home()', err);
        setLoading(false);
    })
  }, []);

  if (loading) {
    return <SpinnerLoader open={loading} />
  }

  return (
    <>
      <IntroHomePage />
      <MainPage data={laptops} />
    </>
  );
}

export default Home;
