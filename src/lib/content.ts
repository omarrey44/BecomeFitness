/**
 * BECOME Fitness & Strength — Site content.
 *
 * CONTENT INTEGRITY RULES
 * - VERIFIED entries are sourced from becomefitnessandstrength.com / linked
 *   social profiles and may be published as-is.
 * - PLACEHOLDER entries (suffixed in copy with "to be confirmed" or flagged via
 *   `placeholder: true`) MUST be verified with the coach before launch.
 * - Do not invent certifications, results, prices, testimonials, or credentials.
 *   See CONTENT-CHECKLIST.md.
 */

export const brand = {
  name: "BECOME",
  fullName: "BECOME Fitness & Strength",
  tagline: "Become Stronger. Move Better. Live With Confidence.",
  trainer: "Eder Saul",
  // VERIFIED
  phone: "(323) 907-9906",
  phoneHref: "tel:+13239079906",
  email: "becomefitnessandstrength@gmail.com",
  emailHref: "mailto:becomefitnessandstrength@gmail.com",
  address: {
    street: "743 S Olive St",
    city: "Los Angeles",
    region: "CA",
    postal: "90014",
    area: "Downtown Los Angeles",
  },
  byAppointmentOnly: true,
  socials: {
    facebook: "https://www.facebook.com/becomefitnessandstrength/",
    instagram: "https://www.instagram.com/StrengthbyEder/",
    youtube: "https://www.youtube.com/@strengthbyeder",
    yelp: "https://www.yelp.com/biz/become-fitness-and-strength-los-angeles",
  },
} as const;

export const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=743+S+Olive+St+Los+Angeles+CA+90014";
export const mapEmbedUrl =
  "https://www.google.com/maps?q=743+S+Olive+St+Los+Angeles+CA+90014&output=embed";

export const nav = [
  { label: "Coaching", href: "#coaching" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Training Approach", href: "#method" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroTrustPoints = [
  "Personalized Programming",
  "Strength & Body Composition",
  "Movement With Purpose",
  "Downtown Los Angeles",
] as const;

export const heroMetrics = [
  { label: "Strength", value: "Progressive" },
  { label: "Mobility", value: "Intentional" },
  { label: "Confidence", value: "Earned" },
] as const;

// VERIFIED philosophy fragment from the existing site:
// clients should feel "alive, powerful, and connected."
export const philosophy = {
  title: "Movement With Purpose Changes More Than Your Body.",
  quote: "Movement with purpose makes us feel alive, powerful, and connected.",
  paragraphs: [
    "Exercise is one of the most reliable ways to improve your health, your confidence, your strength, and your quality of life.",
    "Every program is built around the individual — your body, your history, your schedule, and the goals that actually matter to you.",
    "Progress should be sustainable. We train for the long run by combining intelligent movement, nutrition awareness, recovery, and consistency.",
  ],
  points: [
    "Individualized programming",
    "Technique before intensity",
    "Sustainable, measurable progress",
    "Coaching that meets you where you are",
  ],
} as const;

export type WhoForItem = {
  title: string;
  body: string;
};

export const whoFor: WhoForItem[] = [
  {
    title: "Build Strength",
    body: "Progressive, structured training that makes you measurably stronger over time.",
  },
  {
    title: "Improve Body Composition",
    body: "Training and habit guidance built to support sustainable physique goals.",
  },
  {
    title: "Increase Energy",
    body: "Consistent, well-dosed training that leaves you with more in the tank — not less.",
  },
  {
    title: "Return to Training",
    body: "A patient on-ramp for adults coming back after time away from the gym.",
  },
  {
    title: "Develop Muscle",
    body: "Evidence-informed resistance training focused on progressive overload and consistency.",
  },
  {
    title: "Improve Movement",
    body: "Coaching that improves how you move, control, and carry yourself day to day.",
  },
  {
    title: "Build Confidence",
    body: "A supportive environment for anyone who has felt intimidated by conventional gyms.",
  },
  {
    title: "Create Sustainable Habits",
    body: "Systems and accountability that make training a lasting part of your life.",
  },
];

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  forWho: string;
  focus: string;
  placeholder?: boolean;
};

