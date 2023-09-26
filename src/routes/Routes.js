import { lazy } from "react";

import { Navigate } from "react-router-dom";

const Login = lazy(() => import("../pages/Login"));

const Routes = ({ allRoutes }) => {
  const getUser = () => {
    const user = localStorage.getItem("userData");
    if (!user) return "/";
    else return "/login";
  };

  const routes = [
    {
      path: "/",
      element: <Navigate replace to={getUser()} />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "*",
      element: <h1>Page not Found 404</h1>
    },
    ...allRoutes
  ];
  return routes;
};

export default Routes;
