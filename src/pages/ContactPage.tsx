import { motion } from 'framer-motion'
import { ContactSection } from '@/components/sections/ContactSection'

export function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Get in touch with us today. We're here to help with your business needs and answer any questions you may have.
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you start a new project?",
                answer: "We typically begin new projects within 1-2 weeks of contract signing, depending on our current workload and project complexity."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope and requirements. Most projects range from 4-12 weeks, with larger initiatives taking 3-6 months."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer comprehensive post-launch support packages including maintenance, updates, and optimization services."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We work across multiple industries including technology, healthcare, finance, e-commerce, education, and manufacturing."
              },
              {
                question: "How do you ensure project quality?",
                answer: "We follow rigorous quality assurance processes including regular check-ins, milestone reviews, and comprehensive testing protocols."
              },
              {
                question: "What makes your approach different?",
                answer: "Our client-centric approach focuses on understanding your business goals first, then delivering customized solutions that drive real results."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Don't wait to transform your business. Our team of experts is ready to help you 
                achieve your goals and drive meaningful results.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Free Consultation",
                    description: "Get a no-obligation consultation to discuss your project needs and goals."
                  },
                  {
                    title: "Custom Solutions",
                    description: "Receive tailored recommendations designed specifically for your business."
                  },
                  {
                    title: "Proven Results",
                    description: "Work with a team that has delivered success for over 500+ clients."
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
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Contact Illustration</p>
                  <p className="text-sm">Replace with actual contact image</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
