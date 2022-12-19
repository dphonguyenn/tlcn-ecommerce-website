export const getEndPointURL = path => {
  return path.slice(path.lastIndexOf('/') + 1);
};

export const getAbsolutePath = path => {
  return path.slice(path.indexOf('/') + 1);
};

export const classifyDataToTable = data => {
  let columns = [];
  let rows = data.map((item, index) => {
    const { updatedAt, idUser, __v, products, ...rest } = item;
    return { id: index, ...rest };
  });
  const keys = Object.keys(data[0]).filter(
    item => item !== 'updatedAt' && item !== 'idUser' && item !== '__v' && item !== 'products'
  );
  keys.map(key => columns.push({ name: key, selector: row => row[`${key}`], sortable: true }));
  return {
    columns,
    rows
  };
};

export const statusOrder =  {
  WAIT_FOR_PAY: 'Chờ thanh toán',
  WAIT_FOR_CONFIRM: 'Chờ xác nhận',
  PROCESSING:'Đang xử lý',
  TRANSPORTING: 'Đang vận chuyển',
  DELIVERED:'Đã giao',
}
