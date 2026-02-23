import { Star, MapPin } from "lucide-react";

import kachoriImg from "@/assets/kachori-sabzi.jpg";
import paanImg from "@/assets/banarasi-paan.jpg";
import malaiyyoImg from "@/assets/malaiyyo.jpg";

type FoodItem = {
  name: string;
  image: string;
  description: string;
  bestAt: string;
  rating: number;
};

const foods: FoodItem[] = [
  {
    name: "Kachori Sabzi",
    image: kachoriImg,
    description:
      "Crispy deep-fried kachori served with spicy potato curry and tangy chutney. The ultimate Banarasi breakfast staple loved by locals and tourists alike.",
    bestAt: "Kachori Gali, Vishwanath Lane",
    rating: 4.8,
  },
  {
    name: "Banarasi Paan",
    image: paanImg,
    description:
      "A legendary betel leaf preparation filled with gulkand, fennel seeds, and special ingredients. A refreshing post-meal tradition of Varanasi.",
    bestAt: "Keshav Tambul Bhandar, Godowlia",
    rating: 4.9,
  },
  {
    name: "Malaiyyo",
    image: malaiyyoImg,
    description:
      "A winter-only delicacy — light, frothy milk foam topped with saffron, pistachios, and cardamom. Collected at dawn and sold before sunrise disappears.",
    bestAt: "Chowk area, early morning vendors",
    rating: 4.7,
  },
];

const FoodSection = () => {
  return (
    <section id="food" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary mb-2">Taste</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Famous Varanasi Food
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            No trip is complete without savoring the iconic flavors of Banaras — from street-side kachoris to the legendary paan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foods.map((food, i) => (
            <div
              key={food.name}
              className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold text-foreground">{food.name}</h3>
                  <div className="flex items-center gap-1 text-gold">
                    <Star size={16} fill="currentColor" />
                    <span className="font-sans text-sm font-semibold text-foreground">{food.rating}</span>
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground mb-4">{food.description}</p>
                <div className="flex items-center gap-2 text-sm font-sans text-primary">
                  <MapPin size={14} />
                  <span className="font-medium">{food.bestAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
