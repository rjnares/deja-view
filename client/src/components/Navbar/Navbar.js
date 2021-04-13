import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import dejaViewImage from "../../images/camera.png";
import useStyles from "./styles";
import { SIGNOUT } from "../../constants/actionTypes";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const signOut = () => {
    dispatch({ type: SIGNOUT });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) signOut();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={classes.brandContainer}>
          <div className={classes.headingContainer}>
            <Typography
              className={classes.heading}
              color="primary"
              variant="h2"
              align="center"
            >
              Deja
            </Typography>
            <Typography
              className={classes.heading}
              color="secondary"
              variant="h2"
              align="center"
            >
              View
            </Typography>
          </div>
          <img
            className={classes.image}
            src={dejaViewImage}
            alt="Deja View"
            height={60}
          />
        </div>
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.avatar}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h5">
              {user.result.name}
            </Typography>
            <Button
              className={classes.signout}
              variant="contained"
              color="secondary"
              onClick={signOut}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
