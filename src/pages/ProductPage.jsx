import product from "../data/products.json";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import "../css/ProductSide.css";

export default function ProductPage() {
  return (
    <div className="product-page">
      <div className="container">
        <div className="left">
          <ProductGallery images={product.images} />
        </div>

        <div className="right">
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
}
