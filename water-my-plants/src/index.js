import React from "react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import theme from "../src/Theme/index";

render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

