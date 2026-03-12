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

// Den her er dejlig nem
// Vi importerer vores 2 components.
// Hero og HeroContent
// Så kan vi se dem på siden, og HeroContent har 2 billeder, som linker til vores products side, og Hero er bare et stort banner med et billede.
