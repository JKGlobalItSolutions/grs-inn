import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { galleryImages, galleryCategories } from "../data/gallery";

export default function Gallery({ limit }) {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    const list = active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  const openLightbox = (id) => setLightboxIndex(filtered.findIndex((g) => g.id === id));
  const closeLightbox = () => setLightboxIndex(null);
  const step = (dir) =>
    setLightboxIndex((i) => (i === null ? null : (i + dir + filtered.length) % filtered.length));

  return (
    <div>
      {!limit && (
        <div className="flex justify-center mb-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold transition-colors border border-sand rounded-full px-5 py-2"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>
      )}

      {!limit && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition-colors cursor-pointer ${
                active === cat
                  ? "bg-ink text-ivory border-ink"
                  : "border-sand text-ink-soft hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((img, i) => (
          <motion.button
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            onClick={() => openLightbox(img.id)}
            className="relative block w-full break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500 flex items-end p-4">
              <span className="text-ivory text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 eyebrow">
                {img.category}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              aria-label="Close gallery preview"
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-ivory/80 hover:text-gold-light"
            >
              <X size={28} />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-4 sm:left-8 text-ivory/70 hover:text-gold-light"
            >
              <ChevronLeft size={32} />
            </button>
            <motion.img
              key={filtered[lightboxIndex]?.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              src={filtered[lightboxIndex]?.src}
              alt={filtered[lightboxIndex]?.alt}
              className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain"
            />
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-4 sm:right-8 text-ivory/70 hover:text-gold-light"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}