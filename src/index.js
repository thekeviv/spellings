import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { initializeIcons } from "@uifabric/icons";

// Initializes the UI Fabric icons that we can use
// Choose one from this list: https://developer.microsoft.com/en-us/fabric#/styles/icons
initializeIcons();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
