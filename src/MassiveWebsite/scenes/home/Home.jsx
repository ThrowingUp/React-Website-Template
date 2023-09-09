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
import { ReactComponent as Group94 } from "../../assets/img/group94.svg"
import { ReactComponent as Group94Left } from "../../assets/img/group94Left.svg";
import { ReactComponent as GrindBackground } from "../../assets/img/gridBackground.svg";

const Home = () => {


  return (
    <>

      <div className="relative bg-white rounded-b-4xl md:bg-transparent">
        <Navbar />
        <Hero data={HeroData} />
        <div className="absolute md:w-[90%] left-[5%] top-0 -z-10 md:h-full bg-white rounded-b-4xl border-solid border-white border-3 shadow-lg"></div>
        <div className="absolute bottom-[-16px] w-full h-[50%] -z-20 rounded-b-4xl custom-bg-gradient md:w-[90%] md:left-[5%] md:h-[130%]"></div>
        <div className={`absolute bottom-[-34px] w-full h-full -z-30 bg-secondary-100 rounded-b-4xl md:bottom-[-69px] md:w-[95%] md:left-[2.5%]  md:h-[230%] md:border-solid md:border-white md:border-3`}></div>
      </div>

      <AllInOne data={AllInOneData} />
      <Visie data={VisieData} />
      <div className="md:relative overflow-x-clip">
        <OverOns data={OverOnsData} />
      </div>
      <div>
        <CatagoriesServices data={CatagoriesServecesData} />

      </div>
      {/* <LatestDevelopments data={LatestDevelopmentsData} /> */}


      <div className=" h-96">

      </div>
      <Footer />
    </>
  );
};

export default Home;
