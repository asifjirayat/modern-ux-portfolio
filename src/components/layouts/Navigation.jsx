import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation Links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle Mobile Toggle
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle Smooth Scroll Function
  const handleSmoothScroll = (e, targetid) => {
    e.preventDefault();

    const element = document.getElementById(targetid);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
  };

  // Handle Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"
            >
              Your Name
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="px-6 py-2 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 hover:scale-105 transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 py-6 px-4 mt-4">
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                  className="block text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                  className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors duration-200"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
