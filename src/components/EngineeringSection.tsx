import { motion } from "framer-motion";
import { Sun, BarChart3, Factory, Plug, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    desc: "End-to-end solar energy solutions for residential and commercial properties.",
    points: ["Residential & Commercial", "Grid-Tied & Off-Grid", "Maintenance Plans"],
  },
  {
    icon: BarChart3,
    title: "Energy Audits",
    desc: "Comprehensive energy analysis to optimize consumption and reduce costs.",
    points: ["ROI Analysis", "Compliance Reports", "Savings Projections"],
  },
  {
    icon: Factory,
    title: "Industrial Surveys",
    desc: "Detailed assessments of industrial facilities for energy efficiency upgrades.",
    points: ["Equipment Assessment", "Load Analysis", "Upgrade Roadmap"],
  },
  {
    icon: Plug,
    title: "EV Consulting",
    desc: "Strategic guidance for EV infrastructure planning and fleet electrification.",
    points: ["Fleet Transition Plans", "Charging Infrastructure", "TCO Analysis"],
  },
];

const EngineeringSection = () => {
  return (
    <section id="services" className="section-padding bg-gradient-dark relative">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-primary font-medium">What We Offer</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Engineering <span className="text-gradient-green">Solutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-glow transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
