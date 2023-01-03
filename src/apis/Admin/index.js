import Req from "~/utils/request.js";

export const fetchAllOrdersOfCusomers = async token => {
  const response = await Req.GET('user/admin/orders');
  return response;
};

export const getOrderDetail = async (id, token) => {
  return await Req.GET(`/orders/${id}`);
};

export const updateOrderStatus = async (data, token) => {
  return await Req.PATCH(`/orders/update`,{
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

