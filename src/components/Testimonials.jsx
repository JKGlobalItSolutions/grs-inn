import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Beautiful room, comfortable stay and very welcoming service. Everything felt well looked after.",
    name: "Guest Review",
    context: "Business stay",
  },
  {
    quote:
      "Exactly what we needed for a family weekend — spacious, clean and the staff were genuinely helpful.",
    name: "Guest Review",
    context: "Family stay",
  },
  {
    quote:
      "Quiet, comfortable and easy to get to. The Deluxe Room was more than enough space to relax in.",
    name: "Guest Review",
    context: "Leisure stay",
  },
  {
    quote:
      "Smooth check-in, a spotless room and a breakfast that set the tone for the rest of the trip.",
    name: "Guest Review",
    context: "Solo traveller",
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <motion.figure
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="bg-white rounded-2xl p-8 border border-sand relative"
        >
          <Quote className="text-gold/25 absolute top-6 right-7" size={38} />
          <div className="flex gap-1 mb-4 text-gold">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <blockquote className="text-ink-soft text-sm leading-relaxed mb-6">
            “{t.quote}”
          </blockquote>
          <figcaption className="text-xs">
            <span className="text-ink font-medium">{t.name}</span>
            <span className="text-ink-soft/60"> · {t.context}</span>
          </figcaption>
        </motion.figure>
      ))}
      <p className="sm:col-span-2 text-center text-[11px] text-ink-soft/50 mt-2">
        Reviews shown are illustrative placeholder content created for design purposes.
      </p>
    </div>
  );
}
