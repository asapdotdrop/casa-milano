"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const initialForm = { name: "", email: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-deep-red overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 80%, #D4AF37 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.5em] uppercase font-sans mb-3">
            Get in Touch
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">Contatti</h1>
          <div className="gold-divider" />
          <p className="text-cream/80 font-sans mt-5 text-base leading-relaxed max-w-lg mx-auto">
            We would love to hear from you. Drop us a line, call the restaurant,
            or simply walk in — you are always welcome.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info */}
          <AnimateOnScroll direction="right">
            <h2 className="font-serif text-3xl text-deep-red mb-4">Find Us</h2>
            <div className="gold-divider-left mb-8" />

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-deep-red text-cream flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold mb-1">Address</p>
                  <p className="font-sans text-gray-700 leading-relaxed">
                    42, Janpath<br />
                    Connaught Place<br />
                    New Delhi — 110001
                  </p>
                  <a
                    href="https://maps.google.com/?q=Connaught+Place+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-deep-red text-xs font-sans hover:underline mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-deep-red text-cream flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold mb-1">Phone</p>
                  <a href="tel:+911145678900" className="font-sans text-gray-700 hover:text-deep-red transition-colors duration-300 block">
                    +91 11 4567 8900
                  </a>
                  <a href="tel:+919876543210" className="font-sans text-gray-700 hover:text-deep-red transition-colors duration-300 block mt-1">
                    +91 98765 43210 (WhatsApp)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-deep-red text-cream flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold mb-1">Email</p>
                  <a href="mailto:reservations@casamilano.in" className="font-sans text-gray-700 hover:text-deep-red transition-colors duration-300 block">
                    reservations@casamilano.in
                  </a>
                  <a href="mailto:info@casamilano.in" className="font-sans text-gray-700 hover:text-deep-red transition-colors duration-300 block mt-1">
                    info@casamilano.in
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl text-deep-red mb-4">Opening Hours</h3>
              <div className="w-8 h-0.5 bg-gold mb-5" />
              <table className="w-full font-sans text-sm">
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Monday", "12:00 PM – 3:30 PM", "7:00 PM – 11:00 PM"],
                    ["Tuesday", "Closed", ""],
                    ["Wednesday – Friday", "12:00 PM – 3:30 PM", "7:00 PM – 11:00 PM"],
                    ["Saturday", "11:00 AM – 4:00 PM", "7:00 PM – 11:30 PM"],
                    ["Sunday", "11:00 AM – 4:00 PM", "7:00 PM – 10:00 PM"],
                  ].map(([day, lunch, dinner]) => (
                    <tr key={day} className="py-3">
                      <td className="py-3 font-medium text-deep-red w-36">{day}</td>
                      <td className="py-3 text-gray-500">
                        {lunch === "Closed" ? (
                          <span className="text-red-400 italic">Closed</span>
                        ) : (
                          <>
                            <span className="block">Lunch: {lunch}</span>
                            <span className="block">Dinner: {dinner}</span>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll direction="left" delay={0.2}>
            <h2 className="font-serif text-3xl text-deep-red mb-4">Send a Message</h2>
            <div className="gold-divider-left mb-8" />

            {sent ? (
              <div className="bg-white p-10 text-center shadow-md border-t-4 border-gold">
                <div className="w-14 h-14 bg-deep-red rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-cream" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-deep-red mb-2">Message Received!</h3>
                <div className="gold-divider" />
                <p className="text-gray-500 font-sans text-sm mt-4 leading-relaxed">
                  Thank you, {form.name.split(" ")[0]}. We will get back to you at{" "}
                  <strong>{form.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm(initialForm); }}
                  className="mt-6 btn-outline-red text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md space-y-6">
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
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
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-200 focus:border-deep-red outline-none px-4 py-3 font-sans text-sm bg-cream/50 transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-deep-red text-cream py-4 font-sans text-sm tracking-widest uppercase font-medium hover:bg-dark-red transition-colors duration-300 disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Google Map */}
      <AnimateOnScroll>
        <section className="h-[480px] w-full">
          <iframe
            title="Casa Milano Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6857060893093!2d77.21585917502432!3d28.633277175667984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f2!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </AnimateOnScroll>
    </>
  );
}
