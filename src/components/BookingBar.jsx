import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, DoorOpen, BedDouble } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { rooms } from "../data/rooms";

export default function BookingBar() {
  const { openBooking } = useBooking();
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    rooms: 1,
    roomType: rooms[0].slug,
  });

  const selectedRoom = useMemo(
    () => rooms.find((r) => r.slug === form.roomType) || rooms[0],
    [form.roomType]
  );

  const maxGuests = selectedRoom.maxGuests;
  const maxRooms = selectedRoom.roomCount;

  const handleRoomTypeChange = (e) => {
    const nextRoom = rooms.find((r) => r.slug === e.target.value) || rooms[0];
    setForm((f) => ({
      ...f,
      roomType: nextRoom.slug,
      guests: Math.min(f.guests, nextRoom.maxGuests),
      rooms: Math.min(f.rooms, nextRoom.roomCount),
    }));
  };

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
            <BedDouble size={18} className="text-gold shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] eyebrow text-ink-soft/60">Room Type</label>
              <select value={form.roomType} onChange={handleRoomTypeChange} className={fieldClass}>
                {rooms.map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 md:px-4 md:border-r border-sand-dark/40 py-2">
            <Users size={18} className="text-gold shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] eyebrow text-ink-soft/60">Guests</label>
              <select value={form.guests} onChange={update("guests")} className={fieldClass}>
                {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 md:px-4 py-2">
            <DoorOpen size={18} className="text-gold shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] eyebrow text-ink-soft/60">Rooms</label>
              <select value={form.rooms} onChange={update("rooms")} className={fieldClass}>
                {Array.from({ length: maxRooms }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Room" : "Rooms"}
                  </option>
                ))}
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