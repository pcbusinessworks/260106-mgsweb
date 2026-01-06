import { motion } from 'framer-motion'
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, TwitterIcon, FacebookIcon, InstagramIcon } from '@/components/ui/Icon'
import { businessInfo } from '@/config/business'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Business Consulting', href: '#services' },
      { name: 'Digital Solutions', href: '#services' },
      { name: 'Team Building', href: '#services' },
      { name: 'Growth Strategy', href: '#services' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ]
  }

  return (
    <footer className={`bg-secondary-900 text-white ${className}`}>
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  {businessInfo.logo ? (
                    <img
                      src={businessInfo.logo}
                      alt={businessInfo.name}
                      className="h-8 w-8"
                    />
                  ) : (
                    <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {businessInfo.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="text-xl font-bold">{businessInfo.name}</span>
                </div>
                <p className="text-secondary-300 text-sm leading-relaxed">
                  {businessInfo.description}
                </p>
                <div className="flex space-x-4">
                  {businessInfo.socialMedia.facebook && (
                    <a
                      href={businessInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <FacebookIcon size={20} />
                    </a>
                  )}
                  {businessInfo.socialMedia.twitter && (
                    <a
                      href={businessInfo.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <TwitterIcon size={20} />
                    </a>
                  )}
                  {businessInfo.socialMedia.linkedin && (
                    <a
                      href={businessInfo.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                  )}
                  {businessInfo.socialMedia.instagram && (
                    <a
                      href={businessInfo.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <InstagramIcon size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Company Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="space-y-2">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MailIcon size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <PhoneIcon size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPinIcon size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-300 text-sm">
                      {businessInfo.address}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-secondary-400 text-sm">
              © {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.support.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
