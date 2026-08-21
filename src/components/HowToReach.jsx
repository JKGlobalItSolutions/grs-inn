import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation, LocateFixed } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { nearbyCities } from "../data/pilgrimage";
import room1 from "../assets/room1.jpeg";

const HOTEL_QUERY = "GRS INN, Tiruvannamalai, Tamil Nadu";

export default function HowToReach() {
  const [city, setCity] = useState("");
  const [locating, setLocating] = useState(false);

  const openDirections = (origin) => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      origin
    )}&destination=${encodeURIComponent(HOTEL_QUERY)}&travelmode=driving`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleGetDirections = (e) => {
    e.preventDefault();
    if (!city) return;
    openDirections(city);
  };

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      openDirections("current location");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        openDirections(`${pos.coords.latitude},${pos.coords.longitude}`);
      },
      () => {
        setLocating(false);
        openDirections("current location");
      },
      { timeout: 8000 }
    );
  };

  return (
    <section className="bg-ink py-24">
      <div className="container-inn">
        <SectionHeading
          light
          eyebrow="How to Reach GRS Inn"
          title="How to Reach Us"
          subtitle="Plan your journey to GRS Inn, Tiruvannamalai from your city with one click."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden min-h-[280px]"
          >
            <img
              src={room1}
              alt="GRS Inn reception"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-ink/10" />
            <div className="absolute bottom-4 left-4 bg-gold/90 text-ivory text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Navigation size={12} /> GRS INN, Tiruvannamalai
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-ivory/15 rounded-2xl p-8 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-11 h-11 grid place-items-center rounded-full bg-gold/15 text-gold-light">
                <Navigation size={18} />
              </span>
              <div>
                <h3 className="font-display text-xl text-ivory">Route Planner</h3>
                <p className="text-ivory/60 text-sm">
                  Choose your starting city for a direct Google Maps route.
                </p>
              </div>
            </div>

            <form onSubmit={handleGetDirections} className="mt-4">
              <label className="eyebrow text-gold-light block mb-2">Select Your City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full bg-ivory text-ink text-sm rounded-xl px-4 py-3.5 outline-none mb-5"
              >
                <option value="">Select Your City</option>
                {nearbyCities.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name} · {c.distance}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-ivory text-sm tracking-wide px-6 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation size={15} /> Get Directions
              </button>
            </form>

            <button
              onClick={handleCurrentLocation}
              className="mt-4 inline-flex items-center gap-2 text-ivory/70 text-sm hover:text-gold-light transition-colors underline underline-offset-4 cursor-pointer w-fit"
            >
              <LocateFixed size={14} />
              {locating ? "Locating..." : "Open Current Location Route"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}