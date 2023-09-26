import { createRoot } from "react-dom/client";

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./styles.css";

const LazyApp = lazy(() => import("./App"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={"Loading..."}>
        <LazyApp />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
