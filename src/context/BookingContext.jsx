import { createContext, useContext, useState, useCallback } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetRoom, setPresetRoom] = useState("");

const BOOKING_URL = "https://bookingengine.stayflexi.com/41762/?checkin=02-10-2026&num_nights=1&num_guests=2&source=google&hotel_id=41762";

  const openBooking = useCallback(() => {
    window.open(BOOKING_URL, "_blank");
  }, []);

  const closeBooking = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ isOpen, presetRoom, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
