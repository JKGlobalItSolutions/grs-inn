import kovil from "../assets/nearby/kovil.png";
import ashram from "../assets/nearby/ashram.png";
import cave from "../assets/nearby/cave.png";
import pancha from "../assets/nearby/pancha-BW3qqXir.png";
import girivalam from "../assets/nearby/girivalam.png";
import railway from "../assets/nearby/railway.png";

// A safe, always-available fallback used if a specific landmark photo fails to load.
export const attractionFallbackImage =
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=900&auto=format&fit=crop";

export const attractions = [
  {
    name: "Arunachaleswarar Temple",
    distance: "1.5 km from hotel",
    image: kovil,
    description:
      "One of South India's largest Shiva temples, its towering gopurams anchor the town and draw pilgrims from across the country through the year.",
  },
  {
    name: "Ramana Ashram",
    distance: "2 km from hotel",
    image: ashram,
    description:
      "The quiet hermitage of Sri Ramana Maharshi, still visited today by seekers looking for a still, reflective space away from the noise of travel.",
  },
  {
    name: "Virupaksha Cave",
    distance: "3.5 km from hotel",
    image: cave,
    description:
      "A hillside cave on Arunachala where Ramana Maharshi spent years in meditation, reached by a short, shaded climb worth the walk.",
  },
  {
    name: "Skandashram",
    distance: "3.8 km from hotel",
    image: pancha,
    description:
      "A hillside hermitage a little further up the slope of Arunachala, with quiet views back over the town and temple below.",
  },
  {
    name: "Girivalam Path",
    distance: "1 km from hotel",
    image: girivalam,
    description:
      "The sacred path circling the base of Arunachala hill, walked by pilgrims every day and especially crowded on Pournami nights.",
  },
  {
    name: "Tiruvannamalai Railway Station",
    distance: "2.5 km from hotel",
    image: railway,
    description:
      "The town's main railway station, a convenient link if you're arriving by train from Chennai or nearby cities.",
  },
];