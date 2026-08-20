// Full moon (Pournami) dates for 2026, used for the Girivalam pilgrimage calendar.
// Source dates are the actual 2026 Purnima tithi days; demand labels are illustrative.
export const pilgrimageDates = [
  { date: "2026-08-28", label: "Aug 28", title: "Full Moon Girivalam", demand: "High Demand" },
  { date: "2026-09-26", label: "Sep 26", title: "Full Moon Girivalam", demand: "85% Booked" },
  { date: "2026-10-26", label: "Oct 26", title: "Full Moon Girivalam", demand: "Limited Rooms" },
  { date: "2026-11-24", label: "Nov 24", title: "Full Moon Girivalam", demand: "Book Early" },
  { date: "2026-12-23", label: "Dec 23", title: "Full Moon Girivalam", demand: "Book Early" },
];

export const getNextPournami = () => {
  const now = new Date();
  const upcoming = pilgrimageDates
    .map((d) => ({ ...d, dateObj: new Date(`${d.date}T18:00:00`) }))
    .filter((d) => d.dateObj > now)
    .sort((a, b) => a.dateObj - b.dateObj);
  return upcoming[0] || pilgrimageDates[0];
};

export const stayBenefits = [
  { label: "Walking distance to the Girivalam path" },
  { label: "Early check-in for pre-dawn pilgrims" },
  { label: "Simple vegetarian breakfast available" },
  { label: "Quiet rooms to rest after the walk" },
  { label: "Luggage storage for same-day pilgrims" },
];

export const nearbyCities = [
  { name: "Chennai", distance: "185 km" },
  { name: "Bengaluru", distance: "215 km" },
  { name: "Coimbatore", distance: "245 km" },
  { name: "Madurai", distance: "270 km" },
  { name: "Tiruchirappalli", distance: "160 km" },
  { name: "Puducherry", distance: "110 km" },
  { name: "Vellore", distance: "85 km" },
  { name: "Salem", distance: "150 km" },
];
