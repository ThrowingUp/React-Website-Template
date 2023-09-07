import React from "react";
import {
  Navbar,
  LatestDevelopments,
  CatagoriesServices,
  Footer,
  Carousel,
} from "../../components";

import Hero from "./Hero";
import AllInOne from "./AllInOne";
import Visie from "./Visie";
import OverOns from "./OverOns";

import styles from "../../styles/styles";
import { blogCardsData, CatagoriesServecesData, LatestDevelopmentsData, HeroData, AllInOneData, VisieData, OverOnsData } from "./data";

// Import SVG as Components
import {ReactComponent as Group94 } from "../../assets/img/group94.svg"
import { ReactComponent as Group94Left } from "../../assets/img/group94Left.svg";
import { ReactComponent as GrindBackground } from "../../assets/img/gridBackground.svg";

const Home = () => {


  return (
    <>
      <Navbar />

      <Hero data={HeroData}/>
      <AllInOne data={AllInOneData} />
      <Visie data={VisieData} />
      <OverOns data={OverOnsData} />
      

      <div className=" h-96">

      </div>
      <Footer />
    </>
  );
};

export default Home;
