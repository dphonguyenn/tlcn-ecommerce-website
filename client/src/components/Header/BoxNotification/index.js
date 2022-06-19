import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Button, Paper, Typography, Popover, IconButton } from '@mui/material';
import { BiBell } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { styles } from './styles.js';
import { userState } from '../../../redux/selectors';
import BoxLogin from '../BoxLogin';
// import { hoverOnComponent } from '../../../redux/actions';
import img_intro from '../../../media/img/selections/user01.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function BoxNotification({ style_icon }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openBoxLogin, setOpenBoxLogin] = useState(false);
  const isLogin = useSelector(userState);

  // const dispatch = useDispatch();
  // const handleOnHoverBoxNotification = useCallback((boolean) => {
  //     dispatch(hoverOnComponent.setHoverOnComponent({
  //         component: 'BOX_NOTIFICATION',
  //         state: boolean
  //     }));
  // }, [dispatch]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickBtnClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleOpenBoxLogin = () => {
    setOpenBoxLogin(true);
    setAnchorEl(null);
  };

  const handleCloseBoxLogin = () => setOpenBoxLogin(false);

  const isAuthenticatedUser = (
    <>
      <div style={styles.wrap_part1_paper}>
        <IconButton sx={styles.icon_btn}>
          <BiBell style={styles.icon_bell} />
        </IconButton>
        <Typography style={styles.text01}>Chưa có thông báo</Typography>
        <div style={styles.wrap_part2_paper}>
          <img src={img_intro} alt="img box notify" />
        </div>
      </div>
    </>
  );

  const isUnauthenticatedUser = (
    <>
      <div style={styles.wrap_part1_paper}>
        <IconButton sx={styles.icon_btn}>
          <BiBell style={styles.icon_bell} />
        </IconButton>
        <Typography style={styles.text01}>Chưa có thông báo</Typography>
        <Typography style={styles.text02}>Hãy đăng nhập để tối ưu hóa trải nghiệm trên</Typography>
        <Typography style={styles.text02}>LapDarker.vn bạn nhé</Typography>
        <Button sx={styles.btn_login} onClick={handleOpenBoxLogin}>
          <Typography sx={styles.text_login}>Đăng nhập</Typography>
        </Button>
      </div>
      <div style={styles.wrap_part2_paper}>
        <img src={img_intro} alt="img box notify" />
      </div>
    </>
  );

  return (
    <div>
      <IconButton
        onClick={handleClick}
        sx={{
          margin: '0 6px',
          '&:hover': {
            backgroundColor: '#14cdc8',
            transition: '0.5s ease-in-out'
          }
        }}
      >
        <BiBell style={style_icon} />
      </IconButton>
      <Popover
        disableScrollLock
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}
        sx={{
          '& .MuiPaper-root': {
            overflowY: 'hidden',
            borderRadius: '16px'
          },
          '& .MuiPopover-paper': {
            top: '80px !important'
          }
        }}
      >
        <Paper
          sx={styles.paper}
          // onMouseOver={() => handleOnHoverBoxNotification(true)}
          // onMouseLeave={() => handleOnHoverBoxNotification(false)}
        >
          <div style={styles.paper_header}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Thông báo</Typography>
            <IconButton sx={{ fontSize: '18px', fontWeight: '600' }} onClick={() => handleClickBtnClose()}>
              <GrClose />
            </IconButton>
          </div>
          <div style={styles.wrap_main_paper}>
            {isLogin ? isAuthenticatedUser : <div style={styles.part1_paper}>{isUnauthenticatedUser}</div>}
          </div>
        </Paper>
      </Popover>
      <BoxLogin isShow={openBoxLogin} handleClose={handleCloseBoxLogin} />
    </div>
  );
}

export default BoxNotification;
