import React from "react";
import { Navbar } from "../../components";

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
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Content</div>
      </div>
    </>
  );
};

export default Home;
