import axios from 'axios';
import { Config } from '~/config/config';

const API = axios.create({
  // baseURL: `${process.env.REACT_APP_API_KEY}`,
  baseURL: Config.SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchAllOrdersOfCusomers = async token => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await API.get('user/admin/orders');
  return response;
};

export const getOrderDetail = async (id, token) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return await API.get(`/orders/${id}`);
};

