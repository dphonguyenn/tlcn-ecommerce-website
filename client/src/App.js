import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import Home from './pages/Shop/Home/Home.js';
import SpecifyTypeProduct from './pages/Shop/SpecifyTypeProduct/SpecifyTypeProduct.js';
import DetailedProduct from './pages/Shop/DetailedProduct/DetailedProduct.js';
import Cart from './pages/Shop/Cart/Cart.js';
import InfoOrders from './pages/Shop/InfoOrders/InfoOrders.js';
import Payment from './pages/Shop/Payment/Payment.js';
import User from './pages/Shop/User/User.js';
import InfoContact from './components/UserContainer/RightAsideContainer/InfoContact/index.js';
import Insurance from './components/UserContainer/RightAsideContainer/Insurance/index.js';
import Policies from './components/UserContainer/RightAsideContainer/Policies/index.js';
import Saving from './components/UserContainer/RightAsideContainer/Saving/index.js';
import ServiceCost from './components/UserContainer/RightAsideContainer/ServiceCost/index.js';
import Stores from './components/UserContainer/RightAsideContainer/Stores/index.js';
import AccountUser from './components/UserContainer/RightAsideContainer/AccountUser/index.js';
import ManagementOrders from './components/UserContainer/RightAsideContainer/ManagementOrders/index.js';
import Deliver from './components/UserContainer/RightAsideContainer/Deliver/index.js';
import Shop from './pages/Shop/Shop.js';
import DashboardAdmin from './pages/DashboardAdmin/index.js';
import MainOrders from './components/MainDashboard/MainOrders';
import MainProducts from './components/MainDashboard/MainProducts';
import MainAssistant from './components/MainDashboard/MainAssistant';
import MainCustomer from './components/MainDashboard/MainCustomer';
import MainEvent from './components/MainDashboard/MainEvent';
import MainBusiness from './components/MainDashboard/MainBusiness';
import MainStatistical from './components/MainDashboard/MainStatistical';
import MainAccount from './components/MainDashboard/MainAccount';
import MainNotification from './components/MainDashboard/MainNotification';
import MainCooperation from './components/MainDashboard/MainCooperation';
import { MdOutlineWavingHand } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { stateRequestAuth } from './redux/selectors/index.js';
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
  // go to the top of page whenever redirect
  const location = useLocation();
  localStorage.setItem('_pathname', path);
  const state_request = useSelector(stateRequestAuth);
  useEffect(() => {
    window.scrollTo(0, 0);
    setPath(location.pathname);
  }, [location.pathname]);
  const navigate = useNavigate();
  const ToastContent = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
  const { isEmpty } = useCart();
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
              <Route path="insurance" element={<Insurance />} />
              <Route path="policies" element={<Policies />} />
              <Route path="saving" element={<Saving />} />
              <Route path="service-cost" element={<ServiceCost />} />
              <Route path="stores" element={<Stores />} />
              <Route path="deliver" element={<Deliver />} />
            </Route>
            <Route path="product/:type_product" element={<SpecifyTypeProduct />} />
            <Route path="product/:type_product/:id_product" element={<DetailedProduct />} />
            <Route path="*" element={{}} />
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
