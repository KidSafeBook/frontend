import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App.js";
import reportWebVitals from "./reportWebVitals.js";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
