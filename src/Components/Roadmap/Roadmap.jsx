import React, { useState } from "react";
// import { IoPlayBack, IoPlayForward } from "react-icons/io5";
import { GrCaretPrevious,GrCaretNext  } from "react-icons/gr";

import Men1 from "../../images/Men1.png";
import Men2 from "../../images/Men2.png";
import Men3 from "../../images/Men3.png";
import Men4 from "../../images/Men4.png";
// import Roadmapbg from "../../images/roadmapbg.png";
import RoadmapVideo from "../../Video/RoadmapVideo.mp4";
import roadmapline from "../../icons/roadmapline.png";
import roadmapsvg from "../../icons/roadmapsvg.png";

const Roadmap = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=" Roadmap bg-black h-auto overflow-x-hidden relative">
      {/* images */}
      <div className="hidden xl:block">
      <div className="absolute 
       w-full flex flex-col gap-0 justify-center">

        <div className="  stepsvg1 ">
        <img src={roadmapsvg} alt="" />
        </div>
        <div className="stepline1">
        <img src={roadmapline} alt="" />
        </div>
      </div>

      <div className="absolute  w-full  flex flex-col
       gap-0  justify-center">
        <div className="stepsvg2">
        <img src={roadmapsvg} alt="" />
        </div>
        <div className="stepline2">
        <img src={roadmapline} alt="" />
        </div>
      </div>

      <div className="absolute w-full  flex flex-col
       gap-0  justify-center">
        <div className="stepsvg3">
        <img src={roadmapsvg} alt="" />
        </div>
        <div className="stepline3">
        <img src={roadmapline} alt="" />
        </div>
      </div>
      
      <div className="absolute stepsvg4">
        <img src={roadmapsvg} alt="stepsvg4" />
        </div>
      </div>


      <div className="max-w-[1200px] mx-auto pt-8 md:pt-20 flex flex-col gap-10 px-4 ">
        {/* side line */}
        {/* <div className="">
      <div className="absolute  mt-[20%] xl:mt-[15%] xl:left-[10%] left-[3%] w-full  flex flex-col
       gap-0  justify-center">
        <div className=" ml-[-1%]">
        <img src={roadmapsvg} alt="" />
        </div>
        <div className="">
        <img src={roadmapline} alt="" />
        </div>
      </div>

      <div className="absolute mt-[45%] xl:mt-[35%]  left-[3%] xl:left-[10%] w-full  flex flex-col
       gap-0  justify-center">
        <div className="ml-[-1%]">
        <img src={roadmapsvg} alt="" />
        </div>
        <div className="">
        <img src={roadmapline} alt="" />
        </div>
      </div>

      <div className="absolute mt-[70%] xl:mt-[56%] left-[3%] xl:left-[10%] w-full  flex flex-col
       gap-0  justify-center">
        <div className="ml-[-1%]">
        <img src={roadmapsvg} alt="" />
        </div>
        <div className="">
        <img src={roadmapline} alt="" />
        </div>
      </div>
      
      <div className="ml-[-5%] mt-[96%] xl:mt-[77%] absolute">
        <img src={roadmapsvg} alt="" />
        </div>
      </div> */}

        <div className="flex flex-col gap-2 md:gap-4">
          <h1
            className="font-zen text-[30px] md:text-[50px] font-normal leading-[100%] tracking-[0%]
       text-center text-[var(--color-text)]"
          >
            Road<span className="text-[var(--color-primary)]">map</span>
          </h1>
          <p
            className="text-[14px] md:text-[24px] font-normal leading-[100%] tracking-[0%] 
      text-[var(--color-text)] text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel aspernatur?
          </p>
        </div>

        {/* main roadmap */}
        <div className="bg-black">
          {currentPage === 0 && (
            <>
              {/* phase 1 */}
              <div className="relative w-full z-10 mt-20">
                <div
                  className="bg-[var(--color-secondary)] sm:max-w-[300px] lg:max-w-[562px] md:max-w-[420px] h-[57px] 
          flex items-center w-full"
                >
                  <p
                    className="font-zen font-normal text-[20px] leading-[100%] tracking-[0%] 
            text-[var(--color-primary)] justify-center ml-5  "
                  >
                    Phase - I
                  </p>
                </div>

                <div className="absolute -z-10 hidden sm:block right-0 md:right-12 lg:right-35 top-[-114px] max-w-[338px] h-[484px] ">
                  <video
                    src={RoadmapVideo}
                    autoPlay
                    muted
                    loop
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>

                <div
                  className="hidden sm:block absolute z-22 right-4 md:right-16 lg:right-40 top-[-105px] max-w-[306px] h-[358px]
           "
                >
                  <img src={Men1} alt="" />
                </div>
                <div
                  className="max-w-[1248px] h-[140px] bg-[var(--color-primary)]
          top-[248px] left-0 right-0 mt-5 sm:mt-14 flex items-center px-22 z-32"
                >
                  <ul class="list-disc font-normal text-[18px] sm:text-[20px] leading-[100%]
               tracking-[0%] text-[var(--color-text)]">
                    <li>Goal Defining</li>
                    <li>Market Research</li>
                    <li>Whitepaper v1</li>
                    <li>Initial Funding Secured</li>
                  </ul>
                </div>
              </div>

              {/* phase 2 */}
              <div className="relative w-full z-12 mt-20 sm:mt-[139px]">
                <div
                  className="bg-[var(--color-secondary)] w-full sm-:max-w-[300px] lg:max-w-[562px] md:max-w-[417px] h-[57px] 
          flex items-center md:ml-80 lg:ml-95 sm:ml-70 ml-0"
                >
                  <p
                    className="font-zen font-normal text-[20px] leading-[100%] tracking-[0%] 
            text-[var(--color-primary)] justify-center ml-5 "
                  >
                    Phase - II
                  </p>
                </div>

                <div className="absolute hidden sm:block  -z-12 left-[13px] md:left-[20px] top-[-120px] max-w-[338px] h-[338px] ">
                  <video
                    src={RoadmapVideo}
                    autoPlay
                    muted
                    loop
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>

                <div
                  className="hidden sm:block absolute z-22 left-5 md:left-8 top-[-23px] lg:top-[-53px]
                   md:top-[-23px] max-w-[306px] h-[358px]
           "
                >
                  <img src={Men2} alt="" />
                </div>
                <div
                  className="max-w-[1248px] h-[170px] md:h-[170px] lg:h-[140px] bg-[var(--color-primary)]
          top-[248px] left-0 right-0 sm:mt-14 mt-5 flex items-center px-22 z-32"
                >
                  <ul class="list-disc font-normal text-[18px] sm:text-[20px] leading-[100%]
               tracking-[0%] text-[var(--color-text)] md:ml-[330px] sm:ml-[260px] ">
                    <li>AI Generative System Development </li>
                    <li>Early AI Generative System Testing</li>
                    <li>Preparing for NFT Mask Collection Launch</li>
                    <li>Website launch V1</li>
                    <li>Whitelisting</li>
                  </ul>
                </div>
              </div>

              {/* phase 3 */}
              <div className="relative w-full z-12 mt-20 sm:mt-[139px]">
                <div
                  className="bg-[var(--color-secondary)] sm:max-w-[300px] lg:max-w-[562px] md:max-w-[420px] h-[57px] 
          flex items-center w-full"
                >
                  <p
                    className="font-zen font-normal text-[20px] leading-[100%] tracking-[0%] 
            text-[var(--color-primary)] justify-center ml-5 "
                  >
                    Phase - III
                  </p>
                </div>

                <div className="absolute -z-12 hidden sm:block  right-0 md:right-12 lg:right-35 top-[-114px] max-w-[338px] h-[338px] ">
                  <video
                    src={RoadmapVideo}
                    autoPlay
                    muted
                    loop
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>

                <div
                  className=" hidden sm:block absolute z-22 right-4 md:right-16 lg:right-40  top-[-53px] max-w-[306px] h-[358px]
           "
                >
                  <img src={Men3} alt="" />
                </div>
                <div
                  className="max-w-[1248px] h-[170px] sm:h-[140px] bg-[var(--color-primary)]
          top-[248px] left-0 right-0 mt-5 sm:mt-14 flex items-center px-22 z-32"
                >
                  <ul class="list-disc font-normal text-[18px] sm:text-[20px] leading-[100%]
               tracking-[0%] text-[var(--color-text)]">
                    <li> NFT Minting</li>
                    <li>3dotlink NFT Collection Launch</li>
                    <li>Active Marketing Campaigns</li>
                    <li>Community Engagement Initiatives</li>
                    <li>3dotlink Marketplace Launch</li>
                  </ul>
                </div>
              </div>

              {/* phase 4*/}
              <div className="relative w-full z-12 mt-20 sm:mt-[139px]">
                <div
                  className="bg-[var(--color-secondary)] w-full sm-:max-w-[300px] lg:max-w-[562px] md:max-w-[417px] h-[57px] 
          flex items-center md:ml-80 lg:ml-95 sm:ml-70 ml-0"
                >
                  <p
                    className="font-zen font-normal text-[20px] leading-[100%] tracking-[0%] 
            text-[var(--color-primary)] justify-center ml-5 "
                  >
                    Phase - IV
                  </p>
                </div>

                <div className="absolute -z-12 hidden sm:block  left-[8px] md:left-[20px] top-[-120px] max-w-[338px] h-[338px] ">
                  <video
                    src={RoadmapVideo}
                    autoPlay
                    muted
                    loop
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>

                <div
                  className=" hidden sm:block absolute z-22 left-5 md:left-8 top-[-53px] max-w-[306px] h-[358px]
           "
                >
                  <img src={Men4} alt="" />
                </div>
                <div
                  className="max-w-[1248px] h-[140px] bg-[var(--color-primary)]
          top-[248px] left-0 right-0 mt-5 sm:mt-14 flex items-center px-22 z-32"
                >
                  <ul class="list-disc font-normal text-[18px] sm:text-[20px] leading-[100%]
               tracking-[0%] text-[var(--color-text)]  sm:ml-[260px] md:ml-[330px] ">
                    <li>Collaborations & Partnerships</li>
                    <li>Enhanced AI Generative System</li>
                    <li>Global Outreach Marketing</li>
                    <li>Stacking</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {currentPage === 1 && (
            <>
              {/* phase 5 */}
              <div className="relative w-full z-12 mt-20 ">
                <div
                  className="bg-[var(--color-secondary)] sm:max-w-[300px] lg:max-w-[562px] md:max-w-[420px] h-[57px] 
          flex items-center w-full"
                >
                  <p
                    className="font-zen font-normal text-[20px] leading-[100%] tracking-[0%] 
            text-[var(--color-primary)] justify-center ml-5 "
                  >
                    Phase - V
                  </p>
                </div>

                <div className="absolute -z-12 hidden sm:block  right-0 md:right-12 lg:right-35 top-[-114px] max-w-[338px] h-[338px] ">
                  <video
                    src={RoadmapVideo}
                    autoPlay
                    muted
                    loop
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>

                <div
                  className=" hidden sm:block absolute z-22 right-4 md:right-16 lg:right-40  top-[-53px] max-w-[306px] h-[358px]
           "
                >
                  <img src={Men3} alt="" />
                </div>
                <div
                  className="max-w-[1248px] h-[170px] sm:h-[140px] bg-[var(--color-primary)]
          top-[248px] left-0 right-0 mt-5 sm:mt-14 flex items-center px-22 z-32"
                >
                  <ul class="list-disc font-normal text-[18px] sm:text-[20px] leading-[100%]
               tracking-[0%] text-[var(--color-text)]">
                    <li> NFT Minting</li>
                    <li>3dotlink NFT Collection Launch</li>
                    <li>Active Marketing Campaigns</li>
                    <li>Community Engagement Initiatives</li>
                    <li>3dotlink Marketplace Launch</li>
                  </ul>
                </div>
              </div>

              {/* phase 6 */}
              <div className="relative w-full z-12 mt-20 sm:mt-[139px]">
                <div
                  className="bg-[var(--color-secondary)] w-full sm-:max-w-[300px] lg:max-w-[562px] md:max-w-[417px] h-[57px] 
          flex items-center md:ml-80 lg:ml-95 sm:ml-70 ml-0"
                >
                  <p
                    className="font-zen font-normal text-[20px] leading-[100%] tracking-[0%] 
            text-[var(--color-primary)] justify-center ml-5 "
                  >
                    Phase - VI
                  </p>
                </div>

                <div className="absolute -z-12 hidden sm:block  left-2 md:left-[20px] top-[-120px] max-w-[338px] h-[338px] ">
                  <video
                    src={RoadmapVideo}
                    autoPlay
                    muted
                    loop
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>

                <div
                  className=" hidden sm:block absolute z-22 left-5 md:left-8 top-[-53px] max-w-[306px] h-[358px]
           "
                >
                  <img src={Men4} alt="" />
                </div>
                <div
                  className="max-w-[1248px] h-[140px] bg-[var(--color-primary)]
          top-[248px] left-0 right-0 mt-5 sm:mt-14 flex items-center px-22 z-32"
                >
                  <ul class="list-disc font-normal text-[18px] sm:text-[20px] leading-[100%]
               tracking-[0%] text-[var(--color-text)]  sm:ml-[260px] md:ml-[330px] ">
                    <li>Collaborations & Partnerships</li>
                    <li>Enhanced AI Generative System</li>
                    <li>Global Outreach Marketing</li>
                    <li>Stacking</li>
                  </ul>
                </div>
              </div>

              {/* phase 7 */}
             <div className="relative w-full z-12 mt-20 sm:mt-[139px]">
                <div
                  className="bg-[var(--color-secondary)] sm:max-w-[300px] lg:max-w-[562px] md:max-w-[420px] h-[57px] 
          flex items-center w-full"
                >
                  <p
                    className="font-zen font-normal text-[20px] leading-[100%] tracking-[0%] 
            text-[var(--color-primary)] justify-center ml-5 "
                  >
                    Phase - VII
                  </p>
                </div>

                <div className="absolute -z-12 hidden sm:block  right-0 md:right-12 lg:right-35 top-[-114px] max-w-[338px] h-[338px] ">
                  <video
                    src={RoadmapVideo}
                    autoPlay
                    muted
                    loop
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>

                <div
                  className=" hidden sm:block absolute z-22 right-4 md:right-16 lg:right-40  top-[-53px] max-w-[306px] h-[358px]
           "
                >
                  <img src={Men3} alt="" />
                </div>
                <div
                  className="max-w-[1248px] h-[170px] sm:h-[140px] bg-[var(--color-primary)]
          top-[248px] left-0 right-0 mt-5 sm:mt-14 flex items-center px-22 z-32"
                >
                  <ul class="list-disc font-normal text-[18px] sm:text-[20px] leading-[100%]
               tracking-[0%] text-[var(--color-text)]">
                    <li> NFT Minting</li>
                    <li>3dotlink NFT Collection Launch</li>
                    <li>Active Marketing Campaigns</li>
                    <li>Community Engagement Initiatives</li>
                    <li>3dotlink Marketplace Launch</li>
                  </ul>
                </div>
              </div>

              {/* phase 8 */}
              <div className="relative w-full z-12 mt-20 sm:mt-[139px]">
                <div
                  className="bg-[var(--color-secondary)] w-full sm-:max-w-[300px] lg:max-w-[562px] md:max-w-[417px] h-[57px] 
          flex items-center md:ml-80 lg:ml-95 sm:ml-70 ml-0"
                >
                  <p
                    className="font-zen font-normal text-[20px] leading-[100%] tracking-[0%] 
            text-[var(--color-primary)] justify-center ml-5 "
                  >
                    Phase - VIII
                  </p>
                </div>

                <div className="absolute -z-12 hidden sm:block  left-2 md:left-[20px] top-[-120px] max-w-[338px] h-[338px] ">
                  <video
                    src={RoadmapVideo}
                    autoPlay
                    muted
                    loop
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>

                <div
                  className=" hidden sm:block absolute z-22 left-5 md:left-8 top-[-53px] max-w-[306px] h-[358px]
           "
                >
                  <img src={Men4} alt="" />
                </div>
                <div
                  className="max-w-[1248px] h-[140px] bg-[var(--color-primary)]
          top-[248px] left-0 right-0 mt-5 sm:mt-14 flex items-center px-22 z-32"
                >
                  <ul class="list-disc font-normal text-[18px] sm:text-[20px] leading-[100%]
               tracking-[0%] text-[var(--color-text)]  sm:ml-[260px] md:ml-[330px] ">
                    <li>Collaborations & Partnerships</li>
                    <li>Enhanced AI Generative System</li>
                    <li>Global Outreach Marketing</li>
                    <li>Stacking</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-8 mt-10">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`${
              currentPage === 0
                ? " text-[var(--color-text)] cursor-not-allowed"
                : "text-[var(--color-text)] "
            } transition-opacity`}
          >
            <GrCaretPrevious  size={48} color="#FFFFF" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "text-[var(--color-text)] cursor-not-allowed"
                : "text-[var(--color-text)]"
            } transition-opacity`}
          >
            <GrCaretNext   size={48} color="#FFFFFF" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;