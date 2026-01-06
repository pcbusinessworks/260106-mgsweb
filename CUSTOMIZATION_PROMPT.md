# Business Website Template Customization Prompt

Use this prompt to easily customize the business website template for your specific business needs. Simply replace the placeholder values with your actual business information.

## 🎯 Quick Customization Prompt

```
I need to customize this business website template for my business. Here are my details:

**Business Information:**
- Business Name: [Your Business Name]
- Tagline: [Your Business Tagline/Slogan]
- Description: [Brief description of what your business does]
- Industry: [Your industry/sector]

**Contact Information:**
- Email: [your-email@domain.com]
- Phone: [+1 (555) 123-4567]
- Address: [Your business address]
- Website: [https://yourwebsite.com]

**Social Media (optional):**
- Facebook: [https://facebook.com/yourbusiness]
- Twitter: [https://twitter.com/yourbusiness]
- LinkedIn: [https://linkedin.com/company/yourbusiness]
- Instagram: [https://instagram.com/yourbusiness]

**Services (3-4 main services):**
1. [Service 1 Name] - [Brief description]
2. [Service 2 Name] - [Brief description]
3. [Service 3 Name] - [Brief description]
4. [Service 4 Name] - [Brief description]

**Pricing (optional):**
- Starter Package: $[price] - [What's included]
- Professional Package: $[price] - [What's included]
- Enterprise Package: $[price] - [What's included]

**Google Reviews (optional):**
- Google Place ID: [Your Google Place ID]
- Google API Key: [Your Google API Key]

Please update the template with this information and ensure all content reflects my business.
```

## 📋 Detailed Customization Guide

### Step 1: Basic Business Information

**File to Update:** `src/config/business.ts`

```typescript
export const businessInfo = {
  name: '[Your Business Name]',
  tagline: '[Your Business Tagline]',
  description: '[Your business description]',
  email: '[your-email@domain.com]',
  phone: '[+1 (555) 123-4567]',
  address: '[Your business address]',
  website: '[https://yourwebsite.com]',
  // ... rest of config
}
```

### Step 2: Services Customization

**File to Update:** `src/config/business.ts` (services array)

```typescript
export const services = [
  {
    id: 1,
    title: '[Your Service 1]',
    description: '[Service 1 description]',
    icon: 'Briefcase', // Choose from: Briefcase, Zap, Users, Rocket, etc.
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  // ... add more services
]
```

### Step 3: Testimonials (Optional)

**File to Update:** `src/config/business.ts` (testimonials array)

```typescript
export const testimonials = [
  {
    id: 1,
    name: '[Customer Name]',
    role: '[Customer Title, Company]',
    content: '[Customer testimonial]',
    rating: 5,
    avatar: null // Add image URL if available
  },
  // ... add more testimonials
]
```

### Step 4: About Content

**File to Update:** `src/config/business.ts` (aboutContent object)

```typescript
export const aboutContent = {
  title: 'About [Your Business Name]',
  subtitle: '[Your value proposition]',
  description: '[Your company story and mission]',
  stats: [
    { label: 'Years Experience', value: '[X]+' },
    { label: 'Happy Clients', value: '[X]+' },
    { label: 'Projects Completed', value: '[X]+' },
    { label: 'Team Members', value: '[X]+' }
  ],
  features: [
    '[Your key feature 1]',
    '[Your key feature 2]',
    // ... add more features
  ]
}
```

## 🎨 Visual Customization

### Colors and Branding

**File to Update:** `src/index.css` or create custom CSS

```css
:root {
  --primary-50: #f0f9ff;
  --primary-600: #0284c7; /* Your primary brand color */
  --secondary-600: #7c3aed; /* Your secondary brand color */
  /* ... update other color variables */
}
```

### Logo Integration

**File to Update:** `src/config/business.ts`

```typescript
export const businessInfo = {
  // ... other config
  logo: 'https://yourdomain.com/logo.png', // Add your logo URL
  // ... rest of config
}
```

## 📊 Google Reviews Setup

### Option 1: Quick Setup (Third-party Widget)

1. Sign up with [Elfsight](https://elfsight.com/google-reviews-widget/)
2. Connect your Google Business Profile
3. Get your widget ID
4. Update config:

```typescript
export const businessInfo = {
  // ... other config
  reviewWidget: {
    enabled: true,
    provider: 'elfsight',
    widgetId: 'your-widget-id-here',
    embedCode: '',
  }
}
```

### Option 2: Advanced Setup (Google Places API)

1. Get your Google Place ID from [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Get API key from [Google Cloud Console](https://console.cloud.google.com/)
3. Update config:

```typescript
export const businessInfo = {
  // ... other config
  googleReviews: {
    enabled: true,
    placeId: 'your-place-id',
    apiKey: 'your-api-key',
    maxReviews: 6,
    showRating: true,
    showReviewCount: true,
  }
}
```

## 🚀 Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Custom Domain

1. Add your custom domain in Netlify
2. Update DNS settings
3. Enable HTTPS

## 📱 Content Guidelines

### Writing Effective Content

**Headlines:**
- Keep under 60 characters
- Use action words
- Focus on benefits, not features

**Descriptions:**
- Use simple, clear language
- Focus on customer benefits
- Include relevant keywords

**Call-to-Actions:**
- Use action-oriented language
- Create urgency when appropriate
- Make it clear what happens next

### SEO Optimization

**Meta Tags:**
- Update page titles and descriptions
- Include relevant keywords
- Keep descriptions under 160 characters

**Content Structure:**
- Use proper heading hierarchy (H1, H2, H3)
- Include relevant keywords naturally
- Add alt text to images

## 🔧 Technical Customization

### Adding New Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

### Custom Components

1. Create component in `src/components/`
2. Import and use in pages
3. Follow existing patterns for consistency

### Styling

- Use Tailwind CSS classes
- Follow existing design patterns
- Maintain responsive design
- Test on mobile devices

## 📋 Pre-Launch Checklist

- [ ] All business information updated
- [ ] Contact information verified
- [ ] Services accurately described
- [ ] Testimonials added (if available)
- [ ] Google Reviews integrated (if desired)
- [ ] Logo uploaded and displaying
- [ ] Social media links working
- [ ] Contact form tested
- [ ] Mobile responsiveness checked
- [ ] Page loading speed optimized
- [ ] SEO meta tags updated
- [ ] Analytics tracking added (if desired)

## 🆘 Common Issues & Solutions

**Images not loading:**
- Check image URLs are correct
- Ensure images are optimized for web
- Use proper file formats (JPG, PNG, WebP)

**Contact form not working:**
- Verify Netlify form integration
- Check form field names match
- Test form submission

**Google Reviews not showing:**
- Verify Place ID is correct
- Check API key permissions
- Ensure business has Google reviews

**Styling issues:**
- Check Tailwind CSS classes
- Verify responsive breakpoints
- Test on different devices

## 📞 Support

If you need help customizing the template:

1. Check this documentation first
2. Review the code comments
3. Test changes in development mode
4. Use browser developer tools for debugging

## 🎉 Success Tips

- Start with basic information first
- Test changes frequently
- Keep content concise and clear
- Focus on user experience
- Optimize for mobile devices
- Regular updates keep content fresh

---

**Ready to customize?** Use the quick customization prompt at the top of this document and replace the placeholder values with your actual business information!
