const Footer = () => {
  return (
    <footer className="bg-red-900 text-gray-100 px-6 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <img
            src="./img/logo.svg"
            className="h-14 object-contain"
            alt="Park Cinema Logo"
          />

          <ul className="flex flex-wrap gap-4 text-sm">
            <li>
              <a href="#" className="hover:underline transition duration-300">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline transition duration-300">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        <ul className="flex gap-4 text-sm">
          <li>
            <a href="#" className="hover:text-white transition duration-300">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition duration-300">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition duration-300">
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Park Cinema. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
