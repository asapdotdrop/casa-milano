"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  "10:00 PM", "10:30 PM",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "",
  requests: "",
};

export default function ReservationsPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  // Minimum date = today
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-deep-red overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 40%, #D4AF37 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.5em] uppercase font-sans mb-3">
            Casa Milano
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">
            Prenotazioni
          </h1>
          <div className="gold-divider" />
          <p className="text-cream/80 font-sans mt-5 text-base leading-relaxed max-w-lg mx-auto">
            Reserve your table and let us take care of the rest. We look forward
            to welcoming you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Info Column */}
          <AnimateOnScroll direction="right" className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-serif text-3xl text-deep-red mb-4">
                Plan Your Evening
              </h2>
              <div className="gold-divider-left" />
              <p className="text-gray-600 font-sans text-sm leading-relaxed mt-5">
                We accept reservations up to 60 days in advance. For parties of 10
                or more, please call us directly to discuss a private dining arrangement.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl text-deep-red">Dining Hours</h3>
              <div className="space-y-3 font-sans text-sm">
                {[
                  ["Monday", "Lunch 12:00–15:30, Dinner 19:00–23:00"],
                  ["Tuesday", "Closed"],
                  ["Wednesday–Friday", "Lunch 12:00–15:30, Dinner 19:00–23:00"],
                  ["Saturday", "Lunch 11:00–16:00, Dinner 19:00–23:30"],
                  ["Sunday", "Lunch 11:00–16:00, Dinner 19:00–22:00"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex gap-4 items-start">
                    <span className="text-deep-red font-medium w-36 flex-shrink-0">{day}</span>
                    <span className={`${hours === "Closed" ? "text-red-400" : "text-gray-500"}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a0000] text-cream p-6">
              <h3 className="font-serif text-lg text-gold mb-3">Private Dining</h3>
              <div className="w-8 h-0.5 bg-gold mb-4" />
              <p className="font-sans text-sm text-cream/70 leading-relaxed">
                Planning something special? Our private dining room seats up to 20
                guests. Bespoke menus, custom floral arrangements and a dedicated
                sommelier service.
              </p>
              <a
                href="tel:+911145678900"
                className="mt-5 inline-block border border-gold text-gold px-5 py-2 text-xs tracking-widest uppercase font-sans hover:bg-gold hover:text-deep-red transition-all duration-300"
              >
                Call to Enquire
              </a>
            </div>
          </AnimateOnScroll>

          {/* Form Column */}
          <AnimateOnScroll direction="left" delay={0.2} className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white p-12 text-center shadow-md border-t-4 border-gold">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-serif text-3xl text-deep-red mb-3">Grazie, {form.name.split(" ")[0]}!</h2>
                <div className="gold-divider" />
                <p className="text-gray-600 font-sans mt-5 leading-relaxed">
                  Your reservation request has been received. We will confirm your
                  booking at <strong>{form.email}</strong> within 2 hours.
                </p>
                <div className="mt-8 p-5 bg-cream border border-gold/30 text-left space-y-2 text-sm font-sans text-gray-600">
                  <p><span className="text-deep-red font-medium">Date:</span> {form.date}</p>
                  <p><span className="text-deep-red font-medium">Time:</span> {form.time}</p>
                  <p><span className="text-deep-red font-medium">Guests:</span> {form.guests}</p>
                  {form.occasion && (
                    <p><span className="text-deep-red font-medium">Occasion:</span> {form.occasion}</p>
                  )}
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="mt-8 btn-outline-red"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 md:p-10 shadow-md"
              >
                <h2 className="font-serif text-2xl text-deep-red mb-2">
                  Your Reservation
                </h2>
                <div className="gold-divider-left mb-8" />

                <div className="space-y-6">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full border border-gray-200 focus:border-deep-red outline-none px-4 py-3 font-sans text-sm bg-cream/50 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 focus:border-deep-red outline-none px-4 py-3 font-sans text-sm bg-cream/50 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full border border-gray-200 focus:border-deep-red outline-none px-4 py-3 font-sans text-sm bg-cream/50 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
                        Party Size *
                      </label>
                      <select
                        name="guests"
                        required
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full border border-gray-200 focus:border-deep-red outline-none px-4 py-3 font-sans text-sm bg-cream/50 transition-colors duration-300 cursor-pointer appearance-none"
                      >
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        min={today}
                        value={form.date}
                        onChange={handleChange}
                        className="w-full border border-gray-200 focus:border-deep-red outline-none px-4 py-3 font-sans text-sm bg-cream/50 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        required
                        value={form.time}
                        onChange={handleChange}
                        className="w-full border border-gray-200 focus:border-deep-red outline-none px-4 py-3 font-sans text-sm bg-cream/50 transition-colors duration-300 cursor-pointer appearance-none"
                      >
                        <option value="">Select a time</option>
                        <optgroup label="Lunch">
                          {timeSlots.slice(0, 6).map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Dinner">
                          {timeSlots.slice(6).map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Occasion */}
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
                      Special Occasion
                    </label>
                    <select
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      className="w-full border border-gray-200 focus:border-deep-red outline-none px-4 py-3 font-sans text-sm bg-cream/50 transition-colors duration-300 cursor-pointer appearance-none"
                    >
                      <option value="">None</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Business Dinner</option>
                      <option>Proposal</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="requests"
                      rows={4}
                      value={form.requests}
                      onChange={handleChange}
                      placeholder="Dietary requirements, seating preferences, allergy information…"
                      className="w-full border border-gray-200 focus:border-deep-red outline-none px-4 py-3 font-sans text-sm bg-cream/50 transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-deep-red text-cream py-4 font-sans text-sm tracking-widest uppercase font-medium hover:bg-dark-red transition-colors duration-300 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Confirming your table…
                      </span>
                    ) : "Request Reservation"}
                  </button>

                  <p className="text-gray-400 text-xs font-sans text-center leading-relaxed">
                    Reservations are confirmed via email within 2 hours. For same-day
                    bookings, please call us directly at{" "}
                    <a href="tel:+911145678900" className="text-deep-red hover:underline">
                      +91 11 4567 8900
                    </a>.
                  </p>
                </div>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
