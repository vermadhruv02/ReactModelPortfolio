import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navigation = ({ scrollToSection, isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'services', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
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

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle - Hidden on mobile */}
            <motion.button
              className="hidden md:flex items-center justify-center w-10 h-10 text-gray-400 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden flex items-center justify-center w-10 h-10 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed top-0 right-0 w-80 max-w-full h-full bg-black/95 backdrop-blur-md z-50 md:hidden"
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="pt-20 px-6">
          <motion.button
            className="flex items-center space-x-3 w-full text-left py-4 border-b border-gray-700 text-gray-400 hover:text-white transition-colors duration-300"
            onClick={toggleDarkMode}
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0, 
              x: isMenuOpen ? 0 : 50 
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.div
              animate={{ rotate: isDarkMode ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
            <span className="font-light tracking-wide">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </motion.button>

          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`block w-full text-left py-4 border-b border-gray-700 font-light text-lg tracking-wide transition-colors duration-300 ${
                activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => handleNavClick(item.id)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                x: isMenuOpen ? 0 : 50 
              }}
              transition={{ 
                duration: 0.3, 
                delay: isMenuOpen ? (index + 2) * 0.1 : 0 
              }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

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
  )
}

export default Navigation