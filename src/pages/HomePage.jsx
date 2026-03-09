import "../css/homepage.css";

export default function HomePage() {
  return (
    <>
      <header>
        <h2>Home</h2>
      </header>
      <main>
        <div className="hero">
          <div className="slider-container">
            <div className="slide active slide1"></div>
            <div className="slide slide2"></div>
            <div className="slide slide3"></div>
            <div className="slide slide4"></div>
            <button className="slider-button prev">Previous</button>
            <button className="slider-button next">Next</button>
          </div>
        </div>
      </main>
    </>
  );
}
