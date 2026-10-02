import { motion } from "framer-motion";
import { Download, ExternalLink, Calendar, FileText, ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import PilgrimageCalendar from "../components/PilgrimageCalendar";
import pournamiPdf from "../assets/pournamical/GRSINNTVM_GIRIVALAM_CALENDAR_2027_FINAL.pdf";

const BOOKING_URL = "https://bookingengine.stayflexi.com/41762/?checkin=02-10-2026&num_nights=1&num_guests=2&source=google&hotel_id=41762";

export default function PournamiCalendarPage() {
  const pdfUrl = pournamiPdf || "/GRSINNTVM_GIRIVALAM_CALENDAR_2027_FINAL.pdf";

  return (
    <div className="pt-28 pb-20 bg-ivory">
      {/* Header Banner */}
      <div className="container-inn mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-ink text-ivory p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Calendar size={280} />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="eyebrow text-gold-light flex items-center gap-2 mb-2">
              <Calendar size={16} /> Official Pilgrimage Document
            </span>
            <h1 className="font-display text-3xl sm:text-4xl text-ivory mb-3">
              Pournami & Girivalam Calendar 2027
            </h1>
            <p className="text-ivory/70 text-sm sm:text-base leading-relaxed">
              Explore the official GRS INN Tiruvannamalai Pournami and Girivalam calendar. Plan your sacred visits and stay with us for an unforgettable spiritual journey.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <a
              href={pdfUrl}
              download="GRSINN_Pournami_Girivalam_Calendar_2027.pdf"
              className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ivory text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-ivory/15 hover:bg-ivory/25 text-ivory border border-ivory/20 text-sm font-medium px-5 py-3 rounded-full transition-all duration-300 cursor-pointer"
            >
              <ExternalLink size={18} />
              <span>Full Screen</span>
            </a>
          </div>
        </div>
      </div>

      {/* Embedded PDF Viewer Section */}
      <div className="container-inn mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-sand rounded-3xl p-4 sm:p-6 shadow-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-sand">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sand/40 rounded-xl text-gold">
                <FileText size={22} />
              </div>
              <div>
                <h2 className="font-display text-lg text-ink font-semibold">
                  GRS INN Tiruvannamalai Girivalam Calendar 2027
                </h2>
                <p className="text-xs text-ink-soft">
                  Official PDF Document • Scroll or download for offline access
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink hover:bg-pine text-ivory text-xs font-medium px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Book Stay For Pournami
              </a>
            </div>
          </div>

          {/* PDF Viewer Frame */}
          <div className="relative w-full h-[75vh] min-h-[500px] max-h-[900px] rounded-2xl overflow-hidden bg-sand/20 border border-sand/60">
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-full"
            >
              <iframe
                src={pdfUrl}
                title="Pournami & Girivalam Calendar PDF"
                className="w-full h-full border-0"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-ivory-dim">
                  <FileText size={48} className="text-gold mb-4" />
                  <p className="text-ink font-display text-lg mb-2">Unable to display PDF preview directly on this device.</p>
                  <p className="text-ink-soft text-sm mb-6 max-w-md">You can download the PDF file directly to view the Pournami & Girivalam Calendar.</p>
                  <a
                    href={pdfUrl}
                    download="GRSINN_Pournami_Girivalam_Calendar_2027.pdf"
                    className="inline-flex items-center gap-2 bg-gold text-ivory text-sm px-6 py-3 rounded-full"
                  >
                    <Download size={18} /> Download Calendar PDF
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        </motion.div>
      </div>

      {/* Interactive Dates & Countdown Section */}
      <PilgrimageCalendar />
    </div>
  );
}
