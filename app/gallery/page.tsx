"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop",
    alt: "Casa Milano dining room",
    label: "The Dining Room",
    category: "Ambience",
    wide: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555396273-122e5ff94fac?w=600&q=80&auto=format&fit=crop",
    alt: "Tagliatelle al Ragù",
    label: "Tagliatelle al Ragù",
    category: "Cuisine",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80&auto=format&fit=crop",
    alt: "Osso Buco",
    label: "Osso Buco alla Milanese",
    category: "Cuisine",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80&auto=format&fit=crop",
    alt: "Tiramisù della Nonna",
    label: "Tiramisù della Nonna",
    category: "Desserts",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&auto=format&fit=crop",
    alt: "Fresh pasta",
    label: "Handmade Spaghetti",
    category: "Cuisine",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop",
    alt: "Wood-fired pizza",
    label: "Pizza dal Forno a Legna",
    category: "Cuisine",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80&auto=format&fit=crop",
    alt: "Romantic dinner setting",
    label: "An Evening at Casa Milano",
    category: "Ambience",
    wide: true,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1548940392-b79f88edd4e4?w=600&q=80&auto=format&fit=crop",
    alt: "Wine selection",
    label: "Our Wine Cellar",
    category: "Wines",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1528605248644-14b97f0a2d75?w=600&q=80&auto=format&fit=crop",
    alt: "Antipasti spread",
    label: "Antipasti della Casa",
    category: "Cuisine",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1540189549336-e6e99f23f2fb?w=600&q=80&auto=format&fit=crop",
    alt: "Italian food spread",
    label: "A Feast for the Senses",
    category: "Cuisine",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop",
    alt: "Chef Marco at work",
    label: "Chef Marco at Work",
    category: "Behind the Scenes",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop",
    alt: "Food presentation",
    label: "The Art of the Plate",
    category: "Cuisine",
  },
];

const allCategories = ["All", ...Array.from(new Set(photos.map((p) => p.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof photos)[0] | null>(null);

  const filtered = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-deep-red overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #D4AF37 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.5em] uppercase font-sans mb-3">
            Casa Milano
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">Galleria</h1>
          <div className="gold-divider" />
          <p className="text-cream/80 font-sans mt-5 text-base leading-relaxed max-w-lg mx-auto">
            A visual journey through our kitchen, our dining room, and the
            art that lives in every plate we serve.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-cream border-b border-gray-200 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-3 justify-center">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-1.5 font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
                filter === cat
                  ? "bg-deep-red text-cream"
                  : "border border-deep-red/30 text-deep-red hover:bg-deep-red hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 px-6 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]"
          >
            <AnimatePresence>
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`relative group cursor-pointer overflow-hidden ${
                    photo.wide ? "col-span-2 row-span-1" : ""
                  }`}
                  onClick={() => setLightbox(photo)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100">
                    <p className="text-gold text-xs tracking-widest uppercase font-sans mb-1">
                      {photo.category}
                    </p>
                    <p className="font-serif text-cream text-lg leading-tight">{photo.label}</p>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-deep-red/80 text-cream text-xs font-sans px-2 py-0.5 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-deep-red/40">No photos in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-serif text-cream text-xl">{lightbox.label}</p>
                <p className="text-gold text-xs tracking-widest uppercase font-sans mt-1">
                  {lightbox.category}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-deep-red text-cream flex items-center justify-center text-xl hover:bg-dark-red transition-colors duration-300"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <AnimateOnScroll className="py-16 px-6 bg-[#1a0000] text-center">
        <p className="font-serif text-cream/60 italic text-lg mb-6">
          Come experience these moments in person.
        </p>
        <a
          href="/reservations"
          className="border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-gold hover:text-deep-red transition-all duration-300 inline-block"
        >
          Book Your Table
        </a>
      </AnimateOnScroll>
    </>
  );
}
