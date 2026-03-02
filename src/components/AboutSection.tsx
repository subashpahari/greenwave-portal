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
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-heading font-bold text-gradient-green"
    >
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-dark relative">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container px-2 md:mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-bold">
            The Sustainable Vanguard
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight">
            Defining the Future of{" "}
            <span className="text-gradient-green italic">
              Electric Mobility
            </span>
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-xl leading-relaxed font-light">
            Greenwave Solutions Pvt. Ltd. stands as a premier architect of the
            electric revolution. We don't just import components; we curate the
            critical building blocks of global sustainability. Our dual-pillar
            approach combines the distribution of precision-engineered EV
            modules with bespoke engineering consulting—powering transition from
            high-density urban centers to the most demanding industrial
            environments.
          </p>
        </motion.div>

        {/* Icons row */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-20">
          {[
            {
              icon: Leaf,
              title: "Sustainability First",
              desc: "Every product and service is designed to reduce carbon footprint and advance green energy adoption.",
            },
            {
              icon: Globe,
              title: "Global Reach",
              desc: "We import and distribute premium EV components from trusted OEM manufacturers worldwide.",
            },
            {
              icon: Wrench,
              title: "Engineering Excellence",
              desc: "From energy audits to solar installations, our certified team delivers turnkey solutions.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-5 md:p-8 rounded-3xl premium-card group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
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
