import { useState } from "react";
import scribble from "../assets/Scribble.svg";

export default function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || null,
  );
  const [selectedSize, setSelectedSize] = useState(null);

  const hasDiscount = Number(product.discountPrice) < Number(product.price);
  const finalPrice = hasDiscount ? product.discountPrice : product.price;

  return (
    <div className="product-side product-info">
      <h1 className="product-side__title">{product.title}</h1>
      <img
        className="product-side__scribble"
        src={scribble}
        alt=""
        aria-hidden="true"
      />

      {/* COLORS */}
      <div className="product-side__group colors">
        <p className="product-side__label">
          Color <span>| {selectedColor || ""}</span>
        </p>
        <div className="product-side__colors color-options">
          {product.colors?.map((color, i) => (
            <button
              key={i}
              style={{ backgroundColor: color }}
              className={`product-side__swatch ${selectedColor === color ? "is-active active" : ""}`}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      {/* SIZES */}
      <div className="product-side__group sizes">
        <p className="product-side__label">
          Size <span>| {selectedSize || ""}</span>
        </p>
        <div className="product-side__sizes size-options">
          {product.sizes?.map((size, i) => (
            <button
              key={i}
              className={`product-side__size ${selectedSize === size ? "is-active active" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="price-and-buttons">
        {/* PRICE */}
        <div className="product-side__price-row price">
          <span
            className={`product-side__price new ${hasDiscount ? "" : "product-side__price--regular"}`}
          >
            {finalPrice} {product.currency}
          </span>
          {hasDiscount && (
            <span className="product-side__old-price old">
              {product.price} {product.currency}
            </span>
          )}
        </div>

        {/* BUTTONS */}
        <div className="product-side__actions actions">
          <button className="buy blackbutton">BUY PRODUCT</button>
          <button className="cart whitebutton">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
