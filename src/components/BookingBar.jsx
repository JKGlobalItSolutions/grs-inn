import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, DoorOpen, BedDouble } from "lucide-react";
import { useBooking } from "../context/BookingContext";

export default function BookingBar() {
  const { openBooking } = useBooking();
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    rooms: 1,
    roomType: "Standard Room",
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleCheck = (e) => {
    e.preventDefault();
    openBooking(form.roomType);
  };

  const fieldClass =
    "w-full bg-transparent text-ink text-sm outline-none placeholder:text-ink-soft/50";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative z-20 -mt-12 sm:-mt-14"
    >
      <div className="container-inn">
        <form
          onSubmit={handleCheck}
          className="bg-ivory rounded-2xl md:rounded-full shadow-soft border border-sand px-5 py-5 md:py-3 flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-2"
        >
          <div className="flex-1 flex items-center gap-3 md:px-4 md:border-r border-sand-dark/40 py-2">
            <CalendarDays size={18} className="text-gold shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] eyebrow text-ink-soft/60">Check-in</label>
              <input
                type="date"
                required
                value={form.checkIn}
                onChange={update("checkIn")}
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 md:px-4 md:border-r border-sand-dark/40 py-2">
            <CalendarDays size={18} className="text-gold shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] eyebrow text-ink-soft/60">Check-out</label>
              <input
                type="date"
                required
                value={form.checkOut}
                onChange={update("checkOut")}
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 md:px-4 md:border-r border-sand-dark/40 py-2">
            <Users size={18} className="text-gold shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] eyebrow text-ink-soft/60">Guests</label>
              <input
                type="number"
                min={1}
                value={form.guests}
                onChange={update("guests")}
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 md:px-4 md:border-r border-sand-dark/40 py-2">
            <DoorOpen size={18} className="text-gold shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] eyebrow text-ink-soft/60">Rooms</label>
              <input
                type="number"
                min={1}
                value={form.rooms}
                onChange={update("rooms")}
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 md:px-4 py-2">
            <BedDouble size={18} className="text-gold shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] eyebrow text-ink-soft/60">Room Type</label>
              <select value={form.roomType} onChange={update("roomType")} className={fieldClass}>
                <option>Standard Room</option>
                <option>Deluxe Room</option>
                <option>Suite Room</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-ink hover:bg-pine text-ivory text-sm tracking-wide px-7 py-3 rounded-full transition-colors shrink-0 cursor-pointer"
          >
            Check Availability
          </button>
        </form>
      </div>
    </motion.div>
  );
}
