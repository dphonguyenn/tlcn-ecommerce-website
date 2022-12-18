import { Outlet } from 'react-router-dom';
import Footer from '~/components/common/Footer';
import Header from '~/components/common/Header';
import SubHeader from '~/components/common/SubHeader';
import SocialContact from '~/components/social/SocialContact.jsx';
function Shop() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Outlet />
      <SocialContact />
      <Footer />
    </div>
  );
}

export default Shop;
