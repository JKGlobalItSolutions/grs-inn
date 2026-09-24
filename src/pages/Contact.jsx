import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowLeft, Navigation } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    if (!form.subject.trim()) errs.subject = "Subject is required.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const inputClass = (key) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold ${
      errors[key] ? "border-red-400" : "border-sand"
    }`;

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

        <SectionHeading eyebrow="Get in Touch" title="Contact GRS Inn" subtitle="We are here to help you plan your stay in Tiruvannamalai." />

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <InfoCard icon={MapPin} title="Address" lines={["No,2. Ramalinganar 2nd Street, Tiruvannamalai, Tamil Nadu 606601"]} />
          <InfoCard icon={Phone} title="Phone" lines={["9384132555", "9384172555"]} />
          <InfoCard icon={Mail} title="Email" lines={["grsinntvm@gmail.com"]} />
          <InfoCard icon={Clock} title="Check-in / Check-out" lines={["24 Hours Check Out"]} />
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="tel:+919384132555" className="bg-ink hover:bg-pine text-ivory px-6 py-3 rounded-full text-sm flex items-center gap-2 transition-colors">
            <Phone size={15} /> Call Us
          </a>
          <a href="mailto:grsinntvm@gmail.com" className="border border-ink/20 text-ink px-6 py-3 rounded-full text-sm flex items-center gap-2 hover:border-gold hover:text-gold transition-colors">
            <Mail size={15} /> Email Us
          </a>
          <a
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.3096367329963!2d79.0757445!3d12.2273016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc084d2852213%3A0x1afedc5b70ebae63!2sGRS%20INN!5e0!3m2!1sen!2sin!4v1790243797919!5m2!1sen!2sin"
            target="_blank"
            rel="noreferrer"
            className="border border-ink/20 text-ink px-6 py-3 rounded-full text-sm flex items-center gap-2 hover:border-gold hover:text-gold transition-colors"
          >
            <MapPin size={15} /> Get Directions
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-ivory-dim/60 border border-sand/60 rounded-3xl p-8 sm:p-12 mb-20 shadow-sm">
          {!submitted ? (
            <>
              <h2 className="font-display text-2xl text-ink mb-1">Send Us a Message</h2>
              <p className="text-ink-soft text-sm mb-8">We usually reply within one business day.</p>
              <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-ink-soft mb-1.5">Name</label>
                  <input value={form.name} onChange={update("name")} className={inputClass("name")} placeholder="Your name" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs text-ink-soft mb-1.5">Email</label>
                  <input type="email" value={form.email} onChange={update("email")} className={inputClass("email")} placeholder="you@example.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs text-ink-soft mb-1.5">Phone</label>
                  <input type="tel" value={form.phone} onChange={update("phone")} className={inputClass("phone")} placeholder="+91 93841 32555" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs text-ink-soft mb-1.5">Subject</label>
                  <input value={form.subject} onChange={update("subject")} className={inputClass("subject")} placeholder="How can we help?" />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-ink-soft mb-1.5">Message</label>
                  <textarea rows={4} value={form.message} onChange={update("message")} className={inputClass("message")} placeholder="Tell us a bit more" />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full bg-gold hover:bg-gold-light text-ivory text-sm tracking-wide px-6 py-3.5 rounded-full transition-colors cursor-pointer font-medium">
                    Send Message
                  </button>
                </div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center py-6"
            >
              <div className="w-14 h-14 rounded-full bg-gold/15 grid place-items-center mx-auto mb-5">
                <CheckCircle2 size={26} className="text-gold" />
              </div>
              <h3 className="font-display text-2xl text-ink mb-2">Message Sent</h3>
              <p className="text-ink-soft text-sm max-w-sm mx-auto">
                Thank you for reaching out. Our team at GRS INN will get back to you shortly.
              </p>
            </motion.div>
          )}
        </div>

        {/* Large Full-Width Location Section Below */}
        <div className="pt-6 border-t border-sand/60">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="eyebrow text-gold block mb-2">Location & Map</span>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-3">Our Location</h2>
            <p className="text-ink-soft text-sm flex items-center justify-center gap-1.5">
              <MapPin size={16} className="text-gold shrink-0" />
              No,2. Ramalinganar 2nd Street, Tiruvannamalai, Tamil Nadu 606601
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-sand shadow-xl w-full h-[450px] md:h-[550px]">
            <iframe
              title="GRS Inn location map"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1074.9791350506669!2d79.07516952817159!3d12.227718342183614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1787230393250!5m2!1sen!2sin"
            />
            <div className="absolute bottom-6 right-6 z-10">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=12.227718342183614,79.07516952817159"
                target="_blank"
                rel="noreferrer"
                className="bg-gold hover:bg-gold-light text-ivory px-6 py-3 rounded-full text-sm font-medium shadow-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <Navigation size={16} /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }) {
  return (
    <div className="bg-white border border-sand rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <Icon size={20} className="text-gold mb-3" />
      <p className="text-sm font-medium text-ink mb-1">{title}</p>
      {lines.map((l) => (
        <p key={l} className="text-sm text-ink-soft">{l}</p>
      ))}
    </div>
  );
}
