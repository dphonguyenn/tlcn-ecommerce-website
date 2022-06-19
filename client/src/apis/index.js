import axios from 'axios';

const API = axios.create({
  baseURL: 'https://lapdarker-clone-thinkpro.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchLaptops = async () => {
  const response = await API.get('/');
  return response;
};

export const fetchDevices = async type => {
  const response = await API.get(`/product/${type}`);
  return response;
};

export const fetchDetailedDevice = async path => {
  const response = await API.get(`/${path}`);
  return response;
};
export const fetchOrdersFollowType = async (order, token) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await API.get(`/orders/get?type=${order}`);
  return response;
};
export const fetchAllOrders = async token => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await API.get('/orders/get-all');
  return response;
};
export const postOrders = async data => await API.post('/orders/post', data);
export const updateOrders = async (data, token) => {
  console.log(data);
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await API.patch('/orders/update', data);
  return response;
};
export const postInfoLogin = async info => await API.post('/user/post-login', info);

export const postLogout = async token => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return await API.post('/user/logout');
};

export const refreshAccessToken = async id => {
  return await API.post('/user/refresh-access-token', { id: id });
};
