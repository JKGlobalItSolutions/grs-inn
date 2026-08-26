import { Wifi, Wind, Tv, BedDouble, Bath, Users, Coffee, Sofa } from "lucide-react";
import room19 from "../assets/room19.jpeg";
import room20 from "../assets/room20.jpeg";
import room21 from "../assets/room21.jpeg";
import room6 from "../assets/room6.jpeg";
import room7 from "../assets/room7.jpeg";
import room12 from "../assets/room12.jpeg";
import room14 from "../assets/room14.jpeg";
import room16 from "../assets/room16.jpeg";
import room17 from "../assets/room17.jpeg";
import room18 from "../assets/room18.jpeg";

import room11 from "../assets/room11.jpeg";

export const rooms = [
  {
    slug: "Twin Super Deluxe Room",
    name: "Twin Super Deluxe Room",
    tagline: "Comfortable. Practical. Restful.",
    price: "₹3500",
    priceNote: "per night, taxes extra",
    shortDescription:
      "A comfortable and practical stay with all the essentials for a relaxing visit.",
    longDescription:
      "Designed for the traveller who wants a clean, quiet and well-appointed base for the night, the Standard Room keeps things simple without cutting corners. A plush queen bed, a dedicated work corner and a crisp modern bathroom make it an easy choice for short business trips or a first night in the city before the rest of your stay begins.",
    size: "480 sq. ft.",
    bed: "2 Queen-size bed",
    occupancy: "4 Guests",
    maxGuests: 4,
    roomCount: 8,
    view: "Courtyard view",
    heroImage: room19,
    gallery: [room19, room20, room21],
    features: [
      { icon: BedDouble, label: "2 Queen-Bed" },
      { icon: Users, label: "4 Guests" },
      { icon: Bath, label: "Modern bathroom" },
      { icon: Wifi, label: "Complimentary Wi-Fi" },
      { icon: Wind, label: "Individual air conditioning" },
    ],
    amenities: [
      "Complimentary high-speed Wi-Fi",
      "Individually controlled air conditioning",
      "Work desk with reading lamp",
      "Attached modern bathroom with hot water",
      "Daily housekeeping",
      "In-room tea and coffee tray",
    ],
  },
  {
    slug: "Twin Standard Room",
    name: "Twin Standard Room",
    tagline: "Spacious. Refined. Unwind.",
    price: "₹3000",
    priceNote: "per night, taxes extra",
    shortDescription:
      "A more spacious and refined room designed for guests looking for extra comfort during their stay.",
    longDescription:
      "The Deluxe Room gives you room to breathe — a larger footprint, premium bedding and a seating nook that turns the room into a place you actually want to spend time in. Warm lighting and considered detailing make it equally suited to a relaxed weekend or a longer business stay where comfort matters as much as convenience.",
    size: "310 sq. ft.",
    bed: "1 Queen-size bed 1 Single Bed",
    occupancy: "3 Guests",
    maxGuests: 3,
    roomCount: 3,
    view: "City or garden view",
    heroImage: room6,
    gallery: [room6, room7, room12, room14],
    features: [
      { icon: BedDouble, label: "1 Queen-Bed , 1Single-Bed" },
      { icon: Users, label: "3 Guests" },
      { icon: Sofa, label: "Spacious interiors" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wifi, label: "Complimentary Wi-Fi" },
      { icon: Wind, label: "Air conditioning" },
    ],
    amenities: [
      "Complimentary high-speed Wi-Fi",
      "Smart TV with streaming access",
      "Premium bedding and extra pillows",
      "Seating nook with reading chair",
      "Air conditioning with climate control",
      "Mini fridge and coffee maker",
      "Daily housekeeping with turndown option",
    ],
  },
  {
    slug: "Single Standard Room",
    name: "Single Standard Room ",
    tagline: "Elegant. Expansive. Elevated.",
    price: "₹2000",
    priceNote: "per night, taxes extra",
    shortDescription:
      "An elegant, spacious accommodation experience with dedicated living space and enhanced comfort.",
    longDescription:
      "Our most spacious accommodation, the Suite Room separates rest from relaxation with a dedicated living area alongside the bedroom. It's built for guests who want a longer, more considered stay — families settling in for a few days, or business travellers who need room to host a quiet conversation without leaving the room.",
    size: "220 sq. ft.",
    bed: "1 Queen-size bed",
    occupancy: "2 Guests",
    maxGuests: 2,
    roomCount: 4,
    view: "Premium city view",
    heroImage: room17,
    gallery: [room17, room18, room11],
    features: [
      { icon: BedDouble, label: "1 Queen-size bed" },
      { icon: Users, label: "2 Guests" },
      // { icon: Sofa, label: "Separate living area" },
      { icon: Bath, label: "Premium bathroom" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wifi, label: "Complimentary Wi-Fi" },
      { icon: Wind, label: "Air conditioning" },
    ],
    amenities: [
      "Separate living and sleeping areas",
      "Premium bathroom with rain shower",
      "Smart TV with streaming access",
      "Complimentary high-speed Wi-Fi",
      "Air conditioning with climate control",
      "Welcome refreshments on arrival",
      "Priority daily housekeeping",
      "In-room dining menu access",
    ],
  },
];

export const getRoomBySlug = (slug) => rooms.find((r) => r.slug === slug);

export const Coffee_ = Coffee;