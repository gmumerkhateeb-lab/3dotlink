import React from "react";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import card5 from "../../images/card5.png";
import card6 from "../../images/card6.png";
import cardhoverimage from "../../icons/cardhoverimage.png";

const Cards = () => {
  return (
    <div className="Cards w-full bg-black sm:py-12 lg:py-20 py-13">
      <div
        className="max-w-[1418px] bg-black 
        p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 md:gap-8 mx-auto"
      >
        {/* card1 */}
       
        <div className="relative group">
  {/* The main image, visible by default. 
      It is given group-hover:opacity-0 to hide it on hover, 
      and transition for a smooth effect. */}
  <img 
    src={card1} 
    alt="Card default view" 
    className="w-full h-auto relative z-20 transition-opacity duration-300 group-hover:opacity-100"
  />

  {/* The hover image, hidden by default.
      It is given group-hover:opacity-100 to show it on hover. */}
  <img 
    src={cardhoverimage} 
    alt="Card hover view" 
    className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
  />
</div>

       {/* card2 */}
        <div className="relative group">
          {/* Default Image */}
          <img 
            src={card2} 
            alt="Card 2 default view" 
            className="w-full h-auto relative z-20 transition-opacity duration-300 group-hover:opacity-100" 
          />
          {/* Hover Image */}
          <img 
            src={cardhoverimage} 
            alt="Card 2 hover view" 
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
          />
        </div>

        {/* card3 */}
        <div className="relative group">
          {/* Default Image */}
          <img 
            src={card3} 
            alt="Card 3 default view" 
            className="w-full h-auto relative z-20 transition-opacity duration-300 group-hover:opacity-100" 
          />
          {/* Hover Image */}
          <img 
            src={cardhoverimage} 
            alt="Card 3 hover view" 
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
          />
        </div>

        {/* card4 */}
        <div className="relative group">
          {/* Default Image */}
          <img 
            src={card4} 
            alt="Card 4 default view" 
            className="w-full h-auto relative z-20 transition-opacity duration-300 group-hover:opacity-100" 
          />
          {/* Hover Image */}
          <img 
            src={cardhoverimage} 
            alt="Card 4 hover view" 
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
          />
        </div>

        {/* card5 */}
        <div className="relative group">
          {/* Default Image */}
          <img 
            src={card5} 
            alt="Card 5 default view" 
            className="w-full h-auto relative z-20 transition-opacity duration-300 group-hover:opacity-100" 
          />
          {/* Hover Image */}
          <img 
            src={cardhoverimage} 
            alt="Card 5 hover view" 
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
          />
        </div>

        {/* card6 */}
        <div className="relative group">
          {/* Default Image */}
          <img 
            src={card6} 
            alt="Card 6 default view" 
            className="w-full h-auto relative z-20 transition-opacity duration-300 group-hover:opacity-100" 
          />
          {/* Hover Image */}
          <img 
            src={cardhoverimage} 
            alt="Card 6 hover view" 
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;