import { NavLink } from "react-router";
import "../css/almNav.css";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <img src="./images/components/logo.svg" alt="Logo" />
      </NavLink>
      <img src="./images/components/navline.svg" alt="line" />
      <NavLink to="/about">About</NavLink>
      <img src="./images/components/navline.svg" alt="line" />
      <NavLink to="/contact">Contact</NavLink>
      <img src="./images/components/navline.svg" alt="line" />
      <NavLink to="/product">Product</NavLink>
      <img src="./images/components/navline.svg" alt="line" />
      <NavLink to="/sale">Sale</NavLink>
    </nav>
    <div></div>
  );
}
