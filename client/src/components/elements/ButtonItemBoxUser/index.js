import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import useStyles from "./styles.js";
import cursor_error from "../../../media/img/cursor/cursor06.png";
import { useDispatch } from "react-redux";
import { postLogout } from "../../../redux/actions";

function ButtonItemMenuBox({ iconButton, text, slice, auth, path }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleClickOnBtn = (e, _path, auth) => {
    if (_path === "user/logout") {
      dispatch(postLogout.postLogoutRequest());
      e.preventDefault();
      // navigate('/');
    }
    if (auth) {
      e.preventDefault();
    }
  };
  if (localStorage.getItem("_pathname")) {
    var currentBtn = localStorage.getItem("_pathname").includes(path);
  }
  return (
    <Link
      to={`/${path}`}
      className={classes.a}
      onClick={(e) => handleClickOnBtn(e, path, auth)}
    >
      <Button
        className={classes.btn}
        style={{
          borderBottom: slice ? "1px solid rgba(240, 242, 244,1)" : "0px",
        }}
        disabled={auth}
        sx={{
          border: currentBtn ? "1px solid #0065ee !important" : "0px",
          "&.Mui-disabled": {
            pointerEvents: "all",
            cursor: `url(${cursor_error}) ,auto`,
            "&:hover": {
              bgcolor: "rgba(242, 241, 239,1)",
            },
          },
        }}
      >
        <div className={classes.wrap_btn}>
          {iconButton}
          <Typography
            className={classes.text_btn}
            style={{ color: auth ? "rgba(191, 191, 191,1)" : "#4a4f52" }}
          >
            {text}
          </Typography>
        </div>
        <div style={{ lineHeight: "0px" }}>
          <IoIosArrowForward className={classes.icon_arrow} />
        </div>
      </Button>
    </Link>
  );
}

export default ButtonItemMenuBox;
