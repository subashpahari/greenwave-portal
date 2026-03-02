import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import EngineeringSection from "@/components/EngineeringSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProductsSection />
      <EngineeringSection />
      <WhyChooseSection />
      <MapSection />
      <MarqueeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
