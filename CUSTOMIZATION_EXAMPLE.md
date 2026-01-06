# Customization Example

Here's a real example of how to customize the template for a digital marketing agency:

## Example Business: "Digital Growth Co."

### Quick Customization Prompt (Filled Out):

```
I need to customize this business website template for my business. Here are my details:

**Business Information:**
- Business Name: Digital Growth Co.
- Tagline: Accelerate Your Digital Success
- Description: We help businesses grow online through strategic digital marketing, web development, and data-driven solutions.
- Industry: Digital Marketing & Web Development

**Contact Information:**
- Email: hello@digitalgrowthco.com
- Phone: +1 (555) 123-4567
- Address: 123 Digital Street, Tech City, TC 12345
- Website: https://digitalgrowthco.com

**Social Media:**
- Facebook: https://facebook.com/digitalgrowthco
- Twitter: https://twitter.com/digitalgrowthco
- LinkedIn: https://linkedin.com/company/digital-growth-co
- Instagram: https://instagram.com/digitalgrowthco

**Services:**
1. Digital Marketing - Comprehensive online marketing strategies including SEO, PPC, and social media
2. Web Development - Custom websites and web applications built for performance and conversion
3. Analytics & Reporting - Data-driven insights to optimize your digital presence
4. Brand Strategy - Complete brand identity and positioning for digital success

**Pricing:**
- Starter Package: $2,999 - Basic website + 3 months marketing
- Professional Package: $5,999 - Advanced website + 6 months marketing + analytics
- Enterprise Package: $9,999 - Custom solution + 12 months marketing + dedicated support

**Google Reviews:**
- Google Place ID: ChIJN1t_tDeuEmsRUsoyG83frY4
- Google API Key: AIzaSyBvOkBw...

**Additional Requirements:**
- Logo URL: https://digitalgrowthco.com/logo.png
- Brand Colors: Primary: #2563eb (Blue), Secondary: #7c3aed (Purple)
- Special Features: Case studies section, client portfolio, marketing blog

Please update the template with this information and ensure all content reflects my business.
```

## What This Would Update:

### 1. Business Config (`src/config/business.ts`):
```typescript
export const businessInfo = {
  name: 'Digital Growth Co.',
  tagline: 'Accelerate Your Digital Success',
  description: 'We help businesses grow online through strategic digital marketing, web development, and data-driven solutions.',
  email: 'hello@digitalgrowthco.com',
  phone: '+1 (555) 123-4567',
  address: '123 Digital Street, Tech City, TC 12345',
  website: 'https://digitalgrowthco.com',
  logo: 'https://digitalgrowthco.com/logo.png',
  socialMedia: {
    facebook: 'https://facebook.com/digitalgrowthco',
    twitter: 'https://twitter.com/digitalgrowthco',
    linkedin: 'https://linkedin.com/company/digital-growth-co',
    instagram: 'https://instagram.com/digitalgrowthco',
  }
}
```

### 2. Services Updated:
```typescript
export const services = [
  {
    id: 1,
    title: 'Digital Marketing',
    description: 'Comprehensive online marketing strategies including SEO, PPC, and social media.',
    icon: 'Zap',
    features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing']
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Custom websites and web applications built for performance and conversion.',
    icon: 'Monitor',
    features: ['Custom Development', 'Performance Optimization', 'Mobile Responsive']
  },
  // ... more services
]
```

### 3. Pricing Updated:
```typescript
const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,999',
    period: 'one-time',
    description: 'Perfect for small businesses getting started online',
    features: [
      'Basic website (up to 5 pages)',
      '3 months digital marketing',
      'SEO setup and optimization',
      'Google Analytics integration',
      'Monthly reporting'
    ],
    popular: false,
    cta: 'Get Started'
  },
  // ... more plans
]
```

## Result:

The template would be completely customized for Digital Growth Co. with:
- ✅ All business information updated
- ✅ Services tailored to digital marketing
- ✅ Pricing packages for their industry
- ✅ Contact information and social links
- ✅ Brand colors and logo
- ✅ Google Reviews integration
- ✅ Professional content throughout

## How to Use This Example:

1. **Copy the example prompt above**
2. **Replace all the Digital Growth Co. information with your business details**
3. **Paste the customized prompt to your AI assistant**
4. **The template will be updated automatically**

This makes it incredibly easy to customize the template for any business type - just fill in your details and the AI handles all the technical updates!
