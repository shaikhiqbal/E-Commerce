// PrivateRoute.js
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  debugger;
  const { element, rest } = props;
  const isAuthenticated = localStorage.getItem("userData");
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
