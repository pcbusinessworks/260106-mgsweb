export const businessInfo = {
  name: 'BusinessWorks Inc.',
  tagline: 'Professional Solutions for Modern Businesses',
  description: 'We provide comprehensive business solutions that help companies grow, innovate, and succeed in today\'s competitive market.',
  logo: null, // Add your logo URL here
  email: 'contact@yourbusiness.com',
  phone: '+1 (555) 123-4567',
  address: '123 Business Street, City, State 12345',
  website: 'https://yourbusiness.com',
  socialMedia: {
    facebook: 'https://facebook.com/yourbusiness',
    twitter: 'https://twitter.com/yourbusiness',
    linkedin: 'https://linkedin.com/company/yourbusiness',
    instagram: 'https://instagram.com/yourbusiness',
  },
  // Google Reviews Integration
  googleReviews: {
    enabled: false, // Set to true to enable Google Reviews
    placeId: '', // Your Google Place ID (get from: https://developers.google.com/maps/documentation/places/web-service/place-id)
    apiKey: '', // Your Google Places API key
    maxReviews: 6, // Maximum number of reviews to display
    showRating: true, // Show overall rating
    showReviewCount: true, // Show total review count
  },
  // Third-party widget options
  reviewWidget: {
    enabled: false, // Set to true to use third-party widget
    provider: 'elfsight', // Options: 'elfsight', 'embedsocial', 'shapo'
    widgetId: '', // Your widget ID from the provider
    embedCode: '', // Direct embed code if using custom solution
  }
}

export const services = [
  {
    id: 1,
    title: 'Business Consulting',
    description: 'Strategic guidance to help your business grow and optimize operations.',
    icon: 'Briefcase',
    features: ['Strategic Planning', 'Process Optimization', 'Market Analysis']
  },
  {
    id: 2,
    title: 'Digital Solutions',
    description: 'Modern technology solutions to streamline your business processes.',
    icon: 'Zap',
    features: ['Web Development', 'Digital Marketing', 'Cloud Solutions']
  },
  {
    id: 3,
    title: 'Team Building',
    description: 'Build and develop high-performing teams for your organization.',
    icon: 'Users',
    features: ['Recruitment', 'Training', 'Performance Management']
  },
  {
    id: 4,
    title: 'Growth Strategy',
    description: 'Data-driven strategies to accelerate your business growth.',
    icon: 'Rocket',
    features: ['Market Expansion', 'Revenue Growth', 'Competitive Analysis']
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'Their business consulting services transformed our operations. We saw a 40% increase in efficiency within the first quarter.',
    rating: 5,
    avatar: null
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, StartupXYZ',
    content: 'The digital solutions they provided helped us scale from 10 to 100 employees seamlessly. Highly recommended!',
    rating: 5,
    avatar: null
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director, GrowthCo',
    content: 'Professional, reliable, and results-driven. They delivered exactly what they promised and more.',
    rating: 5,
    avatar: null
  }
]

export const aboutContent = {
  title: 'About Our Business',
  subtitle: 'Your Trusted Partner in Business Success',
  description: 'With over 10 years of experience in the industry, we have helped hundreds of businesses achieve their goals through strategic planning, innovative solutions, and dedicated support.',
  stats: [
    { label: 'Years Experience', value: '10+' },
    { label: 'Happy Clients', value: '500+' },
    { label: 'Projects Completed', value: '1000+' },
    { label: 'Team Members', value: '50+' }
  ],
  features: [
    'Proven track record of success',
    'Expert team of professionals',
    'Cutting-edge technology solutions',
    '24/7 customer support',
    'Customized business strategies',
    'Competitive pricing'
  ]
}
