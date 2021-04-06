import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import dejaViewImage from "../../images/dejaView.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <div className={classes.headingContainer}>
          <Typography
            component={Link}
            to="/"
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
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              className={classes.signout}
              variant="contained"
              color="secondary"
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
