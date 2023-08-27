import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Hero } from "./HomeHeroTwo.styles";

const HomeHeroTwo = () => {
  return (
    <Hero>
      <div class="space stars1"></div>
      <div class="space stars2"></div>
      <div class="space stars3"></div>
      <div className="image-wrap">
        <StaticImage
          placeholder="blurred"
          src="../../../assets/images/hero-thanos.png"
          alt="Thor"
        />
      </div>
    </Hero>
  );
};

export default HomeHeroTwo;
