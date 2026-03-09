import { NavLink } from "react-router";
import "../css/almNav.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <NavLink to="/">
          <img src="./images/components/whitenav/logo.svg" alt="Logo" />
        </NavLink>
        <img src="./images/components/whitenav/navline.svg" alt="line" />
        <NavLink to="/about">About</NavLink>
        <img src="./images/components/whitenav/navline.svg" alt="line" />
        <NavLink to="/contact">Contact</NavLink>
        <img src="./images/components/whitenav/navline.svg" alt="line" />
        <NavLink to="/product">Product</NavLink>
        <img src="./images/components/whitenav/navline.svg" alt="line" />
        <NavLink to="/sale">Sale</NavLink>
      </div>
      <div className="nav-icons">
        <img src="./images/components/whitenav/search.svg" alt="search" />
        <NavLink to="/pinned">
          <img src="./images/components/whitenav/pin.svg" alt="pinned pieces" />
        </NavLink>
        <NavLink to="/notfoundpage">
          <img src="./images/components/whitenav/user.svg" alt="profile" />
        </NavLink>
        <NavLink to="/cart">
          <img src="./images/components/whitenav/cart.svg" alt="Cart" />
        </NavLink>
      </div>
    </nav>
  );
}
