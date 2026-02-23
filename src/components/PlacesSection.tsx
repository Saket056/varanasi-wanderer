import { Clock, IndianRupee, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

import kashiImg from "@/assets/kashi-vishwanath.jpg";
import dashasImg from "@/assets/dashashwamedh-ghat.jpg";
import ramnagarImg from "@/assets/ramnagar-fort.jpg";
import { useState } from "react";

type Place = {
  name: string;
  category: "Temple" | "Ghat" | "Fort";
  image: string;
  description: string;
  hours: string;
  fee: string;
  mapUrl: string;
};

const places: Place[] = [
  { name: "Kashi Vishwanath Temple", category: "Temple", image: kashiImg, description: "One of the most famous Hindu temples dedicated to Lord Shiva. The temple has been a symbol of spirituality and philosophy for thousands of years.", hours: "3:00 AM – 11:00 PM", fee: "Free", mapUrl: "https://maps.google.com/?q=Kashi+Vishwanath+Temple+Varanasi" },
  { name: "Dashashwamedh Ghat", category: "Ghat", image: dashasImg, description: "The main ghat in Varanasi, known for its spectacular evening Ganga Aarti ceremony. A must-visit for every traveler to experience the divine atmosphere.", hours: "Open 24 hours (Aarti: 6:45 PM)", fee: "Free", mapUrl: "https://maps.google.com/?q=Dashashwamedh+Ghat+Varanasi" },
  { name: "Ramnagar Fort", category: "Fort", image: ramnagarImg, description: "A magnificent 18th-century fort built in Mughal style, located on the eastern bank of the Ganges. Houses a museum with vintage cars, royal costumes, and more.", hours: "10:00 AM – 5:00 PM", fee: "₹15 (Indians) / ₹150 (Foreigners)", mapUrl: "https://maps.google.com/?q=Ramnagar+Fort+Varanasi" },
  { name: "Sankat Mochan Temple", category: "Temple", image: kashiImg, description: "A sacred temple dedicated to Lord Hanuman, believed to free devotees from all troubles. Famous for its laddoos offered as prasad.", hours: "4:00 AM – 9:30 PM", fee: "Free", mapUrl: "https://maps.google.com/?q=Sankat+Mochan+Temple+Varanasi" },
  { name: "Assi Ghat", category: "Ghat", image: dashasImg, description: "A popular ghat at the confluence of the Assi and Ganges rivers. Known for morning yoga sessions and a vibrant cultural hub for artists and travelers.", hours: "Open 24 hours", fee: "Free", mapUrl: "https://maps.google.com/?q=Assi+Ghat+Varanasi" },
  { name: "Chunar Fort", category: "Fort", image: ramnagarImg, description: "An ancient sandstone fort overlooking the Ganges, with a history dating back to 56 BC. Offers panoramic views and rich historical significance.", hours: "9:00 AM – 5:00 PM", fee: "₹25", mapUrl: "https://maps.google.com/?q=Chunar+Fort+Varanasi" },
];

const categoryColors: Record<string, string> = {
  Temple: "bg-primary text-primary-foreground",
  Ghat: "bg-accent text-accent-foreground",
  Fort: "bg-secondary text-secondary-foreground",
};

const PlacesSection = () => {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");
  const categories = ["All", "Temple", "Ghat", "Fort"];

  const filtered = places.filter((p) => {
    const matchCategory = filter === "All" || p.category === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="places" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary mb-2">Discover</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Tourist Places</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4" />
            <p className="font-sans text-muted-foreground max-w-xl mx-auto">
              From ancient temples to sacred ghats and historic forts — explore the timeless landmarks of Varanasi.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="relative w-full sm:w-80">
              <input type="text" placeholder="Search places..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full px-4 py-2.5 pl-10 rounded-full border border-border bg-card text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" />
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            </div>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all ${
                    filter === cat ? "bg-primary text-primary-foreground shadow-warm" : "bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((place, i) => (
            <ScrollReveal key={place.name} delay={i * 0.08}>
              <motion.div
                layout
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-warm transition-shadow duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-sans font-semibold ${categoryColors[place.category]}`}>
                    {place.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{place.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground mb-4 line-clamp-2">{place.description}</p>
                  <div className="flex flex-col gap-2 text-sm font-sans text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-primary" />
                      <span>{place.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee size={14} className="text-primary" />
                      <span>{place.fee}</span>
                    </div>
                  </div>
                  <motion.a
                    href={place.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-sans font-medium hover:bg-accent/90 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Get Directions
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlacesSection;
