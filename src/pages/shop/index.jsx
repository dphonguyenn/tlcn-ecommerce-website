import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '~/components/common/Footer';
import Header from '~/components/common/Header';
import SubHeader from '~/components/common/SubHeader';
import SocialContact from '~/components/social/SocialContact.jsx';
import { routesNotIncludeSubHeader } from '~/utils/routes.js';
function Shop() {
  const [includeSubHeader, setIncludeSubHeader] = useState(true);
  const {pathname} = useLocation();
  useEffect(() => {
    if (pathname?.includes(routesNotIncludeSubHeader)) {
      setIncludeSubHeader(false);
    }
    else setIncludeSubHeader(true);
  }, [pathname]);
  return (
    <div>
      <Header />
      {includeSubHeader && <SubHeader />}
      <Outlet />
      <SocialContact />
      <Footer />
    </div>
  );
}

export default Shop;
