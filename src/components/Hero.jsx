import { motion } from 'framer-motion'
import { ChevronDown, Instagram, Globe } from 'lucide-react'

const Hero = ({ scrollToSection }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-widest mb-4 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            DHRUV VERMA
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Fashion Model & Creative Artist
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Bringing elegance and authenticity to every frame
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button
              className="btn-primary w-full sm:w-auto"
              onClick={() => scrollToSection('gallery')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View Portfolio
            </motion.button>
            
            <motion.button
              className="btn-secondary w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Social Links - Hidden on mobile, shown on larger screens */}
        <motion.div
          className="hidden lg:flex absolute left-8 top-1/2 transform -translate-y-1/2 flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.a
            href="https://www.instagram.com/dhruv.verma8/"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a
            href='https://www.dhruvverma.tech/'
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Globe size={24} />
          </motion.a>
        </motion.div>

        {/* Mobile Social Links */}
        <motion.div
          className="flex lg:hidden justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.a
            href="https://www.instagram.com/dhruv.verma8/"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a
            href='https://www.dhruvverma.tech/'
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Globe size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs uppercase tracking-widest cursor-pointer"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
        <span className="hidden sm:block">Scroll to explore</span>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/10 w-20 h-20 sm:w-24 sm:h-24 border border-white/20 rounded-full pointer-events-none hidden md:block"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/10 w-12 h-12 sm:w-16 sm:h-16 border border-white/20 rounded-full pointer-events-none hidden md:block"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  )
}

export default Hero