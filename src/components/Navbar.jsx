import { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

function InstagramIcon({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="ig-grad-nav" cx="20%" cy="100%" r="120%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill="url(#ig-grad-nav)" />
      <rect x="13" y="13" width="22" height="22" rx="6" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="30.5" cy="17.5" r="1.5" fill="white" />
    </svg>
  );
}

function FacebookIcon({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="#1877F2" />
      <path
        d="M29.5 25.5L30.3 20H25V16.4C25 14.9 25.7 13.5 28 13.5H30.5V8.8C30.5 8.8 28.2 8.4 26.1 8.4C21.6 8.4 18.6 11.1 18.6 16.1V20H13.7V25.5H18.6V39H25V25.5H29.5Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="#0A66C2" />
      <path
        d="M15.5 19H19.5V33H15.5V19ZM17.5 13C16.2 13 15.2 14 15.2 15.3C15.2 16.6 16.2 17.6 17.5 17.6C18.8 17.6 19.8 16.6 19.8 15.3C19.8 14 18.8 13 17.5 13ZM22.5 19H26.3V20.9H26.4C26.9 20 28.1 18.6 30.5 18.6C35 18.6 35.8 21.6 35.8 25.5V33H31.8V26.7C31.8 25.2 31.8 23.3 29.7 23.3C27.6 23.3 27.3 24.9 27.3 26.6V33H23.3V19H22.5Z"
        fill="white"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        d="M33.8 14.2C31.2 11.6 27.7 10.1 24 10.1C16.4 10.1 10.2 16.3 10.2 23.9C10.2 26.4 10.9 28.8 12.1 30.9L10 38.5L17.8 36.4C19.7 37.5 21.8 38.1 24 38.1C31.6 38.1 37.8 31.9 37.8 24.3C37.8 20.5 36.3 16.9 33.8 14.2ZM24 35.7C22.1 35.7 20.2 35.2 18.6 34.2L18.1 33.9L13.5 35.1L14.7 30.6L14.4 30.1C13.3 28.3 12.7 26.2 12.7 24C12.7 17.8 17.8 12.7 24 12.7C27 12.7 29.8 13.9 31.9 16C34 18.1 35.2 20.9 35.2 23.9C35.2 30.2 30.2 35.7 24 35.7ZM30.2 27.2C29.9 27 28.2 26.2 27.9 26.1C27.6 26 27.4 25.9 27.2 26.2C27 26.5 26.3 27.3 26.1 27.5C25.9 27.7 25.7 27.7 25.4 27.5C25.1 27.4 24.1 27.1 22.9 26C22 25.2 21.4 24.2 21.2 23.9C21 23.6 21.2 23.4 21.3 23.3C21.4 23.2 21.6 23 21.7 22.8C21.8 22.6 21.9 22.5 22 22.3C22.1 22.1 22 21.9 21.9 21.8C21.8 21.7 21.1 20 20.8 19.3C20.5 18.6 20.2 18.7 20 18.7C19.8 18.7 19.6 18.7 19.4 18.7C19.2 18.7 18.8 18.8 18.5 19.1C18.2 19.4 17.4 20.1 17.4 21.6C17.4 23.1 18.5 24.5 18.6 24.7C18.8 24.9 20.7 27.8 23.6 29C24.3 29.3 24.8 29.5 25.2 29.6C25.9 29.8 26.5 29.8 27 29.7C27.5 29.6 28.6 29 28.8 28.3C29.1 27.6 29.1 27 29 26.9C28.9 26.7 28.7 26.7 28.4 26.5L30.2 27.2Z"
        fill="white"
      />
    </svg>
  );
}

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/grsinntvm/", Icon: InstagramIcon },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61594753889759", Icon: FacebookIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/grs-inn-0a427143a/", Icon: LinkedInIcon },
  { name: "WhatsApp", href: "https://wa.me/919384132555", Icon: WhatsAppIcon },
];

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
  const [viewUsOpen, setViewUsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setViewUsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            GRS Inn
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

        {/* View Us Button with Dropdown (Desktop) */}
        <div className="hidden lg:block relative" ref={dropdownRef}>
          <button
            onClick={() => setViewUsOpen((v) => !v)}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ivory text-sm tracking-wide px-6 py-2.5 rounded-full transition-colors duration-300 cursor-pointer shadow-md"
            aria-expanded={viewUsOpen}
          >
            <span>View Us</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${viewUsOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {viewUsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute right-0 mt-2 p-2 bg-ivory/95 backdrop-blur-md rounded-2xl shadow-xl border border-sand/80 z-50 flex flex-col items-center gap-3"
              >
                {socialLinks.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    onClick={() => setViewUsOpen(false)}
                    className="group relative flex items-center justify-center p-1 hover:scale-115 transition-transform duration-200 cursor-pointer"
                  >
                    <Icon className="w-10 h-10 drop-shadow-sm group-hover:drop-shadow-md transition-all" />
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
            className="lg:hidden bg-ivory border-t border-sand mt-4 max-h-[85vh] overflow-y-auto"
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
              <li className="pt-2 border-t border-sand/60">
                <button
                  onClick={() => setViewUsOpen((v) => !v)}
                  className="w-full flex items-center justify-between bg-gold hover:bg-gold-light text-ivory text-sm tracking-wide px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  <span>View Us</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${viewUsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {viewUsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-white/80 rounded-2xl mt-3 p-3 border border-sand/60"
                    >
                      <div className="flex items-center justify-around py-1">
                        {socialLinks.map(({ name, href, Icon }) => (
                          <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={name}
                            onClick={() => {
                              setViewUsOpen(false);
                              setMenuOpen(false);
                            }}
                            className="flex flex-col items-center hover:scale-110 transition-transform"
                          >
                            <Icon className="w-10 h-10" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

