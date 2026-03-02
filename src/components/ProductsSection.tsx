import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Cog, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const models = ["BYD Dolphin", "MG ZS EV", "MG Comet EV", "Kaiyi X3 Pro EV"];

const categories = [
  { name: "Accident & Body Parts", icon: ShieldCheck },
  { name: "Wear & Tear Parts", icon: Cog },
];

const productItems = [
  { name: "Front Bumper Assembly", category: "Accident & Body Parts" },
  { name: "Headlight Module", category: "Accident & Body Parts" },
  { name: "Side Mirror Housing", category: "Accident & Body Parts" },
  { name: "Fender Panel", category: "Accident & Body Parts" },
  { name: "Brake Pad Set", category: "Wear & Tear Parts" },
  { name: "Wiper Blade Kit", category: "Wear & Tear Parts" },
  { name: "Cabin Air Filter", category: "Wear & Tear Parts" },
  { name: "Suspension Bushing", category: "Wear & Tear Parts" },
];

const ProductsSection = () => {
  const [activeModel, setActiveModel] = useState(models[0]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? productItems.filter((p) => p.category === activeCategory)
    : productItems;

  return (
    <section id="products" className="section-padding relative">
      <div className="absolute inset-0 ring-pattern pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-primary font-medium">Our Catalog</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Electric Vehicle <span className="text-gradient-green">Parts</span>
          </h2>
        </motion.div>

        {/* Model tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {models.map((model) => (
            <button
              key={model}
              onClick={() => setActiveModel(model)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeModel === model
                  ? "bg-primary text-primary-foreground border-primary glow-green-sm"
                  : "bg-card border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              <Car className="inline h-4 w-4 mr-2" />
              {model}
            </button>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all border ${
              activeCategory === null
                ? "border-primary/40 text-primary bg-primary/10"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all border flex items-center gap-1.5 ${
                activeCategory === cat.name
                  ? "border-primary/40 text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <cat.icon className="h-3.5 w-3.5" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={`${activeModel}-${product.name}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-1">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-1">For {activeModel}</p>
                <p className="text-xs text-primary/70 mb-4">Genuine OEM replacement part</p>
                <Button variant="heroOutline" size="sm" className="w-full text-xs" asChild>
                  <a href="#contact">
                    Request Quote <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
