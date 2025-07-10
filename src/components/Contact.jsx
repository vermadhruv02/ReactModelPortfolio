import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, MapPin, Instagram, Globe, Send, Check } from 'lucide-react'

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          project: '',
          budget: '',
          message: ''
        })
      }, 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'hello@sophiachen.com',
      link: 'mailto:hello@sophiachen.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'New York, NY',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      handle: '@dhruv.verma8',
      link: 'https://www.instagram.com/dhruv.verma8/'
    },
    {
      icon: <Globe size={24} />,
      label: 'Globe',
      handle: '@dhruv.verma8',
      link: 'https://www.dhruvverma.tech/'
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
    <section className="section-padding bg-white dark:bg-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 block">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to create something amazing? I'd love to hear about your project
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">Get In Touch</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always excited to collaborate on new projects and bring creative 
              visions to life. Whether you're planning a fashion shoot, brand campaign, 
              or editorial project, let's discuss how we can work together.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 border-b border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:translate-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-gray-400 dark:text-gray-500 flex-shrink-0">{info.icon}</div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-900 dark:text-white">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Follow My Journey</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    className="flex items-center space-x-4 p-4 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 rounded-lg shadow-lg card-hover"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-gray-600 dark:text-gray-400">{social.icon}</div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{social.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{social.handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]  rounded-lg p-8"
            variants={itemVariants}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] focus:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] focus:border-[rgba(255,255,255,0.2)] rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white  transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] focus:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] focus:border-[rgba(255,255,255,0.2)] rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white  transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] focus:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] focus:border-[rgba(255,255,255,0.2)] rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white  transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Project Type</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] focus:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] focus:border-[rgba(255,255,255,0.2)] rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white  transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="fashion">Fashion Shoot</option>
                    <option value="beauty">Beauty Campaign</option>
                    <option value="commercial">Commercial Work</option>
                    <option value="editorial">Editorial</option>
                    <option value="brand">Brand Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] focus:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] focus:border-[rgba(255,255,255,0.2)] rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white  transition-all duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-plus">$25,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, and vision..."
                  required
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] focus:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] focus:border-[rgba(255,255,255,0.2)] rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white  transition-all duration-300"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-4 bg-white hover:bg-[rgba(255,255,255,0.8)] text-black font-medium uppercase tracking-wide transition-all duration-300  disabled:opacity-70 disabled:cursor-not-allowed rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Check size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact