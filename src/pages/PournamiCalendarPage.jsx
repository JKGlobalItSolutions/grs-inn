import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Printer, Calendar, FileText, ZoomIn, X } from "lucide-react";
import PilgrimageCalendar from "../components/PilgrimageCalendar";
import pournamiPdf from "../assets/pournamical/GRSINNTVM_GIRIVALAM_CALENDAR_2027_FINAL.pdf";
import pournamiImage from "../assets/pournamical/pournami_calendar_page_1.png";

const BOOKING_URL = "https://bookingengine.stayflexi.com/41762/?checkin=02-10-2026&num_nights=1&num_guests=2&source=google&hotel_id=41762";

export default function PournamiCalendarPage() {
  const pdfUrl = pournamiPdf || "/GRSINNTVM_GIRIVALAM_CALENDAR_2027_FINAL.pdf";
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>GRS INN Tiruvannamalai - Pournami & Girivalam Calendar 2026</title>
          <style>
            body {
              margin: 0;
              padding: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #ffffff;
            }
            img {
              max-width: 100%;
              height: auto;
              display: block;
              margin: 0 auto;
            }
            @media print {
              body {
                padding: 0;
              }
              img {
                max-width: 100%;
                width: 100%;
                height: auto;
                page-break-inside: avoid;
              }
            }
          </style>
        </head>
        <body>
          <img src="${pournamiImage}" alt="GRS INN Tiruvannamalai Pournami Calendar 2027" onload="setTimeout(function(){ window.print(); }, 300);" />
        </body>
      </html>
    `);
    printWindow.document.close();
  };

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
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 bg-ivory/15 hover:bg-ivory/25 text-ivory border border-ivory/20 text-sm font-medium px-5 py-3 rounded-full transition-all duration-300 cursor-pointer"
            >
              <Printer size={18} />
              <span>Print Calendar</span>
            </button>
          </div>
        </div>
      </div>

      {/* High-Resolution Calendar Image Section */}
      <div className="container-inn mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-sand rounded-3xl p-4 sm:p-6 shadow-md"
        >
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-sand">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sand/40 rounded-xl text-gold">
                <FileText size={22} />
              </div>
              <div>
                <h2 className="font-display text-lg text-ink font-semibold">
                  GRS INN Tiruvannamalai Girivalam Calendar 2027
                </h2>
                <p className="text-xs text-ink-soft">
                  High Resolution Official Image • Click image to zoom / download PDF or print below
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="flex items-center gap-1.5 bg-sand/30 hover:bg-sand/60 text-ink text-xs font-medium px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                <ZoomIn size={15} />
                <span>Fullscreen Zoom</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 bg-sand/30 hover:bg-gold hover:text-ivory text-ink text-xs font-medium px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                <Printer size={15} />
                <span>Print</span>
              </button>

              <a
                href={pdfUrl}
                download="GRSINN_Pournami_Girivalam_Calendar_2027.pdf"
                className="flex items-center gap-1.5 bg-gold hover:bg-gold-light text-ivory text-xs font-medium px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                <Download size={15} />
                <span>Download PDF</span>
              </a>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink hover:bg-pine text-ivory text-xs font-medium px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Book Stay
              </a>
            </div>
          </div>

          {/* Calendar Image View */}
          <div className="w-full rounded-2xl overflow-hidden bg-sand/10 border border-sand/60 shadow-inner flex justify-center items-center p-2 sm:p-4">
            <img
              src={pournamiImage}
              alt="GRS INN Tiruvannamalai Pournami & Girivalam Calendar 2027"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            />
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex flex-col p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Lightbox Bar */}
            <div
              className="flex items-center justify-between text-ivory mb-4 max-w-7xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <FileText className="text-gold" size={20} />
                <span className="font-display text-sm sm:text-base">GRS INN Pournami & Girivalam Calendar 2027</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={pdfUrl}
                  download="GRSINN_Pournami_Girivalam_Calendar_2027.pdf"
                  className="flex items-center gap-1.5 bg-gold hover:bg-gold-light text-ivory text-xs px-4 py-2 rounded-full transition-colors"
                >
                  <Download size={14} /> Download PDF
                </a>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 bg-ivory/20 hover:bg-ivory/30 text-ivory text-xs px-4 py-2 rounded-full transition-colors cursor-pointer"
                >
                  <Printer size={14} /> Print
                </button>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2 bg-ivory/10 hover:bg-ivory/25 rounded-full text-ivory transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Lightbox Image Container */}
            <div
              className="flex-1 flex items-center justify-center overflow-auto max-w-7xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={pournamiImage}
                alt="GRS INN Tiruvannamalai Pournami Calendar 2027 Full resolution"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Dates & Countdown Section */}
      <PilgrimageCalendar />
    </div>
  );
}

