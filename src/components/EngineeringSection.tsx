import { motion } from "framer-motion";
import { Sun, BarChart3, Factory, Plug, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    desc: "End-to-end solar energy solutions for residential and commercial properties.",
    points: [
      "Residential & Commercial",
      "Grid-Tied & Off-Grid",
      "Maintenance Plans",
    ],
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
    points: [
      "Fleet Transition Plans",
      "Charging Infrastructure",
      "TCO Analysis",
    ],
  },
];

const EngineeringSection = () => {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-dark relative"
    >
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container px-2 md:mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-primary font-medium">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Engineering <span className="text-gradient-green">Solutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="premium-card hover-engineering group p-5 md:p-10 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                    {service.desc ===
                    "End-to-end solar energy solutions for residential and commercial properties."
                      ? "Custom-engineered photovoltaic arrays designed for maximum irradiance capture. We provide full-lifecycle management from initial feasibility studies to net-metering synchronization."
                      : service.desc ===
                          "Comprehensive energy analysis to optimize consumption and reduce costs."
                        ? "Advanced thermographic imaging and power-factor analysis to identify systemic inefficiencies. Our audits provide a roadmap for 30%+ reduction in operational energy expenditure."
                        : service.desc ===
                            "Detailed assessments of industrial facilities for energy efficiency upgrades."
                          ? "High-precision physical and digital surveys of manufacturing infrastructure. We deliver comprehensive asset health reports and retrofitting blueprints for industrial scaling."
                          : "Strategic transition frameworks for heavy-duty fleet electrification. We specialize in high-voltage charging topology and total cost of ownership (TCO) optimization."}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm font-medium text-foreground/70"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 opacity-60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40">
                  Engineering Excellence
                </span>
                <div className="h-1 w-12 rounded-full bg-primary/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
