import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

// import dejaViewImage from "./images/dejaView.jpg";

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static">
        <Typography className={classes.heading} variant="h2" align="center">
          Deja View
        </Typography>
        {/*<img className={classes.image} src={dejaViewImage} alt="Deja View" height="60" />*/}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            jsutify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
