# GRS INN — Hotel Website

A premium, fully responsive hotel website built with React + Vite, Tailwind CSS, Framer Motion, React Router and Lucide icons.

## Tech Stack
- React 19 + Vite
- Tailwind CSS v4
- React Router DOM
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       Navbar, Hero, BookingBar, RoomCard, AmenityCard,
│                      Gallery, Testimonials, Footer, BookingModal, SectionHeading
├── pages/             Home, About, Rooms, RoomDetails, Amenities, GalleryPage, Contact
├── data/              rooms.js, gallery.js
├── context/           BookingContext.jsx — powers the global "Book Now" modal
├── routes/            AppRoutes.jsx, ScrollToTop.jsx
└── App.jsx
```

## Key Flows Implemented
- Home → Explore Rooms → Rooms → Room Details → Book Now → Booking form → Validation → Success
- Home → Book Now (navbar/hero/anywhere) → Booking form pre-filled with selected room → Submit → Success
- Gallery with category filters + lightbox
- Contact page with its own form + success state
- Fully responsive: mobile menu, stacked booking bar, responsive grids

## Notes
- All room/gallery images currently point to royalty-free Unsplash URLs as placeholders — swap the URLs in `src/data/rooms.js` and `src/data/gallery.js` for your own photography whenever ready.
- The booking and contact forms are frontend-only (no backend/payment integration) — they run client-side validation and show a success state on submit. Wire up `handleSubmit` in `BookingModal.jsx` / `Contact.jsx` to your API when the backend is ready.
- Brand palette and type system live in `src/index.css` under `@theme` — change the CSS variables there to re-theme the whole site in one place.
