import { motion } from "framer-motion";

export default function AmenityCard({ icon: Icon, label, index = 0, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.06 }}
      className={`flex flex-col items-center text-center gap-3 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
        light
          ? "border-ivory/15 hover:border-gold-light/60 bg-ivory/5"
          : "border-sand hover:border-gold/60 bg-white"
      }`}
    >
      <div
        className={`grid place-items-center w-12 h-12 rounded-full ${
          light ? "bg-gold/15 text-gold-light" : "bg-gold/10 text-gold"
        }`}
      >
        <Icon size={22} />
      </div>
      <span className={`text-sm ${light ? "text-ivory/85" : "text-ink-soft"}`}>{label}</span>
    </motion.div>
  );
}
