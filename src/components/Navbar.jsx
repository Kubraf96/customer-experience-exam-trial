import { NavLink } from "react-router";
import "../css/almNav.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <NavLink to="/">
          <img src="./src/assets/components/whitenav/logo.svg" alt="Logo" />
        </NavLink>
        <img src="./src/assets/components/whitenav/navline.svg" alt="line" />
        <NavLink to="/about">About</NavLink>
        <img src="./src/assets/components/whitenav/navline.svg" alt="line" />
        <NavLink to="/contact">Contact</NavLink>
        <img src="./src/assets/components/whitenav/navline.svg" alt="line" />
        <NavLink to="/product">Product</NavLink>
        <img src="./src/assets/components/whitenav/navline.svg" alt="line" />
        <NavLink to="/sale">Sale</NavLink>
      </div>
      <div className="nav-icons">
        <img src="./src/assets/components/whitenav/search.svg" alt="search" />
        <NavLink to="/pinned">
          <img
            src="./src/assets/components/whitenav/pin.svg"
            alt="pinned pieces"
          />
        </NavLink>
        <NavLink to="/notfoundpage">
          <img src="./src/assets/components/whitenav/user.svg" alt="profile" />
        </NavLink>
        <NavLink to="/cart">
          <img src="./src/assets/components/whitenav/cart.svg" alt="Cart" />
        </NavLink>
      </div>
    </nav>
  );
}
