import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  const scrollToRoutine = () => {
    const element = document.getElementById('build-routine')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative hero-gradient text-white overflow-hidden">
      <div className="texture-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Elevate Your
                  <span className="block text-accent">Grooming Game</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl">
                  Premium beard care, advanced skincare, and classic shaving essentials. 
                  Crafted for the modern gentleman who values quality.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToRoutine}
                  className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 h-auto"
                >
                  Build Your Routine
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
                  Shop All Products
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-white/80">Natural Ingredients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm text-white/80">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9★</div>
                  <div className="text-sm text-white/80">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Kits */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="aspect-square bg-white/20 rounded-md mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop" 
                      alt="Complete Beard Kit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Complete Beard Kit</h3>
                  <p className="text-sm text-white/80 mb-3">Everything for a well-groomed beard</p>
                  <div className="text-2xl font-bold">$68</div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="aspect-square bg-white/20 rounded-md mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556228852-80a5e2c53b0e?w=400&h=400&fit=crop" 
                      alt="Essential Skincare Set"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Essential Skincare Set</h3>
                  <p className="text-sm text-white/80 mb-3">Complete 3-step routine</p>
                  <div className="text-2xl font-bold">$89</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}