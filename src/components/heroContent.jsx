import { Link } from "react-router";
import "../css/heroContent.css";

export default function HeroContent() {
  return (
    <div className="hero-content">
      <div className="img-container image1">
        <Link to="/products">
          <div className="content-title">
            <h2 data-text="gear up for spring">gear up for spring</h2>
          </div>
          <div className="content-link">
            <h5>graphic tees</h5>
            <h5>shop now</h5>
          </div>
        </Link>
      </div>
      <div className="img-container image2">
        <Link to="/products">
          <div className="content-title">
            <h2 data-text="statement pieces">statement pieces</h2>
          </div>
          <div className="content-link">
            <h5>new arrivals</h5>
            <h5>shop now</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}
