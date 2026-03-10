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
        <h2 className="product-title">{product.title}</h2>
        <p className="product-brand">{product.brandName}</p>
        <div className="product-prices">
          {product.discountPrice !== product.price ? (
            <>
              <p className="product-discount">DKK {product.discountPrice}</p>
              <p className="product-price">DKK {product.price}</p>
            </>
          ) : (
            <p className="product-price">DKK {product.price}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
