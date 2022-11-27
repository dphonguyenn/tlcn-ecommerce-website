import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// import MainDetailedProduct from '~/components/MainDetailedProduct';
import SkeletonTable from '~/components/elements/Skeleton/SkeletonTable.jsx';
import InfoMediaProduct from './MainDetailedProduct/InfoMediaProduct';
import { getDetailedDevice } from '~/store/actions';
import { detailedDeviceState } from '~/store/selectors';
import { getAbsolutePath } from '~/utils';

import InfoDetailedProduct from './MainDetailedProduct/InfoDetailedProduct';
import InfoPayment from './MainDetailedProduct/InfoPayment';

function DetailedProduct() {
  const [loading, setLoading] = useState(false);
  const data = useSelector(detailedDeviceState);
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      if (Object.keys(data).length > 0) {
        setLoading(false);
      } else setLoading(true);
    }, 1000);
    return () => clearTimeout(timing);
  }, [data]);
  const dispatch = useDispatch();
  const location = useLocation();
  const getData = useCallback(() => {
    dispatch(getDetailedDevice.getDetailedDeviceRequest(getAbsolutePath(location.pathname)));
  }, [dispatch, location.pathname]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div style={styles.container_page}>
      <Container maxWidth="lg" sx={{ pt: '16px' }}>
        {loading && <SkeletonTable />}
        {!loading && Object.keys(data).length > 0 && (
          <Grid columnSpacing={4} container>
            <Grid item md={12} sx={{ display: 'flex', alignItems: 'baseline', mb: '16px' }}>
              <Link style={styles.link} to="/">
                <Typography sx={styles.text_redirect}>Trang chủ</Typography>
              </Link>
              <ArrowForwardIosIcon sx={styles.arrow_icon} />
              <Link style={styles.link} to="/">
                <Typography sx={styles.text_redirect}>{data.configuration.brand}</Typography>
              </Link>
            </Grid>
            <Grid item md={7}>
              <InfoMediaProduct data={data} />
              <InfoDetailedProduct data={data} />
            </Grid>
            <Grid item md={5}>
              <InfoPayment data={data} />
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default DetailedProduct;

const styles = {
  container_page: {
    backgroundColor: 'rgba(248, 250, 252, 1)',
    padding: '80px 0 24px 0'
  },
  text_redirect: {
    color: '#0065ee',
    textTransform: 'capitalize'
  },
  arrow_icon: {
    fontSize: '12px',
    paddingRight: '8px',
    color: 'rgba(140, 145, 161, 1)'
  },
  link: {
    textDecoration: 'none',
    paddingRight: '8px'
  }
};
