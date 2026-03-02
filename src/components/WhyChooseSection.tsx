import { motion } from "framer-motion";
import {
  Award,
  Truck,
  Headphones,
  DollarSign,
  RotateCcw,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Elite OEM Standards",
    desc: "Our components exceed standard durability benchmarks, sourced exclusively from Tier-1 manufacturers. Every part undergoes rigorous 12-point quality validation before inclusion in our elite catalog.",
    size: "large",
  },
  {
    icon: Truck,
    title: "Swift Global Logistics",
    desc: "Seamless, priority air-freight and maritime shipping to over 50 nations with real-time telemetry tracking for every high-value shipment.",
    size: "medium",
  },
  {
    icon: ShieldCheck,
    title: "Certified Reliability",
    desc: "Comprehensive safety certifications ensuring seamless integration with modern EV architectures.",
    size: "small",
  },
  {
    icon: Zap,
    title: "Next-Gen Engineering",
    desc: "Leveraging cutting-edge thermal management and high-voltage efficiency in every imported module.",
    size: "small",
  },
  {
    icon: Headphones,
    title: "Artisanal Support",
    desc: "Direct access to our senior engineering desk for complex integration inquiries and technical troubleshooting, available 24/7.",
    size: "medium",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="mesh-gradient" />

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
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
