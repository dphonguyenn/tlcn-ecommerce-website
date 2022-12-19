import { useEffect, useState } from 'react';
// import { PuffLoader } from 'react-spinners';
// import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

// import { devicesFiltersState } from '~/store/selectors';
// import { getDevices } from '~/store/actions';
import MainPage from './MainPage';
import { fetchLaptops } from '~/apis';
import IntroHomePage from '~/components/Intro/IntroHomePage';
import SpinnerLoader from '~/components/common/SpinnerLoader/Spinner.jsx';

function Home() {
  const [loading, setLoading] = useState(false);
  const [laptops, setLaptops] = useState(null);

  const [query] = useSearchParams();
  const search = query.get('search') || '';
  const field = query.get('field') || '';
  const ascSort = query.get('ascSort') || 'false';

  // const location = useLocation();
  // // const dispatch = useDispatch();
  // // const laptops = useSelector(devicesFiltersState);

  const fetchDataPage = async () => {
    setLoading(true);

    const rs = await fetchLaptops(search, field, ascSort);
    setLoading(false);
    if (rs && rs?.data) {
      setLaptops(rs?.data);
    } else {
      return <h1>Something wrong</h1>;
    }
  };

  useEffect(() => {
    // dispatch(getDevices.getDevicesRequest('laptops'));
    fetchDataPage().catch(err => {
      console.log('error at Home()', err);
      setLoading(false);
    });
  }, [search, field, ascSort]);

  if (loading) {
    return <SpinnerLoader open={loading} />;
  }

  return (
    <>
      <IntroHomePage />
      <MainPage data={laptops} />
    </>
  );
}

export default Home;
