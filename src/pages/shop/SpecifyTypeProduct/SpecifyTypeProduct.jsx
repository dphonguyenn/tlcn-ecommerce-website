import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';

// import { getDevices } from '~/store/actions';
import { getEndPointURL } from '~/utils';
import IntroTypeProduct from '~/components/Intro/IntroTypeProduct';
import MainPage from '~/pages/shop/Home/MainPage';
import { fetchDevices } from '~/apis/index.js';
import SpinnerLoader from '~/components/common/SpinnerLoader/Spinner.jsx';
import UnreadyProductPage from './UnreadyProduct/index.jsx';

function SpecifyTypeProduct() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [showUnreadyProductPage, setShowUnreadyProducePage] = useState(false);

  const [query] = useSearchParams();
  const search = query.get('search') || '';
  const field = query.get('field') || '';
  const ascSort = query.get('ascSort') || 'false';

  // const dispatch = useDispatch();
  const {pathname} = useLocation();
  const fetchDataPage = async (type) => {
    const rs = await fetchDevices(type, search, field, ascSort);
    if (rs && rs?.data) {
      setProducts(rs?.data);
    }
    else {
      return <h1>Something wrong</h1>
    }
  }
  
  useEffect(() => {
    setShowUnreadyProducePage(false);
    fetchDataPage(getEndPointURL(pathname))
      .then(() => setLoading(false))
      .catch(err => {
        console.log('error at SpecifyTypeProduct()', err);
        setLoading(false);
        setShowUnreadyProducePage(true);
      })
  }, [search, field, ascSort, pathname]);
  
  if (loading) {
    return <>
      <IntroTypeProduct data={null} />
      <SpinnerLoader open={loading} />
    </>
  }

  if (showUnreadyProductPage) {
    return <UnreadyProductPage />
  }

  return (
    <div>
      <IntroTypeProduct data={products} />
      <MainPage data={products} />
    </div>
  );
}

export default SpecifyTypeProduct;
