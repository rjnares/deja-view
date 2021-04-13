import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import reducers from "./reducers";
import App from "./App";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const theme = createMuiTheme({
  typography: {
    h2: {
      fontFamily: ["Pacifico", "cursive"].join(","),
    },
    h6: {
      fontFamily: ["Pacifico", "cursive"].join(","),
    },
  },
  palette: {
    primary: {
      main: "#03a59b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f69d20",
      contrastText: "#fff",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
