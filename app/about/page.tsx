import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const milestones = [
  {
    year: "1972",
    title: "Nonna Lucia's Kitchen",
    text: "In the Brera district of Milan, Lucia Ferretti perfects the family ragù recipe that will one day travel across the world.",
  },
  {
    year: "1994",
    title: "Marco Trains in Florence",
    text: "Young Marco apprentices under Maestro Enzo Cattaneo at Ristorante Buca dell'Orafo, mastering the art of Florentine cuisine.",
  },
  {
    year: "1999",
    title: "A New Horizon",
    text: "Marco visits India for the first time and falls in love with New Delhi — sensing a city ready to embrace authentic Italian fine dining.",
  },
  {
    year: "2003",
    title: "Casa Milano Opens",
    text: "On 14 March 2003, Casa Milano welcomes its first guests at Janpath. The reservation book fills within a week.",
  },
  {
    year: "2010",
    title: "Wine Cellar Expansion",
    text: "A temperature-controlled cellar is added, housing over 400 labels from 18 Italian wine regions.",
  },
  {
    year: "2018",
    title: "Recognition & Awards",
    text: "Casa Milano receives the Times Food Award for Best Italian Restaurant in India for the fourth consecutive year.",
  },
  {
    year: "2023",
    title: "Two Decades of Passion",
    text: "Celebrating 20 years with a special tasting menu recreating every dish from the original 2003 menu.",
  },
];

