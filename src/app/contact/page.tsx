"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-[#fffbeb]/95 backdrop-blur sticky top-16 md:top-0 z-20 border-b border-amber-100 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center gap-3">
          <h2 className="font-bold text-secondary">Contact Us</h2>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-secondary mb-4">Get in Touch</h1>
            <p className="text-gray-500 mb-10 text-sm md:text-base">We're here for you. Drop us a message for catering queries, feedback, or any general questions.</p>

            <div className="space-y-6">
              <div className="c-card">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 text-primary shadow-inner">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm mb-1">Our Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Nandarkha, Bilimora,<br />Gujarat 396321</p>
                </div>
              </div>

              <div className="c-card">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 text-primary shadow-inner">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm mb-1">Contact Details</h4>
                  <p className="text-gray-500 text-sm mb-1">+91 84900 63293</p>
                  <a href="mailto:hello@eggoholic.in" className="text-primary text-sm hover:underline font-medium">hello@eggoholic.in</a>
                </div>
              </div>

              <div className="c-card">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 text-primary shadow-inner">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm mb-1">Opening Hours</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Monday – Sunday<br />5:00 PM to 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100/60">
            <h3 className="font-bold text-secondary text-lg mb-6">Send us a message</h3>
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-sm text-gray-500">Thank you for reaching out. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">First Name</label>
                    <input type="text" required className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Last Name</label>
                    <input type="text" required className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-gray-50" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Email / Phone</label>
                  <input type="text" required className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-gray-50" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Your Message</label>
                  <textarea rows={4} required className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-gray-50 resize-none"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center py-3.5 shadow-sm">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
