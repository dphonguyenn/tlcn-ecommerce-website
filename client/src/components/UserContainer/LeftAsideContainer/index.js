import { Avatar, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styles } from "./styles.js";
import { userState } from "../../../redux/selectors";
import { dataButton } from "../../Header/BoxUser/dataButton.js";
import ButtonItemMenuBox from "../../elements/ButtonItemBoxUser/index.js";
import BoxLogin from "../../Header/BoxLogin/index.js";
function LeftAsideContainer() {
  const [openBoxLogin, setOpenBoxLogin] = useState(false);
  // const dispatch = useDispatch();
  // const isLogin = useSelector(userState);
  const isLogin = useSelector(userState);

  // const handleClickBtnClose = () => {
  //   setOpenBoxLogin(false);
  // };
  const handleOpenBoxLogin = () => {
    setOpenBoxLogin(true);
  };
  const handleCloseBoxLogin = () => setOpenBoxLogin(false);
  const arrayItemButtonAuth = [0, 1, 10];

  const isAuthenticatedUser = (
    <div style={styles.part_avt}>
      <Avatar sx={styles.avt}>A</Avatar>
      <div style={styles.part_avt_content}>
        <Typography sx={styles.text03}>Duy Phong Nguyễn</Typography>
        <Typography sx={styles.text04}>0947443064</Typography>
      </div>
    </div>
  );
  const isUnauthenticatedUser = (
    <div style={{ padding: "16px", display: "flex" }}>
      <div>
        <img
          src="https://thinkpro.vn/_nuxt/img/person-laptop.0220751.png"
          alt="img user"
          style={styles.img}
        />
      </div>
      <div style={styles.wrap_part1_paper}>
        <Typography sx={styles.text01}>LapDarker xin chào</Typography>
        <Typography sx={{ fontSize: "14px" }}>
          Hãy đăng nhập để theo dõi đơn hàng và bảo hành dễ dàng nhé
        </Typography>
        <Button sx={styles.btn_login} onClick={handleOpenBoxLogin}>
          <Typography sx={styles.text_login}>Đăng nhập</Typography>
        </Button>
        <div
          onClick={handleOpenBoxLogin}
          style={{
            display: "flex",
          }}
        >
          <Typography sx={styles.text02}>Chưa có tài khoản?</Typography>
          <div style={styles.wrap_register}>
            <p style={styles.text_register}>Đăng ký</p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div style={styles.wrap_main_paper}>
        {isLogin ? (
          isAuthenticatedUser
        ) : (
          <div style={styles.part1_paper}>{isUnauthenticatedUser}</div>
        )}
        <div>
          {dataButton.map((data, index) => {
            return (
              <ButtonItemMenuBox
                path={data.path}
                key={data.text}
                iconButton={data.icon}
                text={data.text}
                slice={index === 1 || index === 4 || index === 9 ? true : false}
                auth={isLogin ? false : arrayItemButtonAuth.includes(index)}
              />
            );
          })}
        </div>
      </div>
      <BoxLogin isShow={openBoxLogin} handleClose={handleCloseBoxLogin} />
    </div>
  );
}

export default LeftAsideContainer;
