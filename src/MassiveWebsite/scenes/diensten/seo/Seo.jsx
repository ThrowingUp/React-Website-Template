import React from "react";
import { ReactComponent as Logo } from "../../../assets/img/homeWebshop.svg";
import { OpenAiTextCompletion, Carousel } from "../../../components";

import styles from "../../../styles/styles";
import "../../../styles/personaStyles.css"

const Seo = () => {
  return (
    <div>
      seop
      {/* <Logo /> */}
      <section className={` bg-gray-50 relative pb-14 ${styles.paddingX} ${styles.flexStart} personaSection`}>

      <OpenAiTextCompletion />

      </section>

    </div>
  );
};

export default Seo;
