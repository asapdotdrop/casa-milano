import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a0000] text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl text-cream mb-1">Casa Milano</h2>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Ristorante Italiano
            </p>
            <div className="w-12 h-0.5 bg-gold mb-4" />
            <p className="text-cream/70 text-sm leading-relaxed font-sans">
              Bringing the soul of Italy to New Delhi since 2003. Every dish tells
              a story of tradition, passion, and the finest ingredients.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-5">Explore</h3>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["Our Menu", "/menu"],
                ["About Us", "/about"],
                ["Gallery", "/gallery"],
                ["Reservations", "/reservations"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm font-sans"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-5">Contact</h3>
            <address className="not-italic space-y-3 text-sm font-sans text-cream/70">
              <p>42, Janpath, Connaught Place<br />New Delhi — 110001</p>
              <p>
                <a
                  href="tel:+911145678900"
                  className="hover:text-gold transition-colors duration-300"
                >
                  +91 11 4567 8900
                </a>
              </p>
              <p>
                <a
                  href="mailto:reservations@casamilano.in"
                  className="hover:text-gold transition-colors duration-300"
                >
                  reservations@casamilano.in
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-5">Hours</h3>
            <ul className="space-y-2 text-sm font-sans text-cream/70">
              <li className="flex justify-between gap-4">
                <span>Monday</span>
                <span>12:00 – 23:00</span>
              </li>
              <li className="flex justify-between gap-4 text-gold/60">
                <span>Tuesday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Wed – Fri</span>
                <span>12:00 – 23:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>11:00 – 23:30</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>11:00 – 22:00</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-cream/10 text-xs text-cream/40 font-sans">
              Lunch 12:00–15:30 &middot; Dinner 19:00–23:00
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-xs font-sans">
            &copy; {new Date().getFullYear()} Casa Milano. All rights reserved.
          </p>
          <p className="text-cream/40 text-xs font-sans italic">
            &ldquo;La cucina è l&apos;arte più bella&rdquo; — Marco Ferretti
          </p>
        </div>
      </div>
    </footer>
  );
}
