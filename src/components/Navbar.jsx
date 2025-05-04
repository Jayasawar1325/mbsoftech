import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkStyles = ({ isActive }) => {
    return `px-3 py-1 menu-item font-medium transition-all duration-200 ${
      isActive 
        ? "text-[#6BC0E8] " 
        : "text-gray-700"
    }`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#F7F8FB] ${
      scrolled ? "shadow-md py-1 md:py-2" : "bg-transparent py-2 md:py-4"
    }`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-14 md:h-16">
        <div className="flex-shrink-0 flex items-center">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img src="./logo_refresh.png" alt="" className="w-8 md:w-10" />
              <span className="text-sm md:text-base lg:text-lg font-bold tracking-wide px-1 md:px-2">M & MB SOFT TECH</span>
            </NavLink>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex space-x-2 lg:space-x-6">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkStyles}>
              Services
            </NavLink>
            <NavLink to="/about" className={navLinkStyles}>
              About
            </NavLink>
            <NavLink to="/testimonials" className={navLinkStyles}>
              Testimonials
            </NavLink>
            <NavLink to="/contact" className={navLinkStyles}>
              Contact
            </NavLink>
          </div>
        </div>

        <div className="flex items-center">
          <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium text-white bg-[#6BC0E8] hover:bg-[#5aafda] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6BC0E8] transition-all duration-200">
            Get Started
          </button>
          
          <div className="md:hidden ml-3">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#6BC0E8]"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <NavLink 
            to="/" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive 
                ? "text-[#6BC0E8]" 
                : "text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive 
                ? "text-[#6BC0E8]" 
                : "text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink 
            to="/testimonials" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive 
                ? "text-[#6BC0E8]" 
                : "text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive 
                ? "text-[#6BC0E8]" 
                : "text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive 
                ? "text-[#6BC0E8]" 
                : "text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;