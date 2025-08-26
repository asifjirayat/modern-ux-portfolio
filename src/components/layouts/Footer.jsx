import { ExternalLink } from "lucide-react";
import { navigationLinks, socialLinks } from "../../constants";
import { useScrollTo } from "../../hooks";
import { Button } from "../ui";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { handleSmoothScroll } = useScrollTo();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
                Your Name
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Creative UX Designer passionate about crafting digital
                experiences that blend aesthetics with functionality.
              </p>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) =>
                      handleSmoothScroll(e, link.href.substring(1))
                    }
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Call to Action */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <Button
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                size="small"
                className="inline-flex items-center gap-2"
              >
                Get in Touch
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
