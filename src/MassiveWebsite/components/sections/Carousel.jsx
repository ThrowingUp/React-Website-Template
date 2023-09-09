import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Card } from "..";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextItem(),
    onSwipedRight: () => prevItem(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  const getVisibleItems = (index) => {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) { // md to xl breakpoints
        return [items[index], items[(index + 1) % items.length]];
    }
    return [items[index], items[(index + 1) % items.length], items[(index + 2) % items.length]];
};


  return (
    <div className="relative">
      {/* Desktop */}
      {/* Next and Prev button as SVG */}
      <svg
        onClick={prevItem}
        className="hidden md:block absolute top-1/2 left-[-12.5%] transform -translate-y-1/2 z-10 p-2 hover:bg-opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        width="105"
        height="104"
        viewBox="0 0 105 104"
        fill="none"
      >
        <g filter="url(#filter0_dd_1504_2411)">
          <circle
            cx="52.474"
            cy="42"
            r="40"
            transform="rotate(-180 52.474 42)"
            fill="#F9FAFB"
          />
          <circle
            cx="52.474"
            cy="42"
            r="38.5"
            transform="rotate(-180 52.474 42)"
            stroke="white"
            strokeWidth="3"
          />
        </g>
        <path
          d="M42.5255 40.7626C41.8421 41.446 41.8421 42.554 42.5255 43.2374L53.6624 54.3744C54.3459 55.0578 55.4539 55.0578 56.1373 54.3744C56.8207 53.691 56.8207 52.5829 56.1373 51.8995L46.2378 42L56.1373 32.1005C56.8207 31.4171 56.8207 30.309 56.1373 29.6256C55.4539 28.9422 54.3459 28.9422 53.6624 29.6256L42.5255 40.7626ZM44.3177 40.25L43.7629 40.25L43.7629 43.75L44.3177 43.75L44.3177 40.25Z"
          fill="#4B5563"
        />
        <defs>
          <filter
            id="filter0_dd_1504_2411"
            x="0.473999"
            y="0"
            width="104"
            height="104"
            filterUnits="userSpaceOnUse"
            ilorfnterpolationfilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_1504_2411"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1504_2411"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_1504_2411"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1504_2411"
              result="effect2_dropShadow_1504_2411"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1504_2411"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        onClick={nextItem}
        className="hidden md:block absolute top-1/2 right-[-12.5%] transform -translate-y-1/2 z-10 p-2 hover:bg-opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        width="105"
        height="100"
        viewBox="0 0 105 100"
        fill="none"
      >
        <g filter="url(#filter0_dd_1504_2412)">
          <ellipse
            cx="52.5259"
            cy="39.6471"
            rx="40"
            ry="37.6471"
            fill="#F9FAFB"
          />
          <path
            d="M91.0259 39.6471C91.0259 59.5262 73.8758 75.7941 52.5259 75.7941C31.1759 75.7941 14.0259 59.5262 14.0259 39.6471C14.0259 19.768 31.1759 3.5 52.5259 3.5C73.8758 3.5 91.0259 19.768 91.0259 39.6471Z"
            stroke="white"
            strokeWidth="3"
          />
        </g>
        <path
          d="M62.4758 40.8859C63.1593 40.2025 63.1593 39.0944 62.4758 38.411L51.3389 27.2741C50.6555 26.5907 49.5475 26.5907 48.864 27.2741C48.1806 27.9575 48.1806 29.0655 48.864 29.7489L58.7635 39.6484L48.864 49.5479C48.1806 50.2313 48.1806 51.3394 48.864 52.0228C49.5475 52.7062 50.6555 52.7062 51.3389 52.0228L62.4758 40.8859ZM60.6836 41.3984H61.2384V37.8984H60.6836V41.3984Z"
          fill="#4B5563"
        />
        <defs>
          <filter
            id="filter0_dd_1504_2412"
            x="0.525879"
            y="0"
            width="104"
            height="99.2939"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_1504_2412"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1504_2412"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_1504_2412"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1504_2412"
              result="effect2_dropShadow_1504_2412"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1504_2412"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div className="hidden md:flex gap-7 relative">
        {getVisibleItems(currentIndex).map((item, index) => (
          <div
            key={index}
            className={`${
              index < 2 ? "pr-7 border-r border-gray-200  " : ""
            }`}
          >
            <Card data={item} />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden" {...handlers}>
        <Card data={items[currentIndex]} />
      </div>

      {/* Indicator dots for both mobile and desktop */}
      <div className="flex mt-2 justify-center absolute bottom-[-5%] left-1/2">
        {items.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-gray-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
