import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FaqVideo from "../../Video/FaqVideo.mp4";

const tabs = ["General", "Pre ICO", "Token", "Client", "Legal"];

const data = {
  General: [
    {
      q: "How do I create NFTs on 3dotlink?",
      a: "Artists and creators can use our AI-integrated platform to generate NFTs by providing specific inputs such as desired features and elements for their digital artwork.",
    },
    {
      q: "What is the utility of the token?",
      a: "3dotlink supports all forms of digital artwork, including illustrations, animations, and generative art.",
    },
    {
      q: "Is 3dotlink legally registered?",
      a: "Every artwork minted is recorded on blockchain with unique metadata for authenticity.",
    },
    {
      q: "How can clients purchase NFTs?",
      a: "Yes, artists have full control to manage, edit, and sell their collections through their dashboard.",
    },
  ],
  "Pre ICO": [
    {
      q: "When does the Pre ICO start?",
      a: "The Pre ICO will start on the official announced date and details will be shared on the website.",
    },
    {
      q: "How can I participate in the Pre ICO?",
      a: "You can participate by registering on our platform and following the steps for wallet integration.",
    },
    {
      q: "How can clients purchase NFTs?",
      a: "Yes, the minimum requirement will be disclosed during the official announcement.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept major cryptocurrencies like Ethereum, Bitcoin, and USDT.",
    },
  ],
  Token: [
    {
      q: "What is the utility of the token?",
      a: "The token can be used for transactions, governance, and staking within the ecosystem.",
    },
    {
      q: "Is the token deflationary?",
      a: "Yes, a portion of tokens will be burned periodically to reduce supply.",
    },
    {
      q: "Where can I buy the token?",
      a: "Tokens will be listed on major exchanges and our platform after launch.",
    },
    {
      q: "Is staking available?",
      a: "Yes, staking options will be available with rewards for long-term holders.",
    },
  ],
  Client: [
    {
      q: "How can clients purchase NFTs?",
      a: "Clients can purchase NFTs directly using their connected wallets.",
    },
    {
      q: "Do clients need a crypto wallet?",
      a: "Yes, a crypto wallet is necessary for all transactions on the platform.",
    },
    {
      q: "Can clients resell NFTs?",
      a: "Yes, NFTs can be resold on secondary markets or within our platform.",
    },
    {
      q: "Is there a client support team?",
      a: "Yes, we offer 24/7 dedicated support for all clients.",
    },
  ],
  Legal: [
    {
      q: "Is 3dotlink legally registered?",
      a: "Yes, we are fully registered and compliant with international laws.",
    },
    {
      q: "Are NFTs taxable?",
      a: "NFT taxes vary by country, and users should comply with local regulations.",
    },
    {
      q: "Do artists retain copyright?",
      a: "Yes, artists retain copyright unless explicitly transferred.",
    },
    {
      q: "What about intellectual property rights?",
      a: "We strictly respect and protect intellectual property rights on our platform.",
    },
  ],
};

const Faqs = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div
      className="relative bg-black text-white py-2 md:py-16 px-8 flex flex-col lg:flex-row
       items-center sm:justify-between justify-center  max-w-[1774px] mx-auto gap-3 lg:gap-10 "
    >
      {/* Left Side (FAQs) */}
      <div className="w-full lg:w-1/2 mt-6 md:mt-40 px-8">
        <h2 className="text-[28px] sm:text-[50px] font-normal mb-2 sm:mb-4 leading-[100%] tracking-[0%] font-zen">Have any question?</h2>
        <p className="text-[14px] sm:text-[25px] text-[var(--color-text)] mb-3 sm:mb-8 font-normal leading-[100%] tracking-[0%]">
          Curious about 3dotlink? Explore our frequently asked
          <br /> questions to find answers
        </p>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-6 border-b border-gray-700 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className={`text-[14px] sm:text-[20px] pb-2 relative font-zen text-[var(--color-text)] leading-[100%] tracking-[0%] ${
                activeTab === tab ? "text-red-500 font-semibold" : "text-[var(--color-text)]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
              )}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {data[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-red-600/60  rounded-md p-4 cursor-pointer
               max-w-[653px] min-h-[62px] max-h[180px]"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
<h3
  className={`text-[14px] sm:text-[20px] leading-[100%] tracking-[0%] font-medium font-zen 
    ${openIndex === index ? "text-red-600/100" : "text-white"} 
    hover:text-[var(--color-primary)]`}
>
  {item.q}
</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-red-600/100" />
                ) : (
                  <FaChevronDown className="text-[var(--color-text)]" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-[var(--color-text)] text-[12px] sm:text-[20px] 
                leading-[100%] tracking-[0%]">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side (Men Image) */}
      <div className="w-full lg:w-1/2 ">
  <video
    src= {FaqVideo}
    autoPlay
    muted
    loop
    className="max-w-full h-auto rounded-lg"
  />
</div>

       {/* <img
          src={faq}
          alt="FAQ Visual"
          className="h-[678px] max-w-[780px]"
        /> */}
    </div>
  );
};

export default Faqs;
