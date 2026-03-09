import products from "../data/products.json";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import Accordion from "../components/DropDownBar";
import "../css/ProductSide.css";

// Fallback product in case the products.json is empty or has invalid data - Det vil sige, at det er en midlertidig løsning, indtil vi har en rigtig backend, hvor vi kan hente rigtige produkter fra.
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

export default function ProductPage() {
  const product =
    products.find((item) => item && (item.title || item.images?.length > 0)) ||
    products[0] ||
    fallbackProduct;

  return (
    <div className="product-page product-page-layout">
      <div className="container product-page__container">
        <div className="product-page__accordion-column">
          <Accordion title="Description">
            <p>{product.description}</p>
          </Accordion>

          <Accordion title="Details">
            <p>Description: {product.description}</p>
          </Accordion>
          <Accordion title="Size & Fit">
            <button>Size Chart</button>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p>
              Shipping options available at checkout. Returns and exchanges
              within 30 days in original condition. Warranty applies to
              manufacturing defects as defined by consumer protection
              regulations..
            </p>
          </Accordion>
        </div>

        <div className="left product-page__gallery-column">
          <ProductGallery images={product.images} />
        </div>

        <div className="right product-page__info-column">
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
}
