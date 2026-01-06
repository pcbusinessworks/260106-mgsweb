import { motion } from 'framer-motion'
import { Target, Star, Users, Calendar, Monitor, Heart, DollarSign, ShoppingCart, GraduationCap, Factory } from 'lucide-react'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

export function TestimonialsPage() {
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
              Client Testimonials
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Hear what our satisfied clients have to say about working with us and the results we've achieved together.
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Client Success Metrics
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: Target },
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "150+", label: "Happy Clients", icon: Users },
              { number: "5+", label: "Years Experience", icon: Calendar }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-10 h-10 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
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
              Featured Client Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              In-depth success stories from our most recent projects
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                company: "TechStart Inc.",
                industry: "Technology",
                challenge: "Needed to scale their digital infrastructure to support rapid growth",
                solution: "Implemented cloud-based solutions and optimized their development processes",
                result: "300% increase in system performance and 50% reduction in operational costs",
                testimonial: "The team at {businessInfo.name} transformed our entire technology stack. Their expertise and dedication helped us scale beyond our expectations.",
                author: "Jennifer Martinez",
                role: "CTO, TechStart Inc.",
                image: Monitor
              },
              {
                company: "RetailMax",
                industry: "E-commerce",
                challenge: "Struggling with low conversion rates and poor customer experience",
                solution: "Redesigned their online platform and implemented advanced analytics",
                result: "250% increase in conversion rates and 40% improvement in customer satisfaction",
                testimonial: "Working with {businessInfo.name} was a game-changer. They understood our business needs and delivered results that exceeded our goals.",
                author: "David Thompson",
                role: "CEO, RetailMax",
                image: ShoppingCart
              }
            ].map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <story.image className="w-10 h-10 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{story.company}</h3>
                    <p className="text-primary-600 font-medium">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Challenge:</h4>
                    <p className="text-slate-600">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Solution:</h4>
                    <p className="text-slate-600">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Result:</h4>
                    <p className="text-slate-600">{story.result}</p>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-primary-600 pl-4 mb-6">
                  <p className="text-slate-700 italic">"{story.testimonial}"</p>
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{story.author}</p>
                    <p className="text-slate-600 text-sm">{story.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Industries */}
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
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Technology", icon: Monitor },
              { name: "Healthcare", icon: Heart },
              { name: "Finance", icon: DollarSign },
              { name: "E-commerce", icon: ShoppingCart },
              { name: "Education", icon: GraduationCap },
              { name: "Manufacturing", icon: Factory }
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-3">
                  <industry.icon className="w-8 h-8 text-primary-600" />
                </div>
                <p className="font-medium text-slate-900">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Testimonials Section */}
      <TestimonialsSection />
    </main>
  )
}
