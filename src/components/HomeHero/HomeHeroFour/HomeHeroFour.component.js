import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Hero } from "./HomeHeroFour.styles";

const HomeHeroFour = () => {
  return (
    <Hero>
      <StaticImage
        placeholder="blurred"
        src="../../../assets/images/hulky-background.png"
        alt="Hulk Smashbox Comics"
        className="hulk-bg"
      />
      <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
      <div className="image-wrap">
        <StaticImage
          placeholder="blurred"
          src="../../../assets/images/hero-hulk.png"
          alt="Hulk Smashbox Comics"
        />
      </div>
    </Hero>
  );
};

export default HomeHeroFour;
