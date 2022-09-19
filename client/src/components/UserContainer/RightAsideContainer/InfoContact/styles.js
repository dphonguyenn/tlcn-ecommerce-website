import { height } from "@mui/system";

export const styles = {
  paper: {
    borderRadius: '16px',
    boxShadow: '0 0 #0000, 0 0 #0000, 0px 0px 12px rgb(0 0 0 / 6%)',
    padding: '24px',
    margin: '0 0 12px 0'
  },
  wrap_paper: {
    display: 'flex',
    flexDirection: 'column'
  },
  text1: {
    fontSize: '26px'
  },
  text2:{
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'block',
    text: 'body',
  },
  text3:{
    fontSize: ' 22px'
  },
  part1: {
    display: 'flex',
    flexDirection: 'column',
  },
  part2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  part3: {
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    padding: '12px',
    fontSize: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '50%',
    color: 'rgba(254, 52, 100,1)'
  },
  tab: {
    color: '#0e0e0e',
    textTransform: 'initial',
    fontSize: '16px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    m: '0 8px',
    '&:hover': {
      bgcolor: '#ECF0F4'
    },
    '&.Mui-selected': {
      '.MuiTypography-root': {
        fontWeight: 'bold',
        color: '#0065ee'
      }
    }
  },
  group_btn: {
    display: 'flex'
  },
  btn: {
    borderRadius: '0.1rem',
    margin: '4px',
    padding: '8px 8px',
    height: '30px',
    width: '30px'
  },
  btn2:{
    borderRadius: '50%',
    margin: 'auto',
    width: '60px',
    height: '60px',
    marginTop: '40px',
    marginBottom: '10px',
  },
  text_btn: {
    textTransform: 'initial',
    color: '#0065ee'
  }
};