export const services: Service[] = [
  {
    id: "personal-training",
    number: "01",
    title: "Personal Training",
    description:
      "One-on-one coaching built around your goals, experience, and movement ability.",
    forWho: "Anyone who wants structured, individual attention.",
    focus: "Individualized programming and hands-on coaching.",
  },
  {
    id: "strength-development",
    number: "02",
    title: "Strength Development",
    description:
      "Progressive strength programming focused on technique, performance, and long-term improvement.",
    forWho: "Lifters who want to get genuinely strong.",
    focus: "Technique, progression, and measurable performance.",
  },
  {
    id: "body-composition",
    number: "03",
    title: "Body Composition Coaching",
    description:
      "Structured training and habit guidance designed to support sustainable physique goals.",
    forWho: "Clients pursuing a leaner, stronger physique.",
    focus: "Training, habits, and consistency over quick fixes.",
  },
  {
    id: "muscle-development",
    number: "04",
    title: "Muscle Development",
    description:
      "Evidence-informed resistance training focused on progressive overload and consistency.",
    forWho: "Those who want to build and keep lean muscle.",
    focus: "Progressive overload and recoverable volume.",
  },
  {
    id: "movement-mobility",
    number: "05",
    title: "Movement & Mobility",
    description:
      "Training designed to improve movement quality, control, and confidence.",
    forWho: "Anyone who wants to move better and with more control.",
    focus: "Movement quality, control, and resilience.",
  },
  {
    id: "nutrition-guidance",
    number: "06",
    title: "Nutrition Guidance",
    description:
      "General habit and nutrition coaching to support your training. Service details to be confirmed.",
    forWho: "Clients who want everyday nutrition habit support.",
    focus: "General habit guidance (not medical nutrition therapy).",
    placeholder: true,
  },
  {
    id: "online-hybrid",
    number: "07",
    title: "Online or Hybrid Coaching",
    description:
      "Remote or hybrid programming and check-ins. Availability to be confirmed.",
    forWho: "Clients who train partly or fully off-site.",
    focus: "Remote programming and accountability.",
    placeholder: true,
  },
];

export const method = [
  {
    step: "01",
    title: "Consult",
    body: "We discuss your goals, experience, schedule, limitations, and expectations.",
  },
  {
    step: "02",
    title: "Assess",
    body: "We review your movement, strength level, habits, and starting point.",
  },
  {
    step: "03",
    title: "Build",
    body: "We create a personalized training approach with measurable progression.",
  },
  {
    step: "04",
    title: "Evolve",
    body: "We adjust the program based on performance, recovery, feedback, and results.",
  },
] as const;

// About — VERIFIED: name, DTLA location, engineering background & long study of
// training/nutrition referenced on the existing site. The "10,000+ hours" and any
// specific credentials are flagged for confirmation before publishing as fact.
export const about = {
  title: "Coaching Built on Curiosity, Experience, and Purpose.",
  story: [
    "Eder Saul is a personal trainer and strength coach based in Downtown Los Angeles. His path into coaching started with an engineer's curiosity about how the body adapts, performs, and grows stronger.",
    "That curiosity turned into a long-term study of exercise and nutrition, and into years of coaching people from many different backgrounds — beginners, returners, and experienced lifters alike.",
    "The result is a coaching style that is structured but human: precise about technique and progression, patient about the process, and genuinely invested in the person doing the work.",
  ],
  facts: [
    { label: "Based in", value: "Downtown Los Angeles", placeholder: false },
    {
      label: "Background",
      value: "Industrial & Systems Engineering",
      placeholder: false,
    },
    {
      label: "Focus",
      value: "Strength & body composition",
      placeholder: false,
    },
    {
      label: "Coaching hours",
      value: "10,000+ hours — to be confirmed",
      placeholder: true,
    },
  ],
  credentialsNote: "Certification information to be confirmed.",
} as const;

export type Testimonial = {
  initials: string;
  quote: string;
  name: string;
  role: string;
  duration?: string;
  placeholder?: boolean;
};

// VERIFIED client reviews provided by the coach.
export const testimonials: Testimonial[] = [
  {
    initials: "K",
    quote:
      "Eder is a trainer that is clearly dedicated to his client's wellness and continued improvement. I have not been able to find another trainer that can meet the high standards he set for me!",
    name: "Katie",
    role: "Fashion",
  },
  {
    initials: "A",
    quote:
      "Amazing work with Eder. He got me to my strength and conditioning goals in a very dynamic and organized manner. Been working with him for several years at many locations and couldn't be happier.",
    name: "Amir",
    role: "Medicine",
    duration: "Several years",
  },
  {
    initials: "J",
    quote:
      "Awesome trainer, really knows his stuff! Can't say enough about his knowledge, attentiveness and the results he provides. He really listens to what you want and customizes everything to what you NEED, (whether you like it or not!)",
    name: "Juan",
    role: "Real Estate",
  },
  {
    initials: "B",
    quote:
      "I enjoyed working with Eder and really appreciate all the work we did together. I trained with him for a few years until I had to relocate. I would definitely encourage anyone to try it, you'll love the workouts!",
    name: "Brenda",
    role: "Entrepreneur",
    duration: "A few years",
  },
];

