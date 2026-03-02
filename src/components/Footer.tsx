import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "./logo.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
    color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10",
  },
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
    color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
  },
  {
    label: "Twitter",
    href: "#",
    icon: Twitter,
    color: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10",
  },
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
    color: "hover:text-[#E4405F] hover:bg-[#E4405F]/10",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Greenwave Solutions"
                className="h-8 w-8 object-contain"
              />
              <span className="font-heading text-lg font-bold">
                Greenwave Solutions
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Leading the charge in premium EV components and sustainable
              engineering solutions across the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground transition-all duration-300 ${link.color} border border-transparent hover:border-current/20`}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 Greenwave Solutions Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
