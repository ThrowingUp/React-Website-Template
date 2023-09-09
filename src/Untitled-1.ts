{/* Hero */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>

      {/* Page Content */}


      <section
        className={` bg-gray-50 relative pb-14 ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className=" h-7"></div>
        {/* Gray bg */}
        <div
          className={`bg-gray-100 w-[95%] h-[35%] absolute bottom-0 rounded-tr-4xl rounded-tl-4xl border-t-1.5 border-r-1.5 border-l-1.5 border-solid border-white`}
        ></div>
        {/* Absolute items */}
        <Group94 className="absolute bottom-[0] right-0" />
        <Group94Left className="absolute top-0 left-0" />
        <GrindBackground className="absolute bottom-[-35%] w-[100%] z-20" />
        <CatagoriesServices data={CatagoriesServecesData} />
      </section>



      <section
        className={`${styles.paddingX} ${styles.flexStart} relative z-10`}
      >
        <LatestDevelopments data={LatestDevelopmentsData} />
      </section>



      <section className={`${styles.paddingX} ${styles.flexStart} relative`}>
        {/* Gray bg */}
        <div className="absolute bg-gray-100 w-[95%] h-full"></div>
        <div
          className={`relative p-4 lg:p-12 2xl:p-16 ${styles.boxWidth} bg-gray-50 rounded-3xl ${styles.borderInsetWhite} w-full`}
        >
          <Carousel items={blogCardsData} />
        </div>
      </section>
