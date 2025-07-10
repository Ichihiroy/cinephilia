import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-900 shadow-md text-white">
      <nav className="flex justify-between items-center px-6 py-4 md:px-12">
        <div className="flex items-center space-x-6">
          <Link to="/">
            <img src="/img/logo.svg" alt="Park Cinema Logo" className="h-8" />
          </Link>

          <div className="hidden md:flex space-x-6 text-sm">
            <a className="hover:underline">Kinoteatrlar</a>
            <a className="hover:underline">Aksiyalar</a>
            <a className="hover:underline">FAQ</a>
            <a className="hover:underline">Əlaqə</a>
            <Link to="login" className="hover:underline">
              Profil
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1"></div>

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
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm bg-zinc-900">
          <a className="block hover:underline">Kinoteatrlar</a>
          <a className="block hover:underline">Aksiyalar</a>
          <a className="block hover:underline">FAQ</a>
          <a className="block hover:underline">Əlaqə</a>
          <a className="block hover:underline">Profil</a>
        </div>
      )}
    </header>
  );
};

export default Header;
