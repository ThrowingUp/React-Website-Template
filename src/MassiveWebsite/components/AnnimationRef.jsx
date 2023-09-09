// <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js" integrity="sha512-jEnuDt6jfecCjthQAJ+ed0MTVA++5ZKmlUcmDGBv2vUI/REn6FuIdixLNnQT+vKusE2hhTk2is3cFvv5wA+Sgg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
// npm install --save @lottiefiles/react-lottie-player

import React, { useEffect, useRef } from "react";
import animationData from '../assets/animations/test.json';

const AnnimationRef = () => {
  const animatedElRef = useRef(null);
  const lottieAnimationRef = useRef(null);

  const elementRef = useRef(null);
 
  // Use Selected Element for Past Scroll
  useEffect(() => {
    if (animatedElRef.current) {
      // Settings 
      const animation = lottie.loadAnimation({
        container: animatedElRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: animationData,
        speed: 1
      });
      lottieAnimationRef.current = animation;
    }

      // Play animation when scrolled past element 
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (rect.bottom < 0) {
          lottieAnimationRef.current.play();
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  // Use Button to Play
  const handlePlayClick = () => {
    if (lottieAnimationRef.current) {
      lottieAnimationRef.current.goToAndStop(0, true);// Zet de animatie terug naar het begin
      lottieAnimationRef.current.play();// Start de animatie
    }
  };

  return (
    <div>
      {/* Button play Animation */}
      <button ref={elementRef} onClick={handlePlayClick}>Play me</button>

      {/* Canvas for Animation */}
      <div ref={animatedElRef} className="animatedName"></div>
    </div>
  );
};

export default AnnimationRef;
