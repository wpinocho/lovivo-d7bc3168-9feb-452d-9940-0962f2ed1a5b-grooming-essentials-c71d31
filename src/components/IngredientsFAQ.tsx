import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Leaf, Droplet, Sparkles, Shield } from 'lucide-react'

export const IngredientsFAQ = () => {
  const faqs = [
    {
      question: "What are the key ingredients in your beard care products?",
      answer: "Our beard products feature premium natural oils including argan oil, jojoba oil, and sweet almond oil for deep conditioning. We add essential oils like cedarwood and sandalwood for a masculine scent. Shea butter and beeswax provide hold and styling capability while vitamin E promotes healthy growth.",
      icon: Leaf
    },
    {
      question: "What makes your face moisturizers effective?",
      answer: "Our moisturizers combine hyaluronic acid for intense hydration, retinol for anti-aging benefits, and niacinamide to improve skin texture. We use lightweight, non-comedogenic formulas that absorb quickly without leaving a greasy residue. Perfect for all skin types.",
      icon: Droplet
    },
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Yes! We formulate all products to be gentle yet effective. Our cleansers are sulfate-free, and we avoid harsh alcohols in our aftershaves. We use soothing ingredients like aloe vera, chamomile, and allantoin to calm irritation. All products are dermatologically tested.",
      icon: Shield
    },
    {
      question: "What's in your Vitamin C Serum?",
      answer: "Our serum features stabilized L-ascorbic acid (15% concentration) for maximum effectiveness. We add ferulic acid and vitamin E to boost antioxidant protection. Hyaluronic acid provides hydration while the lightweight formula absorbs quickly. Visible brightening results in 2-4 weeks.",
      icon: Sparkles
    },
    {
      question: "Do you use natural or synthetic ingredients?",
      answer: "We use a thoughtful blend of both. Natural ingredients like plant oils, botanical extracts, and essential oils form the base of our formulas. We incorporate proven synthetic ingredients like hyaluronic acid and peptides where they offer superior efficacy and stability. All ingredients are safe, tested, and effective.",
      icon: Leaf
    },
    {
      question: "Are your products cruelty-free and vegan?",
      answer: "All our products are cruelty-free - we never test on animals. Most of our products are vegan, with the exception of those containing beeswax or honey. We clearly label all ingredients and are committed to ethical, sustainable sourcing practices.",
      icon: Shield
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ingredients & FAQ
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn about the powerful ingredients in our products and get answers to common questions
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4 pr-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <faq.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-semibold text-foreground text-lg">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-14 pr-4 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Info */}
        <div className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-xl mb-2">
                Our Ingredient Philosophy
              </h3>
              <p className="text-muted-foreground">
                We believe in transparency and efficacy. Every ingredient serves a purpose, 
                and we never use fillers or harmful chemicals. Our formulations are backed by 
                science and crafted with care. If you have questions about specific ingredients, 
                our team is always happy to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}