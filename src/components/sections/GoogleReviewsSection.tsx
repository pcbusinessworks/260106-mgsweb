import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ExternalLink, MapPin } from 'lucide-react'
import { businessInfo } from '@/config/business'
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations'

interface GoogleReview {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface GooglePlaceDetails {
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
}

interface GoogleReviewsSectionProps {
  className?: string
}

export function GoogleReviewsSection({ className }: GoogleReviewsSectionProps) {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [placeDetails, setPlaceDetails] = useState<GooglePlaceDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!businessInfo.googleReviews.enabled || !businessInfo.googleReviews.placeId || !businessInfo.googleReviews.apiKey) {
      setLoading(false)
      return
    }

    fetchGoogleReviews()
  }, [])

  const fetchGoogleReviews = async () => {
    try {
      setLoading(true)
      setError(null)

      const { placeId, apiKey, maxReviews } = businessInfo.googleReviews
      
      // Fetch place details including reviews
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch Google Reviews')
      }

      const data = await response.json()

      if (data.status !== 'OK') {
        throw new Error(data.error_message || 'Failed to fetch reviews')
      }

      const placeData = data.result
      setPlaceDetails({
        rating: placeData.rating || 0,
        user_ratings_total: placeData.user_ratings_total || 0,
        reviews: (placeData.reviews || []).slice(0, maxReviews)
      })

      setReviews((placeData.reviews || []).slice(0, maxReviews))
    } catch (err) {
      console.error('Error fetching Google Reviews:', err)
      setError(err instanceof Error ? err.message : 'Failed to load reviews')
    } finally {
      setLoading(false)
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  if (!businessInfo.googleReviews.enabled) {
    return null
  }

  if (loading) {
    return (
      <section className={`py-20 bg-slate-50 ${className}`}>
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto mb-8"></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                    <div className="h-20 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className={`py-20 bg-slate-50 ${className}`}>
        <div className="container-custom">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
              <p className="font-semibold">Unable to load Google Reviews</p>
              <p className="text-sm mt-1">{error}</p>
              <button
                onClick={fetchGoogleReviews}
                className="mt-2 text-sm underline hover:no-underline"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (reviews.length === 0) {
    return null
  }

  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Real reviews from real customers on Google
          </p>
          
          {placeDetails && businessInfo.googleReviews.showRating && (
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {renderStars(Math.round(placeDetails.rating))}
                </div>
                <span className="text-2xl font-bold text-slate-900">
                  {placeDetails.rating.toFixed(1)}
                </span>
              </div>
              {businessInfo.googleReviews.showReviewCount && (
                <div className="text-slate-600">
                  Based on {placeDetails.user_ratings_total} reviews
                </div>
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.time}
              variants={staggerItem}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {review.profile_photo_url ? (
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-sm">
                      {review.author_name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{review.author_name}</h4>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <div className="text-xs text-slate-500">
                  {review.relative_time_description}
                </div>
              </div>
              
              <p className="text-slate-700 mb-4 line-clamp-4">
                {review.text}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span>Google Review</span>
                </div>
                {review.author_url && (
                  <a
                    href={review.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    View on Google
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${businessInfo.googleReviews.placeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <MapPin className="w-5 h-5" />
            View All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
