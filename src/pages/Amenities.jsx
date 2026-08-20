import {
  Wifi,
  Wind,
  Tv,
  Clock,
  UtensilsCrossed,
  Sparkles,
  ParkingCircle,
  Coffee,
  Droplets,
  Briefcase,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import AmenityCard from "../components/AmenityCard";

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Tv, label: "Smart TV" },
  { icon: Clock, label: "24/7 Front Desk" },
  { icon: Coffee, label: "Room Service" },
  { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: ParkingCircle, label: "Parking" },
  { icon: UtensilsCrossed, label: "Restaurant / Dining" },
  { icon: Droplets, label: "Hot Water" },
  { icon: Briefcase, label: "Business Facilities" },
];

export default function Amenities() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-inn">
        <SectionHeading
          eyebrow="Facilities"
          title="Everything You Need for a Comfortable Stay"
          subtitle="From everyday essentials to thoughtful extras, GRS INN is equipped to make your stay easy."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-24">
          {amenities.map((a, i) => (
            <AmenityCard key={a.label} icon={a.icon} label={a.label} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
              alt="GRS Inn restaurant dining space"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow text-gold">Dining</span>
            <h2 className="font-display text-3xl text-ink mt-3 mb-5">Dine & Unwind</h2>
            <p className="text-ink-soft leading-relaxed mb-6">
              Enjoy delicious meals and refreshing moments in a welcoming dining
              environment at GRS INN — from an unhurried breakfast to a relaxed dinner at
              the end of the day. Our kitchen serves familiar, comforting food made for
              guests on the go and guests settling in.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {["Breakfast", "Lunch", "Dinner", "Beverages"].map((m) => (
                <div key={m} className="flex items-center gap-2 text-sm text-ink-soft border border-sand rounded-full px-4 py-2.5">
                  <UtensilsCrossed size={14} className="text-gold" /> {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
