import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = ({ scrollToSection}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "gallery", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 glass-effect px-4 sm:px-6 lg:px-8 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <motion.div
            className="text-white font-light text-lg sm:text-xl tracking-widest cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DHRUV VERMA
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 py-2 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    layoutId="navIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Container for menu and its close button */}
      <motion.div
        className="fixed top-0 right-0 w-80 max-w-full h-full bg-black/95 backdrop-blur-md z-[60] md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* New button for closing the menu, placed at the top-right of the menu itself */}
        <motion.button
          className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 text-white z-50"
          onClick={() => setIsMenuOpen(false)}
          whileTap={{ scale: 0.9 }}
        >
          <X size={24} />
        </motion.button>

        <div className="pt-20 px-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`block w-full text-left py-4 border-b border-gray-700 font-light text-lg tracking-wide transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => handleNavClick(item.id)}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : 50,
              }}
              transition={{
                duration: 0.3,
                delay: isMenuOpen ? (index + 1) * 0.1 : 0,
              }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu Button - This button now only opens the menu and stays in the main nav bar */}
      <motion.button
        className="md:hidden flex items-center justify-center w-10 h-10 z-50 text-white fixed top-4 right-4"
        onClick={() => setIsMenuOpen(true)}
        whileTap={{ scale: 0.9 }}
      >
        <Menu size={24} />
      </motion.button>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
