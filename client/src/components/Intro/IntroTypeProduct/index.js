import { Button, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { img_intro_bg } from '../../../media/img';
import { styles } from './styles.js';
import { devicesFiltersState } from '../../../redux/selectors';

function IntroTypeProduct() {
  const data = useSelector(devicesFiltersState);
  return (
    <div style={styles.container_intro}>
      <Container maxWidth="lg" sx={styles.container}>
        <div style={{ borderRadius: '20px', backgroundColor: 'white' }}>
          <img
            src={img_intro_bg[Math.floor(Math.random() * img_intro_bg.length)]}
            alt="img intro"
            style={styles.img_intro}
          />
          <div style={{ padding: '12px 24px' }}>
            <Typography variant="h4" sx={{ fontWeight: '600', textTransform: 'capitalize' }}>
              {data[0].type}
            </Typography>
            <Button sx={{ pt: '16px' }}>
              <div style={styles.wrap_content_ofbtn}>
                <div style={{ display: 'flex', padding: '0 8px' }}>
                  <Typography sx={{ fontWeight: '600', color: '#0065ee' }}>Tất cả {data[0].type}</Typography>
                  <Typography sx={{ color: 'rgba(140, 145, 161, 1)', pl: '8px', fontWeight: 'bold' }}>
                    {data.length}
                  </Typography>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default IntroTypeProduct;
