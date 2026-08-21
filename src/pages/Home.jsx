import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wifi,
  Wind,
  Tv,
  Clock,
  UtensilsCrossed,
  Sparkles,
  ParkingCircle,
  Coffee,
  Briefcase,
  Home as HomeIcon,
  HeartHandshake,
  ShieldCheck,
  Gem,
  Droplets,
  Truck,
  Zap,
  User,
} from "lucide-react";
import Hero from "../components/Hero";
import BookingBar from "../components/BookingBar";
import SectionHeading from "../components/SectionHeading";
import RoomCard from "../components/RoomCard";
import AmenityCard from "../components/AmenityCard";
import Testimonials from "../components/Testimonials";
import NearbyAttractions from "../components/NearbyAttractions";
import PilgrimageCalendar from "../components/PilgrimageCalendar";
import HowToReach from "../components/HowToReach";
import { rooms } from "../data/rooms";
import { useBooking } from "../context/BookingContext";

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
];

const experiences = [
  {
    icon: HeartHandshake,
    title: "Warm Hospitality",
    desc: "Friendly service designed to make every guest feel welcome.",
  },
  {
    icon: Sparkles,
    title: "Modern Comfort",
    desc: "Thoughtfully equipped rooms with essential modern conveniences.",
  },
  {
    icon: Briefcase,
    title: "Convenient Stay",
    desc: "A comfortable base for business trips, family visits and leisure travel.",
  },
  {
    icon: HomeIcon,
    title: "Memorable Moments",
    desc: "A welcoming environment for relaxing after a busy day.",
  },
];

const whyChoose = [
  { icon: Gem, title: "Comfort", desc: "Thoughtfully designed spaces for restful stays." },
  { icon: Sparkles, title: "Cleanliness", desc: "Maintaining a fresh and pleasant environment for every guest." },
  { icon: HeartHandshake, title: "Hospitality", desc: "Attentive service with a warm and personal approach." },
  { icon: ShieldCheck, title: "Value", desc: "A comfortable hotel experience designed to offer great value." },
];

export default function Home() {
  const { openBooking } = useBooking();

  return (
    <div>
      <Hero />
      <BookingBar />

      {/* ABOUT */}
      <section className="container-inn pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-t-full rounded-b-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop"
              alt="A quiet, well-lit room at GRS Inn"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-8 -right-4 bg-ivory border border-sand rounded-2xl px-6 py-5 shadow-soft">
            <p className="font-display text-3xl text-gold">10+</p>
            <p className="text-xs text-ink-soft w-28">Years of hosting comfortable stays</p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About GRS Inn"
            title="A Stay Designed Around You"
            subtitle=""
          />
          <p className="text-ink-soft leading-relaxed -mt-8 mb-8">
GRS Inn
A Stay Designed Around You
GRS INN was built around a simple idea: a stay should feel effortless. Every room is kept clean and thoughtfully arranged, every facility is chosen for everyday convenience, and every member of our team is here to make your visit easier — whether you're passing through for a night of business or settling in for a longer family trip.With a focus on comfort, cleanliness, convenience, and warm hospitality, GRS Inn aims to make every guest’s stay pleasant and memorable. Whether you are visiting for pilgrimage, Girivalam, sightseeing, or business, GRS Inn is committed to providing a reliable and comfortable stay in Tiruvannamalai.
          </p>
          <ul className="grid grid-cols-2 gap-4 mb-10">
            {["Comfortable accommodation", "Thoughtfully designed rooms", "Modern facilities", "Friendly hospitality", "Convenient location", "Business & leisure ready"].map(
              (item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                  {item}
                </li>
              )
            )}
          </ul>
          {/* <Link
            to="/about"
            className="inline-block border border-ink/20 text-ink px-7 py-3 rounded-full text-sm hover:border-gold hover:text-gold transition-colors"
          >
            Discover GRS Inn
          </Link> */}
        </div>
      </section>

      {/* ROOMS */}
      <section className="bg-ivory-dim/60 py-24">
        <div className="container-inn">
          <SectionHeading
            eyebrow="Accommodation"
            title="Stay Your Way"
            subtitle="Choose the room that fits your comfort, space and travel needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <RoomCard key={room.slug} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      <NearbyAttractions />

      <PilgrimageCalendar />

      {/* AMENITIES */}
      <section className="container-inn py-24">
        <SectionHeading
          eyebrow="Facilities"
          title="Everything You Need for a Comfortable Stay"
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {amenities.map((a, i) => (
            <AmenityCard key={a.label} icon={a.icon} label={a.label} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/amenities" className="text-gold text-sm hover:text-gold-light underline underline-offset-4">
            View all amenities
          </Link>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-ink py-24">
        <div className="container-inn">
          <SectionHeading light eyebrow="The GRS Inn Experience" title="More Than Just a Room" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="border border-ivory/12 rounded-2xl p-7 hover:border-gold-light/50 transition-colors"
              >
                <e.icon className="text-gold-light mb-5" size={26} />
                <h3 className="font-display text-xl text-ivory mb-2">{e.title}</h3>
                <p className="text-ivory/60 text-sm leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowToReach />

      {/* WHY CHOOSE */}
      <section className="bg-ivory-dim/60 py-24">
        <div className="container-inn">
          <SectionHeading eyebrow="Why GRS Inn" title="Why Choose GRS Inn" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-sand text-center"
              >
                <w.icon className="text-gold mx-auto mb-4" size={26} />
                <h3 className="font-display text-lg text-ink mb-2">{w.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-inn py-24">
        <SectionHeading eyebrow="Guest Voices" title="What Our Guests Say" />
        <Testimonials />
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1800&auto=format&fit=crop"
          alt="GRS Inn at night"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative container-inn text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ivory mb-5">
            Ready for a Stay to Remember?
          </h2>
          <p className="text-ivory/70 max-w-lg mx-auto mb-9">
            Reserve your room at GRS INN today and let us take care of the rest.
          </p>
          <button
            onClick={() => openBooking()}
            className="bg-gold hover:bg-gold-light text-ivory px-9 py-3.5 rounded-full text-sm tracking-wide transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Book Your Stay
          </button>
        </div>
      </section>
    </div>
  );
}
