import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${alignClass} mb-14`}
    >
      {eyebrow && (
        <span className={`eyebrow mb-3 ${light ? "text-gold-light" : "text-gold"}`}>{eyebrow}</span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-xl leading-relaxed ${light ? "text-ivory/75" : "text-ink-soft"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
