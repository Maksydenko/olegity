import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";
import "./i18next";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
