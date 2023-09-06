import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Import Utilities
import styles from "../../styles";
import RenderText from "../../utils/RenderText";

// Import Assets
import { logoSmall } from "../../assets/img";

const CatagoriesServices = ({data = []}) => {
  const activeDienstIndexShownFirst = 0;
  const [activeDienstIndex, setActiveDienstIndex] = useState(
    activeDienstIndexShownFirst
  );
  useEffect(() => {
    setActiveDienstIndex(activeDienstIndexShownFirst);
  }, []);

  return (
    <>


      <div
        className={`z-30 bg-white rounded-4xl p-4 lg:p-12 2xl:p-24 ${styles.boxWidth} `}
      >
        <h2
          className={`${styles.heading2} ${styles.horizontalCenter} max-w-3xl text-center mb-7`}
        >
          <RenderText content={data[0].heading} />
        </h2>

        {/* list items */}
        <div className={`${styles.flexCenter} gap-4 xl:gap-8 flex-wrap`}>
          {data[0].diensten.map((dienst, index) => (
            <div
              className={`px-7 py-2 xl:px-13.5 xl:py-3.5 rounded-full cursor-pointer
                ${styles.borderInsetWhite}
            shadow-sm
            text-base leading-6 font-semibold ${
              activeDienstIndex === index
                ? "bg-purple-100 text-indigo-400"
                : "bg-gray-100 text-gray-500"
            }`}
              key={index}
              onClick={() => setActiveDienstIndex(index)}
            >
              {dienst.buttonText}
            </div>
          ))}
        </div>

        {/* Item contents */}
        {data[0].diensten.map((dienst, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 gap-8 xl:gap-16
            xl:grid-cols-2 mt-12 xl:mt-24 ${
              activeDienstIndex === index ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-6 xl:max-w-lg">
              <div className="flex gap-3">
                <img src={logoSmall} alt="logo" />
                <p className="text-[12px] sm:text-sm leading-4">
                  {dienst.topText.map((textObj, textIndex) => (
                    <span key={textIndex} className={`${textObj.className}`}>
                      {textObj.content}
                    </span>
                  ))}
                </p>
              </div>

              <div className="relative">
                <h2 className={`${styles.heading2} `}>
                  <RenderText content={dienst.heading} />
                </h2>
                <div className=" absolute w-2 xl:w-4 h-[100%] bg-gray-700 left-[-1rem] lg:left-[-3rem] md 2xl:left-[-6rem] top-0 rounded-tr-md rounded-br-md"></div>
              </div>

              <p className={`${styles.paragraaf} `}>
                <RenderText content={dienst.text} />
              </p>

              <div
                className={`${styles.verticalCenter} flex flex-col xl:flex-row gap-4`}
              >
                <NavLink
                  to={`${dienst.cta2Slug}`}
                  exact
                  className={`${styles.borderInsetWhite}  px-8 py-3 bg-gray-50 w-fit rounded-lg shadow text-gray-500 text-base leading-6 font-semibold`}
                >
                  {dienst.cta1Text}
                </NavLink>
                <NavLink
                  to={`${dienst.cta2Slug}`}
                  exact
                  className={`px-8 py-3 bg-indigo-500 w-fit rounded-lg shadow text-gray-200 text-base leading-6 font-semibold`}
                >
                  {dienst.cta2Text}
                </NavLink>
              </div>
            </div>
            <img
              className="max-w-xl w-full  ml-auto mr-auto xl:mr-0 "
              src={dienst.img}
              alt={dienst.id}
            />
          </div>
        ))}
        <div></div>
      </div>
    </>
  );
};

export default CatagoriesServices;
