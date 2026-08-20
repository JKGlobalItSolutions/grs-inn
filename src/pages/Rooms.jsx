import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import RoomCard from "../components/RoomCard";
import { rooms } from "../data/rooms";

export default function Rooms() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-inn">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
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
    </div>
  );
}