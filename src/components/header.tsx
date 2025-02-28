import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border border-[#1E3A5F] ${
        scrolled
          ? "w-[85%] mx-auto mt-4 rounded-xl shadow-lg bg-midnight-blue/50 backdrop-blur-md"
          : "w-full bg-midnight-blue border-none"
      }`}
    >
      <div className="container w-full max-w-7xl mx-auto p-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="font-gugi text-xl lg:text-2xl">
            <span className="text-desert-sun">NORTH PARK </span>
            STUDIOS
          </div>

          <nav className="hidden md:flex space-x-8">
            {["Home", "Services", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-lg font-medium text-desert-sun hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-midnight-blue border-t border-desert-sun py-4">
          <nav className="flex flex-col space-y-4 px-4 text-desert-sun">
            {["Home", "Services", "Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
