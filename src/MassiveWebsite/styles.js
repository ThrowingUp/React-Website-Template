const styles = {
    boxWidth: "xl:max-w-[1536px] w-full",
  
    // heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    // paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    
    horizontalCenter: "ml-auto mr-auto",
    verticalCenter: "mt-auto mb-auto",

    paddingX: "sm:px-16 px-3",
    paddingY: "sm:py-16 py-3",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    borderInsetWhite: " border-solid border-white border-1.5", 

    heading1: " ",
    heading2: "font-inter text-2xl md:text-4xl leading-7 md:leading-10 font-bold text-gray-700",
    paragraaf: "font-inter text-sm md:text-base md:leading-6 font-medium text-gray-600",
    paragraafSmall: "text-sm leading-5 font-medium text-gray-500"

  };
  
  export const layout = {
    // section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;