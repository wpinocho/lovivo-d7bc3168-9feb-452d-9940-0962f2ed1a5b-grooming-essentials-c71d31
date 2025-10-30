import { ProductCard } from '@/components/ProductCard'
import { FloatingCart } from '@/components/FloatingCart'
import { NewsletterSection } from '@/components/NewsletterSection'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeroSection } from '@/components/HeroSection'
import { ThreeStepRoutine } from '@/components/ThreeStepRoutine'
import { CategoryShowcase } from '@/components/CategoryShowcase'
import { IngredientsFAQ } from '@/components/IngredientsFAQ'
import { BuildRoutineCTA } from '@/components/BuildRoutineCTA'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <HeroSection />

      {/* 3-Step Routine */}
      <ThreeStepRoutine />

      {/* Category Showcase */}
      <CategoryShowcase 
        onViewCategory={handleViewCollectionProducts}
      />

      {/* Featured Products Section */}
      <section className="py-20 bg-background" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Products'
                  : 'Featured Products'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'Discover our premium grooming essentials'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <button
                onClick={handleShowAllProducts}
                className="text-primary hover:text-accent font-semibold transition-colors"
              >
                View All Products →
              </button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No products available in this collection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Ingredients FAQ */}
      <IngredientsFAQ />

      {/* Build Routine CTA */}
      <BuildRoutineCTA />

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  )
}