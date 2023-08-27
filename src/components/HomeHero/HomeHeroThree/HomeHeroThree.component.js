import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Hero } from "./HomeHeroThree.styles";

const HomeHeroThree = () => {
  return (
    <Hero>
      <StaticImage
        placeholder="blurred"
        src="../../../assets/images/webs.png"
        alt="webs"
        className="webs"
      />
      <div className="image-wrap">
        <StaticImage
          placeholder="blurred"
          src="../../../assets/images/hero-spiderman.png"
          alt="Spider-Man Smashbox Comics"
        />
      </div>
    </Hero>
  );
};

export default HomeHeroThree;
