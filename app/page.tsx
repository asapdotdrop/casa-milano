"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const featuredDishes = [
  {
    name: "Tagliatelle al Ragù",
    subtitle: "Bolognese Pasta",
    description:
      "Slow-cooked beef and pork ragù folded into silky handmade egg tagliatelle, finished with aged Parmigiano Reggiano.",
    price: "₹780",
    image:
      "https://images.unsplash.com/photo-1555396273-122e5ff94fac?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Osso Buco alla Milanese",
    subtitle: "Braised Veal Shank",
    description:
      "Cross-cut veal shank braised with vegetables, white wine and broth, crowned with bright gremolata and saffron risotto.",
    price: "₹1,680",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Tiramisù della Nonna",
    subtitle: "Classic Tiramisu",
    description:
      "Espresso-soaked ladyfingers layered with cloud-light mascarpone cream, dusted with fine Valrhona cocoa.",
    price: "₹480",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    quote:
      "Every bite transported me straight to Florence. The Osso Buco was the finest I've had outside Italy. Casa Milano is simply extraordinary.",
    name: "Priya Mehta",
    location: "Mumbai",
  },
  {
    quote:
      "The ambience is breathtaking, the service impeccable, and the tagliatelle brought tears to my eyes. We will be back for every anniversary.",
    name: "Arjun & Sunita Kapoor",
    location: "New Delhi",
  },
  {
    quote:
      "A remarkable dining experience. Chef Marco's passion shines through in every course. The wine selection is truly outstanding.",
    name: "Ravi Krishnan",
    location: "Bengaluru",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&auto=format&fit=crop"
          alt="Casa Milano restaurant interior"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            className="text-gold text-xs md:text-sm tracking-[0.5em] uppercase font-sans mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Est. 2003 &nbsp;&bull;&nbsp; New Delhi
          </motion.p>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Benvenuti a<br />
            <span className="text-gold">Casa Milano</span>
          </motion.h1>

          <motion.div
            className="w-20 h-0.5 bg-gold mx-auto my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          />

          <motion.p
            className="text-cream/90 font-sans text-base md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            Welcome to an authentic Italian dining experience — where tradition,
            passion, and the finest ingredients come together in the heart of New Delhi.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link href="/reservations" className="btn-outline-cream text-center">
              Reserve a Table
            </Link>
            <Link href="/menu" className="btn-outline-cream text-center">
              View Our Menu
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-cream/70 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── TAGLINE STRIP ─── */}
      <section className="bg-deep-red py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-serif text-xl text-cream italic">
            &ldquo;La cucina è l&apos;arte più bella&rdquo;
          </p>
          <div className="hidden md:block w-px h-8 bg-gold/40" />
          <p className="font-sans text-xs text-cream/80 tracking-[0.3em] uppercase">
            Handmade Pasta &nbsp;&bull;&nbsp; Wood-Fired Ovens &nbsp;&bull;&nbsp; Authentic Flavours
          </p>
          <div className="hidden md:block w-px h-8 bg-gold/40" />
          <Link
            href="/menu"
            className="border border-gold text-gold px-6 py-2 text-xs tracking-widest uppercase font-sans hover:bg-gold hover:text-deep-red transition-all duration-300"
          >
            Explore Menu
          </Link>
        </div>
      </section>

      {/* ─── FEATURED DISHES ─── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-3">
              Chef&apos;s Selection
            </p>
            <h2 className="section-heading">Our Signature Dishes</h2>
            <div className="gold-divider" />
            <p className="text-gray-600 font-sans mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Each dish is crafted with centuries-old Italian recipes, sourced
              ingredients, and a devotion to authenticity.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, i) => (
              <AnimateOnScroll key={dish.name} delay={i * 0.15}>
                <div className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
                    <div className="absolute top-4 right-4 bg-deep-red text-cream px-3 py-1 text-sm font-serif">
                      {dish.price}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-8 h-0.5 bg-gold mb-3" />
                    <p className="text-gold text-xs tracking-widest uppercase font-sans mb-1">
                      {dish.subtitle}
                    </p>
                    <h3 className="font-serif text-xl text-deep-red mb-3">
                      {dish.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-sans leading-relaxed flex-1">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-14">
            <Link href="/menu" className="btn-outline-red">
              View Full Menu
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── STORY SNIPPET ─── */}
      <section className="py-24 bg-[#1a0000] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="right" className="relative">
            <div className="relative h-96 lg:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop"
                alt="Chef Marco Ferretti at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 border-4 border-gold hidden lg:block pointer-events-none" />
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.2} className="text-cream">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              A Labour of Love,<br />
              <span className="text-gold">Born in Milan</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-8" />
            <p className="text-cream/80 font-sans leading-relaxed mb-5">
              Chef Marco Ferretti grew up in the cobblestoned lanes of the Brera
              district in Milan, where his grandmother Nonna Lucia would spend
              Sundays making fresh pasta by hand. Her philosophy was simple:
              use the best ingredients, follow tradition, and cook with love.
            </p>
            <p className="text-cream/80 font-sans leading-relaxed mb-10">
              In 2003, Marco brought that same philosophy to New Delhi — creating
              Casa Milano as a tribute to his roots and a gift to India.
              Two decades on, every dish still carries Nonna Lucia&apos;s spirit.
            </p>
            <Link href="/about" className="btn-outline-cream">
              Our Full Story
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-3">
              What Our Guests Say
            </p>
            <h2 className="section-heading">Voices of Appreciation</h2>
            <div className="gold-divider" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 0.15}>
                <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border-t-2 border-gold">
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="font-serif text-gray-700 text-base italic leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <p className="font-sans font-semibold text-deep-red text-sm">{t.name}</p>
                    <p className="font-sans text-gray-400 text-xs mt-0.5">{t.location}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESERVATION CTA ─── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80&auto=format&fit=crop"
          alt="Romantic candlelit dinner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-5">
              An Evening to Remember
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-cream leading-tight mb-6">
              Reserve Your Table<br />at Casa Milano
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-cream/80 font-sans mb-10 text-base md:text-lg leading-relaxed">
              Whether it is an intimate dinner for two, a family celebration, or a
              corporate gathering — we will make it an evening you will never forget.
            </p>
            <Link href="/reservations" className="btn-outline-cream">
              Make a Reservation
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
