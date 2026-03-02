import { motion } from "framer-motion";

const MarqueeSection = () => {
  const words = [
    "Greenwave Solutions",
    "Leading the Charge in Premium EV Components",
    "Sustainable Engineering Excellence",
    "Elite OEM Standards",
    "Innovation at Scale",
  ];

  return (
    <section className="bg-primary/5 border-y border-white/5 py-8 overflow-hidden">
      <div className="relative flex whitespace-nowrap">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-12 pr-12"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {words.map((word, index) => (
                <div key={index} className="flex items-center gap-12">
                  <span className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white/40 hover:text-primary transition-colors cursor-default whitespace-nowrap">
                    {word}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary/40 ring-4 ring-primary/10" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
