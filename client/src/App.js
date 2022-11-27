import { MdOutlineWavingHand } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { CartProvider } from 'react-use-cart';

import Home from './pages/Shop/Home/Home.js';
import SpecifyTypeProduct from './pages/Shop/SpecifyTypeProduct/SpecifyTypeProduct.js';
import DetailedProduct from './pages/Shop/DetailedProduct/DetailedProduct.js';
import Cart from './pages/Shop/Cart/Cart.js';
import InfoOrders from './pages/Shop/InfoOrders/InfoOrders.js';
import Payment from './pages/Shop/Payment/Payment.js';
import User from './pages/Shop/User/User.js';
import InfoContact from './pages/Shop/User/UserContainer/RightAsideContainer/InfoContact/index.js';
import Saving from './pages/Shop/User/UserContainer/RightAsideContainer/Saving/index.js';
import Stores from './pages/Shop/User/UserContainer/RightAsideContainer/Stores/index.js';
import AccountUser from './pages/Shop/User/UserContainer/RightAsideContainer/AccountUser/index.js';
import ManagementOrders from './pages/Shop/User/UserContainer/RightAsideContainer/ManagementOrders/index.js';
import Shop from './pages/Shop/Shop.js';

import DashboardAdmin from './pages/DashboardAdmin';
import MainOrders from './pages/DashboardAdmin/MainDashboard/MainOrders/index.js';
import MainProducts from './pages/DashboardAdmin/MainDashboard/MainProducts/index.js';
import MainAssistant from './pages/DashboardAdmin/MainDashboard/MainAssistant/index.js';
import MainCustomer from './pages/DashboardAdmin/MainDashboard/MainCustomer/index.js';
import MainEvent from './pages/DashboardAdmin/MainDashboard/MainEvent/index.js';
import MainBusiness from './pages/DashboardAdmin/MainDashboard/MainBusiness/index.js';
import MainStatistical from './pages/DashboardAdmin/MainDashboard/MainStatistical/index.js';
import MainAccount from './pages/DashboardAdmin/MainDashboard/MainAccount/index.js';
import MainNotification from './pages/DashboardAdmin/MainDashboard/MainNotification/index.js';
import MainCooperation from './pages/DashboardAdmin/MainDashboard/MainCooperation/index.js';
import { stateRequestAuth } from './store/selectors';

import Policy from './pages/Shop/User/UserContainer/RightAsideContainer/Policy';
import InsurancePolicy from './pages/Shop/User/UserContainer/RightAsideContainer/Policy/InsurancePolicy';
import ServiceCost from './pages/Shop/User/UserContainer/RightAsideContainer/Policy/ServiceCost';
import DeliverPolicy from './pages/Shop/User/UserContainer/RightAsideContainer/Policy/DeliverPolicy';
import PaymentPolicy from './pages/Shop/User/UserContainer/RightAsideContainer/Policy/PaymentPolicy';
// import { ThemeContext } from './context/ThemeContext.js';
// import ErrorBoundary from './pages/ErrorBoundary.js';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif'
  }
});

function App() {
  const [path, setPath] = useState('/');
  // const { setIsScrollDown } = useContext(ThemeContext);
  // go to the top of page whenever redirect
  const location = useLocation();
  localStorage.setItem('_pathname', path);
  const state_request = useSelector(stateRequestAuth);
  useEffect(() => {
    window.scrollTo(0, 0);
    // setIsScrollDown(false);
    setPath(location.pathname);
  }, [location.pathname]);
  const navigate = useNavigate();
  const ToastContent = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex' }}>
        <MdOutlineWavingHand style={{ fontSize: '24px' }} />
        <Typography> Chào mừng bạn quay lại, </Typography>
      </div>
      <Button sx={{ marginLeft: '24px' }} onClick={() => navigate('/dashboard/orders')}>
        <Typography sx={{ textTransform: 'initial', color: '#66f1ff' }}>Đi đến Dashboard</Typography>
      </Button>
    </div>
  );
  useEffect(() => {
    if (state_request === 'LOGIN_SUCCESS') {
      if (JSON.parse(localStorage.getItem('user')).role === 'admin') {
        toast(<ToastContent />, {
          position: 'bottom-left',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { width: 'auto', backgroundColor: 'rgba(2,1,36,.85)' }
        });
      }
    }
  }, [state_request]);
  // const { isEmpty } = useCart();
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Shop />}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout/infoOrders" element={<InfoOrders />} />
            <Route path="checkout/payment" element={<Payment />} />
            <Route path="user" element={<User />}>
              <Route path="management-orders" element={<ManagementOrders />} />
              <Route path="account" element={<AccountUser />} />
              <Route path="contact" element={<InfoContact />} />
              <Route path="saving" element={<Saving />} />
              <Route path="stores" element={<Stores />} />
              <Route path="policy" element={<Policy />}>
                <Route path="insurance" element={<InsurancePolicy />} />
                <Route path="payment" element={<PaymentPolicy />} />
                <Route path="service-cost" element={<ServiceCost />} />
                <Route path="deliver" element={<DeliverPolicy />} />
              </Route>
            </Route>
            <Route path="product/:type_product" element={<SpecifyTypeProduct />} />
            <Route path="product/:type/:id_product" element={<DetailedProduct />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="/dashboard" element={<DashboardAdmin />}>
            <Route path="orders" element={<MainOrders />} />
            <Route path="products" element={<MainProducts />} />
            <Route path="assistant" element={<MainAssistant />} />
            <Route path="customer" element={<MainCustomer />} />
            <Route path="event" element={<MainEvent />} />
            <Route path="business" element={<MainBusiness />} />
            <Route path="statistical" element={<MainStatistical />} />
            <Route path="account" element={<MainAccount />} />
            <Route path="notification" element={<MainNotification />} />
            <Route path="cooperation" element={<MainCooperation />} />
          </Route>
        </Routes>
        <ToastContainer
          position="bottom-left"
          // autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
          pauseOnFocusLoss
          limit={1}
          draggable
          pauseOnHover
          style={{ width: 'auto' }}
        />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
