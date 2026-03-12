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

// Den her er dejlig nem
// Vi importerer vores 2 components.
// Filterbaren og ProductGrid.
// Så kan vi se dem på siden, og ProductGrid henter alle vores produkter fra JSON filen, og viser dem i et grid.
