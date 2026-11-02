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
    image: "img/kathak-stage.jpg", // replace with your own photo
    video: "", // optional: "media/hero.mp4" — fills the hero if set
    poster: "img/kathak-stage.jpg",
    // The hero photo is anchored right on desktop (text sits left);
    // change to "50% 45%" to centre it instead.
    imagePosition: "62% 30%",
    eyebrow: "Bollywood · Kathak · Folk · Hip-Hop",
    headline: "Dance Your Heart Out",
    // Set to true to show the headline in one line instead of two
    sub: "Kathak's spinning grace, Bollywood's heartbeat, and a room full of rhythm. Classes for every level — come as you are, leave lighter.",
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
    { label: "Kathak", href: "#kathak" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: { label: "Book a Class", href: "#contact" },

  // ---- About -------------------------------------------------
  about: {
    eyebrow: "About the studio",
    title: "A studio built for the joy of moving",
    body: [
      "Naviya Beats is a home for dancers who come for the choreography and stay for the people. We teach with warmth, precision and a lot of dhol — whether you've never danced before or you're prepping for a stage.",
      "Rooted in Indian rhythm and open to everything else, our teachers break each step down until it feels natural. You leave feeling capable, not just sweaty.",
    ],
    images: [
      { src: "img/kathak-pose.jpg", alt: "Kathak-trained dancer holding a classical pose" },
      { src: "img/kathak-twirl.jpg", alt: "Dancer spinning in a white and gold lehenga" },
      { src: "img/big-class.jpg", alt: "A full class mid-routine" },
    ],
    features: [
      { icon: "spark", title: "All levels welcome", text: "Beginner-friendly breakdowns in every style." },
      { icon: "music", title: "Dhol & tabla energy", text: "Live percussion nights and DJ-led sessions." },
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
        name: "Kathak",
        level: "Beginners only",
        when: "Tue & Thu · 7:30 PM",
        text: "Start from the very first step — no experience needed. Tatkar, ghungroo and your first chakkar, taught slowly with live tabla.",
        image: "img/ghungroo.jpg",
        accent: "gold",
      },
      {
        name: "Folk & Garba",
        level: "All levels",
        when: "Fri · 7:00 PM",
        text: "Garba, Bhangra and Dandiya — big circle energy, no partner needed.",
        image: "img/kathak-twirl.jpg",
        accent: "coral",
      },
      {
        name: "Hip-Hop",
        level: "Beginner → Advanced",
        when: "Tue & Thu · 8:30 PM",
        text: "Grooves, foundations and full choreography with a crew-like room energy.",
        image: "img/big-backbend.jpg",
        accent: "teal",
      },
      {
        name: "Contemporary",
        level: "Intermediate",
        when: "Sat · 4:00 PM",
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
        accent: "saffron",
      },
    ],
  },

  // ---- Kathak feature (the "Indian classical" moment) ---------
  kathak: {
    eyebrow: "Rooted in tradition",
    titleLead: "The grace of ",
    titleEm: "Kathak",
    body: [
      "Kathak is rhythm you can see: the sharp click of tatkar under ghungroo, a pirouette that gathers speed until the skirt becomes a wheel of colour, and gestures that tell a story without a word.",
      "Our Kathak classes are for complete beginners. We start from zero — stance, tatkar, the first mudras — and build slowly, with live tabla so the taal lives in the room, not in a speaker.",
    ],
    image: "img/kathak-pose.jpg",
    image2: "img/kathak-stage.jpg",
    // Small vocabulary chips — nice to keep, easy to edit
    terms: [
      { word: "Tatkar", meaning: "the footwork" },
      { word: "Chakkar", meaning: "the spin" },
      { word: "Ghungroo", meaning: "the bells" },
      { word: "Mudra", meaning: "the gesture" },
      { word: "Taal", meaning: "the cycle" },
    ],
    cta: { label: "Join the beginners batch", href: "#contact" },
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
          "The Kathak classes are the real thing — proper taal, proper ghungroo, and a teacher who explains why a step works. I drive an hour for it.",
        name: "Meera K.",
        role: "Kathak, two years in",
        initials: "MK",
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
  // Marigold & henna on deep indigo: warm, vibrant, still classy.
  theme: {
    ink: "#120A14", // page background (deep aubergine-black)
    ink2: "#1C1020", // raised panels
    cream: "#FFF4E4", // primary text
    saffron: "#FF8A3D", // primary accent (marigold)
    coral: "#E2384B", // secondary accent (kumkum red)
    gold: "#F5C15C", // highlight / stars / classical accents
    fontDisplay: "Fraunces", // headings — warm, slightly Indian-modern serif
    fontBody: "Inter", // body copy
  },
};

module.exports = SITE;
