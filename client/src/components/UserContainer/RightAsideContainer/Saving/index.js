import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { styles } from './styles.js';
import { TbAdjustments } from 'react-icons/tb';



function Saving() {
  return <Paper sx={Object.assign({ ...styles.paper }, { m: '0' })}>
    <div style={styles.part1}>
      <div style={styles.part2}>
        <Button style={styles.btn2}>
          <TbAdjustments style={styles.btn} />
        </Button>

        <p style={styles.text2}> Không có kết quả </p>
        <p style={styles.text3}> lapDarker sẵn sàng tư vấn miễn phí nếu bạn cần hỗ trợ thêm </p>
        
        <Button sx={styles.btn3}>
        <Typography sx={{ textTransform: 'initial' }}> Liên hệ tư vấn </Typography>
        </Button>
      </div>
    </div>
  </Paper>
} 

export default Saving;
