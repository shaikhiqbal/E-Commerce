import { lazy } from "react";

// routes.js
const Home = lazy(() => import("../../pages/Home"));
const Cart = lazy(() => import("../../pages/Cart"));

export default [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/cart",
    element: <Cart />
  }
];
