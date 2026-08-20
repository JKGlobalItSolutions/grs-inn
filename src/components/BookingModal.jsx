import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { useBooking } from "../context/BookingContext";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomType: "Standard Room",
  guests: 1,
  rooms: 1,
  requests: "",
};

export default function BookingModal() {
  const { isOpen, presetRoom, closeBooking } = useBooking();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, roomType: presetRoom || f.roomType }));
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen, presetRoom]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone))
      errs.phone = "Enter a valid phone number.";
    if (!form.checkIn) errs.checkIn = "Check-in date is required.";
    if (!form.checkOut) errs.checkOut = "Check-out date is required.";
    if (form.checkIn && form.checkOut && new Date(form.checkOut) <= new Date(form.checkIn))
      errs.checkOut = "Check-out must be after check-in.";
    if (!form.guests || Number(form.guests) <= 0) errs.guests = "Guests must be greater than zero.";
    if (!form.rooms || Number(form.rooms) <= 0) errs.rooms = "Rooms must be greater than zero.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    closeBooking();
    setTimeout(() => {
      setForm(initialForm);
      setSubmitted(false);
      setErrors({});
    }, 300);
  };

  const inputClass = (key) =>
    `w-full bg-ivory-dim/60 border rounded-xl px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold ${
      errors[key] ? "border-red-400" : "border-sand"
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-ivory rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-soft"
          >
            <button
              onClick={handleClose}
              aria-label="Close booking form"
              className="absolute top-5 right-5 w-9 h-9 grid place-items-center rounded-full bg-white border border-sand text-ink-soft hover:text-gold hover:border-gold transition-colors z-10"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <div className="p-8 sm:p-10">
                <span className="eyebrow text-gold">GRS Inn</span>
                <h3 className="font-display text-3xl text-ink mt-2 mb-1">Reserve Your Stay</h3>
                <p className="text-ink-soft text-sm mb-8">
                  Fill in your details and our team will confirm your reservation shortly.
                </p>

                <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-ink-soft mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={update("fullName")}
                      className={inputClass("fullName")}
                      placeholder="Your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-ink-soft mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      className={inputClass("email")}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-ink-soft mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      className={inputClass("phone")}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-ink-soft mb-1.5">Check-in Date</label>
                    <input
                      type="date"
                      value={form.checkIn}
                      onChange={update("checkIn")}
                      className={inputClass("checkIn")}
                    />
                    {errors.checkIn && <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-ink-soft mb-1.5">Check-out Date</label>
                    <input
                      type="date"
                      value={form.checkOut}
                      onChange={update("checkOut")}
                      className={inputClass("checkOut")}
                    />
                    {errors.checkOut && <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-ink-soft mb-1.5">Room Type</label>
                    <select value={form.roomType} onChange={update("roomType")} className={inputClass("roomType")}>
                      <option>Standard Room</option>
                      <option>Deluxe Room</option>
                      <option>Suite Room</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-ink-soft mb-1.5">Number of Guests</label>
                    <input
                      type="number"
                      min={1}
                      value={form.guests}
                      onChange={update("guests")}
                      className={inputClass("guests")}
                    />
                    {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-ink-soft mb-1.5">Number of Rooms</label>
                    <input
                      type="number"
                      min={1}
                      value={form.rooms}
                      onChange={update("rooms")}
                      className={inputClass("rooms")}
                    />
                    {errors.rooms && <p className="text-red-500 text-xs mt-1">{errors.rooms}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs text-ink-soft mb-1.5">Special Requests (optional)</label>
                    <textarea
                      rows={3}
                      value={form.requests}
                      onChange={update("requests")}
                      className={inputClass("requests")}
                      placeholder="Let us know of any preferences for your stay"
                    />
                  </div>

                  <div className="sm:col-span-2 mt-2">
                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-light text-ivory text-sm tracking-wide px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                    >
                      Submit Booking Request
                    </button>
                    <p className="text-center text-[11px] text-ink-soft/60 mt-3">
                      This is a request form — no payment is collected here. This is a frontend prototype and does not process real payments.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-10 sm:p-14 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/15 grid place-items-center mb-6">
                  <CheckCircle2 size={32} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-ink mb-3">
                  Booking Request Received
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed max-w-sm mb-8">
                  Thank you for choosing GRS INN. Your stay request has been received. Our
                  team will contact you shortly to confirm the reservation.
                </p>
                <button
                  onClick={handleClose}
                  className="border border-ink/20 text-ink px-7 py-3 rounded-full text-sm hover:border-gold hover:text-gold transition-colors"
                >
                  Back to Home
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
