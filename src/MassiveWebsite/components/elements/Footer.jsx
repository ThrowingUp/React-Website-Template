import React from "react";

import { MassiveLogoBlackPurple } from "../../assets/img";

import NewsletterSignUp from "./NewsletterSignUp";
import { footerNavigation } from "../../constants/footerData";
import RenderText from "../../utils/RenderText";
import styles from "../../styles/styles";

const Footer = () => {
  return (
    <div id="footer" className={` relative ${styles.paddingX}`}>
      <NewsletterSignUp />

      <footer className={`relative ${styles.boxWidth} ${styles.horizontalCenter}`} aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        {/* <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">  ${styles.boxWidth} ${styles.horizontalCenter}*/}
        <div className={`pt-24 px-4 xl:px-0`}>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="flex flex-col justify-between">
              <div>
                <div className="space-y-8">
                  <img
                    className="h-7"
                    src={MassiveLogoBlackPurple}
                    alt="Company name"
                  />
                  <p className={`max-w-[330px] ${styles.paragraafSmall}`}>
                    <RenderText content={footerNavigation.slogan} />
                  </p>
                </div>
              </div>

              <div>
                <div className="flex space-x-6">
                  {footerNavigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`${styles.textBase}`}
                    >
                      <span className="sr-only">{item.name}</span>
                      <img src={item.icon} alt="" />
                      {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className={`${styles.headingXl}`}>
                    {footerNavigation.diensten.title}
                  </h3>
                  <ul role="list" className="mt-2 space-y-2">
                    {footerNavigation.diensten.list.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`${styles.textBase}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 md:mt-0">
                  <h3 className={`${styles.headingXl}`}>
                    {footerNavigation.kennisbank.title}
                  </h3>
                  <ul role="list" className="mt-2 space-y-2">
                    {footerNavigation.kennisbank.list.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`${styles.textBase}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className={`${styles.headingXl}`}>
                    {footerNavigation.documentatie.title}
                  </h3>
                  <ul role="list" className="mt-2 space-y-2">
                    {footerNavigation.documentatie.list.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`${styles.textBase}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className={`${styles.headingXl}`}>
                    {footerNavigation.handigeLinks.title}
                  </h3>
                  <ul role="list" className="mt-2 space-y-2">
                    {footerNavigation.handigeLinks.list.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`${styles.textBase}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8">
          {/* <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"> */}
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
        {/*   */}
        <div className={`bg-gray-50 w-full 2xl:w-[110%] 2xl:left-[-5%] mx-4 rounded-t-4xl ${styles.borderInsetWhite}  ${styles.horizontalCenter} absolute h-full top-0 -z-10 `}></div>
      </footer>


      <div className={`absolute w-[95%] h-full bg-gray-100 top-0 -z-20 left-[2.5%]`}></div>

    </div>
  );
};

export default Footer;
