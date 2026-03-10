import Hero from "../components/hero";
import HeroContent from "../components/heroContent";
import "../css/HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <HeroContent />
    </div>
  );
}
