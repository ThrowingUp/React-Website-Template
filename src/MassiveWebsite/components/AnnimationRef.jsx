// <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js" integrity="sha512-jEnuDt6jfecCjthQAJ+ed0MTVA++5ZKmlUcmDGBv2vUI/REn6FuIdixLNnQT+vKusE2hhTk2is3cFvv5wA+Sgg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
// npm install --save @lottiefiles/react-lottie-player

import React, { useEffect, useRef } from "react";
import animationData from './assets/animations/test.json';
import { ReactComponent as Logo } from "../../../assets/img/homeWebshop.svg";

const AnnimationRef = () => {
  const animatedElRef = useRef(null);
  const lottieAnimationRef = useRef(null);
  const buttonRef = useRef(null); // Ref voor de knop
  console.log("Seo component wordt gerenderd");

  useEffect(() => {
    if (animatedElRef.current) {
      const animation = lottie.loadAnimation({
        container: animatedElRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: animationData
      });
      lottieAnimationRef.current = animation;
    }

    const handleScroll = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        if (rect.bottom < 0) { // De knop is boven het zichtbare gebied
          lottieAnimationRef.current.play();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePlayClick = () => {
    if (lottieAnimationRef.current) {
      lottieAnimationRef.current.goToAndStop(0, true);// Zet de animatie terug naar het begin
      lottieAnimationRef.current.play();// Start de animatie
    }
  };

  return (
    <div>
      seop
      <Logo />
      <div style={{height: 100}}></div>
      <button ref={buttonRef} onClick={handlePlayClick}>Play me</button>
      <figure>
        <div ref={animatedElRef} className="animatedName"></div>
        <figcaption>
          <p className="counter">test</p>
          <p>test1</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default AnnimationRef;
