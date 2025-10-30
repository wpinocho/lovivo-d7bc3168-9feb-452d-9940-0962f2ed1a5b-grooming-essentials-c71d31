import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const BuildRoutineCTA = () => {
  const benefits = [
    'Personalized product recommendations',
    'Expert grooming tips and guidance',
    'Save 15% on your first routine bundle',
    'Free shipping on orders over $50'
  ]

  return (
    <section id="build-routine" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                Personalized for You
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Build Your Perfect Routine
              </h2>
              <p className="text-lg text-white/90">
                Answer a few quick questions about your skin type, concerns, and goals. 
                We'll create a customized grooming routine just for you.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
              >
                Start Quiz Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 h-auto"
                onClick={() => {
                  const element = document.getElementById('products')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Browse All Products
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 pt-4 text-sm text-white/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Takes only 2 minutes • 100% free • No credit card required</span>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="aspect-square bg-white/20 rounded-md mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556228852-80a5e2c53b0e?w=300&h=300&fit=crop"
                      alt="Skincare routine"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm font-semibold">Step 1: Cleanse</div>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="aspect-square bg-white/20 rounded-md mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1620916297893-e22c3c4e8b0f?w=300&h=300&fit=crop"
                      alt="Treatment step"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm font-semibold">Step 2: Treat</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-primary px-6 py-3 rounded-full shadow-xl font-bold text-lg whitespace-nowrap">
              🎁 Save 15% on Bundles
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}