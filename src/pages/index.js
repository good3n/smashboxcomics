import React from "react";
import Layout from "../components/Layout";
import { Header } from "../components/Header";
import { HomeHeroOne } from "../components/HomeHero/HomeHeroOne";
import { HomeHeroTwo } from "../components/HomeHero/HomeHeroTwo";
import { HomeHeroThree } from "../components/HomeHero/HomeHeroThree";
import { HomeHeroFour } from "../components/HomeHero/HomeHeroFour";

const IndexPage = () => {
  const heroes = [
    <HomeHeroOne />,
    <HomeHeroTwo />,
    <HomeHeroThree />,
    <HomeHeroFour />,
  ];

  return (
    <Layout>
      <Header variant="home" />
      {heroes[Math.floor(Math.random() * heroes.length)]}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
