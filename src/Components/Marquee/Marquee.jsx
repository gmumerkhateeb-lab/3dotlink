import React from "react";

const Marquee = () => {
  return (
    <div className="Marquee w-full h-[280px] lg:h-[630px] bg-black ">
      <div className="flex flex-col items-center justify-center h-full relative overflow-hidden space-y-[12px] lg:space-y-0">
        {/* First marquee */}
        <div
          className="absolute xl:top-[30%] lg:top-[30%] sm:top-1/2 translate-y-12/26
            w-[120%] left-1/2 -translate-x-1/2 
            h-[110px] bg-[var(--color-primary)] text-[var(--color-text)] 
            flex items-center transform lg:-rotate-4 rotate-0  lg:absolute"
        >
          <marquee direction={window.innerWidth >= 1024 ? "left" : "right"}
scrollamount="30">
            <h1 className="inline-block whitespace-nowrap text-[8vw] sm:text-[60px] lg:text-[100px] font-bold text-center pb-6">
              Unique - Limited - Valuable
            </h1>
          </marquee>
        </div>

        {/* Second marquee */}
        <div
          className="absolute xl:top-[50%] lg:top-[50%] sm:top-1/2 -translate-y-1/2
            w-[120%] left-1/2 -translate-x-1/2 
            h-[110px] bg-[var(--color-primary)] text-black 
            flex items-center transform lg:rotate-11 rotate-0  lg:absolute"
        >
          <marquee direction="right" scrollamount="30">
            <h1 className="inline-block whitespace-nowrap text-[8vw] sm:text-[60px] lg:text-[100px] font-bold text-center">
              Collections - Rewards - Creations
            </h1>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
