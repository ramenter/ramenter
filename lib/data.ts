const photo = (file: string, label: string, alt: string) => ({
  src: `/sn-krishna/${file}.jpg`,
  label,
  alt,
});

export const photos = {
  clubhouse: photo(
    "clubhouse",
    "Clubhouse",
    "S.N. Krishna clubhouse with a landscaped entrance garden, Kolar Road, Bhopal",
  ),
  rowHouses: photo(
    "row-houses",
    "Homes",
    "Row houses with modern facades along a tree-lined internal road at SN Krishna",
  ),
  temple: photo(
    "temple",
    "Temple",
    "Temple at SN Krishna surrounded by landscaped lawns and a paved walkway",
  ),
  walkway: photo(
    "garden-walkway-gazebo",
    "Garden Walkway",
    "Paved garden walkway leading to a gazebo and stone arch at SN Krishna",
  ),
  turf: photo("turf", "Turf Arena", "Netted turf sports arena at SN Krishna, Bhopal"),
  apartmentsLandscaped: photo(
    "apartments-landscaped",
    "Residences",
    "Residential tower with green balconies behind landscaped gardens at SN Krishna",
  ),
  clubhouseFront: photo(
    "clubhouse-front",
    "Clubhouse",
    "Front view of the SN Krishna clubhouse with a paved approach path",
  ),
  rowHousesStreet: photo(
    "row-houses-street",
    "Homes",
    "Colourful independent homes along a wide internal road at SN Krishna",
  ),
  apartmentsYellow: photo(
    "apartments-yellow",
    "Residences",
    "Residential tower with yellow balconies and stilt parking at SN Krishna",
  ),
  apartmentsGreenBalconies: photo(
    "apartments-green-balconies",
    "Residences",
    "Residential buildings with lime-green balconies at SN Krishna",
  ),
  turfPitch: photo("turf-pitch", "Turf Arena", "Artificial turf football pitch at SN Krishna"),
  apartmentsYellowTowers: photo(
    "apartments-yellow-towers",
    "Residences",
    "Residential towers with yellow balconies and covered parking at SN Krishna",
  ),
  apartmentsGreen: photo(
    "apartments-green",
    "Residences",
    "Residential towers with green balconies and open parking at SN Krishna",
  ),
};

export const gallery = Object.values(photos);

export const hero = {
  image: photos.clubhouse,
  stats: [
    { value: 30, suffix: "+", label: "Years of Trust" },
    { value: 30, suffix: " ft", label: "Internal Roads" },
    { value: 150, suffix: " ft", label: "Proposed Approach Road" },
  ],
};

export const projects = [
  {
    slug: "sn-krishna",
    name: "SN Krishna",
    type: "Gated Plotted Community",
    tagline: "A Thoughtfully Planned Address for a Better Way of Living.",
    location: "Bairagarh Chichli, Kolar Road, Bhopal",
    summary:
      "SN Krishna is a thoughtfully planned residential development by Ram Enterprises, created for those who seek more than just a home—a well-connected address, a secure community, and a lifestyle designed around everyday comfort.",
    description: [
      "Spread across a carefully planned development, SN Krishna brings together well-designed plots, wide internal roads, landscaped spaces, dedicated community amenities and a secure gated environment to create a neighbourhood that feels complete from the very beginning.",
      "Located in Bairagarh Chichli, along Kolar Road, Bhopal, the project combines the advantage of a growing location with the comfort of a thoughtfully planned community. With connectivity, infrastructure and future development shaping the surrounding area, SN Krishna offers an opportunity to invest in a location with long-term potential.",
    ],
    design: {
      title: "Designed Around What Matters",
      text: "From 30-feet internal roads and a 150-feet proposed approach road to dedicated spaces for recreation, community and leisure, every element has been considered to create a more organised and enjoyable living experience.",
    },
    closing: {
      title: "More than just plots. A place to belong.",
      text: [
        "SN Krishna is built around a simple idea: your investment should have the potential to become your future home, your family's address, or a valuable asset for generations to come.",
        "With the backing of Ram Enterprises' experience and a focus on thoughtful planning, SN Krishna brings together location, infrastructure, community and long-term value in one address.",
      ],
    },
    facts: [
      { label: "Internal Roads", value: "30 ft wide" },
      { label: "Approach Road", value: "150 ft (proposed)" },
    ],
    amenities: [
      "Gated & Secure Community",
      "Wide Internal Roads",
      "Landscaped Green Spaces",
      "Temple",
      "Clubhouse",
      "Turf / Recreation Area",
      "Thoughtfully Planned Open Spaces",
      "Well-Connected Location",
      "STP",
    ],
    cover: photos.rowHouses,
    images: gallery,
  },
];

export const reasons = [
  {
    icon: "◈",
    title: "30+ Years of Experience",
    text: "A legacy built through decades of expertise in real estate and construction.",
  },
  {
    icon: "◇",
    title: "Trust & Transparency",
    text: "Strong relationships built on integrity, accountability and keeping our commitments.",
  },
  {
    icon: "◷",
    title: "Thoughtful Planning",
    text: "Every project is carefully planned around connectivity, infrastructure, lifestyle and long-term value.",
  },
  {
    icon: "◉",
    title: "Quality That Lasts",
    text: "We focus on dependable materials, meticulous execution and standards that stand the test of time.",
  },
  {
    icon: "❖",
    title: "Promising Locations",
    text: "We choose locations with strong connectivity, evolving infrastructure and future potential.",
  },
  {
    icon: "✦",
    title: "Built for Generations",
    text: "Our vision goes beyond developing properties—we create communities designed to remain valuable for years to come.",
  },
];

// ponytail: sample reviews with invented names, kept at the owner's request. Replace with real client quotes before launch.
export const testimonials = [
  {
    quote:
      "Ram Enterprises delivered our villa with a level of finish we honestly did not expect. Every promise was kept, right down to the handover date.",
    name: "Aarav Mehta",
    role: "Villa Owner",
  },
  {
    quote:
      "Their team's transparency on cost and progress made a stressful process feel effortless. The quality speaks for itself.",
    name: "Priya Sharma",
    role: "Managing Director, Sharma Retail",
  },
  {
    quote:
      "We've built with several contractors. None match the discipline, safety and craftsmanship Ram Enterprises brings to site.",
    name: "Rohan Kapoor",
    role: "Real Estate Investor",
  },
];

export const contact = {
  phone: "+91 91094 49995",
  email: "ramenterprisesbpl.info@gmail.com",
  site: "SN Krishna, Bairagarh Chichli, Kolar Road, Bhopal",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

// ponytail: set NEXT_PUBLIC_SITE_URL to the real domain in production; canonical, sitemap and OG links all hang off it.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
