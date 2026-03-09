import { NavLink } from "react-router";
import "../css/banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <NavLink to="/cart">sign up to get 15% off today</NavLink>
    </div>
  );
}
