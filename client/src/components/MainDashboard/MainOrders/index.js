import { Button, Typography } from '@mui/material';
import { IoMdAdd } from 'react-icons/io';
import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import { fetchAllOrdersOfCusomers } from '../../../apis/Admin/index.js';
// import { classifyDataToTable } from '../../../helpers/index.js';
import SkeletonTable from '../../elements/Skeleton/SkeletonTable.js';
import DataGridTable from '../../elements/DataGridTable/index.js';
function MainOrders() {
  const [ordersFetch, setOrdersFetch] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const getData = async () => {
    const { data } = await fetchAllOrdersOfCusomers(localStorage.getItem('token'));
    return data;
  };

  React.useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setOrdersFetch(getData());
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timing);
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>Đơn hàng</Typography>
        <Button
          sx={{
            backgroundColor: '#fe346d',
            borderRadius: '8px',
            padding: '8px 42px',
            mr: '12px',
            '&:hover': { bgcolor: 'rgba(210, 77, 87, 1)' }
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              textTransform: 'initial',
              fontWeight: 'bold'
            }}
          >
            Thêm
          </Typography>
          <IoMdAdd style={{ fontSize: '19px', color: '#fff', fontWeight: 'bold' }} />
        </Button>
      </div>
      <div style={{ height: '520px', width: '100%', padding: '24px 0' }}>
        {loading && <SkeletonTable />}
        {!loading && <DataGridTable data={ordersFetch} />}
      </div>
    </div>
  );
}

export default MainOrders;
