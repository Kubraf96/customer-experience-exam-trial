import Product from "./Product";
import products from "../data/products.json";

export default function ProductGrid() {
  return (
    <section className="product-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}
