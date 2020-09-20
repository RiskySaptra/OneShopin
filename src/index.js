import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import StoreProvider from "./_store/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import { defaultTheme } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
serviceWorker.register();