export type ResultCard = {
  metric: string;
  label: string;
  body: string;
  placeholder?: boolean;
};

export const results: ResultCard[] = [
  {
    metric: "—",
    label: "Strength milestone",
    body: "Real client transformation coming soon. Add an authorized progress story.",
    placeholder: true,
  },
  {
    metric: "—",
    label: "Consistency streak",
    body: "Real client transformation coming soon. Add a verified consistency timeline.",
    placeholder: true,
  },
  {
    metric: "—",
    label: "Personal achievement",
    body: "Real client transformation coming soon. Add an authorized milestone.",
    placeholder: true,
  },
];

export const experiencePoints = [
  "Personalized attention",
  "Technique-focused coaching",
  "Structured progression",
  "Appropriate intensity",
  "Clear feedback",
  "Supportive environment",
  "Accountability",
] as const;

export type YouTubeVideo = {
  /** 11-char YouTube ID, or empty string while a placeholder. */
  id: string;
  title: string;
};

/**
 * "Training in Motion" — real YouTube clips from @strengthbyeder.
 * To add a video: copy its YouTube ID (the v=XXXXXXXXXXX part, or the bit after
 * youtu.be/) and the title here. Empty `id` renders a placeholder tile that
 * links to the channel. Pick selected, professional clips only.
 */
export const youtubeVideos: YouTubeVideo[] = [
  { id: "Ej8ENFGpZo0", title: "Training in motion" },
  { id: "H5czf8Ixvtk", title: "Technique & strength" },
  { id: "6rDdQoICmp8", title: "Strength session" },
  { id: "ndlVPnReUpA", title: "Movement with purpose" },
];

export type Faq = { q: string; a: string; placeholder?: boolean };

export const faqs: Faq[] = [
  {
    q: "Is personal training suitable for beginners?",
    a: "Yes. Programs are built around your current level, so beginners are welcome and coached carefully from the first session.",
  },
  {
    q: "Where are the sessions held?",
    a: `Sessions are held in Downtown Los Angeles at ${brand.address.street}, ${brand.address.city}, ${brand.address.region} ${brand.address.postal}.`,
  },
  {
    q: "Is training by appointment only?",
    a: "Yes. Coaching is by appointment only. Reach out to discuss availability.",
  },
  {
    q: "How do I get started?",
    a: "Submit a consultation request or call/text. We'll talk through your goals and the right next step.",
  },
  {
    q: "Do you provide customized programs?",
    a: "Yes. Every program is personalized to your goals, experience, and movement ability.",
  },
  {
    q: "Can training be adapted around previous limitations?",
    a: "Training can be adapted around previous limitations after appropriate professional clearance. Specifics are discussed during your consultation.",
  },
  {
    q: "Do you offer nutrition guidance?",
    a: "General habit and nutrition guidance may be available to support your training. Scope to be confirmed.",
    placeholder: true,
  },
  {
    q: "How often should I train?",
    a: "Training frequency is set during your consultation based on your goals, recovery, and schedule.",
  },
  {
    q: "Do you offer online coaching?",
    a: "Online or hybrid coaching availability is to be confirmed. Ask during your consultation.",
    placeholder: true,
  },
  {
    q: "What should I bring to my first session?",
    a: "Comfortable training clothes, supportive shoes, and water. Any specifics will be shared after you book.",
    placeholder: true,
  },
];

// Goal + experience options for the consultation form (kept in one place so the
// form, schema, and email all stay in sync).
export const goalOptions = [
  "Build strength",
  "Improve body composition",
  "Develop muscle",
  "Improve fitness",
  "Return to exercise",
  "Increase energy",
  "Other",
] as const;

export const experienceOptions = [
  "New to training",
  "Some experience",
  "Experienced",
  "Returning after time away",
] as const;

export const contactMethods = ["Email", "Phone", "Text"] as const;
