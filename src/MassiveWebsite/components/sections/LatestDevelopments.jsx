import React, { useState } from "react";

import ReactDOMServer from "react-dom/server";
import RenderText from "../../utils/RenderText.jsx";
import useTooltip from "../../hooks/useTooltip";

import styles from "../../styles/styles.js";

const LatestDevelopments = ({ data = []}) => {
  const getContent = (reference) => {
    const dataIndex = reference.dataset.index;
    const iconIndex = reference.dataset.iconindex;
    const tooltipContent =
      data[dataIndex].icons[iconIndex].tooltip;
    return ReactDOMServer.renderToString(
      <RenderText content={tooltipContent} />
    );
  };

  useTooltip(".tooltip", getContent);

  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <>
      <div className="absolute w-[95%] bg-gray-100 h-[100%] border-r-1.5 border-l-1.5 border-solid border-white  "></div>
      <div className="z-10 pt-40">
        <h2 className={`${styles.heading2} ${styles.horizontalCenter} max-w-3xl text-center mb-7`} >
          <RenderText content={data[0].heading} />
        </h2>
        <p className={`${styles.paragraafSmall} ${styles.horizontalCenter} max-w-3xl text-center mb-10`} >
          <RenderText content={data[0].text} />
        </p>
        <div className={`grid grid-cols-7 gap-2 sm:gap-6 md:gap-10 lg:gap-14 px-6 py-4 bg-gray-200 rounded-2xl w-fit outline-1 outline-white shadow-inner ${styles.horizontalCenter}`} >
          {data.map((data, dataIndex) =>
            data.icons.map((icon, iconIndex) => (
              <img
                key={icon.id}
                className={`tooltip-icon tooltip w-12 sm:w-16  lg:w-28 aspect-square ${
                  hoveredIcon === iconIndex
                    ? "LatestDevelopmentsIconHover"
                    : "LatestDevelopmentsIcon"
                }`}
                // change icon source based upone over of the icon
                src={hoveredIcon === iconIndex ? icon.iconColor : icon.icon}
                alt={icon.alt}
                data-index={dataIndex}
                data-iconindex={iconIndex}
                onMouseEnter={() => setHoveredIcon(iconIndex)}
                onMouseLeave={() => setHoveredIcon(null)}
              />
            ))
          )}
        </div>
      </div>
      </>
  );
};

export default LatestDevelopments;
