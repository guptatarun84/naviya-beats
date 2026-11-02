/* ============================================================
   NAVIYA BEATS — ALL COPY & CONTENT LIVES HERE
   ------------------------------------------------------------
   Edit this one file to change the words, classes, links,
   images, colours and contact details on the page.
   Then run:  node build.cjs   (regenerates index.html)
   ============================================================ */

const SITE = {
  // ---- Brand -------------------------------------------------
  name: "Naviya Beats",
  logoMark: "NB", // shown in the round badge in the nav
  tagline: "Dance Your Heart Out",

  // ---- Hero --------------------------------------------------
  hero: {
    image: "img/hero-night.jpg", // replace with your own photo
    video: "", // optional: "media/hero.mp4" — fills the hero if set
    poster: "img/hero-night.jpg",
    eyebrow: "Studio · Stage · Community",
    headline: "Dance Your Heart Out",
    sub: "Bollywood, hip-hop, contemporary and more — high-energy classes for every level, in a room that feels like home.",
    ctaPrimary: { label: "Book a Class", href: "#contact" },
    ctaSecondary: { label: "Get Tickets", href: "#contact" },
    // Small trust row under the buttons
    stats: [
      { value: "12+", label: "Dance styles" },
      { value: "500+", label: "Students taught" },
      { value: "4.9★", label: "Student rating" },
    ],
  },

  // ---- Sticky nav --------------------------------------------
  nav: [
    { label: "About", href: "#about" },
    { label: "Classes", href: "#classes" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: { label: "Book a Class", href: "#contact" },

  // ---- About -------------------------------------------------
  about: {
    eyebrow: "About the studio",
    title: "A studio built for the joy of moving",
    body: [
      "Naviya Beats is a home for dancers who come for the choreography and stay for the people. We teach with warmth, precision and a lot of bass — whether you've never danced before or you're prepping for a stage.",
      "Every class is led by working performers and choreographers who break things down step by step, so you leave feeling capable, not just sweaty.",
    ],
    images: [
      { src: "img/big-studio.jpg", alt: "Dancers warming up in the studio" },
      { src: "img/big-class.jpg", alt: "A full class mid-routine" },
      { src: "img/big-contemporary.jpg", alt: "Contemporary dancer mid-pose" },
    ],
    features: [
      { icon: "spark", title: "All levels welcome", text: "Beginner-friendly breakdowns in every style." },
      { icon: "music", title: "Live music energy", text: "DJ-led sessions and live percussion nights." },
      { icon: "heart", title: "Small, warm groups", text: "Capped class sizes so you get real feedback." },
      { icon: "star", title: "Stage opportunities", text: "Annual showcase and community performances." },
    ],
  },

  // ---- Classes -----------------------------------------------
  classes: {
    eyebrow: "What we teach",
    title: "Find your rhythm",
    sub: "Rename these to match your timetable — each card is one line in the list below.",
    items: [
      {
        name: "Bollywood",
        level: "All levels",
        when: "Mon & Wed · 7:00 PM",
        text: "High-energy choreography to the songs you already love, from classic to current.",
        image: "img/big-sunset.jpg",
        accent: "saffron",
      },
      {
        name: "Hip-Hop",
        level: "Beginner → Advanced",
        when: "Tue & Thu · 8:00 PM",
        text: "Grooves, foundations and full choreography with a crew-like room energy.",
        image: "img/big-backbend.jpg",
        accent: "coral",
      },
      {
        name: "Contemporary",
        level: "Intermediate",
        when: "Fri · 6:30 PM",
        text: "Floorwork, breath and storytelling — movement that makes room for feeling.",
        image: "img/big-contemporary.jpg",
        accent: "plum",
      },
      {
        name: "Kids (5–12)",
        level: "Ages 5–12",
        when: "Sat · 10:00 AM",
        text: "Playful, confidence-building classes that end with a mini performance for parents.",
        image: "img/big-class.jpg",
        accent: "teal",
      },
    ],
  },

  // ---- Testimonials ------------------------------------------
  testimonials: {
    eyebrow: "Student stories",
    title: "What our dancers say",
    items: [
      {
        quote:
          "I signed up for one Bollywood class and ended up dancing in the annual showcase. The teaching is warm, patient and genuinely fun.",
        name: "Priya S.",
        role: "Student since 2022",
        initials: "PS",
      },
      {
        quote:
          "I'd never danced before and was terrified. Three months later I'm in the Friday hip-hop crew. That says everything.",
        name: "Marcus L.",
        role: "Hip-Hop, beginner track",
        initials: "ML",
      },
      {
        quote:
          "My daughter counts down the days to Saturday class. She's braver on stage than I ever was — thank you for that.",
        name: "Anita R.",
        role: "Parent, Kids class",
        initials: "AR",
      },
    ],
  },

  // ---- Contact / signup --------------------------------------
  contact: {
    eyebrow: "Get in touch",
    title: "Book a class or just say hi",
    sub: "Drop us a line and we'll reply with the timetable, pricing and a free trial class.",
    email: "hello@naviyabeats.com",
    phone: "",
    location: "Studio address — add yours here",
    hours: "Mon–Fri 5:30–9:30 PM · Sat 9 AM–1 PM",
    form: {
      // Where the form sends. Leave "" for a demo (shows a success message).
      // On a real site use e.g. "https://formspree.io/f/xxxxxxx" or your host's endpoint.
      action: "",
      method: "POST",
      submitLabel: "Send message",
      note: "Sign up for our email list for updates, promotions, and more.",
    },
    // Keep the existing email signup
    signup: {
      label: "Join the mailing list",
      placeholder: "you@email.com",
      button: "Subscribe",
      action: "", // same as above: paste a Formspree / Mailchimp endpoint to go live
    },
  },

  // ---- Social ------------------------------------------------
  social: [
    { label: "Instagram", handle: "@naviyabeats", icon: "instagram", href: "https://instagram.com/" },
    { label: "Facebook", handle: "Naviya Beats", icon: "facebook", href: "https://facebook.com/740387045828880" },
    { label: "YouTube", handle: "Naviya Beats", icon: "youtube", href: "https://youtube.com/" },
    { label: "TikTok", handle: "@naviyabeats", icon: "tiktok", href: "https://tiktok.com/" },
  ],

  // ---- Footer ------------------------------------------------
  footer: {
    blurb: "A dance studio for people who'd rather feel the music than watch it.",
    copyright: "© 2025 Naviya Beats — All Rights Reserved.",
  },

  // ---- Theme (colours + fonts) -------------------------------
  // Warm, vibrant, still classy: saffron/ember on deep ink.
  theme: {
    ink: "#140F17", // page background (near-black plum)
    ink2: "#1E1722", // raised panels
    cream: "#FFF6EC", // primary text
    saffron: "#FF8A3D", // primary accent
    coral: "#FF4D6D", // secondary accent
    gold: "#FFC857", // highlight / stars
    fontDisplay: "Bricolage Grotesque", // headings
    fontBody: "Inter", // body copy
  },
};

module.exports = SITE;
