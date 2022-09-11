import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Paper, Tab, Tabs, Typography } from '@mui/material';
import { styles } from './styles.js';
import { useNavigate } from 'react-router-dom';
import ServiceCost from './ServiceCost';
import Payment from './Payment';
import Insurance from './Insurance';
import Deliver from './Deliver';
function Policy() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeIdxPanel = useCallback((event, newValue) => {
    setCurrentIdx(newValue);
  }, []);

  return (
    <>
      <Paper sx={styles.paper}>
        <div style={styles.wrap_paper}>
          <Typography sx={styles.text1}>Chính sách</Typography>
          <Box sx={{ width: '100%', pt: '16px' }}>
            <Tabs value={currentIdx} onChange={handleChangeIdxPanel} aria-label="tabs">
              <Tab
                onClick={() => setCurrentIdx(0)}
                disableRipple
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{'Bảo hành, đổi trả'}</Typography>
                  </div>
                }
                id="tab-0"
                aria-controls="tabpanel-0"
                sx={styles.tab}
              />
              <Tab
                onClick={() => setCurrentIdx(1)}
                disableRipple
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{'Vận chuyển'}</Typography>
                  </div>
                }
                id="tab-0"
                aria-controls="tabpanel-0"
                sx={styles.tab}
              />
              <Tab
                onClick={() => setCurrentIdx(2)}
                disableRipple
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{'Thanh toán'}</Typography>
                  </div>
                }
                id="tab-1"
                aria-controls="tabpanel-1"
                sx={styles.tab}
              />
              <Tab
                onClick={() => setCurrentIdx(3)}
                disableRipple
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{'Bảng giá dịch vụ'}</Typography>
                  </div>
                }
                id="tab-2"
                aria-controls="tabpanel-2"
                sx={styles.tab}
              />
            </Tabs>
            {currentIdx === 0 && <Insurance />}
            {currentIdx === 1 && <Deliver />}
            {currentIdx === 2 && <Payment />}
            {currentIdx === 3 && <ServiceCost />}
          </Box>
        </div>
      </Paper>
    </>
  );
}

export default Policy;
