import React, { useState } from "react";
import "../css/hero.css";
import { Link } from "react-router";
import arrowLeft from "../assets/components/arrow-left.svg";
import arrowRight from "../assets/components/arrow-right.svg";

export default function Hero() {
  const slideClasses = ["slide1", "slide2", "slide3", "slide4"];

  const [activeSlide, setActiveSlide] = useState(0);

  function nextSlide() {
    // updater receives current index `s` and returns the next index using if
    setActiveSlide(function (slide) {
      // hvis vi er på sidste slide, gå til 0 ellers +1
      if (slide === slideClasses.length - 1) {
        return 0;
      }
      return slide + 1;
    });
  }

  function prevSlide() {
    // updater receives current index `s` and returns the previous index using if
    setActiveSlide(function (slide) {
      // hvis vi er på første slide, gå til sidste ellers -1
      if (slide === 0) {
        return slideClasses.length - 1;
      }
      return slide - 1;
    });
  }

  return (
    <>
      <main>
        <div className="hero">
          <div className="slider-container">
            {slideClasses.map((className, index) => (
              <div
                key={className}
                className={`slide ${className} ${index === activeSlide ? "active" : ""}`}
              />
            ))}
            <div className="slider-controls">
              <button
                className="slider-button prev"
                onClick={prevSlide}
                aria-label="Previous"
              >
                <span className="prev-arrow">
                  <img src={arrowLeft} alt="Previous" />
                </span>
              </button>
              <div className="hero-button">
                <h5>spring collection</h5>
                <Link to="/products">
                  <button className="whitebutton">
                    <h5>shop now</h5>
                  </button>
                </Link>
              </div>

              <button
                className="slider-button next"
                onClick={nextSlide}
                aria-label="Next"
              >
                <span className="next-arrow">
                  <img src={arrowRight} alt="Next" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
