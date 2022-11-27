import { Outlet } from 'react-router-dom';
import Footer from '~/components/common/Footer';
import Header from '~/components/common/Header';
import SubHeader from '~/components/common/SubHeader';
function Shop() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Shop;
