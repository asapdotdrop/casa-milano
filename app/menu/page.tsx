"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

type Category = "Antipasti" | "Pasta" | "Secondi" | "Dolci" | "Bevande";

const menuData: Record<Category, { name: string; description: string; price: string; tag?: string }[]> = {
  Antipasti: [
    {
      name: "Bruschetta al Pomodoro",
      description: "Toasted ciabatta rubbed with garlic, topped with hand-crushed San Marzano tomatoes, fresh basil and extra virgin olive oil.",
      price: "₹420",
    },
    {
      name: "Carpaccio di Manzo",
      description: "Paper-thin slices of premium raw beef tenderloin, wild rocket, shaved Parmigiano Reggiano, lemon dressing and capers.",
      price: "₹680",
    },
    {
      name: "Burrata con Prosciutto",
      description: "Creamy burrata flown in from Puglia, San Daniele prosciutto crudo, cherry tomatoes, basil oil and cracked pepper.",
      price: "₹750",
      tag: "Chef's Pick",
    },
    {
      name: "Calamari Fritti",
      description: "Lightly battered fresh calamari rings, golden fried, served with house marinara and lemon aioli.",
      price: "₹620",
    },
    {
      name: "Zuppa di Cipolle",
      description: "Slow-caramelised onion broth, aged Gruyère crostini, fresh thyme — an Italian riff on the classic.",
      price: "₹480",
    },
    {
      name: "Insalata di Rucola e Pera",
      description: "Wild rocket, roasted pear, Gorgonzola, candied walnuts, balsamic pearls.",
      price: "₹520",
      tag: "Vegetarian",
    },
  ],
  Pasta: [
    {
      name: "Tagliatelle al Ragù Bolognese",
      description: "Handmade egg tagliatelle with a deeply flavoured beef and pork ragù, slow-cooked for six hours, Parmigiano Reggiano.",
      price: "₹780",
      tag: "Signature",
    },
    {
      name: "Spaghetti alle Vongole",
      description: "Spaghetti tossed with fresh clams, white wine, garlic, parsley and a drizzle of premium extra virgin olive oil.",
      price: "₹920",
    },
    {
      name: "Penne all'Arrabbiata",
      description: "Penne rigate in a fiery San Marzano tomato sauce with Calabrian chilli, garlic and fresh basil.",
      price: "₹580",
      tag: "Vegetarian",
    },
    {
      name: "Risotto ai Funghi Porcini",
      description: "Carnaroli rice with wild porcini mushrooms, aged Parmigiano Reggiano, a thread of black truffle oil.",
      price: "₹880",
      tag: "Chef's Pick",
    },
    {
      name: "Ravioli di Ricotta e Spinaci",
      description: "Handmade ricotta and spinach ravioli in sage-brown butter, toasted pine nuts and Parmigiano.",
      price: "₹720",
      tag: "Vegetarian",
    },
    {
      name: "Lasagne della Casa",
      description: "Classic layered pasta with ragù Bolognese, béchamel, fior di latte mozzarella and aged Parmigiano.",
      price: "₹820",
    },
    {
      name: "Linguine al Granchio",
      description: "Linguine with Dungeness crab, cherry tomatoes, white wine, fresh chilli and lemon zest.",
      price: "₹980",
    },
  ],
  Secondi: [
    {
      name: "Osso Buco alla Milanese",
      description: "Cross-cut veal shank braised with vegetables, white wine and broth, served with gremolata and saffron risotto.",
      price: "₹1,680",
      tag: "Signature",
    },
    {
      name: "Branzino al Forno",
      description: "Whole Mediterranean sea bass baked with capers, olives, cherry tomatoes and white wine. Served tableside.",
      price: "₹1,480",
    },
    {
      name: "Bistecca Fiorentina",
      description: "400g Florentine T-bone steak, dry-aged 28 days, chargrilled over embers, rosemary, garlic and olive oil.",
      price: "₹2,200",
      tag: "Chef's Pick",
    },
    {
      name: "Pollo alla Cacciatore",
      description: "Free-range chicken braised in white wine with tomatoes, olives, capers and garden herbs.",
      price: "₹1,180",
    },
    {
      name: "Saltimbocca alla Romana",
      description: "Veal escalope with sage and prosciutto, pan-seared in white wine and butter sauce.",
      price: "₹1,380",
    },
    {
      name: "Melanzane alla Parmigiana",
      description: "Layered aubergine, slow-cooked tomato sauce, fior di latte mozzarella and Parmigiano, baked golden.",
      price: "₹860",
      tag: "Vegetarian",
    },
  ],
  Dolci: [
    {
      name: "Tiramisù della Nonna",
      description: "The house recipe — espresso-soaked Savoiardi, light mascarpone cream, dusted with Valrhona cocoa. A family secret.",
      price: "₹480",
      tag: "Signature",
    },
    {
      name: "Panna Cotta al Caramello",
      description: "Silky vanilla panna cotta, warm salted caramel sauce, candied hazelnuts.",
      price: "₹420",
    },
    {
      name: "Cannoli Siciliani",
      description: "Crispy shells filled with sweet sheep's ricotta, Sicilian pistachios, candied orange peel.",
      price: "₹450",
    },
    {
      name: "Fondente al Cioccolato",
      description: "Warm dark chocolate fondant, sea salt flakes, vanilla gelato, raspberry coulis.",
      price: "₹520",
      tag: "Chef's Pick",
    },
    {
      name: "Gelato Artigianale",
      description: "Three generous scoops of house-churned gelato. Ask your server for today's flavours.",
      price: "₹380",
    },
    {
      name: "Affogato al Caffè",
      description: "Two scoops of fior di latte gelato drowned in a double shot of freshly pulled espresso.",
      price: "₹350",
    },
  ],
  Bevande: [
    {
      name: "Chianti Classico DOCG — Tuscany",
      description: "Sangiovese with notes of cherry, dried herbs and earthy minerality. Perfect with red meat and pasta.",
      price: "₹750 / glass  ·  ₹3,200 / bottle",
    },
    {
      name: "Barolo DOCG — Piedmont",
      description: "The King of Italian wines. Complex layers of rose, tar, cherry and tobacco. Aged 5 years.",
      price: "₹4,800 / bottle",
      tag: "Premium",
    },
    {
      name: "Brunello di Montalcino DOCG",
      description: "Grand cru Tuscany. Majestic, full-bodied, extraordinary. Cellar selection.",
      price: "₹8,500 / bottle",
      tag: "Premium",
    },
    {
      name: "Pinot Grigio DOC — Veneto",
      description: "Crisp, dry white with delicate peach and citrus notes. Perfect with seafood.",
      price: "₹650 / glass  ·  ₹2,800 / bottle",
    },
    {
      name: "Prosecco DOC Brut — Veneto",
      description: "Fine perlage, green apple, white peach and floral notes. Ideal as an aperitivo.",
      price: "₹600 / glass  ·  ₹2,400 / bottle",
    },
    {
      name: "Aperol Spritz",
      description: "Aperol, Prosecco, sparkling water, orange slice. The Italian aperitivo classic.",
      price: "₹680",
    },
    {
      name: "Negroni",
      description: "Campari, sweet vermouth, London Dry Gin, stirred over ice, orange peel.",
      price: "₹720",
    },
    {
      name: "Limoncello Sour",
      description: "House-made limoncello, fresh lemon, egg white, Prosecco float.",
      price: "₹650",
    },
    {
      name: "Espresso / Cappuccino / Macchiato",
      description: "Specialty Italian coffee blend, roasted by our partner in Trieste.",
      price: "₹180",
    },
    {
      name: "San Pellegrino / Acqua Panna",
      description: "Still or sparkling Italian mineral water, 500ml.",
      price: "₹180",
    },
  ],
};

