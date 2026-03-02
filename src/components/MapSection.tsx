import { motion } from "framer-motion";
import { Compass, Shield, Terminal, Activity, ArrowRight } from "lucide-react";

const MapSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-[#0A0D12]">
      <div className="mesh-gradient opacity-30" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-bold">
            Reach out to us at
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4 tracking-tight">
            Our{" "}
            <span className="text-gradient-green italic">Address</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 premium-card p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 rounded-full bg-primary" />
                <h3 className="font-heading text-2xl font-bold tracking-tight">
                  Location Intelligence
                </h3>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Compass className="h-6 w-6 text-primary shrink-0 opacity-70" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold mb-1">
                      Coordinates
                    </p>
                    <p className="text-sm font-medium text-foreground/90">
                      27.6710° N, 85.3216° E
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      Lalitpur Technical Sector-11
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-primary shrink-0 opacity-70" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold mb-1">
                      Facility Protocol
                    </p>
                    <p className="text-sm font-medium text-foreground/90">
                      Tier-1 Logistics Distribution
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      Biometric Access / Authorized Entry Only
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Activity className="h-6 w-6 text-primary shrink-0 opacity-70" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold mb-1">
                      Operational Hours
                    </p>
                    <p className="text-sm font-medium text-foreground/90">
                      09:00 — 18:00 (NPT)
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      Synchronization: Sunday — Friday
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 group/btn">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/10 group-hover/btn:bg-primary group-hover/btn:text-background transition-all duration-500"
              >
                <div className="flex items-center gap-3">
                  <Terminal className="h-4 w-4 opacity-70" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Execute Navigation
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 premium-card hover-map-container p-2 group overflow-hidden"
          >
            <div className="w-full h-[400px] md:h-full min-h-[500px] rounded-2xl overflow-hidden relative">
              <iframe
                title="Greenwave Solutions Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.30%2C27.66%2C85.34%2C27.69&layer=mapnik"
                className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale transition-all invert brightness-[0.8] contrast-[1.1]"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A0D12] via-transparent to-transparent opacity-40" />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
