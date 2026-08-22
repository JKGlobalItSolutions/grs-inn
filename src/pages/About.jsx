import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, ShieldCheck, Gem, ArrowLeft } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import buildingPhoto from "../assets/building-exterior.jpg";

const values = [
  { icon: Gem, title: "Comfort", desc: "Thoughtfully designed spaces for restful stays." },
  { icon: Sparkles, title: "Cleanliness", desc: "Maintaining a fresh and pleasant environment for every guest." },
  { icon: HeartHandshake, title: "Hospitality", desc: "Attentive service with a warm and personal approach." },
  { icon: ShieldCheck, title: "Value", desc: "A comfortable hotel experience designed to offer great value." },
];

export default function About() {
  return (
    <div className="pt-32">
      <section className="container-inn pb-20 text-center">
        <div className="flex justify-center mb-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold transition-colors border border-sand rounded-full px-5 py-2"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>
        <span className="eyebrow text-gold">About GRS Inn</span>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mt-3 max-w-2xl mx-auto">
          A Stay Designed Around You
        </h1>
        <p className="text-ink-soft max-w-xl mx-auto mt-5 leading-relaxed">
          GRS INN is a stylish, comfortable and welcoming hotel built for business
          travellers, families and leisure guests who want a dependable, well-kept place
          to stay.
        </p>
      </section>

      <section className="container-inn grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto"
        >
          <img
            src={buildingPhoto}
            alt="GRS Inn hotel building exterior in Tiruvannamalai"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <h2 className="font-display text-3xl text-ink mb-5">Our Story</h2>
          <p className="text-ink-soft leading-relaxed mb-5">
            GRS INN started with a straightforward goal — give travellers a hotel that
            gets the essentials right, every time. No unnecessary formality, no confusing
            add-ons: just clean, comfortable rooms, considerate service and a location
            that's easy to reach.
          </p>
          <p className="text-ink-soft leading-relaxed">
            Over time, that focus has shaped everything from our room layouts to how our
            front desk greets you at midnight. Whether you're here for one night between
            meetings or a week with the family, GRS INN is built to make the stay feel
            easy.
          </p>
        </div>
      </section>

      <section className="bg-ivory-dim/60 py-24">
        <div className="container-inn">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-sand text-center"
              >
                <v.icon className="text-gold mx-auto mb-4" size={26} />
                <h3 className="font-display text-lg text-ink mb-2">{v.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}