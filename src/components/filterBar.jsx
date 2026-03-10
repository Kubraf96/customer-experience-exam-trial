import "../css/filterbar.css";

export default function Filterbar() {
  return (
    <div className="filterbar">
      <select className="filterbar-sort">
        <option value="">Sort by</option>
        <option value="newest">Newest</option>
        <option value="newest">Recommended</option>
        <option value="low-high">Lowest price</option>
        <option value="high-low">Highest price</option>
      </select>

      <select classname="filterbar-filters">
        <option value="">Filters</option>
        <option value="color">Size</option>
        <option value="size">Colour</option>
        <option value="price">Brand</option>
        <option value="price">Material</option>
        <option value="price">Fit</option>
      </select>
    </div>
  );
}
