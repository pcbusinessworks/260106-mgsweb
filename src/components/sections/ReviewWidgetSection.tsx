import { useEffect, useRef } from 'react'
import { businessInfo } from '@/config/business'

interface ReviewWidgetSectionProps {
  className?: string
}

export function ReviewWidgetSection({ className }: ReviewWidgetSectionProps) {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!businessInfo.reviewWidget.enabled || !widgetRef.current) {
      return
    }

    const { provider, widgetId, embedCode } = businessInfo.reviewWidget

    // If custom embed code is provided, use it directly
    if (embedCode) {
      widgetRef.current.innerHTML = embedCode
      return
    }

    // Load third-party widget based on provider
    switch (provider) {
      case 'elfsight':
        loadElfsightWidget(widgetId)
        break
      case 'embedsocial':
        loadEmbedSocialWidget(widgetId)
        break
      case 'shapo':
        loadShapoWidget(widgetId)
        break
      default:
        console.warn(`Unknown review widget provider: ${provider}`)
    }
  }, [])

  const loadElfsightWidget = (widgetId: string) => {
    if (!widgetRef.current) return

    // Elfsight widget script
    const script = document.createElement('script')
    script.src = 'https://apps.elfsight.com/p/platform.js'
    script.defer = true
    script.onload = () => {
      // Initialize Elfsight widget
      if (window.Elsight && widgetId) {
        window.Elsight.init()
      }
    }
    document.head.appendChild(script)

    // Create widget container
    widgetRef.current.innerHTML = `
      <div class="elfsight-app-${widgetId}" data-elfsight-app-lazy></div>
    `
  }

  const loadEmbedSocialWidget = (widgetId: string) => {
    if (!widgetRef.current) return

    // EmbedSocial widget script
    const script = document.createElement('script')
    script.src = 'https://embedsocial.com/cdn/ht.js'
    script.defer = true
    document.head.appendChild(script)

    // Create widget container
    widgetRef.current.innerHTML = `
      <div class="embedsocial-reviews" data-ref="${widgetId}"></div>
    `
  }

  const loadShapoWidget = (widgetId: string) => {
    if (!widgetRef.current) return

    // Shapo widget script
    const script = document.createElement('script')
    script.src = 'https://widget.shapo.io/widget.js'
    script.defer = true
    document.head.appendChild(script)

    // Create widget container
    widgetRef.current.innerHTML = `
      <div class="shapo-widget" data-widget-id="${widgetId}"></div>
    `
  }

  if (!businessInfo.reviewWidget.enabled) {
    return null
  }

  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Customer Reviews
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what our customers are saying about us
          </p>
        </div>
        
        <div 
          ref={widgetRef}
          className="review-widget-container"
          style={{ minHeight: '400px' }}
        />
      </div>
    </section>
  )
}

// Extend Window interface for third-party widgets
declare global {
  interface Window {
    Elsight?: any
  }
}
