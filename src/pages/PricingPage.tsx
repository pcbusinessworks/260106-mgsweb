import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckIcon, StarIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const pricingPlans = [
  {
    name: 'Starter',
    price: '$299',
    period: 'per project',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form',
      'Basic SEO optimization',
      '1 month support',
      'Social media integration'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$599',
    period: 'per project',
    description: 'Ideal for growing businesses with more needs',
    features: [
      'Up to 10 pages',
      'Custom design',
      'Advanced contact forms',
      'SEO optimization',
      '3 months support',
      'Analytics integration',
      'Content management',
      'Mobile optimization'
    ],
    popular: true,
    cta: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: '$999',
    period: 'per project',
    description: 'Complete solution for established businesses',
    features: [
      'Unlimited pages',
      'Custom development',
      'Advanced integrations',
      'Premium SEO',
      '6 months support',
      'Performance optimization',
      'Security features',
      'Priority support',
      'Custom training'
    ],
    popular: false,
    cta: 'Contact Us'
  }
]

const additionalServices = [
  {
    name: 'Website Maintenance',
    price: '$99',
    period: 'per month',
    description: 'Keep your website updated and secure',
    features: ['Regular updates', 'Security monitoring', 'Backup management', 'Performance optimization']
  },
  {
    name: 'SEO Services',
    price: '$199',
    period: 'per month',
    description: 'Improve your search engine rankings',
    features: ['Keyword research', 'Content optimization', 'Link building', 'Analytics reporting']
  },
  {
    name: 'Content Creation',
    price: '$149',
    period: 'per month',
    description: 'Professional content for your website',
    features: ['Blog posts', 'Product descriptions', 'Social media content', 'Email campaigns']
  }
]

export function PricingPage() {
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Website Development Packages
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional websites tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 shadow-soft border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.popular 
                    ? 'border-primary-500 scale-105' 
                    : 'border-slate-200 hover:border-primary-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <StarIcon className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.cta === 'Contact Us' ? '/contact' : '/contact'}>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary-600 hover:bg-primary-700' 
                        : 'bg-slate-900 hover:bg-slate-800'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ongoing support and services to keep your business growing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-soft border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary-600">{service.price}</span>
                    <span className="text-slate-600 ml-2">{service.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/services">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Common questions about our pricing and services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-soft border border-slate-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  What's included in the website development?
                </h3>
                <p className="text-slate-600">
                  All packages include responsive design, SEO optimization, contact forms, and ongoing support. Higher tiers include more pages, custom features, and extended support periods.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-soft border border-slate-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Do you offer custom pricing?
                </h3>
                <p className="text-slate-600">
                  Yes! If your needs don't fit our standard packages, we're happy to create a custom quote tailored to your specific requirements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-soft border border-slate-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  What's the typical timeline?
                </h3>
                <p className="text-slate-600">
                  Most websites are completed within 2-4 weeks, depending on the package and complexity. We'll provide a detailed timeline during our initial consultation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-soft border border-slate-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Do you provide ongoing support?
                </h3>
                <p className="text-slate-600">
                  Absolutely! All packages include support periods, and we offer monthly maintenance plans to keep your website updated and secure.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-slate-100"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/testimonials">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
