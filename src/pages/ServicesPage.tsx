import { motion } from 'framer-motion'
import { BarChart3, Monitor, Settings, Target, Search, ClipboardList, Zap, TrendingUp } from 'lucide-react'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { businessInfo } from '@/config/business'

export function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Discover the comprehensive range of professional services we offer to help your business grow and succeed.
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How we deliver exceptional results for your business
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business goals, challenges, and requirements through detailed consultation.",
                icon: Search
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Our team develops a customized strategy tailored to your specific needs and objectives.",
                icon: ClipboardList
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the plan with precision, keeping you informed throughout the entire process.",
                icon: Zap
              },
              {
                step: "04",
                title: "Optimization",
                description: "We continuously monitor and optimize results to ensure maximum return on your investment.",
                icon: TrendingUp
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex justify-center mb-4">
                    <process.icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">{process.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{process.title}</h3>
                  <p className="text-slate-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions across multiple business areas
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                category: "Business Strategy",
                services: ["Strategic Planning", "Market Analysis", "Competitive Research", "Growth Planning"],
                description: "Strategic guidance to help your business navigate challenges and seize opportunities.",
                image: BarChart3
              },
              {
                category: "Digital Solutions",
                services: ["Web Development", "Digital Marketing", "SEO Optimization", "Analytics"],
                description: "Modern digital solutions to enhance your online presence and drive growth.",
                image: Monitor
              },
              {
                category: "Operations",
                services: ["Process Optimization", "Quality Assurance", "Project Management", "Training"],
                description: "Streamline your operations for maximum efficiency and productivity.",
                image: Settings
              },
              {
                category: "Consulting",
                services: ["Business Analysis", "Risk Assessment", "Change Management", "Performance Review"],
                description: "Expert consulting services to improve your business performance and outcomes.",
                image: Target
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <category.image className="w-12 h-12 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{category.category}</h3>
                    <p className="text-slate-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.services.map((service) => (
                        <li key={service} className="flex items-center text-slate-600">
                          <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose {businessInfo.name}?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We're not just service providers – we're your strategic partners in success. 
                Here's what sets us apart from the competition.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Proven Track Record",
                    description: "Over 500 successful projects completed with 98% client satisfaction rate."
                  },
                  {
                    title: "Expert Team",
                    description: "Our team consists of industry experts with years of experience and deep domain knowledge."
                  },
                  {
                    title: "Customized Solutions",
                    description: "We don't believe in one-size-fits-all. Every solution is tailored to your unique needs."
                  },
                  {
                    title: "Ongoing Support",
                    description: "We provide continuous support and optimization to ensure long-term success."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-slate-600">
                  <div className="w-24 h-24 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Service Illustration</p>
                  <p className="text-sm">Replace with actual service image</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Original Services Section */}
      <ServicesSection />
    </main>
  )
}
