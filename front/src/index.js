import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";

import Layout from "@components/layout/Layout";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import "./index.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <HashRouter>
      <Suspense>
        <Layout />
      </Suspense>
    </HashRouter>
  </StrictMode>
);

reportWebVitals();
