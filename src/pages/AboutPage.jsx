import "../css/about.css";
import WhoAreWe from "../assets/whoarewe.png";
import Grafitti from "../assets/aboutgrafitti.svg";
import img1 from "../assets/images/enviroment1.jpg";
import img2 from "../assets/images/enviroment2.jpg";

export default function AboutPage() {
  return (
    <>
      <header className="about-header">
        <img src={WhoAreWe} alt="Who Are We" />
        <img src={Grafitti} alt="Grafitti" />
      </header>
      <main className="about-main">
        <div className="about-content">
          <div className="about-text">
            <h2>environment</h2>
            <p>
              At Control, environmental responsibility is at the core of our
              production philosophy. We prioritize materials and processes that
              reduce environmental impact and promote sustainability. Our
              products are designed to last longer, reducing waste and
              encouraging responsible consumption. By collaborating with
              partners who share our values of recycling and circular
              production, we aim to contribute to a future where fashion and
              environmental care go hand in hand.
            </p>
          </div>
          <div className="about-text">
            <h2>price</h2>
            <p>
              Affordability is important, but it should never come at the
              expense of quality or ethical production. Through strategic
              collaborations and efficient production methods, we strive to
              offer fair prices that make sustainable and high-quality clothing
              accessible to more people. Our goal is to prove that responsible
              fashion can be both affordable and beneficial for the planet.
            </p>
          </div>
          <div className="img-container">
            <img src={img1} alt="enviroment1" />
          </div>
        </div>
        <div className="about-content">
          <div className="img-container">
            <img src={img2} alt="enviroment2" />
          </div>
          <div className="about-text">
            <h2>quality</h2>
            <p>
              Quality is the foundation of everything we produce. We ensure that
              our clothing meets high standards of durability, comfort, and
              design. Each product undergoes thorough testing and quality
              control to guarantee that customers receive items that not only
              look good but also stand the test of time. Good quality means
              fewer replacements and less waste, which benefits both our
              customers and the environment.
            </p>
          </div>
          <div className="about-text">
            <h2>cooperation</h2>
            <p>
              We believe in the power of partnerships. By working together with
              organizations and initiatives that prioritize recycling and
              sustainable production, we can offer products at competitive
              prices without compromising quality. Cooperation allows us to
              innovate, share resources, and support broader efforts to create a
              more sustainable fashion industry.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
