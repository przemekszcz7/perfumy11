/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Phone, ShoppingBag, CheckCircle2, ChevronRight, Menu, X, ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import { useState, useEffect } from "react";

const PRODUCTS = [
  "https://iili.io/BZ7WI8x.md.jpg",
  "https://iili.io/BZ7WTyQ.md.jpg",
  "https://iili.io/BZ7Wzaj.md.jpg",
  "https://iili.io/BZ7WAuV.md.jpg",
  "https://iili.io/BZ7WRwB.md.jpg",
  "https://iili.io/BZ7WaMF.md.jpg",
  "https://iili.io/BZ7Wc6g.md.jpg",
  "https://iili.io/BZ7W0Fa.md.jpg",
  "https://iili.io/BZ7W1cJ.md.jpg",
  "https://iili.io/BZ7WVup.md.jpg",
  "https://iili.io/BZ7WWwN.md.jpg",
  "https://iili.io/BZ7WXtI.md.jpg",
  "https://iili.io/BZ7Wjnt.md.jpg",
];

const PHONE_NUMBER = "739 591 156";
const PHONE_RAW = "739591156";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-xl border-b border-white/10" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="font-serif text-2xl font-bold tracking-tighter decoration-gold-500 underline-offset-4 decoration-2">
              Perfumy <span className="text-gold-500">1:1</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["O nas", "Produkty", "Kontakt"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(" ", ""))}
                className="text-sm font-medium hover:text-gold-400 transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
            <a 
              href={`tel:${PHONE_RAW}`}
              className="px-5 py-2.5 bg-gold-500 text-black rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gold-400 transition-all active:scale-95 shadow-lg shadow-gold-500/20"
            >
              <Phone size={16} />
              {PHONE_NUMBER}
            </a>
          </div>

          <button className="md:hidden text-gold-500" onClick={() => setIsMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-12 p-10"
          >
            <button className="absolute top-8 right-8 text-gold-500" onClick={() => setIsMenuOpen(false)}>
              <X size={40} />
            </button>
            <div className="font-serif text-4xl font-bold text-gold-500 mb-8">Menu</div>
            {["O nas", "Produkty", "Kontakt"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(" ", ""))}
                className="text-2xl font-serif hover:text-gold-500 transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href={`tel:${PHONE_RAW}`}
              className="mt-8 px-8 py-4 bg-gold-500 text-black rounded-full font-bold text-xl flex items-center gap-3"
            >
              <Phone size={24} />
              {PHONE_NUMBER}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden flex items-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black z-10" />
          <img 
            src={PRODUCTS[0]} 
            alt="Luxury Fragrance" 
            className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 border border-gold-500/50 text-gold-500 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
            >
              Najlepsza Hurtownia w Kraju
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif font-bold leading-tight md:leading-none mb-6">
              Doskonałość <br />
              <span className="text-gold-500 italic tracking-tight">W Każdym Flakonie</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Oferujemy najwyższej jakości perfumy 1:1, które zachwycają trwałością i głębią zapachu. Idealny wybór dla Twojego biznesu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollTo("produkty")}
                className="px-10 py-5 bg-gold-500 text-black font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-gold-400 transition-all group"
              >
                Zobacz ofertę
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href={`tel:${PHONE_RAW}`}
                className="px-10 py-5 border border-white/20 hover:border-gold-500/50 hover:bg-white/5 transition-all font-bold text-lg rounded-full flex items-center justify-center gap-3"
              >
                <Phone size={20} className="text-gold-500" />
                Zadzwoń do nas
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8 text-sm opacity-60 hidden md:flex">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-gold-500" />
            <span>Jakość 1:1</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-gold-500" />
            <span>Ekspresowa Wysyłka</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-gold-500" />
            <span>Najlepsze Ceny</span>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="onas" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck className="text-gold-500 w-12 h-12" />, title: "Gwarancja Jakości", desc: "Każdy produkt przechodzi rygorystyczne testy trwałości i zgodności z oryginałem." },
              { icon: <Truck className="text-gold-500 w-12 h-12" />, title: "Szybka Dostawa", desc: "Zamówienia realizujemy w ciągu 24h, abyś mógł szybko uzupełnić swój asortyment." },
              { icon: <Star className="text-gold-500 w-12 h-12" />, title: "Wsparcie Biznesu", desc: "Oferujemy elastyczne warunki współpracy i specjalne rabaty dla stałych odbiorców." }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section id="produkty" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">Ekskluzywna Kolekcja</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold">Nasze Bestellery</h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg">
              Przeglądaj naszą starannie wyselekcjonowaną ofertę najpopularniejszych aromatów na rynku hurtowym.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-zinc-900 rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border border-white/5"
              >
                <img 
                  src={src} 
                  alt={`Product ${i + 1}`} 
                  className="w-full h-full object-cover p-2 rounded-3xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" 
                />
                {i !== 12 && (
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <div className="flex justify-between items-center bg-gold-500 p-3 rounded-2xl text-black font-bold">
                      <span>Zapytaj o cenę</span>
                      <ChevronRight size={20} />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-zinc-500 italic mb-8">To tylko część naszej bogatej oferty ponad 500 zapachów...</p>
            <a 
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-4 text-gold-500 font-serif text-3xl hover:text-gold-400 transition-all group"
            >
              Dowiedz się więcej <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 relative overflow-hidden">
        {/* Abstract shapes for background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-zinc-950 rounded-[3rem] p-12 md:p-24 border border-gold-500/20 shadow-2xl overflow-hidden relative">
            <div className="max-w-3xl mx-auto text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                Rozpocznij <br />
                <span className="text-gold-400">Współpracę</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
                Jesteśmy dostępni codziennie, aby odpowiedzieć na Twoje pytania i przygotować najlepszą ofertę hurtową dla Twojej firmy.
              </p>
              
              <div className="space-y-8 flex flex-col items-center md:items-start">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
                    <Phone size={32} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-1">Zadzwoń teraz</div>
                    <a href={`tel:${PHONE_RAW}`} className="text-3xl font-serif font-bold hover:text-gold-500 transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-500">
                    <ShoppingBag size={32} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-1">Zamówienia hurtowe</div>
                    <p className="text-xl text-gray-300">Dostarczamy na terenie całej Polski</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
              <span className="font-serif font-bold text-black text-xs">P</span>
            </div>
            <span className="font-serif text-xl font-bold">Perfumy 1:1</span>
          </div>
          
          <div className="flex gap-8 text-zinc-500 text-sm">
            <span>© 2026 Hurtownia Perfumy 1:1</span>
            <span className="hidden md:inline">|</span>
            <span>Jakość Ponad Wszystko</span>
          </div>

          <div className="flex gap-6">
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500 transition-colors">
               <Phone size={18} className="text-gold-500" />
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
