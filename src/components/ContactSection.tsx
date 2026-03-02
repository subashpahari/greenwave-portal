import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  };

  const contactInfo = [
    { icon: User, label: "Director", value: "Kshitiz Ghimire" },
    { icon: MapPin, label: "Address", value: "Lalitpur-11, Nepal" },
    { icon: Mail, label: "Email", value: "info@greenwavesolutions.com" },
    { icon: Phone, label: "Phone", value: "+977-01-XXXXXXX" },
    { icon: Clock, label: "Hours", value: "Sun–Fri: 9 AM – 6 PM NPT" },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-dark relative">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-primary font-medium">Reach Out</span>
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

            {/* Map placeholder */}
            <div className="w-full h-48 rounded-2xl bg-card border border-border flex items-center justify-center overflow-hidden">
              <iframe
                title="Greenwave Solutions Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.30%2C27.66%2C85.34%2C27.69&layer=mapnik"
                className="w-full h-full border-0 opacity-60"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5 p-8 rounded-2xl bg-card border border-border"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-muted border-border"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted border-border"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-muted border-border"
              />
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="flex h-10 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground"
              >
                <option>General Inquiry</option>
                <option>Product Request</option>
                <option>Engineering Services</option>
                <option>Partnership</option>
              </select>
            </div>
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-muted border-border resize-none"
            />
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
