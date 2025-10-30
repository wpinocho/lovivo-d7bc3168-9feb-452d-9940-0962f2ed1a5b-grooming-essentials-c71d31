import { Droplets, Sparkles, Shield } from 'lucide-react'

export const ThreeStepRoutine = () => {
  const steps = [
    {
      number: '01',
      icon: Droplets,
      title: 'Cleanse',
      description: 'Remove dirt, oil, and impurities with our gentle yet effective cleansers. The foundation of any good routine.',
      products: ['Daily Face Cleanser', 'Beard Wash']
    },
    {
      number: '02',
      icon: Sparkles,
      title: 'Treat',
      description: 'Target specific concerns with powerful serums and treatments. Address aging, dullness, or irritation.',
      products: ['Vitamin C Serum', 'Beard Oil', 'Eye Cream']
    },
    {
      number: '03',
      icon: Shield,
      title: 'Protect',
      description: 'Lock in moisture and protect your skin throughout the day. Essential for maintaining healthy skin.',
      products: ['Face Moisturizer', 'Beard Balm', 'After Shave']
    }
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your 3-Step Routine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a grooming routine doesn't have to be complicated. 
            Follow these three simple steps for healthier skin and beard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-8">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="mt-8 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {step.description}
              </p>

              {/* Product Examples */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-foreground">Recommended:</div>
                {step.products.map((product) => (
                  <div key={product} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    {product}
                  </div>
                ))}
              </div>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Not sure where to start?
          </p>
          <a 
            href="#build-routine"
            className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
          >
            Take our quiz to build your perfect routine
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}