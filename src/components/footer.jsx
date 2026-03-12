import "../css/footer.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h6>Customer care</h6>
          <p>
            <a href="#">Shipping and delivery </a>
          </p>
          <p>
            <a href="#">Returns</a>
          </p>
          <p>
            <a href="#">FAQ</a>
          </p>
          <p>
            <a href="#">Contact us</a>
          </p>
          <p>
            <a href="#">Product support</a>
          </p>
        </div>
        <div>
          <Link to="/about">
            <h6>Our policies</h6>
          </Link>
          <p>
            <a href="#">Accessibility </a>
          </p>
          <p>
            <a href="#">Cookie settings</a>
          </p>
          <p>
            <a href="#">Privacy settings</a>
          </p>
          <p>
            <a href="#">Policies and terms</a>
          </p>
        </div>
        <div>
          <Link to="/about">
            <h6>Our company</h6>
          </Link>
          <p>
            <a href="#">Sustainability</a>
          </p>
          <p>
            <a href="#">Investors</a>
          </p>
          <p>
            <a href="#">Careers</a>
          </p>
          <p>
            <a href="#">Become a sales partner</a>
          </p>
          <p>
            <a href="#">Contact us</a>
          </p>
        </div>
        <div></div>
        <div>
          <img src="../src/assets/components/footer.svg" alt="" />
        </div>
        <div>
          <h6>Follow us on social media</h6>
          <p>
            <a href="#">Facebook</a>
          </p>
          <p>
            <a href="#">Twitter</a>
          </p>
          <p>
            <a href="#">Instagram</a>
          </p>
        </div>
        <div>
          <h6>Download our app</h6>
          <p>
            <a href="#">Control app</a>
          </p>
        </div>
      </div>
      <p>© 2026 control. All rights reserved.</p>
    </footer>
  );
}
