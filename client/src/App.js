import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

// import dejaViewImage from "./images/dejaView.jpg";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Typography variant="h2" align="center">
          Deja View
        </Typography>
        {/*<img src={dejaViewImage} alt="Deja View" height="60" />*/}
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
