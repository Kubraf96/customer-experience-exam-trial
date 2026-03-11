import { useState } from "react";
import { useParams } from "react-router";
import products from "../data/products.json";
import DetaljeGallery from "../components/detaljeGallery";
import ProductInfo from "../components/ProductInfo";
import Accordion from "../components/DropDownBar";
import "../css/ProductSide.css";

// Fallback product in case products.json is empty or invalid
const fallbackProduct = {
  id: "",
  images: [],
  brandName: "",
  title: "Product",
  description: "",
  category: "",
  price: 0,
  currency: "$",
  discountPrice: 0,
  stock: 0,
  rating: 0,
  reviewsCount: 0,
  colors: [],
  sizes: [],
  material: "",
  weight: "",
  dimensions: "",
  tags: [],
};

export default function DetaljePage() {
  const { id } = useParams();

  const product =
    products.find((item) => String(item?.id) === String(id)) || fallbackProduct;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const selectedImage =
    product.images?.[activeImageIndex] || product.images?.[0] || "";

  return (
    <div className="product-page product-page-layout">
      <div className="container product-page__container">
        <div className="product-page__accordion-column">
          <div className="product-gallery__thumbnails product-gallery__thumbnails--detached">
            {product.images?.map((img, index) => (
              <img
                key={img}
                src={img}
                alt={`${product.title} view ${index + 1}`}
                onClick={() => setActiveImageIndex(index)}
                className={`product-gallery__thumb ${selectedImage === img ? "is-active" : ""}`}
              />
            ))}
          </div>

          <Accordion title="Description">
            <p>{product.description}</p>
          </Accordion>

          <Accordion title="Details">
            <p>{product.description}</p>
          </Accordion>

          <Accordion title="Size & Fit">
            <button className="blackbutton">Size Chart</button>
          </Accordion>

          <Accordion title="Shipping & Returns">
            <p>
              Shipping options available at checkout. Returns and exchanges
              within 30 days in original condition. Warranty applies to
              manufacturing defects as defined by consumer protection
              regulations.
            </p>
          </Accordion>
        </div>

        <div className="left product-page__gallery-column">
          <DetaljeGallery selectedImage={selectedImage} title={product.title} />
        </div>

        <div className="right product-page__info-column">
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
}
