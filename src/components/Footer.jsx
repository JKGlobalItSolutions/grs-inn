import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";

function Instagram(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Facebook(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.5c0-.55.45-1 1-1H16V8Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/80 pt-20 pb-8">
      <div className="container-inn grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 pb-14 border-b border-ivory/10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="GRS Inn logo" className="w-11 h-11 rounded-full object-cover" />
            <span className="font-display text-xl text-ivory tracking-wide">GRS Inn</span>
          </div>
          <p className="italic text-ivory/60 text-sm mb-6">
            Experience a comfortable and memorable stay at GRS Inn, offering modern amenities, warm hospitality, and a convenient location in Tiruvannamalai.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 grid place-items-center rounded-full border border-ivory/15 hover:border-gold-light hover:text-gold-light transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-full border border-ivory/15 hover:border-gold-light hover:text-gold-light transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="WhatsApp" className="w-9 h-9 grid place-items-center rounded-full border border-ivory/15 hover:border-gold-light hover:text-gold-light transition-colors">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-gold-light mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-gold-light transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-light transition-colors">About</Link></li>
            <li><Link to="/rooms" className="hover:text-gold-light transition-colors">Rooms</Link></li>
            <li><Link to="/amenities" className="hover:text-gold-light transition-colors">Amenities</Link></li>
            <li><Link to="/gallery" className="hover:text-gold-light transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold-light transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold-light mb-5">Rooms</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/rooms/standard-room" className="hover:text-gold-light transition-colors">Twin Super Deluxe Room</Link></li>
            <li><Link to="/rooms/deluxe-room" className="hover:text-gold-light transition-colors">Twin Standard Room</Link></li>
            <li><Link to="/rooms/suite-room" className="hover:text-gold-light transition-colors">Single Standard Room</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold-light mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone size={15} className="mt-0.5 shrink-0" /> 9384132555 , 9384172555</li>
            <li className="flex items-start gap-2"><Mail size={15} className="mt-0.5 shrink-0" /> grsinntvm@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /> No,2. Ramalinganar 2nd Street, Tiruvannamalai, Tamil Nadu 606601</li>
          </ul>
        </div>
      </div>

      <div className="container-inn pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/45">
        <p>© 2026 GRS Inn. All rights reserved.</p>
        <p>Designed by Sonachala</p>
      </div>
    </footer>
  );
}
