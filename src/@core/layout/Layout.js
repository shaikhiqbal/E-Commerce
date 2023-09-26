import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="all-pages">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
