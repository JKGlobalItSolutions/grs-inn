const wiki = (filename) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${filename}?width=900`;

// A safe, always-available fallback used if a specific landmark photo fails to load.
export const attractionFallbackImage =
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=900&auto=format&fit=crop";

export const attractions = [
  {
    name: "Arunachaleswarar Temple",
    distance: "1.5 km from hotel",
    image: wiki("Thiruvannamalai_Arunachaleswarar_Temple_Rajagopuram.jpg"),
    description:
      "One of South India's largest Shiva temples, its towering gopurams anchor the town and draw pilgrims from across the country through the year.",
  },
  {
    name: "Ramana Ashram",
    distance: "2 km from hotel",
    image: wiki("Tiruvannamalai,_Sri_Ramana_Ashram,_Sri_Ramanasramam,_India.jpg"),
    description:
      "The quiet hermitage of Sri Ramana Maharshi, still visited today by seekers looking for a still, reflective space away from the noise of travel.",
  },
  {
    name: "Virupaksha Cave",
    distance: "3.5 km from hotel",
    image: wiki("Virupaksha_Cave,_Tiruvnnamalai.jpg"),
    description:
      "A hillside cave on Arunachala where Ramana Maharshi spent years in meditation, reached by a short, shaded climb worth the walk.",
  },
  {
    name: "Skandashram",
    distance: "3.8 km from hotel",
    image: wiki("Skandashram,_Tiruvannamalai.jpg"),
    description:
      "A hillside hermitage a little further up the slope of Arunachala, with quiet views back over the town and temple below.",
  },
  {
    name: "Girivalam Path",
    distance: "1 km from hotel",
    image: wiki("Bhagavan_Bridge_-_Girivalam_Path_Tiruvannamalai.jpg"),
    description:
      "The sacred path circling the base of Arunachala hill, walked by pilgrims every day and especially crowded on Pournami nights.",
  },
  {
    name: "Tiruvannamalai Railway Station",
    distance: "2.5 km from hotel",
    image: wiki("Thiruvannamalai_Railway_Station.jpg"),
    description:
      "The town's main railway station, a convenient link if you're arriving by train from Chennai or nearby cities.",
  },
];
