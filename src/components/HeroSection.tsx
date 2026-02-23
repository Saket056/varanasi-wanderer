import heroImage from "@/assets/hero-varanasi.jpg";
import { MapPin, Utensils, Bus, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Varanasi Ghats at sunrise along the Ganges river"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/80 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Welcome to Dhoomchalle
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.3s" }}>
          Explore the Spiritual<br />
          <span className="text-gradient-saffron">Heart of India</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Discover Varanasi's ancient temples, sacred ghats, legendary food, and timeless culture — your ultimate travel companion.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          {[
            { label: "Explore Places", icon: MapPin, href: "#places" },
            { label: "Famous Food", icon: Utensils, href: "#food" },
            { label: "Transport", icon: Bus, href: "#transport" },
            { label: "Find Guides", icon: Users, href: "#guides" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-sans font-medium text-sm hover:bg-primary/90 transition-all hover:scale-105 shadow-warm"
            >
              <item.icon size={18} />
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
