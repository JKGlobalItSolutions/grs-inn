import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Hourglass, Moon, Sparkles } from "lucide-react";
import { pilgrimageDates, getNextPournami, stayBenefits } from "../data/pilgrimage";
import SectionHeading from "./SectionHeading";
import { useBooking } from "../context/BookingContext";

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

export default function PilgrimageCalendar() {
  const { openBooking } = useBooking();

  // Compute `next` exactly once (lazy initializer) instead of calling
  // getNextPournami() on every render. If that function returns a fresh
  // object/Date each time it's called, calling it on every render made
  // `next` (and therefore the countdown's target date) change reference
  // every render — which retriggered the countdown's useEffect every
  // render, which called setState every render, causing an infinite loop.
  const [next] = useState(() => getNextPournami());

  const targetDate = useMemo(
    () => next.dateObj || new Date(`${next.date}T18:00:00`),
    [next]
  );
  const countdown = useCountdown(targetDate);

  return (
    <section className="bg-ivory-dim/60 py-24">
      <div className="container-inn">
        <SectionHeading
          eyebrow="Pilgrimage Dates"
          title="Pournami & Girivalam Calendar"
          subtitle="Plan your spiritual journey around GRS INN's Pournami and Girivalam calendar, and the divine energy of Arunachala on these sacred nights."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-8">
          {/* Upcoming dates list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-sand rounded-2xl p-7"
          >
            <span className="eyebrow text-gold">Upcoming Sacred Dates</span>
            <h3 className="font-display text-xl text-ink mt-2 mb-5">
              Plan Around Peak Pilgrimage Nights
            </h3>
            <ul className="divide-y divide-sand">
              {pilgrimageDates.map((d) => (
                <li key={d.date} className="flex items-center gap-4 py-4">
                  <span className="bg-ink text-ivory text-xs font-medium px-3 py-2 rounded-lg shrink-0 w-16 text-center">
                    {d.label}
                  </span>
                  <div>
                    <p className="text-sm text-ink font-medium">{d.title}</p>
                    <p className="text-xs text-gold">{d.demand}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Countdown + room status + benefits */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-ink rounded-2xl p-7"
            >
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-ivory/70 text-xs eyebrow">
                  <Hourglass size={14} className="text-gold-light" /> Booking Countdown
                </div>
                <button
                  onClick={() => openBooking()}
                  className="bg-gold hover:bg-gold-light text-ivory text-xs px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Reserve Your Stay
                </button>
              </div>
              <p className="flex items-center gap-2 text-ivory/80 text-sm mb-5">
                <Moon size={16} className="text-gold-light" /> Next Pournami — {next.label}
              </p>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { v: countdown.days, l: "Days" },
                  { v: countdown.hours, l: "Hours" },
                  { v: countdown.minutes, l: "Minutes" },
                  { v: countdown.seconds, l: "Seconds" },
                ].map((c) => (
                  <div key={c.l} className="bg-ivory/5 border border-ivory/10 rounded-xl py-4 text-center">
                    <p className="font-display text-2xl sm:text-3xl text-ivory">
                      {String(c.v).padStart(2, "0")}
                    </p>
                    <p className="text-[10px] eyebrow text-ivory/50 mt-1">{c.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white border border-sand rounded-2xl p-6"
              >
                <span className="eyebrow text-gold">Live Room Status</span>
                <p className="text-sm text-ink font-medium mt-2 mb-3">
                  🔥 Pournami Booking Status
                </p>
                <p className="text-2xl font-display text-ink mb-2">85% Rooms Already Booked</p>
                <div className="h-2 bg-sand rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-gold rounded-full" style={{ width: "85%" }} />
                </div>
                <p className="text-red-600 text-xs font-medium mb-4">Only 3 Rooms Remaining</p>
                <button
                  onClick={() => openBooking()}
                  className="w-full bg-ink hover:bg-pine text-ivory text-xs tracking-wide px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Book Now
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-sand rounded-2xl p-6"
              >
                <span className="eyebrow text-gold flex items-center gap-1.5">
                  <Sparkles size={12} /> Stay Benefits
                </span>
                <p className="text-sm text-ink font-medium mt-2 mb-3">
                  Why Stay at GRS Inn During Pournami?
                </p>
                <ul className="space-y-2.5">
                  {stayBenefits.slice(0, 4).map((b) => (
                    <li key={b.label} className="flex items-start gap-2 text-xs text-ink-soft">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1 shrink-0" />
                      {b.label}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        <p className="text-center text-[11px] text-ink-soft/50">
          Dates shown follow the 2026 Pournami (full moon) calendar. Booking demand figures are
          illustrative for design purposes.
        </p>
      </div>
    </section>
  );
}