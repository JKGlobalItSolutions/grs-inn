import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

export default function RoomCard({ room, index = 0 }) {
  const { openBooking } = useBooking();

  const images = useMemo(
    () => (room.gallery && room.gallery.length > 0 ? room.gallery.slice(0, 2) : [room.heroImage]),
    [room.gallery, room.heroImage]
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group bg-white rounded-3xl overflow-hidden border border-sand/70 shadow-[0_10px_35px_-20px_rgba(33,28,23,0.3)] hover:shadow-soft transition-shadow duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={images[current]}
            alt={room.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-4 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? "w-5 bg-ivory" : "w-1.5 bg-ivory/50"
                }`}
              />
            ))}
          </div>
        )}

        <div className="absolute top-4 left-4 bg-ivory/90 backdrop-blur px-3 py-1.5 rounded-full text-[11px] tracking-wide text-ink-soft z-10">
          {room.size}
        </div>
        <div className="absolute bottom-4 right-4 bg-ink/85 text-ivory px-3 py-1.5 rounded-full text-sm z-10">
          {room.price} <span className="text-ivory/60 text-xs">/ night</span>
        </div>
      </div>

      <div className="p-7">
        <h3 className="font-display text-2xl text-ink mb-1">{room.name}</h3>
        <p className="text-gold text-xs eyebrow mb-4">{room.tagline}</p>
        <p className="text-ink-soft text-sm leading-relaxed mb-5">{room.shortDescription}</p>

        <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-7 text-xs text-ink-soft/80">
          {room.features.slice(0, 4).map((f, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <f.icon size={14} className="text-gold" />
              {f.label}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to={`/rooms/${room.slug}`}
            className="flex-1 text-center border border-ink/20 text-ink text-sm px-4 py-2.5 rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={() => openBooking(room.name)}
            className="flex-1 text-center bg-gold hover:bg-gold-light text-ivory text-sm px-4 py-2.5 rounded-full transition-colors cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}