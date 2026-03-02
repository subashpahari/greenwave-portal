import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Globe, Wrench } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Products" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Countries Served" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-gradient-green">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-dark relative">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-primary font-medium">Who We Are</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">
            About <span className="text-gradient-green">Greenwave Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Greenwave Solutions Pvt. Ltd. is a leading importer and distributor of premium electric vehicle components, 
            serving customers across the globe. Beyond EV parts, we provide comprehensive engineering services including 
            solar panel installations, energy audits, and industrial surveys — driving sustainability from the ground up.
          </p>
        </motion.div>

        {/* Icons row */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Leaf, title: "Sustainability First", desc: "Every product and service is designed to reduce carbon footprint and advance green energy adoption." },
            { icon: Globe, title: "Global Reach", desc: "We import and distribute premium EV components from trusted OEM manufacturers worldwide." },
            { icon: Wrench, title: "Engineering Excellence", desc: "From energy audits to solar installations, our certified team delivers turnkey solutions." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:border-glow transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
