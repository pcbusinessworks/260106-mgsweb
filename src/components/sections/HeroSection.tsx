import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icon'
import { businessInfo } from '@/config/business'
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations'

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  const features = [
    'Professional Services',
    'Expert Team',
    'Proven Results',
    '24/7 Support'
  ]

  return (
    <section id="home" className={`section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden ${className}`}>
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating circles */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, 10, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-lg"
        />
        
        {/* Floating triangles */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 120, 240, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-60 left-1/4 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-orange-400/30"
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [360, 240, 120, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-40 right-1/3 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-pink-400/30"
        />
        
        {/* Floating squares */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute top-32 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-lg blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0],
            rotate: [360, 270, 180, 90, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2.5
          }}
          className="absolute bottom-60 left-20 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg blur-sm"
        />
        
        {/* Floating hexagons */}
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 60, 120, 180, 240, 300, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-80 left-1/2 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20"
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
          }}
        />
        
        {/* Floating diamonds */}
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rotate-45 blur-sm"
        />
        
        {/* Animated lines */}
        <motion.div
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        />
        <motion.div
          animate={{ 
            scaleY: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-0 right-1/3 w-0.5 h-32 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 6 + i * 0.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${80 + (i % 3) * 10}%`
            }}
          />
        ))}
        
        {/* Additional geometric patterns */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/2 w-40 h-40 border border-blue-400/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-purple-400/20 rounded-full"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                🏢 Professional Business Solutions
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                {businessInfo.tagline}
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-slate-600 max-w-2xl"
              >
                {businessInfo.description}
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon size={14} className="text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="group bg-blue-600 hover:bg-blue-700">
                  Get Started
                  <ArrowRightIcon 
                    size={20} 
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                  />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Business Image/Visual */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <div className="relative">
              {/* Main Business Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {businessInfo.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{businessInfo.name}</h3>
                    <p className="text-slate-600">Professional Services</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Client Satisfaction</span>
                    <span className="text-green-600 font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Projects Completed</span>
                    <span className="text-blue-600 font-semibold">500+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Years Experience</span>
                    <span className="text-purple-600 font-semibold">10+</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements around the card */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-sm"
              />
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  x: [0, -5, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-full blur-sm"
              />
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  x: [0, 8, 0],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -top-2 -left-8 w-12 h-12 bg-gradient-to-br from-purple-400/25 to-pink-400/25 rounded-lg blur-sm"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [360, 270, 180, 90, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute -bottom-2 -right-8 w-14 h-14 bg-gradient-to-br from-orange-400/25 to-yellow-400/25 rounded-lg blur-sm"
              />
              
              {/* Small accent shapes */}
              <motion.div
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full"
              />
              <motion.div
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-4 left-4 w-2 h-2 bg-green-500 rounded-full"
              />
              <motion.div
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 3.5
                }}
                className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
