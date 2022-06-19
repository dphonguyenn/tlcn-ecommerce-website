import { Container, Grid } from "@mui/material";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import LeftAsideContainer from "../../../components/UserContainer/LeftAsideContainer/index.js";
import RightAsideContainer from "../../../components/UserContainer/RightAsideContainer/index.js";

function User() {
  return (
    <div style={{ padding: "80px 0 0 0", backgroundColor: "#f8fafc" }}>
      <Container maxWidth="lg" sx={{ p: "16px 0" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#0065ee" }}>
            Trang chủ
          </Link>
          <IoIosArrowForward style={{ color: "#8c91a1", fontWeight: "bold" }} />
          <Link
            to="/user/account"
            style={{ textDecoration: "none", color: "#0065ee" }}
          >
            Tài khoản
          </Link>
        </div>
        <Grid columnSpacing={4} container sx={{ pt: "16px" }}>
          <Grid item md={4.2}>
            <LeftAsideContainer />
          </Grid>
          <Grid item md={7.8}>
            <RightAsideContainer outlet={<Outlet />} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default User;
