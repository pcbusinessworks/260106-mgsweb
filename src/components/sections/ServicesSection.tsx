import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
import { services } from '@/config/business'
import { staggerContainer, staggerItem } from '@/utils/animations'

interface ServicesSectionProps {
  className?: string
}

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section id="services" className={`section-padding bg-slate-50 ${className}`}>
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
          >
            Our Services
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Professional Business Solutions
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            We offer comprehensive services to help your business grow and succeed in today's competitive market.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              className="bg-white rounded-xl p-8 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 border border-slate-200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Icon
                  name={service.icon as any}
                  size={32}
                  className="text-blue-600"
                />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
