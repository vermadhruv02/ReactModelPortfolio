import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, Users, Sparkles, Briefcase, Heart, Star } from 'lucide-react'

const Services = ({ scrollToSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      icon: <Camera size={32} />,
      title: 'Fashion Modeling',
      description: 'High-end fashion shoots, runway shows, and editorial work for luxury brands and magazines.',
      features: ['Runway Experience', 'Editorial Shoots', 'Lookbook Creation', 'Fashion Week Events']
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Beauty & Cosmetics',
      description: 'Beauty campaigns, skincare promotions, and cosmetic brand collaborations.',
      features: ['Beauty Campaigns', 'Product Photography', 'Skincare Promotion', 'Makeup Tutorials']
    },
    {
      icon: <Users size={32} />,
      title: 'Brand Collaborations',
      description: 'Strategic partnerships with lifestyle and fashion brands for authentic content creation.',
      features: ['Social Media Content', 'Brand Ambassadorships', 'Product Launches', 'Event Appearances']
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Commercial Work',
      description: 'Professional commercial modeling for advertising campaigns and corporate projects.',
      features: ['TV Commercials', 'Print Advertising', 'Corporate Events', 'Product Endorsements']
    }
  ]

  const packages = [
    {
      name: 'Essential',
      price: '$2,500',
      duration: 'Half Day',
      features: [
        '4-hour photoshoot',
        '2 outfit changes',
        '20 edited photos',
        'Basic retouching',
        'Digital gallery'
      ]
    },
    {
      name: 'Professional',
      price: '$4,500',
      duration: 'Full Day',
      features: [
        '8-hour photoshoot',
        '5 outfit changes',
        '50 edited photos',
        'Advanced retouching',
        'Digital gallery',
        'Social media content'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$8,000',
      duration: '2 Days',
      features: [
        '2-day campaign shoot',
        'Unlimited outfit changes',
        '100+ edited photos',
        'Premium retouching',
        'Multiple locations',
        'Video content',
        'Full usage rights'
      ]
    }
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 block">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-6">What I Offer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional modeling services tailored to bring your vision to life
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] rounded-lg shadow-lg card-hover"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-gray-400 dark:text-gray-500 mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 text-left">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="text-gray-400 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white text-center mb-12">Booking Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`relative p-8 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] rounded-lg shadow-lg text-center card-hover ${
                  pkg.popular ? 'ring-2 ring-gray-900 dark:ring-white' : ''
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Star size={16} />
                    <span>Most Popular</span>
                  </div>
                )}
                <div className="mb-8">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">{pkg.name}</h4>
                  <div className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-white mb-2">{pkg.price}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">{pkg.duration}</div>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-medium uppercase tracking-wide transition-colors duration-300 hover:bg-gray-800 dark:hover:bg-gray-100"
                  onClick={() => scrollToSection && scrollToSection('contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white mb-12">What Clients Say</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] rounded-lg shadow-lg">
              <div className="text-lg text-gray-900 dark:text-white mb-6 leading-relaxed italic">
                "Sophia's professionalism and natural talent made our campaign shoot absolutely perfect. Her ability to embody our brand vision was remarkable."
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white mb-1">Sarah Johnson</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Creative Director, Luxe Fashion</div>
              </div>
            </div>
            <div className="p-8 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] rounded-lg shadow-lg">
              <div className="text-lg text-gray-900 dark:text-white mb-6 leading-relaxed italic">
                "Working with Sophia was a dream. She brought incredible energy and creativity to every shot, delivering results that exceeded our expectations."
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white mb-1">Michael Chen</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Photographer, Elite Studios</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services