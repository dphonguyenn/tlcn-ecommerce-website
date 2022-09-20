import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { styles } from './styles.js';
import { FiMap } from 'react-icons/fi';
import person_png from '../../../../media/img/social/person.png';

function InfoContact() {
  return <Paper sx={Object.assign({ ...styles.paper }, { m: '0' })}>
    <div style={styles.part1}>
      <Typography style={styles.text1}>
        Thông tin liên lạc & Sổ địa chỉ
      </Typography>

      <div style={styles.part2}>
        <Button style={styles.btn2}>;
          <FiMap style={styles.btn} />
        </Button>
        
        <p style={styles.text2}>Chưa thêm địa chỉ</p>
        <p style={styles.text3}> Hãy thêm địa chỉ để dễ dàng nhận hàng bạn nhé</p>
        
        <Button style={styles.btn3}>Thêm địa chỉ mới</Button>

      </div>

      <div style={styles.part3}>
        <img style={styles.icon2} src={person_png} alt='Logo' />
      </div>
    </div>
  </Paper>;
}

export default InfoContact;
