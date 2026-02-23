import { Phone, MessageCircle, Star, Globe } from "lucide-react";
import { useState } from "react";

type Guide = {
  name: string;
  languages: string[];
  experience: string;
  phone: string;
  rating: number;
  specialty: string;
};

const guides: Guide[] = [
  {
    name: "Rajesh Pandey",
    languages: ["Hindi", "English", "Japanese"],
    experience: "15+ years",
    phone: "+919876543210",
    rating: 4.9,
    specialty: "Temple tours & spiritual walks",
  },
  {
    name: "Amit Sharma",
    languages: ["Hindi", "English", "French"],
    experience: "10+ years",
    phone: "+919876543211",
    rating: 4.8,
    specialty: "Heritage & photography tours",
  },
  {
    name: "Priya Singh",
    languages: ["Hindi", "English", "German"],
    experience: "8+ years",
    phone: "+919876543212",
    rating: 4.7,
    specialty: "Food walks & cultural immersion",
  },
];

const GuidesSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! A guide will contact you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="guides" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary mb-2">Connect</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Verified Tourist Guides
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            Explore Varanasi with experienced, verified local guides who bring the city's stories to life.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {guides.map((guide) => (
            <div key={guide.name} className="bg-card rounded-lg p-6 shadow-card hover:shadow-warm transition-all duration-300">
              <div className="flex items-center gap-1 text-gold mb-3">
                <Star size={14} fill="currentColor" />
                <span className="font-sans text-sm font-semibold text-foreground">{guide.rating}</span>
                <span className="text-muted-foreground text-xs ml-1">· {guide.experience}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">{guide.name}</h3>
              <p className="font-sans text-sm text-primary mb-3">{guide.specialty}</p>
              <div className="flex items-center gap-2 mb-4">
                <Globe size={14} className="text-muted-foreground" />
                <span className="font-sans text-sm text-muted-foreground">{guide.languages.join(", ")}</span>
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:${guide.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-sans font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone size={14} />
                  Call
                </a>
                <a
                  href={`https://wa.me/${guide.phone.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-sans font-medium hover:bg-accent/90 transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="max-w-lg mx-auto bg-card rounded-lg p-6 md:p-8 shadow-card">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-2 text-center">
            Book a Guide
          </h3>
          <p className="font-sans text-sm text-muted-foreground text-center mb-6">
            Send an inquiry and we'll match you with the perfect guide.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              maxLength={255}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              placeholder="Tell us about your travel plans..."
              required
              maxLength={1000}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm hover:bg-primary/90 transition-colors shadow-warm"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
