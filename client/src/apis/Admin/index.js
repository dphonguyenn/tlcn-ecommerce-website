import axios from 'axios';

const API = axios.create({
  baseURL: 'https://lapdarker-clone-thinkpro.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchAllOrdersOfCusomers = async token => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const response = await API.get('user/admin/orders/get-all');
  return response;
};
