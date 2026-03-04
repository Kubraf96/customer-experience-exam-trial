import { useState } from "react";
import Accordion from "./Accordion";

export default function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || null,
  );
  const [selectedSize, setSelectedSize] = useState(null);

  const finalPrice =
    product.discountPrice > 0 ? product.discountPrice : product.price;

  return (
    <div className="product-info">
      <h1>{product.title}</h1>

      {/* COLORS */}
      <div className="colors">
        <p>Color:</p>
        <div className="color-options">
          {product.colors?.map((color, i) => (
            <button
              key={i}
              style={{ backgroundColor: color }}
              className={selectedColor === color ? "active" : ""}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      {/* SIZES */}
      <div className="sizes">
        <p>Size:</p>
        <div className="size-options">
          {product.sizes?.map((size, i) => (
            <button
              key={i}
              className={selectedSize === size ? "active" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="price">
        {product.discountPrice > 0 && (
          <span className="old">
            {product.price} {product.currency}
          </span>
        )}
        <span className="new">
          {finalPrice} {product.currency}
        </span>
      </div>

      {/* BUTTONS */}
      <div className="actions">
        <button className="buy">BUY PRODUCT</button>
        <button className="cart">ADD TO CART</button>
      </div>

      {/* ACCORDIONS */}
      <Accordion title="Description">
        <p>{product.description}</p>
      </Accordion>

      <Accordion title="Details">
        <p>Material: {product.material}</p>
        <p>Weight: {product.weight}</p>
        <p>Dimensions: {product.dimensions}</p>
      </Accordion>
    </div>
  );
}
