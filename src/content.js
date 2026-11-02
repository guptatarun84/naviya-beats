/* ============================================================
   NAVIYA BEATS — ALL COPY & CONTENT LIVES HERE
   ------------------------------------------------------------
   Edit this one file to change the words, classes, links,
   images, colours and contact details on the page.
   Then run:  node build.cjs   (regenerates index.html)
   ------------------------------------------------------------
   This version is deliberately simple: three beginner classes,
   a calm palette, no noise. Add classes by copying a block in
   classes.items — the layout adapts automatically.
   ============================================================ */

const SITE = {
  // ---- Brand -------------------------------------------------
  name: "Naviya Beats",
  logoMark: "NB",
  tagline: "Dance Your Heart Out",

  // ---- Hero --------------------------------------------------
  hero: {
    image: "img/kathak-stage.jpg",
    video: "", // optional: "media/hero.mp4"
    poster: "img/kathak-stage.jpg",
    imagePosition: "62% 30%", // anchor of the hero photo (text sits left on desktop)
    eyebrow: "Beginners welcome",
    headline: "Dance Your Heart Out",
    sub: "A small dance studio for people who have never danced before. Learn the basics slowly, with patient teachers and no pressure.",
    ctaPrimary: { label: "Book a Class", href: "#contact" },
    ctaSecondary: { label: "See classes", href: "#classes" },
    // Keep this short — it sits under the buttons
    stats: [
      { value: "3", label: "Beginner classes" },
      { value: "8", label: "Students per batch" },
      { value: "0", label: "Experience needed" },
    ],
  },

  // ---- Sticky nav --------------------------------------------
  nav: [
    { label: "About", href: "#about" },
    { label: "Classes", href: "#classes" },
    { label: "Kathak", href: "#kathak" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: { label: "Book a Class", href: "#contact" },

  // ---- About -------------------------------------------------
  about: {
    eyebrow: "About the studio",
    title: "A calm place to start dancing",
    body: [
      "Naviya Beats is a small studio with one aim: to make the first steps easy. Most of our students walk in having never danced at all, and that is exactly who our classes are built for.",
      "We keep batches small, teach slowly, and repeat things until they feel natural. No auditions, no performance pressure — just good music and friendly people.",
    ],
    images: [
      { src: "img/kathak-pose.jpg", alt: "Dancer holding a classical pose" },
      { src: "img/kathak-twirl.jpg", alt: "Dancer spinning in a lehenga" },
      { src: "img/big-class.jpg", alt: "A small class practising" },
    ],
    features: [
      { icon: "spark", title: "Complete beginners", text: "Every class starts from step one." },
      { icon: "heart", title: "Small batches", text: "Eight students, so nobody gets lost." },
      { icon: "music", title: "Music in class", text: "Taal and tracks to keep the count easy." },
      { icon: "clock", title: "No pressure", text: "Repeat a level as long as you like." },
    ],
  },

  // ---- Classes -----------------------------------------------
  // Three beginner classes. No hip-hop. Nothing above beginner level.
  classes: {
    eyebrow: "Classes",
    title: "Three ways to begin",
    sub: "All our classes are for beginners. Pick one and come to a free trial.",
    items: [
      {
        name: "Kathak for Beginners",
        level: "Beginner",
        when: "Tue & Thu · 7:30 PM",
        text: "Start from zero — stance, tatkar and your first mudras, taught slowly, one step at a time.",
        image: "img/ghungroo.jpg",
        accent: "gold",
      },
      {
        name: "Bollywood for Beginners",
        level: "Beginner",
        when: "Mon & Wed · 7:00 PM",
        text: "Simple, joyful choreography to songs you already know. No experience needed.",
        image: "img/kathak-twirl.jpg",
        accent: "saffron",
      },
      {
        name: "Folk & Garba",
        level: "Beginner",
        when: "Fri · 7:00 PM",
        text: "Garba and Bhangra basics in a circle — easy steps, no partner needed.",
        image: "img/big-sunset.jpg",
        accent: "coral",
      },
    ],
  },

  // ---- Kathak feature -----------------------------------------
  kathak: {
    eyebrow: "Our first class",
    titleLead: "Kathak, from the ",
    titleEm: "very beginning",
    body: [
      "Kathak is rhythm you can see — the click of the feet, the sound of the ghungroo, and the slow turn of a chakkar.",
      "Our Kathak class is only for beginners. We start with standing, walking and the first few steps, and we do not move on until everyone is comfortable.",
    ],
    image: "img/kathak-pose.jpg",
    terms: [
      { word: "Tatkar", meaning: "the footwork" },
      { word: "Chakkar", meaning: "the spin" },
      { word: "Ghungroo", meaning: "the bells" },
    ],
    cta: { label: "Join the beginners batch", href: "#contact" },
  },

  // ---- Testimonials -------------------------------------------
  testimonials: {
    eyebrow: "Students",
    title: "What people say",
    items: [
      {
        quote:
          "I had never danced in my life. Six weeks in, I can do a full Bollywood routine without thinking about the steps.",
        name: "Priya S.",
        role: "Bollywood beginners",
        initials: "PS",
      },
      {
        quote:
          "The Kathak class is slow in the best way. Nothing is rushed, and I never feel like the slowest person in the room.",
        name: "Meera K.",
        role: "Kathak beginners",
        initials: "MK",
      },
      {
        quote:
          "Friendly, calm and genuinely for beginners. I came alone and left with a whole group of friends.",
        name: "Anita R.",
        role: "Folk & Garba",
        initials: "AR",
      },
    ],
  },

  // ---- Contact / signup ---------------------------------------
  contact: {
    eyebrow: "Contact",
    title: "Book a free trial class",
    sub: "Send us a message and we'll reply with the timetable, fees and a time to visit.",
    // The person people should reach
    person: { name: "Pooja Gupta", role: "Studio contact" },
    email: "naviyabeats2202@gmail.com",
    phone: "",
    hours: "Mon–Fri 6–9 PM · Sat 9 AM–1 PM",
    form: {
      // Where the form sends. Leave "" for a demo (shows a thank-you message).
      // To go live, paste e.g. "https://formspree.io/f/xxxxxxx"
      action: "",
      method: "POST",
      submitLabel: "Send message",
      note: "You can also email us directly if you prefer.",
    },
    signup: {
      label: "Get class updates by email",
      placeholder: "you@email.com",
      button: "Subscribe",
      action: "",
    },
  },

  // ---- Social -------------------------------------------------
  social: [
    { label: "Instagram", handle: "@naviyabeats", icon: "instagram", href: "https://instagram.com/" },
    { label: "Facebook", handle: "Naviya Beats", icon: "facebook", href: "https://facebook.com/740387045828880" },
  ],

  // ---- Footer -------------------------------------------------
  footer: {
    blurb: "A small dance studio for complete beginners.",
    copyright: "© 2025 Naviya Beats — All Rights Reserved.",
  },

  // ---- Theme --------------------------------------------------
  // Simple and sober: deep ink, warm cream, one brass accent.
  theme: {
    ink: "#151312",
    ink2: "#1D1A18",
    cream: "#F6F1E9",
    saffron: "#C98A4B", // brass
    coral: "#A9553F", // terracotta
    gold: "#D9B276", // light brass
    fontDisplay: "Fraunces",
    fontBody: "Inter",
  },
};

module.exports = SITE;
