import { motion } from "framer-motion";
import { Shield, Zap, Award, Microscope, Users, Globe } from "lucide-react";
import bgBlack from "./bg-black.png";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Elite OEM Standards",
      desc: "Every component undergoes a rigorous 48-point diagnostic protocol to ensure compliance with global automotive safety and performance benchmarks.",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      desc: "Our engineering team holds Tier-1 certifications in high-voltage system integration and sustainable material sourcing.",
    },
    {
      icon: Microscope,
      title: "Advanced R&D",
      desc: "We maintain a state-of-the-art laboratory dedicated to thermal management optimization and battery lifecycle longevity.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      desc: "Localized distribution hubs ensure that technical support and part replacement are prioritized for minimal downtime.",
    },
    {
      icon: Globe,
      title: "Global Supply Chain",
      desc: "Strategic partnerships with the world's leading rare-earth material suppliers guarantee a stable and ethical manufacturing pipeline.",
    },
    {
      icon: Users,
      title: "Strategic Advisory",
      desc: "Beyond parts, we provide comprehensive consultancy for fleet electrification and infrastructure transition planning.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgBlack}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-bold">
            Unrivaled Standards
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4 tracking-tight leading-tight">
            The <span className="text-gradient-green italic">Greenwave</span>{" "}
            Edge
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Where precision engineering meets sustainable vision. We provide the
            critical infrastructure for the future of global mobility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="premium-card hover-why group p-10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <item.icon className="h-8 w-8 text-primary relative z-10" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-10 flex items-center text-primary/30 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-primary transition-all duration-500">
                Premium Service{" "}
                <div className="ml-4 h-px flex-grow bg-primary/10 group-hover:bg-primary/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
