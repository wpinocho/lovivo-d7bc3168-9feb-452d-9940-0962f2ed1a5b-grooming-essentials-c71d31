import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface Category {
  name: string
  description: string
  image: string
  productCount: string
  collectionId: string
}

interface CategoryShowcaseProps {
  onViewCategory: (collectionId: string) => void
}

export const CategoryShowcase = ({ onViewCategory }: CategoryShowcaseProps) => {
  const categories: Category[] = [
    {
      name: 'Beard Care',
      description: 'Premium oils, balms, and washes for a healthy, well-groomed beard',
      image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&h=600&fit=crop',
      productCount: '4+ Products',
      collectionId: 'beard-care'
    },
    {
      name: 'Face Care',
      description: 'Advanced skincare solutions for healthy, youthful-looking skin',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop',
      productCount: '5+ Products',
      collectionId: 'face-care'
    },
    {
      name: 'Shaving Essentials',
      description: 'Classic tools and products for the perfect traditional shave',
      image: 'https://images.unsplash.com/photo-1623699482035-e9c7b0f2a3d5?w=800&h=600&fit=crop',
      productCount: '4+ Products',
      collectionId: 'shaving-essentials'
    }
  ]

  return (
    <section className="py-20 bg-background" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of premium grooming products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {category.productCount}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>

                <Button 
                  onClick={() => onViewCategory(category.collectionId)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}