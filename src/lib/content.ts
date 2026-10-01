import roomOcean from "@/assets/room-ocean.jpg";
import roomGarden from "@/assets/room-garden.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import exterior from "@/assets/exterior.jpg";
import ocean from "@/assets/ocean.jpg";
import pool from "@/assets/pool.jpg";
import restaurant from "@/assets/restaurant.jpg";
import spa from "@/assets/spa.jpg";
import experience from "@/assets/experience.jpg";
import sunset from "@/assets/sunset.jpg";
import hero from "@/assets/hero.jpg";

export type Room = {
  slug: string;
  name: string;
  short: string;
  long: string;
  price: string;
  image: string;
  size: string;
  guests: string;
  bed: string;
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "ocean-view-suite",
    name: "Ocean View Suite",
    short: "Wake up to panoramic views of the sea.",
    long: "Floor-to-ceiling glass frames the Arabian Sea from the moment you open your eyes. A sun-washed suite of linen, oak and soft navy, with a private balcony made for slow mornings and long sunsets.",
    price: "₹18,000 / night",
    image: roomOcean,
    size: "65 m²",
    guests: "2 adults",
    bed: "King bed",
    amenities: ["Private sea-facing balcony", "Rain shower & soaking tub", "In-room espresso bar", "Daily breakfast for two"],
  },
  {
    slug: "garden-villa",
    name: "Garden Villa",
    short: "A private retreat surrounded by lush greenery.",
    long: "Hidden among frangipani and palms, each villa opens onto its own teak deck and plunge pool. Thatched ceilings, open-air bathing and complete seclusion — a sanctuary that feels entirely your own.",
    price: "₹14,000 / night",
    image: roomGarden,
    size: "80 m²",
    guests: "2 adults + 1 child",
    bed: "King four-poster",
    amenities: ["Private plunge pool", "Outdoor garden shower", "Shaded day bed", "Evening turndown ritual"],
  },
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    short: "Spacious luxury with a private terrace and ocean views.",
    long: "Our most generous residence, crowning the cliff with a wraparound terrace above the sea. A separate living salon, dining for six and a dedicated host to shape every hour of your stay.",
    price: "₹25,000 / night",
    image: roomPresidential,
    size: "140 m²",
    guests: "Up to 4 guests",
    bed: "King + twin room",
    amenities: ["Wraparound ocean terrace", "Dedicated personal host", "Private in-suite dining", "Complimentary spa ritual"],
  },
];

export type GalleryItem = { src: string; title: string; category: string };

export const gallery: GalleryItem[] = [
  { src: exterior, title: "The resort from above", category: "Resort exterior" },
  { src: ocean, title: "Endless blue", category: "Ocean views" },
  { src: roomOcean, title: "Ocean View Suite", category: "Guest rooms" },
  { src: pool, title: "The palm pool", category: "Pool" },
  { src: restaurant, title: "Dinner at Saltwater", category: "Restaurant" },
  { src: spa, title: "The Frangipani Spa", category: "Spa" },
  { src: experience, title: "Morning on the shore", category: "Beach" },
  { src: sunset, title: "Golden hour", category: "Sunset" },
  { src: roomGarden, title: "Garden Villa", category: "Guest rooms" },
  { src: hero, title: "The infinity terrace", category: "Pool" },
  { src: roomPresidential, title: "Presidential terrace", category: "Guest rooms" },
];

export const images = { hero, exterior, ocean, pool, restaurant, spa, experience, sunset };

export const contact = {
  address: "Azure Haven, Ashwem Beach Road, Mandrem, North Goa 403527, India",
  phone: "+91 832 555 0142",
  email: "stay@azurehaven.example",
};
