import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import dejaViewImage from "../../images/dejaView.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
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
    </AppBar>
  );
};

export default Navbar;
