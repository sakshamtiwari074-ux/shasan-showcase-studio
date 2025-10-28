import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/research", label: "Research" },
    { path: "/teaching", label: "Teaching" },
    { path: "/books", label: "Books" },
    { path: "/courses", label: "Courses" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-card/95 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className={`text-xl sm:text-2xl font-bold transition-colors ${
              isScrolled || !isHomePage
                ? "text-primary hover:text-secondary"
                : "text-white hover:text-accent drop-shadow-lg"
            }`}
          >
            Dr. Syed Hasan Saeed
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={`text-sm lg:text-base ${
                    location.pathname === link.path
                      ? isScrolled || !isHomePage
                        ? "text-primary font-semibold"
                        : "text-white font-semibold drop-shadow-lg"
                      : isScrolled || !isHomePage
                      ? "text-foreground hover:text-primary"
                      : "text-white/90 hover:text-white drop-shadow-md"
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled || !isHomePage
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent drop-shadow-lg"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-base ${
                    location.pathname === link.path
                      ? isHomePage
                        ? "text-white font-semibold bg-white/10"
                        : "text-primary font-semibold bg-primary/10"
                      : isHomePage
                      ? "text-white/90 hover:text-white hover:bg-white/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
