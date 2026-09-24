import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import buildingExterior from "../assets/building-exterior.jpg";
import room22 from "../assets/room22.jpeg";

const slides = [buildingExterior, room22];
const SLIDE_DURATION = 5500; // ms

const BOOKING_URL = "https://bookingengine.stayflexi.com/41762/?checkin=02-10-2026&num_nights=1&num_guests=2&source=google&hotel_id=41762";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: SLIDE_DURATION / 1000 + 1.2, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          <img
            src={slides[current]}
            alt="GRS INN hero view"
            className="w-full h-full object-cover object-[center_20%]"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/75" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="eyebrow text-gold-light mb-5"
        >
          Welcome to GRS Inn
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-display text-ivory text-4xl sm:text-6xl md:text-7xl leading-[1.05] max-w-4xl"
        >
          Comfort. Elegance.
          <br />
          <span className="italic text-gold-light">A Stay to Remember.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="text-ivory/85 max-w-xl mt-6 text-base sm:text-lg leading-relaxed"
        >
          Experience thoughtfully designed rooms, modern amenities and warm
          hospitality in a comfortable setting created for every kind of
          stay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-ivory px-8 py-3.5 rounded-full text-sm tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-soft cursor-pointer"
          >
            Book Your Stay
          </a>
          <Link
            to="/rooms"
            className="border border-ivory/70 text-ivory px-8 py-3.5 rounded-full text-sm tracking-wide transition-all hover:bg-ivory hover:text-ink hover:-translate-y-0.5"
          >
            Explore Rooms
          </Link>
        </motion.div>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              i === current ? "w-8 bg-gold-light" : "w-1.5 bg-ivory/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="w-px h-10 bg-ivory/50" />
        <span className="text-ivory/60 text-[11px] tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}