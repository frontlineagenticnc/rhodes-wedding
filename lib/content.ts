// Single source of truth for all site copy and data.
// Edit values here to update the live site — no other file changes needed
// for typical copy/itinerary/registry updates.

export const content = {
  couple: {
    first: "Aaron",
    second: "Hannah",
  },
  dateShort: "March 6, 2027",
  dateLong: "Saturday, March 6, 2027",
  venue: {
    name: "El Conquistador Resort",
    city: "Fajardo",
    region: "Puerto Rico",
    url: "https://www.elconresort.com/",
  },

  // Engagement photos live in public/photos/. Add a hero-3.jpg entry here
  // to fill the third (desktop-only) collage tile.
  heroPhotos: [
    {
      src: "/photos/hero-1.jpg",
      alt: "Aaron and Hannah holding hands on a zipline over the mountains at sunset",
    },
    {
      src: "/photos/hero-2.jpg",
      alt: "Aaron and Hannah after the proposal, holding a “She Said Yes” sign",
    },
    {
      src: "/photos/hero-3.jpg",
      alt: "Aaron and Hannah on the zipline platform, showing off the new ring",
    },
  ],

  // Candid photos sprinkled between sections on the landing page.
  // Captions are easy to tweak — change the text or set to "" to hide.
  moments: [
    {
      src: "/photos/moment-1.jpg",
      alt: "Aaron and Hannah dressed up for a night out",
      caption: "Date night",
    },
    {
      src: "/photos/moment-2.jpg",
      alt: "Aaron and Hannah at home with their dog Owen",
      caption: "Owen, our favorite third wheel",
    },
    {
      src: "/photos/moment-3.jpg",
      alt: "Aaron and Hannah all dressed up at a formal event",
      caption: "Cleaned up nicely",
    },
  ],

  travel: {
    intro:
      "We're celebrating with you at El Conquistador Resort in Fajardo, on the northeast coast of Puerto Rico. Here's everything you need to plan your trip.",
    airport: {
      code: "SJU",
      name: "Luis Muñoz Marín International Airport (San Juan)",
      driveTime: "About 45 minutes by car to the resort.",
    },
    roomBlock: {
      // TODO: replace with link + code from wedding planner
      url: "#",
      code: "TBD — coming soon from our wedding planner",
      note: "We have a room block reserved at El Conquistador. Booking link and code will be added here shortly.",
    },
    transportation:
      "We recommend renting a car or arranging a shuttle from SJU. Uber/Lyft are available in San Juan but less reliable in Fajardo.",
  },

  // PLACEHOLDER itinerary — adjust times with planner.
  schedule: [
    {
      day: "Friday, March 5, 2027",
      events: [
        { time: "5:00 PM", title: "Welcome Reception", location: "Resort lawn", description: "Cocktails and light bites to kick off the weekend." },
      ],
    },
    {
      day: "Saturday, March 6, 2027",
      events: [
        { time: "4:00 PM", title: "Ceremony", location: "Oceanfront lawn", description: "Please be seated by 3:45 PM." },
        { time: "5:00 PM", title: "Cocktail Hour", location: "Sunset Terrace", description: "" },
        { time: "6:30 PM", title: "Reception & Dinner", location: "Las Brisas Ballroom", description: "Dinner, dancing, and celebration." },
      ],
    },
  ],

  honeyfund: {
    intro:
      "Your presence means the world to us. If you'd like to contribute toward our honeymoon, we'd be so grateful — every bit helps make our trip unforgettable.",
    // Primary CTA — link to your Zola / Honeyfund / Knot honeymoon fund page.
    // TODO: replace # with your real honeyfund URL after signing up.
    primaryUrl: "#",
    primaryLabel: "Contribute to Our Honeymoon Fund",
    primaryNote: "Credit/debit cards accepted",
  },

  // Person-to-person payment links for guests who'd rather use an app they already have.
  // TODO: fill in your real handles. Leave any field blank ("") to hide that button.
  p2p: {
    venmo: "",   // e.g. "aaron-rhodes" — link becomes https://venmo.com/u/<handle>
    paypal: "",  // e.g. "aaronrhodes" — link becomes https://paypal.me/<handle>
    zelle: "",   // shown as text (Zelle has no public link spec): your email or phone
  },

  registry: {
    intro: "We've also registered at a few traditional registries.",
    links: [
      { name: "Target", url: "https://www.target.com/gift-registry/gift/rhodeswedding2027" },
      { name: "Crate & Barrel", url: "https://www.crateandbarrel.com/gift-registry/hannah-tilander-and-aaron-rhodes/r7565848" },
    ],
  },

  rsvp: {
    deadline: "January 15, 2027",
    intro:
      "Please let us know if you can join us by January 15, 2027. We can't wait to celebrate with you.",
  },
};

export type Content = typeof content;
