import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-md text-white">
      <nav className="flex justify-between items-center px-6 py-4 md:px-12">
        <div className="flex items-center space-x-6">
          <img src="./img/logo.svg" alt="Park Cinema Logo" className="h-8" />

          <div className="hidden md:flex space-x-6 text-sm">
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
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="text-sm">AZE</span>
            <FaChevronDown size={12} />
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm bg-gray-800">
          <a href="#" className="block hover:underline">
            Kinoteatrlar
          </a>
          <a href="#" className="block hover:underline">
            Aksiyalar
          </a>
          <a href="#" className="block hover:underline">
            FAQ
          </a>
          <a href="#" className="block hover:underline">
            Əlaqə
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
