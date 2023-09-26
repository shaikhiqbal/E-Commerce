import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="nav-bar" style={{ position: "fixed", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignItems: "baseline",
          padding: "0px 3rem",
          width: "100%"
        }}
      >
        <div>Clon</div>
        <ul
          style={{
            display: "flex",
            textDecoration: "none",
            listStyle: "none",
            gap: "20px"
          }}
        >
          <li className="navLink">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>Cart {cart.length}</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
