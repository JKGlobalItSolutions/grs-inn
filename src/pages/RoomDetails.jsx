import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Ruler, BedDouble, Users, Eye, CheckCircle2, Clock } from "lucide-react";
import { getRoomBySlug, rooms } from "../data/rooms";

const BOOKING_URL = "https://bookingengine.stayflexi.com/41762/?checkin=02-10-2026&num_nights=1&num_guests=2&source=google&hotel_id=41762";

export default function RoomDetails() {
  const { slug } = useParams();
  const room = getRoomBySlug(slug);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!room) return <Navigate to="/rooms" replace />;

  const otherRooms = rooms.filter((r) => r.slug !== room.slug);

  return (
    <div className="pt-28 pb-24">
      <div className="container-inn">
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Rooms
        </Link>

        {/* Title + intro */}
        <div className="max-w-3xl mb-10">
          <span className="eyebrow text-gold">{room.tagline}</span>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mt-3 mb-6">{room.name}</h1>
          <p className="text-ink-soft leading-relaxed">{room.longDescription}</p>
        </div>

        {/* Hero image */}
        <motion.div
          key={room.heroImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl overflow-hidden aspect-[16/9] mb-14"
        >
          <img
            src={room.heroImage}
            alt={room.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-12">
              <SpecItem icon={Ruler} label="Room Size" value={room.size} />
              <SpecItem icon={BedDouble} label="Bed Type" value={room.bed} />
              <SpecItem icon={Users} label="Occupancy" value={room.occupancy} />
              <SpecItem icon={Eye} label="View" value={room.view} />
            </div>

            <h2 className="font-display text-2xl text-ink mb-5">Room Amenities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {room.amenities.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>

            <div className="bg-ivory-dim/60 rounded-2xl p-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gold mt-0.5" />
                <div>
                  <p className="text-sm text-ink font-medium mb-1">Check-in / Check-out</p>
                  <p className="text-sm text-ink-soft">Check-in from 1:00 PM · Check-out by 11:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-gold mt-0.5" />
                <div>
                  <p className="text-sm text-ink font-medium mb-1">Housekeeping</p>
                  <p className="text-sm text-ink-soft">Daily housekeeping included with every stay</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="bg-white border border-sand rounded-3xl p-8 shadow-soft">
              <p className="text-ink-soft text-xs eyebrow mb-2">Starting from</p>
              <p className="font-display text-4xl text-ink mb-1">{room.price}</p>
              <p className="text-ink-soft text-xs mb-7">{room.priceNote}</p>

              <div className="space-y-3 mb-8">
                {room.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-ink-soft">
                    <f.icon size={16} className="text-gold" /> {f.label}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-full px-4 py-2 mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-green-600" /> Available for booking
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gold hover:bg-gold-light text-ivory text-sm tracking-wide px-6 py-3.5 rounded-full transition-colors cursor-pointer"
              >
                Book Now
              </a>
            </div>
          </aside>
        </div>

        {/* Photo Gallery */}
        <div className="mt-20">
          <h2 className="font-display text-2xl text-ink mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {room.gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className="rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`${room.name} view ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-display text-2xl text-ink mb-8">Explore Other Rooms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherRooms.map((r) => (
              <Link
                key={r.slug}
                to={`/rooms/${r.slug}`}
                className="group flex items-center gap-5 bg-white border border-sand rounded-2xl p-4 hover:border-gold transition-colors"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src={r.heroImage} alt={r.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink">{r.name}</h3>
                  <p className="text-ink-soft text-sm">{r.price} / night</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecItem({ icon: Icon, label, value }) {
  return (
    <div className="border border-sand rounded-2xl p-4 text-center">
      <Icon size={18} className="text-gold mx-auto mb-2" />
      <p className="text-[11px] text-ink-soft/60 mb-0.5">{label}</p>
      <p className="text-sm text-ink font-medium">{value}</p>
    </div>
  );
}