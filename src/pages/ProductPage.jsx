import "../css/ProductPage.css";
import ProductGrid from "../components/ProductGrid.jsx";
import Filterbar from "../components/filterBar.jsx";

export default function ProductPage() {
  return (
    <div className="filterbar-container">
      <header>
        <h1>Products</h1>
      </header>
      <main>
        <Filterbar />
        <ProductGrid />
      </main>
    </div>
  );
}
