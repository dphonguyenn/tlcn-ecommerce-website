import { Button, Typography } from '@mui/material';
import { IoMdAdd } from 'react-icons/io';
import { createContext } from 'react';

import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import SkeletonTable from '~/components/elements/Skeleton/SkeletonTable.jsx';
import DataGridTable from '~/components/elements/DataGridTable';
import { fetchAllOrdersOfCusomers } from '~/apis/Admin';

import { useGetAllOrders } from '~/hook'; 

function MainOrders() {
  const [ordersFetch, setOrdersFetch] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { data: listOrders, refetch: refecthOrder} = useGetAllOrders();


  // const getData = async () => {
  //   const { data } = await fetchAllOrdersOfCusomers(localStorage.getItem('token'));
  //   return data;
  // };

  React.useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      // setOrdersFetch(getData());
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timing);
  }, []);

  const DataContext = createContext(null);



  console.log('data fetched ------> ', listOrders);

  return (
    <DataContext.Provider value = {{refecthOrder: refecthOrder}}> 
      <div className=''>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>Đơn hàng</Typography>
        </div>
        <div style={{ height: '520px', width: '95%', padding: '24px 0', margin: '0' }}>
          {listOrders ? <DataGridTable data={listOrders}/> :<SkeletonTable />   }
        </div>
    </div>
    </DataContext.Provider>
    
  );
}

export default MainOrders;
