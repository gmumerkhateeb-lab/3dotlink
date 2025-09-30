import React from "react";
import background from "../../images/background.png";
import Heroline from "../../images/Heroline.png";

const Hero = () => {
  return (
    <div
      className="Hero relative  mx-auto h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Overlay (dark gradient) */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Hero Content */}
      <div className="relative  z-10 flex flex-col items-start justify-center h-full px-8 md:px-20 text-white">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2 md:mb-6 
font-zen"
        >
          Generate with AI, <br />
          Scan, Mint, Sell <br />& Trade
        </h1>

        <p className="text-lg md:text-xl mb-3 md:mb-8 max-w-2xl">
          Explore 3dotlink, where Web3 meets cultural legacy, and AI breathes
          life into NFTs
        </p>
        <button className="bg-[var(--color-primary)] hover:bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md">
          Buy NFT'S
        </button>
      </div>
      <div className="w-full">
        <img src={Heroline} alt="" className="w-full"/>
      </div>
    </div>
  );
};

export default Hero;
