import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_KEY}`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchLaptops = async () => {
  const response = await API.get('/');
  if (response) {
    return response;
  }
  else return false;
};

export const fetchDevices = async type => {
  const response = await API.get(`/product/${type}`);
  if (response) {
    return response;
  }
  else return false;
};

export const fetchDetailedDevice = async path => {
  const response = await API.get(`/${path}`);
  if (response) {
    return response;
  }
  else return false;
};

export const fetchOrdersFollowType = async (order, token) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await API.get(`/orders/get?type=${order}`);
  if (response) {
    return response;
  }
  else return false;
};

export const fetchAllOrders = async token => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await API.get('/orders/get-all');
  if (response) {
    return response;
  }
  else return false;
};

export const postOrders = async data => await API.post('/orders/post', data);

export const updateOrders = async (data, token) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await API.patch('/orders/update', data);
  if (response) {
    return response;
  }
  else return false;
};

export const postInfoLogin = async info => await API.post('/user/post-login', info);

export const postLogout = async token => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return await API.post('/user/logout');
};

export const refreshAccessToken = async id => {
  return await API.post('/user/refresh-access-token', { id: id });
};
