import { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import MainPage from './MainPage';
import { fetchLaptops } from '~/apis';
import IntroHomePage from '~/components/Intro/IntroHomePage';
import SpinnerLoader from '~/components/common/SpinnerLoader/Spinner.jsx';

function Home() {
  const [loading, setLoading] = useState(true);
  const [laptops, setLaptops] = useState(null);

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
    fetchDataPage()
      .then(() => setLoading(false))
      .catch(err => {
        console.log('error at Home()', err);
        setLoading(false);
    })
  }, []);

  if (loading) {
    return <>
      <IntroHomePage />
      <SpinnerLoader open={loading} />
    </>
  }

  return (
    <>
      <IntroHomePage />
      <MainPage data={laptops} />
    </>
  );
}

export default Home;
