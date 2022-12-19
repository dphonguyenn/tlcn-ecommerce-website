import axios from 'axios';

const API = axios.create({
  baseURL:
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : `${process.env.REACT_APP_API_KEY}`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchAllOrdersOfCusomers = async token => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await API.get('user/admin/orders');
  return response;
};
