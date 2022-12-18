import { makeStyles } from '@mui/styles';
export default makeStyles({
  a: {
    textDecoration: 'none',
    margin: '6px 0'
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    width: '100%',
    border: '0px',
    cursor: 'pointer',
    borderRadius: '12px',
    '&:hover': {
      backgroundColor: 'rgba(236, 240, 241, 1)'
    }
  },
  wrap_btn: {
    display: 'flex',
    padding: '12px 8px'
  },
  text_btn: {
    fontSize: '16px',
    color: '#4a4f52',
    fontWeight: 'bold',
    paddingLeft: '12px',
    textTransform: 'initial'
  },
  icon_arrow: {
    fontSize: '18px'
  }
});