const team = [
  {
    name: "Marco Ferretti",
    role: "Executive Chef & Founder",
    bio: "Born and raised in Milan, trained in Florence and Rome, Marco brings thirty years of Italian culinary mastery to every plate. His grandmother's handwritten recipe book still sits in the kitchen.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Alessia Romano",
    role: "Head Pastry Chef",
    bio: "A graduate of the Cordon Bleu in Rome, Alessia creates desserts that are as beautiful as they are delicious. Her tiramisù is legendary among guests.",
    image:
      "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Vikram Nair",
    role: "Sommelier",
    bio: "WSET Level 4 certified, Vikram curates our wine list with a focus on small Italian producers and natural wines. He pairs every course with surgical precision.",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=500&q=80&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-deep-red overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #D4AF37 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.5em] uppercase font-sans mb-3">
            Since 2003
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">Our Story</h1>
          <div className="gold-divider" />
          <p className="text-cream/80 font-sans mt-5 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            From a grandmother&apos;s kitchen in Milan to the finest Italian table in New Delhi
            — a story of love, tradition and pasta made by hand.
          </p>
        </div>
      </section>

      {/* Chef Feature */}
      <section className="py-24 px-6 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="right" className="relative">
            <div className="relative h-[480px] lg:h-[580px]">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop"
                alt="Chef Marco Ferretti"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-5 -left-5 bg-deep-red px-6 py-4">
                <p className="font-serif text-cream text-lg">Chef Marco Ferretti</p>
                <p className="font-sans text-gold text-xs tracking-widest uppercase mt-0.5">
                  Executive Chef & Founder
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.2}>
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
              The Chef
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-red leading-tight mb-6">
              Passion Plated<br />from the Heart
            </h2>
            <div className="gold-divider-left" />
            <p className="text-gray-600 font-sans leading-relaxed mb-5">
              Marco Ferretti spent his childhood summers in his grandmother&apos;s
              kitchen in Brera, Milan — watching her roll pasta, taste sauces
              and whisper instructions that she never wrote down. &ldquo;She
              said good cooking lives in the hands,&rdquo; he recalls with a
              smile. &ldquo;You cannot learn it from a book.&rdquo;
            </p>
            <p className="text-gray-600 font-sans leading-relaxed mb-5">
              After training at Florence&apos;s Buca dell&apos;Orafo and working
              in Michelin-starred kitchens in Rome and Milan, Marco arrived in
              New Delhi in 2003 with a single suitcase and Nonna Lucia&apos;s
              recipe book.
            </p>
            <p className="text-gray-600 font-sans leading-relaxed mb-8">
              Today, twenty-two years on, he still arrives at 7 a.m. every day
              to make the pasta by hand, taste every sauce, and greet every
              regular guest by name.
            </p>
            <blockquote className="border-l-4 border-gold pl-5 py-2">
              <p className="font-serif text-xl italic text-deep-red leading-snug">
                &ldquo;I don&apos;t cook for critics. I cook for the person at
                table six who hasn&apos;t been to Italy yet.&rdquo;
              </p>
              <footer className="text-gold text-xs tracking-widest uppercase font-sans mt-3">
                — Marco Ferretti
              </footer>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-deep-red px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-3">
              Our Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
              Three Principles We Never Compromise
            </h2>
            <div className="gold-divider" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                number: "01",
                title: "Provenance",
                text: "Flour from Molino Caputo in Naples. Parmigiano aged 36 months from Reggio Emilia. San Marzano DOP tomatoes. We fly in key ingredients bi-weekly.",
              },
              {
                number: "02",
                title: "Handcraft",
                text: "Every pasta, every bread, every gelato is made in-house. We use no vacuum packs or ready bases. If our grandmothers wouldn't recognise it, it doesn't leave the kitchen.",
              },
              {
                number: "03",
                title: "Hospitality",
                text: "In Italian, the word ospitalità means far more than service. It means making every guest feel they are a guest in your home. That is the only standard we know.",
              },
            ].map((p, i) => (
              <AnimateOnScroll key={p.number} delay={i * 0.15}>
                <div className="text-center md:text-left">
                  <p className="font-serif text-6xl text-gold/20 mb-3">{p.number}</p>
                  <h3 className="font-serif text-2xl text-gold mb-3">{p.title}</h3>
                  <div className="w-10 h-0.5 bg-gold/50 mb-4 mx-auto md:mx-0" />
                  <p className="text-cream/75 font-sans text-sm leading-relaxed">{p.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-3">
              The Journey
            </p>
            <h2 className="section-heading">Two Decades of History</h2>
            <div className="gold-divider" />
          </AnimateOnScroll>

          <div className="relative">
            <div className="absolute left-[3.5rem] md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-0.5" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <AnimateOnScroll key={m.year} delay={i * 0.1}>
                  <div
                    className={`relative flex flex-col md:flex-row ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 items-start md:items-center`}
                  >
                    {/* Year bubble */}
                    <div className="absolute left-[3.5rem] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-cream z-10 mt-1 md:mt-0" />

                    <div
                      className={`md:w-1/2 pl-20 md:pl-0 ${
                        i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <span className="font-serif text-4xl text-gold/40">{m.year}</span>
                      <h3 className="font-serif text-xl text-deep-red mt-1 mb-2">{m.title}</h3>
                      <p className="text-gray-500 font-sans text-sm leading-relaxed">{m.text}</p>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-3">
              The People
            </p>
            <h2 className="section-heading">Meet Our Team</h2>
            <div className="gold-divider" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.15}>
                <div className="group text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 rounded-full ring-4 ring-gold/30 group-hover:ring-gold transition-all duration-500" />
                  </div>
                  <h3 className="font-serif text-xl text-deep-red mb-1">{member.name}</h3>
                  <p className="text-gold text-xs tracking-widest uppercase font-sans mb-4">{member.role}</p>
                  <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
                  <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm mx-auto">{member.bio}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-[#1a0000] px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-serif text-3xl text-cream">Recognition & Awards</h2>
            <div className="gold-divider" />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { award: "Times Food Award", detail: "Best Italian Restaurant in India", years: "2015–2024" },
              { award: "Condé Nast Traveller", detail: "Top 10 Fine Dining Restaurants, Delhi", years: "2019, 2022" },
              { award: "Forbes India", detail: "India's Most Loved Italian Restaurant", years: "2021" },
              { award: "Wine Spectator", detail: "Award of Excellence", years: "2018–2024" },
            ].map((a, i) => (
              <AnimateOnScroll key={a.award} delay={i * 0.1}>
                <div className="text-center border border-gold/20 p-6 hover:border-gold transition-colors duration-300">
                  <p className="text-gold text-xs tracking-widest uppercase font-sans mb-2">{a.award}</p>
                  <p className="font-serif text-cream text-sm leading-snug mb-2">{a.detail}</p>
                  <p className="text-cream/40 text-xs font-sans">{a.years}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream px-6 text-center">
        <AnimateOnScroll>
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
            Come Visit Us
          </p>
          <h2 className="font-serif text-4xl text-deep-red mb-6">
            Experience the Story in Person
          </h2>
          <div className="gold-divider mb-8" />
          <Link href="/reservations" className="btn-primary">
            Reserve a Table
          </Link>
        </AnimateOnScroll>
      </section>
    </>
  );
}
