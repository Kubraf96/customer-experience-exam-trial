import "../css/ProductPage.css";
import ProductGrid from "../components/ProductGrid";
import Filterbar from "../components/filterbar";

export default function ProductPage() {
  return (
    <div className="filterbar-container">
      <Filterbar />
      <header>
        <h1>Products</h1>
      </header>
      <main>
        <ProductGrid />
      </main>
    </div>
  );
}
