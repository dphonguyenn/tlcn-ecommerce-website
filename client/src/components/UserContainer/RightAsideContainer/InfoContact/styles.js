import { TableRow } from "@mui/material";
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
    fontSize: '20px'
  },
  text2:{
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'block',
    text: 'body',
    textTransform: 'initial !important',
  },
  text3:{
    fontSize: '16px'
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
    flexDirection: 'row',
    justifyContent: 'end'
  },
  icon: {
    padding: '12px',
    fontSize: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '50%',
    color: 'rgba(254, 52, 100,1)'
  },
  icon2: {
    marginTop: '30px',
    height: '250px',
    marginRight: '50px',
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
    padding: '0.5rem',
    height: '30px',
    width: '30px'
  },
  btn2:{
    borderRadius: '50%',
    width: '65px',
    height: '65px',
    marginTop: '20px',
    backgroundColor: '#f8fafc',
  },
  btn3:{
    marginTop: '40px',
    borderRadius: '10px',
    width: '300px',
    height: '45px',
    backgroundColor: '#342fd4',
    color: 'white',
    '&:hover': { bgcolor: '#0702a6' }
  },
  text_btn: {
    textTransform: 'initial',
    color: '#0065ee'
  }
};
