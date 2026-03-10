import { Link } from "react-router";

export default function Product({ product }) {
  return (
    <Link to={"/product/" + product.id} className="product-card">
      <img
        src={product.images?.[0]}
        className="product-image"
        alt={product.title}
      />
      <div className="product-info">
        <p className="product-brand">{product.brand}</p>
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">DKK {product.price}</p>
      </div>
    </Link>
  );
}
