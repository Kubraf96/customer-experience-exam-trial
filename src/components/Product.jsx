import { Link } from "react-router";
import dealBadge from "../assets/deal.svg";

export default function Product({ product }) {
  const hasDiscount = Number(product.discountPrice) < Number(product.price);

  return (
    <Link to={"/product/" + product.id} className="product-card">
      {hasDiscount && <img src={dealBadge} className="deal-badge" alt="Deal" />}

      <img
        src={product.images?.[0]}
        className="product-image"
        alt={product.title}
      />

      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-brand">{product.brandName}</p>

        <div className="product-prices">
          {hasDiscount ? (
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
