import LayoutMeta from "../../@core/layout/Layout";

import PrivateRoute from "../../components/routes/PrivateRoute";

import pages from "./pages";

const protectedList = [...pages];

const protectedRoutes = (list = []) => {
  return list.filter((route) => {
    if (route.path && route.element) {
      debugger;
      return <PrivateRoute path={route.path} element={route.element} />;
    }
  });
};

const routes = [
  {
    path: "/",
    element: <LayoutMeta />,
    children: [...protectedList]
  }
];

export default routes;
