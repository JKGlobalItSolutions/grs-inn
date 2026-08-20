import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "../context/BookingContext";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/95 backdrop-blur shadow-[0_4px_30px_-10px_rgba(33,28,23,0.25)] py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="container-inn flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="GRS Inn logo"
            className="w-11 h-11 rounded-full object-cover shadow-sm"
          />
          <span
            className={`font-display text-xl tracking-wide transition-colors ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
          >
            GRS INN
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors relative pb-1 ${
                    scrolled ? "text-ink-soft" : "text-ivory/90"
                  } hover:text-gold ${isActive ? "text-gold" : ""}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => openBooking()}
            className="bg-gold hover:bg-gold-light text-ivory text-sm tracking-wide px-6 py-2.5 rounded-full transition-colors duration-300 cursor-pointer"
          >
            Book Now
          </button>
        </div>

        <button
          className={`lg:hidden ${scrolled ? "text-ink" : "text-ivory"}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-ivory border-t border-sand mt-4"
          >
            <ul className="container-inn flex flex-col py-6 gap-5">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-ink-soft text-base tracking-wide hover:text-gold"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    openBooking();
                  }}
                  className="w-full bg-gold hover:bg-gold-light text-ivory text-sm tracking-wide px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
