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
  Truck,
  Zap,
  User,
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
  { icon: Truck, label: "Lift" },
  { icon: Zap, label: "DG Generator Set" },
  { icon: User, label: "Driver Stay Facility" },
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
      </div>
    </div>
  );
}