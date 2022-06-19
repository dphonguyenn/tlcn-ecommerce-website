import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/Header/index.js';
function Shop() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Shop;