const categories: Category[] = ["Antipasti", "Pasta", "Secondi", "Dolci", "Bevande"];

const categoryLabels: Record<Category, string> = {
  Antipasti: "Antipasti",
  Pasta: "Pasta & Risotto",
  Secondi: "Secondi",
  Dolci: "Dolci",
  Bevande: "Bevande",
};

const categoryDescriptions: Record<Category, string> = {
  Antipasti: "Starters to awaken your appetite",
  Pasta: "Handmade pasta and slow-stirred risotto",
  Secondi: "Main courses of exceptional provenance",
  Dolci: "Sweet endings crafted with devotion",
  Bevande: "Wines, cocktails and soft drinks",
};

const tagColors: Record<string, string> = {
  "Chef's Pick": "bg-deep-red text-cream",
  Signature: "bg-gold text-[#1a0000]",
  Vegetarian: "bg-green-700 text-white",
  Premium: "bg-[#1a0000] text-gold",
};

export default function MenuPage() {
  const [active, setActive] = useState<Category>("Antipasti");

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-deep-red overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D4AF37 0%, transparent 40%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.5em] uppercase font-sans mb-3">Casa Milano</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">Il Menù</h1>
          <div className="gold-divider" />
          <p className="text-cream/80 font-sans mt-5 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Our menu celebrates the regions of Italy — each dish prepared with the finest
            imported and seasonal ingredients, made entirely from scratch.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-[72px] z-40 bg-[#1a0000] border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-6 py-5 font-sans text-sm tracking-widest uppercase transition-all duration-300 border-b-2 ${
                active === cat
                  ? "border-gold text-gold"
                  : "border-transparent text-cream/60 hover:text-cream"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <section className="min-h-screen py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll key={active} className="text-center mb-14">
            <h2 className="font-serif text-4xl md:text-5xl text-deep-red mb-2">
              {categoryLabels[active]}
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-500 font-sans mt-3 text-sm italic">
              {categoryDescriptions[active]}
            </p>
          </AnimateOnScroll>

          <div className="space-y-0 divide-y divide-gray-200">
            {menuData[active].map((item, i) => (
              <AnimateOnScroll key={item.name} delay={i * 0.06}>
                <div className="py-7 flex justify-between gap-6 group hover:bg-white/50 -mx-4 px-4 transition-colors duration-300">
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-2 mb-1.5">
                      <h3 className="font-serif text-xl text-deep-red group-hover:text-dark-red transition-colors duration-300">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className={`text-[10px] font-sans font-medium px-2 py-0.5 tracking-widest uppercase ${tagColors[item.tag] || "bg-gray-200 text-gray-700"}`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 font-sans text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="font-serif text-deep-red text-lg whitespace-nowrap">{item.price}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-16 p-8 bg-[#1a0000] text-cream text-center">
            <p className="font-serif text-xl text-gold mb-2">Allergen Information</p>
            <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
            <p className="font-sans text-cream/70 text-sm leading-relaxed max-w-lg mx-auto">
              Please inform your server of any allergies or dietary requirements. Our kitchen handles
              nuts, gluten, dairy, shellfish and eggs. We will happily customise dishes where possible.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
