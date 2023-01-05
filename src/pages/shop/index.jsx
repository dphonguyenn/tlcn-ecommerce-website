import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '~/components/common/Footer';
import Header from '~/components/common/Header';
import SubHeader from '~/components/common/SubHeader';
import SocialContact from '~/components/social/SocialContact.jsx';
import { ignoreSubHeader } from '~/utils/index.js';
import { fetchDataContainer } from './functions.js';
function Shop() {
  const [includeSubHeader, setIncludeSubHeader] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (ignoreSubHeader(pathname)) {
      setIncludeSubHeader(false);
    }
    else setIncludeSubHeader(true);
    fetchDataContainer(pathname);
  }, [pathname]);

  return (
    <div>
      <Header />
      {includeSubHeader && <SubHeader />}
      <Outlet context={{ isFetch: pathname }}/>
      <SocialContact />
      <Footer />
    </div>
  );
}

export default Shop;
