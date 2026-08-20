import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { attractions, attractionFallbackImage } from "../data/attractions";
import SectionHeading from "./SectionHeading";

export default function NearbyAttractions() {
  const scrollerRef = useRef(null);

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const width = card ? card.offsetWidth + 24 : 340;
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section className="container-inn py-24">
      <SectionHeading
        eyebrow="Around GRS Inn"
        title="Nearby Attractions"
        subtitle="Discover the spiritual and cultural landmarks surrounding GRS INN in Tiruvannamalai."
      />

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {attractions.map((a, i) => (
            <motion.article
              key={a.name}
              data-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="snap-start shrink-0 w-[80%] sm:w-[46%] lg:w-[31%] bg-white rounded-2xl overflow-hidden border border-sand"
            >
              <div className="h-48 overflow-hidden bg-sand">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (e.currentTarget.src !== attractionFallbackImage) {
                      e.currentTarget.src = attractionFallbackImage;
                    }
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-ink mb-2">{a.name}</h3>
                <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs px-3 py-1.5 rounded-full mb-4">
                  <MapPin size={12} /> {a.distance}
                </span>
                <p className="text-ink-soft text-sm leading-relaxed">{a.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <button
          aria-label="Previous attraction"
          onClick={() => scrollByCard(-1)}
          className="hidden sm:grid absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 place-items-center rounded-full bg-ivory border border-sand shadow-soft text-ink-soft hover:text-gold hover:border-gold transition-colors cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          aria-label="Next attraction"
          onClick={() => scrollByCard(1)}
          className="hidden sm:grid absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 place-items-center rounded-full bg-ivory border border-sand shadow-soft text-ink-soft hover:text-gold hover:border-gold transition-colors cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
