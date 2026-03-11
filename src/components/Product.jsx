import { Link } from "react-router";
import dealBadge from "../assets/deal.svg";

export default function Product({ product }) {
  const hasDiscount = Number(product.discountPrice) < Number(product.price);

  return (
    <Link to={"/product/" + product.id} className="product-card">
      {hasDiscount && <img src={dealBadge} className="deal-badge" alt="Deal" />}

      <div className="product-image">
        <img src={product.images?.[0]} alt={product.title} />
      </div>

      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-brand">{product.brandName}</p>

        <div className="product-prices">
          {hasDiscount ? (
            <>
              <p className="product-discount">DKK {product.discountPrice}</p>
              <p className="product-price product-price--old">
                DKK {product.price}
              </p>
            </>
          ) : (
            <p className="product-price">DKK {product.price}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
