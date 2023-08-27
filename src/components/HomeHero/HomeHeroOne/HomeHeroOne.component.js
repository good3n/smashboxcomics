import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Hero } from "./HomeHeroOne.styles";

const HomeHeroOne = () => {
  return (
    <Hero>
      <StaticImage
        placeholder="blurred"
        src="../../../assets/images/rainbow-road.png"
        alt="Thor"
        className="rainbow-road"
      />
      <div className="image-wrap">
        <StaticImage
          placeholder="blurred"
          src="../../../assets/images/hero-thor.png"
          alt="Thor"
        />
      </div>
    </Hero>
  );
};

export default HomeHeroOne;
