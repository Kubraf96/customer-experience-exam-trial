import "../css/ProductPage.css";
import ProductGrid from "../components/ProductGrid";
import FilterBar from "../components/filterbar";

export default function ProductPage() {
  return (
    <div className="filterbar-container">
      <FilterBar />
      <header>
        <h1>Products</h1>
      </header>
      <main>
        <ProductGrid />
      </main>
    </div>
  );
}
