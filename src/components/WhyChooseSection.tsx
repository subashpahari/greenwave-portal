import { motion } from "framer-motion";
import { Award, Truck, Headphones, DollarSign, RotateCcw, Clock } from "lucide-react";

const reasons = [
  { icon: Award, title: "Premium Quality", desc: "Genuine OEM parts with full certification." },
  { icon: Truck, title: "Global Shipping", desc: "Fast, reliable delivery to 50+ countries." },
  { icon: Headphones, title: "Expert Support", desc: "Dedicated technical assistance for every order." },
  { icon: DollarSign, title: "Competitive Pricing", desc: "Best value without compromising quality." },
  { icon: RotateCcw, title: "Easy Returns", desc: "Hassle-free return and exchange policy." },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock customer service." },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-primary font-medium">Our Promise</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Why Choose <span className="text-gradient-green">Greenwave</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-glow transition-all duration-300"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
