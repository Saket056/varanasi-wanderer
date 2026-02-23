import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-varanasi.jpg";
import { MapPin, Utensils, Bus, Users, Sparkles } from "lucide-react";

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-gold/30 blur-sm"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 4 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const ctaItems = [
    { label: "Explore Places", icon: MapPin, href: "#places" },
    { label: "Famous Food", icon: Utensils, href: "#food" },
    { label: "Transport", icon: Bus, href: "#transport" },
    { label: "Find Guides", icon: Users, href: "#guides" },
  ];

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img src={heroImage} alt="Varanasi Ghats at sunrise along the Ganges river" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={8} />
      <FloatingParticle delay={1.5} x="80%" y="30%" size={6} />
      <FloatingParticle delay={0.8} x="25%" y="70%" size={10} />
      <FloatingParticle delay={2} x="70%" y="60%" size={7} />
      <FloatingParticle delay={1} x="50%" y="15%" size={5} />
      <FloatingParticle delay={2.5} x="90%" y="75%" size={9} />

      {/* Content with parallax */}
      <motion.div className="relative z-10 container mx-auto px-4 text-center" style={{ y: contentY, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm mb-6"
        >
          <Sparkles size={14} className="text-gold" />
          <span className="font-sans text-xs md:text-sm tracking-widest uppercase text-primary-foreground/80">
            Welcome to Dhoomchalle
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Explore the Spiritual<br />
          <span className="text-gradient-saffron">Heart of India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10"
        >
          Discover Varanasi's ancient temples, sacred ghats, legendary food, and timeless culture — your ultimate travel companion.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {ctaItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.08, boxShadow: "0 10px 40px -10px hsl(25 95% 53% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-sans font-medium text-sm shadow-warm"
            >
              <item.icon size={18} />
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-3 bg-primary-foreground/70 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
