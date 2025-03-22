import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary">
            ICMGX
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`font-medium transition-colors ${isActive("/") ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"}`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`font-medium transition-colors ${isActive("/services") ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"}`}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className={`font-medium transition-colors ${isActive("/portfolio") ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"}`}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className={`font-medium transition-colors ${isActive("/about") ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"}`}
          >
            About
          </Link>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`font-medium py-2 ${isActive("/") ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`font-medium py-2 ${isActive("/services") ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"}`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`font-medium py-2 ${isActive("/portfolio") ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"}`}
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className={`font-medium py-2 ${isActive("/about") ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact" onClick={toggleMenu}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
