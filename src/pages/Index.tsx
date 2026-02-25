import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlacesSection from "@/components/PlacesSection";
import FoodSection from "@/components/FoodSection";
import TransportSection from "@/components/TransportSection";
import GuidesSection from "@/components/GuidesSection";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/useLenis";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PlacesSection />
      <FoodSection />
      <TransportSection />
      <GuidesSection />
      <Footer />
    </div>
  );
};

export default Index;
