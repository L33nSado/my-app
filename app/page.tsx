import React from 'react';

export default function Home() {
  const amenities = [
    { title: "Boutique Comfort", desc: "Elegantly designed modern rooms in the heart of Koşuyolu." },
    { title: "Central Location", desc: "Easy access to Kadıköy, Anatolian transportation hubs, and healthcare centers." },
    { title: "24/7 Guest Support", desc: "Dedicated concierge service ready to assist with reservations and inquiries." },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-800 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold tracking-wider text-amber-400">
          IZZ HOTEL <span className="text-xs text-slate-400 font-normal">KOŞUYOLU</span>
        </div>
        <div className="space-x-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#rooms" className="hover:text-amber-400 transition-colors">Rooms</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          Boutique Hospitality
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight mt-6 mb-4 text-slate-50">
          Welcome to IZZ Hotel
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          Experience refined comfort, personalized service, and seamless connectivity in Koşuyolu.
        </p>

        {/* Quick Booking / Inquiry Bar */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-2xl flex flex-col sm:flex-row gap-4 justify-between items-center max-w-2xl mx-auto">
          <div className="text-left w-full sm:w-auto">
            <label className="block text-xs text-slate-400 uppercase font-medium mb-1">Stay Dates</label>
            <input type="date" className="bg-slate-950 border border-slate-800 text-sm text-slate-200 rounded px-3 py-2 w-full focus:outline-none focus:border-amber-400" />
          </div>
          <div className="text-left w-full sm:w-auto">
            <label className="block text-xs text-slate-400 uppercase font-medium mb-1">Guests</label>
            <select className="bg-slate-950 border border-slate-800 text-sm text-slate-200 rounded px-3 py-2 w-full focus:outline-none focus:border-amber-400">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3+ Guests</option>
            </select>
          </div>
          <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-6 py-2.5 rounded-lg transition-all self-end">
            Check Availability
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="about" className="px-6 py-12 max-w-6xl mx-auto border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amenities.map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-900/50 border border-slate-800/80 rounded-xl">
              <h3 className="text-lg font-bold text-amber-400 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact Information */}
      <footer id="contact" className="border-t border-slate-800 mt-20 py-8 px-6 text-center text-xs text-slate-500">
        <p>IZZ Hotel Koşuyolu • All Rights Reserved</p>
        <p className="mt-1">For reservations and direct support, please contact reception.</p>
      </footer>
    </main>
  );
}