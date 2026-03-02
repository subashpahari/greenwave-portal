import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Cog,
  ShieldCheck,
  ArrowRight,
  Battery,
  LifeBuoy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import bydImg from "./byd.jpg";
import mgZsImg from "./mg-zs.jpg";
import kaiyiImg from "./kaiyi.webp";
import Deepal from "./deepal.webp";
import neta from "./neta.webp";
import hyundaiImg from "./hyundai.webp";
import kiaImg from "./kia.jpg";
import suzukiImg from "./suzuki.webp";
import fotonImg from "./foton.jpg";

const modelImages: Record<string, string> = {
  BYD: bydImg,
  MG: mgZsImg,
  Deepal: Deepal,
  Kaiyi: kaiyiImg,
  Neta: neta,
  Hyundai: hyundaiImg,
  Kia: kiaImg,
  Suzuki: suzukiImg,
  Foton: fotonImg,
};

const models = [
  "BYD",
  "MG",
  "Kaiyi",
  "Deepal",
  "Neta",
  "Hyundai",
  "Kia",
  "Suzuki",
  "Foton",
];

const categories = [
  { name: "Accident & Body Parts", icon: ShieldCheck },
  { name: "Wear & Tear Parts", icon: Cog },
  { name: "Battery", icon: Battery },
  { name: "Tires", icon: LifeBuoy },
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
    <section id="products" className="section-padding relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={modelImages[activeModel]}
              alt={activeModel}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 ring-pattern pointer-events-none z-1" />
      <div className="container px-4 md:mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-primary font-medium">
            Our Catalog
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Electric Vehicle <span className="text-gradient-green">Parts</span>
          </h2>
        </motion.div>

        {/* Model tabs */}
        <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 mb-8 pb-2 px-1 -mx-1">
          {models.map((model) => (
            <button
              key={model}
              onClick={() => setActiveModel(model)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 border whitespace-nowrap ${
                activeModel === model
                  ? "bg-primary text-primary-foreground border-primary glow-green-sm"
                  : "bg-card/40 backdrop-blur-md border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              <Car className="inline h-3.5 w-3.5 mr-1.5" />
              {model}
            </button>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 mb-12 pb-2 px-1 -mx-1">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all border whitespace-nowrap ${
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
              className={`px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all border flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === cat.name
                  ? "border-primary/40 text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <cat.icon className="h-3 w-3" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={`${activeModel}-${product.name}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="premium-card hover-product group p-5 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-inner">
                      <Cog className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] bg-primary/5 px-2 py-1 rounded-md">
                      In Stock
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-2 tracking-tight">
                    {product.name}
                  </h3>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary/40" />
                      Compatibility:{" "}
                      <span className="text-foreground/80 font-medium">
                        {activeModel} Series
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary/40" />
                      Type:{" "}
                      <span className="text-foreground/80 font-medium">
                        Genuine OEM Specification
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary/40" />
                      Warranty:{" "}
                      <span className="text-foreground/80 font-medium">
                        24 Months / International
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="heroOutline"
                  size="sm"
                  className="w-full text-xs font-bold tracking-widest uppercase py-6 border-white/5 hover:bg-white/5"
                  asChild
                >
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2"
                  >
                    Request technical data <ArrowRight className="h-3 w-3" />
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
