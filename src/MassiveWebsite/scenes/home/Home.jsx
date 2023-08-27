import React from "react";
import {
  Navbar,
  LatestDevelopments,
  CatagoriesServices,
} from "../../components";

import styles from "../../styles";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>

      {/* Page Content */}
      <div className="bg-gray-50">
        <div className=" h-7"></div>
        <CatagoriesServices />
        <LatestDevelopments />
      </div>
    </>
  );
};

export default Home;
