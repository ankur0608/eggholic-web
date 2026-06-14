"use client";

import { useState } from "react";
import { ChefHat, Megaphone, ShieldCheck } from "lucide-react";

export default function FranchisePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-[#fffbeb]/95 backdrop-blur sticky top-16 md:top-0 z-20 border-b border-amber-100 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center gap-3">
          <h2 className="font-bold text-secondary">Franchise Program</h2>
        </div>
      </div>

      <div className="bg-secondary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dots-bg"></div>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center relative">
          <span className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">PAN India Expansion</span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Partner with Eggoholic</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">India's premium egg restaurant concept. High margins, standard operating procedures, and 100% kitchen training support.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <span className="text-3xl block mb-3">💰</span>
            <h4 className="font-bold text-secondary text-sm mb-1">Franchise Fee</h4>
            <p className="text-xs text-gray-500">₹2 Lakhs (Included in the budget setup)</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <span className="text-3xl block mb-3">📐</span>
            <h4 className="font-bold text-secondary text-sm mb-1">Space Required</h4>
            <p className="text-xs text-gray-500">150 Sq Ft – 250 Sq Ft</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <span className="text-3xl block mb-3">⏱️</span>
            <h4 className="font-bold text-secondary text-sm mb-1">Payback Period</h4>
            <p className="text-xs text-gray-500">Fast 10 – 12 Months ROI</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="font-bold text-secondary text-lg">Support Provided By Us</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-primary">
                <ChefHat className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary text-sm">Full Kitchen Training</h4>
                <p className="text-xs text-gray-500 mt-0.5">Comprehensive SOP training for chefs and kitchen crew directly from Bilimora experts.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-primary">
                <Megaphone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary text-sm">Marketing &amp; Branding Materials</h4>
                <p className="text-xs text-gray-500 mt-0.5">Brochures, leaflets, social media templates, and marketing campaigns designed by head office.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary text-sm">Exclusive Location Selection</h4>
                <p className="text-xs text-gray-500 mt-0.5">Location analysis assistance to ensure strong footfall and quick returns on high streets.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-secondary text-sm mb-4 uppercase tracking-wider text-primary">Franchise Inquiry Form</h3>
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Request Submitted!</h3>
                <p className="text-sm text-gray-500">Thanks for reaching out! Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Your Full Name</label>
                  <input type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-2 text-xs bg-gray-50" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</label>
                    <input type="tel" required className="w-full border border-gray-200 rounded-xl px-4 py-2 text-xs bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Proposed City</label>
                    <input type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-2 text-xs bg-gray-50" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Investment Capability</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-2 text-xs bg-gray-50 text-gray-500">
                    <option>₹5 Lakhs – ₹6 Lakhs</option>
                    <option>₹6 Lakhs – ₹8 Lakhs</option>
                    <option>Above ₹8 Lakhs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Message / Notes</label>
                  <textarea rows={2} className="w-full border border-gray-200 rounded-xl px-4 py-2 text-xs bg-gray-50 resize-none" placeholder="Provide any additional location details..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full text-xs justify-center py-2.5">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
