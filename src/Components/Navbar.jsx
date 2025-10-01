import React, { useState } from "react";
import Logo from "../images/Logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Artist",
    "Staking",
    "Roadmap",
    "Team",
    "Vesting",
    "Marketplace",
  ];

  return (
    <nav className="  Navbar fixed h-[90px] sm:h-[120px] top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-7xl mx-auto flex  flex-row-reverse lg:flex-row items-center justify-between px-6 py-4">
        {/* Mobile: Hamburger Left */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(true)}
            className="text-white focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Logo Right */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Logo"
            className="h-[60px] sm:h-[80px] lg:h-[104px] w-[111px] object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-white">
          {menuItems.map((item) => (
            <li
              key={item}
              className="font-semibold text-20px leading-[0%] tracking-[100%]"
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`${
                  active === item
                    ? "text-[var(--color-primary)] font-medium"
                    : "hover:text-[var(--color-primary)]"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <button className="bg-[var(--color-primary)] hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold shadow-md">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            ×
          </button>
        </div>
        <ul className="flex flex-col space-y-6 px-6 mt-6">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                }}
                className={`${
                  active === item
                    ? "text-[var(--color-primary)] font-medium"
                    : "hover:text-[var(--color-primary)]"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 mt-8">
          <button className="w-full bg-[var(--color-primary)] hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold shadow-md">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
