import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Camera, Heart, Star } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const stats = [
    { icon: <Camera size={24} />, number: '500+', label: 'Photoshoots' },
    { icon: <Award size={24} />, number: '50+', label: 'Brands Worked With' },
    { icon: <Star size={24} />, number: '100K+', label: 'Instagram Followers' },
    { icon: <Heart size={24} />, number: '5', label: 'Years Experience' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="section-padding ">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants}>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 block">About Me</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-6 leading-tight">
                Passionate About Fashion & Art
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in the fashion industry, I've had the privilege 
              of working with renowned brands and photographers around the world. My journey 
              began with a simple love for fashion and has evolved into a career that allows 
              me to express creativity and authenticity in every project.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I specialize in high fashion, commercial modeling, and brand collaborations. 
              My approach combines professionalism with genuine passion, ensuring that every 
              shoot captures not just the perfect image, but the right emotion and story.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">What I Bring</h3>
              <ul className="space-y-3">
                {[
                  'Professional runway and editorial experience',
                  'Strong social media presence and engagement',
                  'Collaborative approach with creative teams',
                  'Versatility across fashion, beauty, and lifestyle'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 text-gray-600 dark:text-gray-300">
                    <span className="text-gray-400 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="DHRUV VERMA Portrait"
                className="w-full h-96 sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] rounded-lg shadow-lg card-hover"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-gray-400 dark:text-gray-500 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About