import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Slider from "./Slider";

const Header = () => (
  <header>
    <nav className="flex justify-between items-center px-8 py-4 bg-black shadow-md">
      <div className="flex items-center space-x-4">
        <img src="./img/logo.svg" alt="Park Cinema Logo" className="h-8" />
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Kinoteatrlar
          </a>
          <a href="#" className="hover:underline">
            Aksiyalar
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Əlaqə
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-3">
        <span>AZE</span>
        <FaChevronDown size={12} />
      </div>
    </nav>

    <Slider />
  </header>
);

export default Header;
