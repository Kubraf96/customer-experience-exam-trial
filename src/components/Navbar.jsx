import { NavLink } from "react-router";
import "../css/almNav.css";
import navLogo from "../assets/components/whitenav/logo.svg";
import navLine from "../assets/components/whitenav/navline.svg";
import searchIcon from "../assets/components/whitenav/search.svg";
import pinIcon from "../assets/components/whitenav/pin.svg";
import userIcon from "../assets/components/whitenav/user.svg";
import cartIcon from "../assets/components/whitenav/cart.svg";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <NavLink to="/">
          <img src={navLogo} alt="Logo" />
        </NavLink>
        <img src={navLine} alt="line" />
        <NavLink to="/about">About</NavLink>
        <img src={navLine} alt="line" />
        <NavLink to="/contact">Contact</NavLink>
        <img src={navLine} alt="line" />
        <NavLink to="/products">Product</NavLink>
        <img src={navLine} alt="line" />
        <NavLink to="/sale">Sale</NavLink>
      </div>
      <div className="nav-icons">
        <img src={searchIcon} alt="search" />
        <NavLink to="/pinned">
          <img src={pinIcon} alt="pinned pieces" />
        </NavLink>
        <NavLink to="/notfoundpage">
          <img src={userIcon} alt="profile" />
        </NavLink>
        <NavLink to="/cart">
          <img src={cartIcon} alt="Cart" />
        </NavLink>
      </div>
    </nav>
  );
}
