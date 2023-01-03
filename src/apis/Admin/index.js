import axios from 'axios';
import { Config } from '~/config/config';

const API = axios.create({
  baseURL: `http://localhost:4000/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchAllOrdersOfCusomers = async token => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  console.log(API.baseURL);
  const response = await API.get('user/admin/orders');
  return response;
};

export const getOrderDetail = async (id, token) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return await API.get(`orders/${id}`);
};

export const updateOrderStatus = async (data, token) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return await API.patch(`orders/update`,{
    id: data?.id,
    state: data?.state
  });
};

export const deleteOrder = async (data, token) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return await API.post(`orders/delete`,{
    id: data?.id,
  });
};


////

