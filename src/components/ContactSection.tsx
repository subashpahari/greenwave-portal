import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgBlack from "./bg-black.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `${formData.subject} - ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Inquiry Type: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`,
    );

    window.location.href = `mailto:greenwavesolutions25@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email Client",
      description:
        "Your default email app should open now with your message prepared.",
    });
  };

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "Lalitpur-11, Nepal" },
    { icon: Mail, label: "Email", value: "greenwavesolutions25@gmail.com" },
    { icon: Phone, label: "Phone", value: "+977-9856056373" },
    { icon: Clock, label: "Hours", value: "Sun–Fri: 9 AM – 6 PM NPT" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
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
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-primary font-medium">
            Reach Out
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Get In <span className="text-gradient-green">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-sm text-muted-foreground italic">
                Visit our office for a consultation or to explore our latest EV
                components.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6 p-10 premium-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-6 rounded-full bg-primary" />
              <h3 className="font-heading text-2xl font-bold tracking-tight">
                Send Us a Message:
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-1">
                  NAME
                </p>
                <Input
                  placeholder="Full Name / Organization"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-white/5 border-white/10 h-12 rounded-xl focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-1">
                  EMAIL
                </p>
                <Input
                  type="email"
                  placeholder="Secure Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-white/5 border-white/10 h-12 rounded-xl focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-1">
                  PHONE. NO
                </p>
                <Input
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-white/5 border-white/10 h-12 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-1">
                  Inquiry Type
                </p>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option className="bg-[#0A0D12]">
                    Strategic Partnership
                  </option>
                  <option className="bg-[#0A0D12]">
                    Technical Specification Request
                  </option>
                  <option className="bg-[#0A0D12]">
                    Logistics & Distribution
                  </option>
                  <option className="bg-[#0A0D12]">
                    Engineering Consultation
                  </option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-1">
                Message
              </p>
              <Textarea
                placeholder="Describe your technical requirements or partnership proposal..."
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-white/5 border-white/10 rounded-xl resize-none focus:ring-primary/20"
              />
            </div>

            <Button
              variant="hero"
              size="lg"
              type="submit"
              className="w-full h-14 rounded-xl text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-primary/10"
            >
              SUBMIT
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
