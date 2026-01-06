import { GoogleReviewsSection } from './GoogleReviewsSection'
import { ReviewWidgetSection } from './ReviewWidgetSection'
import { TestimonialsSection } from './TestimonialsSection'
import { businessInfo } from '@/config/business'

interface SmartTestimonialsSectionProps {
  className?: string
}

export function SmartTestimonialsSection({ className }: SmartTestimonialsSectionProps) {
  // Priority order: Google Reviews > Review Widget > Manual Testimonials
  
  if (businessInfo.googleReviews.enabled) {
    return <GoogleReviewsSection className={className} />
  }
  
  if (businessInfo.reviewWidget.enabled) {
    return <ReviewWidgetSection className={className} />
  }
  
  // Fallback to manual testimonials
  return <TestimonialsSection className={className} />
}
