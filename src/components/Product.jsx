import { Link } from "react-router";
import dealBadge from "../assets/deal.svg";

// Dette er Rasmus' kode, som er blevet smidt ind, og derefter rettet til, så det matcher vores Figma design.

export default function Product({ product }) {
  const hasDiscount = Number(product.discountPrice) < Number(product.price);

  // Functionen her fortæller koden, hvilken pris den skal vise på produktet.
  // Hvis der er en discountPrice og den er mindre end price, så vis discountPrice ellers viser den normale pris.

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
