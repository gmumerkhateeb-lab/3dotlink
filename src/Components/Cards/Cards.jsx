import React, { useState, useRef, useEffect } from "react";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import card5 from "../../images/card5.png";
import card6 from "../../images/card6.png";
import cardhoverimage from "../../icons/cardhoverimage.png";

const CardItem = ({ id, defaultSrc, hoverSrc, isActive, onClick }) => {
  const defaultImageClass = isActive ? "opacity-100" : "opacity-100";
  
  const hoverImageClass = isActive ? "opacity-100" : "opacity-0";

  return (
    <div 
      className="relative group cursor-pointer"
      onClick={(e) => {
          e.stopPropagation(); 
          onClick();
      }} 
    >
      {/* 1. DEFAULT IMAGE */}
      <img 
        src={defaultSrc} 
        alt={`Card ${id} default view`} 
        className={`w-full h-auto relative z-20 transition-opacity duration-300 ${defaultImageClass} group-hover:opacity-100`}
      />

      {/* 2. HOVER IMAGE */}
      <img 
        src={hoverSrc} 
        alt={`Card ${id} hover view`} 
        className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${hoverImageClass} group-hover:opacity-100`} 
      />
    </div>
  );
};

const Cards = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  
  const gridContainerRef = useRef(null); 

  const handleCardClick = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };
  
  const handleContainerClick = (event) => {
    if (event.target === gridContainerRef.current) {
        setActiveCardId(null); 
    }
    
  };


  return (
    <div 
      className="Cards w-full bg-black sm:py-12 lg:py-20 pt-1 md:pt-13"
    >
      <div
        ref={gridContainerRef} 
        onClick={handleContainerClick} 
        className="max-w-[1418px] bg-black px-20 my-10 lg:px-16
        lg:py-8 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
        gap-12 md:gap-25 mx-auto"
      >
        {/* Card 1 */}
        <CardItem
          id="card1"
          defaultSrc={card1}
          hoverSrc={cardhoverimage}
          isActive={activeCardId === 'card1'}
          onClick={() => handleCardClick('card1')}
        />

        {/* Card 2 */}
        <CardItem
          id="card2"
          defaultSrc={card2}
          hoverSrc={cardhoverimage}
          isActive={activeCardId === 'card2'}
          onClick={() => handleCardClick('card2')}
        />

        {/* Card 3 */}
        <CardItem
          id="card3"
          defaultSrc={card3}
          hoverSrc={cardhoverimage}
          isActive={activeCardId === 'card3'}
          onClick={() => handleCardClick('card3')}
        />

        {/* Card 4 */}
        <CardItem
          id="card4"
          defaultSrc={card4}
          hoverSrc={cardhoverimage}
          isActive={activeCardId === 'card4'}
          onClick={() => handleCardClick('card4')}
        />

        {/* Card 5 */}
        <CardItem
          id="card5"
          defaultSrc={card5}
          hoverSrc={cardhoverimage}
          isActive={activeCardId === 'card5'}
          onClick={() => handleCardClick('card5')}
        />

        {/* Card 6 */}
        <CardItem
          id="card6"
          defaultSrc={card6}
          hoverSrc={cardhoverimage}
          isActive={activeCardId === 'card6'}
          onClick={() => handleCardClick('card6')}
        />
      </div>
    </div>
  );
};

export default Cards;