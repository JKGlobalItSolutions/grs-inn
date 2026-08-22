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
  ArrowUpDown,
  Zap,
  User,
  ArrowLeft,
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
  { icon: Droplets, label: "24×7 Hot Water" },
  { icon: ArrowUpDown, label: "Lift" },
  { icon: Zap, label: "DG Generator Set" },
  { icon: User, label: "Driver Stay Facility" },
  { icon: Briefcase, label: "Business Facilities" },
];

export default function Amenities() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-inn">
        <div className="flex justify-center mb-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold transition-colors border border-sand rounded-full px-5 py-2"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>
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
      </div>
    </div>
  );
}