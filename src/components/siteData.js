/* ============================================================
   siteData.js — all content lives here.
   To update anything on the site, edit this file only.
   ============================================================ */

export const COLORS = {
  ink: "#16221D",
  inkSoft: "#5C6B64",
  line: "#D8E3DD",
  paper: "#F3F8F6",
  card: "#FFFFFF",
  accent: "#0E6B53",
  accentSoft: "#E4F1EC",
};

export const FONTS = {
  serif: "'Source Serif 4', Georgia, 'Times New Roman', serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
};

/* ---------- Team ---------- */
export const TEAM = [
  // Core team — shown on Meet the Team page
  { slug: "laylah-wolf",         name: "Laylah Wolf",         role: "Founder & CEO",                    avatar: null, bio: "Laylah founded The HEAL Project to bring free, stigma-free health education to teens everywhere. She leads strategy, partnerships, and the org's research direction." },
  { slug: "lee-t",               name: "Lee T.",               role: "Vice President",                   avatar: null, bio: "Lee oversees day-to-day operations and helps coordinate programs across HEAL's chapters and initiatives." },
  { slug: "anirudh-n",           name: "Anirudh N.",           role: "Chief Technology Officer",         avatar: null, bio: "Anirudh manages HEAL's website and technical infrastructure." },
  { slug: "brycen-w",            name: "Brycen W.",            role: "Social Media Manager",             avatar: null, bio: "Brycen runs HEAL's social presence, helping spread free health resources to a wider teen audience." },
  { slug: "ayla-t",              name: "Ayla T.",              role: "Leader of Writing & Research",     avatar: null, bio: "Ayla co-leads HEAL's writing and research team, helping fact-check and develop original health content." },
  { slug: "nicola-k",            name: "Nicola K.",            role: "Leader of Writing & Research",     avatar: null, bio: "Nicola co-leads HEAL's writing and research team, focusing on nutrition and wellness content." },
  { slug: "angel-g",             name: "Angel G.",             role: "Leader of Art & Graphic Design",   avatar: null, bio: "Angel leads HEAL's visual identity and design work across the site and social channels." },
  // Writers/Researchers — shown in journal bylines and author profiles, ordered by most recent post
  { slug: "oyindamola-borisade", name: "Oyindamola Borisade", role: "Writer",                           avatar: null, bio: "Oyindamola contributes original research-based writing to The HEAL Project, with a focus on mental health topics." },
  { slug: "dhanya-duvvuru",      name: "Dhanya Duvvuru",      role: "Writer & Researcher",              avatar: null, bio: "Dhanya writes and researches original science and health explainers for The HEAL Project." },
  { slug: "laylah-wolf-researcher", name: "Laylah Wolf",      role: "Researcher",                       avatar: null, bio: "Laylah researches and fact-checks original health and science content for The HEAL Project." },
];

/* ---------- Nav ---------- */
export const NAV_ITEMS = [
  ["Home", "home"],
  ["Programs", "programs"],
  ["Journal", "blog"],
  ["Team", "team"],
  ["Chapters", "chapters"],
  ["Fellowship", "fellowship"],
  ["Partners", "partners"],
  ["Get Involved", "involved"],
];

/* ---------- Hero stats ---------- */
export const HERO_STATS = [
  ["400k+", "Students reached"],
  ["12", "Health topics"],
  ["9", "Team & writers"],
  ["3", "Partner orgs"],
];

/* ---------- Programs ---------- */
export const PROGRAMS = [
  { title: "Peer Education", desc: "Teen educators trained to deliver health workshops in schools and community centers." },
  { title: "Wellness Workshops", desc: "Interactive sessions covering mental health, nutrition, sleep, and more." },
  { title: "Resource Library", desc: "Free downloadable guides, toolkits, and fact sheets on every health topic." },
  { title: "Community Chapters", desc: "Start or join a HEAL chapter at your school and bring health education to your peers." },
  { title: "Speaker Series", desc: "Monthly virtual events with health professionals, advocates, and change-makers." },
  { title: "Challenge Program", desc: "30-day wellness challenges designed to build healthy habits one day at a time." },
];

/* ---------- Health topics ---------- */
export const TOPICS = [
  "Mental Health", "Nutrition", "Sexual Health", "Sleep & Rest",
  "Fitness", "Digital Wellness", "Substance Awareness", "Body Image",
  "Relationships", "Stress Management", "First Aid", "Chronic Illness",
];

/* ---------- Partners ---------- */
export const PARTNERS = [
  { name: "Food for Good", desc: "Fighting food insecurity in our communities." },
  { name: "M.I.K.D. Youth Empowerment Network", desc: "Empowering youth through mentorship and community." },
  { name: "M.O.R.S.", desc: "Mental health and wellness advocacy." },
];

/* ---------- Get Involved ---------- */
export const INVOLVED_CARDS = [
  { title: "Volunteer", desc: "Join our team of peer educators and help deliver workshops in your community." },
  { title: "Start a chapter", desc: "Bring HEAL to your school. We'll give you everything you need to get started." },
  { title: "Join a challenge", desc: "Take our 30-day wellness challenges and build habits that last." },
];

/* ---------- Chapter leaders ---------- */
export const CHAPTER_LEADERS = [
  { name: "Maya Chen", location: "Plano, TX, USA", region: "Texas", instagram: "@heal.plano", blurb: "Started a HEAL chapter at my high school to make sure health class actually covers what students need to know." },
  { name: "Jordan Reyes", location: "Sacramento, CA, USA", region: "California", instagram: "@heal.sacramento", blurb: "I want students at my school to feel comfortable asking questions about their health without judgment." },
  { name: "Priya Nair", location: "Edison, NJ, USA", region: "New Jersey", instagram: null, blurb: "Coming soon!" },
  { name: "Caleb Owusu", location: "Atlanta, GA, USA", region: "Georgia", instagram: "@heal.atl", blurb: "Health education shouldn't depend on which school you go to. I'm working to close that gap in my community." },
  { name: "Sofia Marquez", location: "Toronto, ON, Canada", region: "Canada", instagram: "@heal.toronto", blurb: "Bringing HEAL workshops to my school's wellness club, focused on mental health and sleep." },
  { name: "Ezra Klein", location: "Columbus, OH, USA", region: "Ohio", instagram: null, blurb: "Coming soon!" },
];

export const REGIONS = ["All", ...Array.from(new Set(CHAPTER_LEADERS.map(c => c.region))).sort()];

/* ---------- Fellowship ---------- */
export const FELLOWSHIP = {
  name: "Summer Research Fellowship 2026",
  tagline: "Expanding Access to Student Research and Scientific Innovation",
  partner: "A joint program with Project MARS",
  dates: "June 30 \u2013 August 5, 2026",
  format: "Fully virtual via Zoom / Google Meet",
  commitment: [
    "6 hours/week for general sessions",
    "2\u20133 hours/week for guest speakers and mentor meetings",
    "2\u20134 hours/week for independent research and assignments",
  ],
  goals: [
    "Learn to read, synthesize, and critique research papers",
    "Build experimental and research design skills",
    "Develop a symposium-ready presentation poster",
    "Optionally write a full research paper for potential publication",
  ],
  weeks: [
    { title: "Week 1: Foundations", desc: "Find a research interest, learn to read papers, identify a research gap, form a research question, and get matched with a mentor." },
    { title: "Week 2: Building the project", desc: "Choose a research type (review, computational, or experimental), gather data, and draft a research proposal and abstract." },
    { title: "Week 3: Analysis", desc: "Analyze data, draw conclusions, and begin the poster and paper with peer feedback and writing support." },
    { title: "Week 4: Finalization", desc: "Finish the presentation, paper, and poster. Optional entrepreneurship workshops." },
    { title: "Week 5: Summit", desc: "Networking, peer review, and the final research presentation summit." },
  ],
  deliverables: [
    "Attendance and active participation in sessions and mentor meetings",
    "A completed research project (review, computational, or experimental)",
    "A final research poster",
    "A final presentation at the Research Summit",
  ],
  optional: [
    "Expanding the project into a full research paper",
    "Submitting to high school research journals or youth STEM publications",
    "Adapting the project for science fairs or research competitions",
  ],
  contacts: ["med.assoc.research.science@gmail.com", "thehealproject48@gmail.com"],
};

/* ---------- Articles ---------- */
export const ARTICLES = [
  {
    id: "teen-mental-health",
    title: "Understanding Teen Mental Health: What Every Student Should Know",
    dek: "Mental health is just as important as physical health, yet many teens don't know where to turn when they're struggling.",
    category: "Mental Health",
    author: "Ayla T.",
    researcher: "Ayla T.",
    readTime: "5 min read",
    body: [
      { type: "p", text: "Mental health is just as important as physical health, yet many teens don't know where to turn when they're struggling. Anxiety, depression, and stress are common experiences during adolescence, but that doesn't mean you have to face them alone." },
      { type: "h", text: "Signs to watch for" },
      { type: "p", text: "Persistent sadness lasting more than two weeks, withdrawal from friends and activities, changes in sleep or appetite, difficulty concentrating, and feelings of hopelessness can all be signs that someone needs support. If you notice these signs in yourself or a friend, reaching out is the bravest thing you can do." },
      { type: "h", text: "Where to find support" },
      { type: "p", text: "Resources available to teens include school counselors, crisis text lines, and trusted adults in your life. Remember: asking for help is a sign of strength, not weakness." },
      { type: "h", text: "Building resilience" },
      { type: "p", text: "Building resilience starts with small habits: regular sleep, movement, limiting social media, and staying connected to people who uplift you. The HEAL Project is here to support every step of your wellness journey." },
    ],
  },
  {
    id: "nutrition-101",
    title: "Nutrition 101: Fueling Your Body for Success",
    dek: "What you eat directly impacts your energy, focus, and mood. Here are the basics of teen nutrition, without the diet culture noise.",
    category: "Nutrition",
    author: "Nicola K.",
    researcher: "Nicola K.",
    readTime: "4 min read",
    body: [
      { type: "p", text: "What you eat directly impacts your energy, focus, and mood. Teen bodies are growing rapidly and need consistent, balanced fuel \u2014 not crash diets or skipping meals." },
      { type: "h", text: "The basics" },
      { type: "p", text: "Aim for a colorful plate: half vegetables and fruits, a quarter protein (eggs, beans, chicken, tofu), and a quarter whole grains. Don't fear carbohydrates \u2014 your brain runs on glucose." },
      { type: "h", text: "Hydration matters" },
      { type: "p", text: "Most teens are chronically dehydrated, which leads to fatigue and poor concentration. Aim for about 8 glasses of water daily, more if you're active." },
      { type: "h", text: "Smart snacking" },
      { type: "p", text: "Choose snacks that combine protein and carbs \u2014 apple with peanut butter, hummus with crackers, or yogurt with berries. These combinations keep blood sugar stable and energy consistent." },
      { type: "h", text: "A note on diet culture" },
      { type: "p", text: "Your body is not a problem to be solved. Focus on nourishment, not restriction. If you're concerned about your relationship with food, talk to a trusted adult or healthcare provider." },
    ],
  },
  {
    id: "sleep-science",
    title: "Sleep Science: Why Teens Need More Than They Think",
    dek: "Teenagers need 8\u201310 hours of sleep per night, but most get far less. Here's what sleep deprivation actually does to your body.",
    category: "Sleep & Rest",
    author: "Ayla T.",
    researcher: "Ayla T.",
    readTime: "6 min read",
    body: [
      { type: "p", text: "Teenagers need 8\u201310 hours of sleep per night, but national surveys show the average teen gets only 6\u20137. This isn't just about being tired \u2014 chronic sleep deprivation has serious consequences." },
      { type: "h", text: "What sleep loss affects" },
      { type: "p", text: "Sleep deprivation affects memory consolidation, mood regulation, immune function, metabolism, and athletic performance. Every system in your body suffers." },
      { type: "h", text: "Why teens stay up late" },
      { type: "p", text: "Biology actually shifts the circadian rhythm during puberty, making it harder to fall asleep before 11pm. Early school start times work against this biology, which is why sleep advocacy organizations push for later school starts." },
      { type: "h", text: "Better sleep habits" },
      { type: "p", text: "A consistent wake time (even on weekends), no screens 30 minutes before bed, a cool and dark room, avoiding caffeine after 2pm, and a wind-down routine all help. Small changes compound over time into significantly better rest." },
    ],
  },
  {
    id: "sexual-health-stigma",
    title: "Breaking the Stigma: Talking About Sexual Health",
    dek: "Sexual health is health. Here's the honest, judgment-free information every teen deserves to have.",
    category: "Sexual Health",
    author: "Nicola K.",
    researcher: "Nicola K.",
    readTime: "5 min read",
    body: [
      { type: "p", text: "Sexual health is health. Despite this, many teens receive incomplete or shame-based education, leaving them without the knowledge to make informed decisions." },
      { type: "h", text: "Contraception basics" },
      { type: "p", text: "Multiple options exist, from condoms (which also protect against STIs) to hormonal methods. Talking to a healthcare provider helps determine what's right for you." },
      { type: "h", text: "STI prevention" },
      { type: "p", text: "Condoms significantly reduce transmission risk. Regular testing is recommended for sexually active teens \u2014 it's a normal part of healthcare, not something to be ashamed of." },
      { type: "h", text: "Consent" },
      { type: "p", text: "Consent is foundational: enthusiastic, ongoing, and freely given. Consent can be withdrawn at any time. Healthy relationships are built on mutual respect and communication." },
      { type: "p", text: "If you don't feel safe talking to a parent, consider a school counselor or doctor. You deserve accurate information." },
    ],
  },
  {
    id: "movement-as-medicine",
    title: "Movement as Medicine: Exercise for Teen Mental Health",
    dek: "Exercise isn't just about physical fitness \u2014 it's one of the most powerful tools for mental health. And you don't need a gym.",
    category: "Fitness",
    author: "Lee T.",
    researcher: "Lee T.",
    readTime: "4 min read",
    body: [
      { type: "p", text: "Exercise isn't just about physical fitness \u2014 it's one of the most powerful tools for mental health. Research consistently shows that regular movement reduces anxiety and depression symptoms, improves sleep, and boosts self-esteem." },
      { type: "h", text: "How it works" },
      { type: "p", text: "Exercise releases endorphins, reduces cortisol (the stress hormone), increases brain-derived neurotrophic factor (BDNF) which supports brain health, and creates a sense of accomplishment." },
      { type: "h", text: "You don't need a gym" },
      { type: "p", text: "Walking, dancing, yoga, bike riding, swimming, and playing with pets all count. The best exercise is the one you'll actually do consistently. The goal isn't perfection \u2014 it's consistency." },
      { type: "h", text: "Body-neutral fitness" },
      { type: "p", text: "Exercise is not punishment for eating. It's a gift you give your future self. Focus on how movement makes you feel, not how it makes you look." },
    ],
  },
  {
    id: "social-media-self-image",
    title: "Social Media & Self-Image: Setting Healthy Boundaries",
    dek: "Social media can be a powerful community tool or a comparison trap. Here's how to use it in a way that supports rather than harms your self-image.",
    category: "Digital Wellness",
    author: "Brycen W.",
    researcher: "Brycen W.",
    readTime: "5 min read",
    body: [
      { type: "p", text: "Social media can be a powerful community tool or a comparison trap. Research shows a correlation between heavy social media use and lower self-esteem, increased anxiety, and poor body image \u2014 particularly in teenage girls." },
      { type: "h", text: "The comparison trap" },
      { type: "p", text: "You're seeing everyone's highlight reel, not their reality. Filters, editing, and selective posting create an impossible standard. Even the people whose lives look perfect online are struggling in ways you can't see." },
      { type: "h", text: "Audit your feed" },
      { type: "p", text: "Does it make you feel inspired or inadequate? You have the power to unfollow, mute, and curate an environment that builds you up. Fill your feed with accounts that celebrate diversity, education, and real life." },
      { type: "h", text: "Setting limits" },
      { type: "p", text: "Screen time apps can help. Many teens report feeling better within a week of reducing social media use. Try a weekend digital detox and notice how you feel." },
    ],
  },
  {
    id: "brain-freeze",
    title: "The Science of the \u201CBrain Freeze\u201D: Why Ice Cream Sometimes Hurts",
    dek: "It feels like your brain is turning into an ice cube \u2014 but there's a lot of cool science behind the sting.",
    category: "Neuroscience",
    author: "Dhanya Duvvuru",
    researcher: "Dhanya Duvvuru",
    readTime: "5 min read",
    body: [
      { type: "p", text: "It is a hot summer day, and you just bought the world\u2019s best slushie or a giant scoop of chocolate-cherry ice cream. You take a huge, excited bite, and suddenly: BAM! It feels like a lightning bolt just hit your forehead. Your head is stinging, and for a few seconds, you have to stop everything." },
      { type: "p", text: "You\u2019ve just been hit by a Brain Freeze. Scientists have a very long, fancy name for it: sphenopalatine ganglioneuralgia." },
      { type: "h", text: "Why does it happen?" },
      { type: "p", text: "Your brain acts like a thermostat to keep your head at the perfect temperature. When you eat something freezing cold too fast, it touches the roof of your mouth (your palate) and your throat, triggering a survival reflex." },
      { type: "ol", items: [
        "The Squeeze: Your blood vessels shrink down small (vasoconstriction) to keep your core heat inside.",
        "The Rush: Your body realizes the area is too cold and rushes warm blood back. Your blood vessels open up really wide and fast (vasodilation).",
      ]},
      { type: "p", text: "This happens right next to the trigeminal nerve, a telephone wire that carries signals from your face to your brain. The rapid vessel changes send a burst of activity straight to your brain." },
      { type: "h", text: "The brain's big mistake" },
      { type: "p", text: "Even though the cold is in your mouth, your brain gets confused \u2014 this is called referred pain. Because the trigeminal nerve covers your whole face, your brain thinks the pain is coming from your forehead, temples, or behind your eyes." },
      { type: "h", text: "Who gets it?" },
      { type: "ul", items: [
        "Kids: More eager to finish a popsicle fast than adults \u2014 not because their brains are different.",
        "Animals: Cats can get brain freeze too if they eat something cold too quickly.",
        "Migraine sufferers: More likely to have sensitive nerves that react strongly to cold.",
      ]},
      { type: "h", text: "How to stop it" },
      { type: "ul", items: [
        "Press your warm tongue against the roof of your mouth.",
        "Press your thumb against the roof of your mouth to transfer heat.",
        "Sip room-temperature or warm water.",
        "Next time: warm the ice cream briefly at the front of your mouth before swallowing.",
      ]},
      { type: "p", text: "Brain freezes are totally harmless and usually gone in 30 seconds. Aspirin won't help \u2014 it doesn't even reach your stomach before the pain is over." },
    ],
  },
  {
    id: "cbt-vs-medication",
    title: "Is Cognitive Behavioral Therapy Better Than Medication When Treating Mental Disorders?",
    dek: "A close look at how CBT and psychiatric medications work, why each can fail, and how the right choice depends on the person.",
    category: "Mental Health",
    author: "Oyindamola Borisade",
    researcher: "Laylah Wolf",
    readTime: "12 min read",
    body: [
      { type: "h2", text: "Abstract" },
      { type: "p", text: "This paper discusses the pros and cons of Cognitive Behavioral Therapy and different medications when treating mental disorders and illnesses. It asks: which is better, CBT or medications like antidepressants and antipsychotics? The answer depends on the patient and their preferences. Both approaches have strengths and limitations \u2014 broadly, they are equal." },
      { type: "h", text: "What is CBT?" },
      { type: "p", text: "Cognitive Behavioral Therapy is a goal-oriented, structured form of psychotherapy that helps people understand how thoughts influence feelings and actions. CBT is based on the idea that thoughts affect emotions, emotions affect behaviors, and behaviors reinforce thoughts." },
      { type: "p", text: "The four main forms of CBT:" },
      { type: "ul", items: [
        "Mindfulness-Based Cognitive Therapy (MBCT): combines behavioral therapy with mindfulness techniques. Used for anxiety and depression.",
        "Dialectical Behavioral Therapy (DBT): focuses on living in the moment, regulating emotions, and improving relationships. Often used for BPD and PTSD.",
        "Rational Emotive Behavior Therapy (REBT): teaches coping mechanisms for irrational thoughts and promotes self-acceptance. Used for anxiety, depression, and PTSD.",
        "Acceptance and Commitment Therapy (ACT): relies on positive reinforcement and counter-conditioning. Used for anxiety and panic disorder.",
      ]},
      { type: "h", text: "How does CBT work?" },
      { type: "p", text: "Developed by Dr. Aaron Beck in the 1960s, CBT operates on the idea that our thoughts shape our feelings and behaviors. The brain forms shortcuts \u2014 habit loops \u2014 stored in the basal ganglia that run automatically. CBT uses cognitive restructuring to build new, healthier shortcuts using techniques like journaling, exposure therapy, behavioral activation, and art." },
      { type: "h", text: "Why CBT works" },
      { type: "p", text: "CBT works because most emotional and behavioral reactions are learned and can be unlearned. It focuses on present feelings and uses structured techniques like thought diaries \u2014 logs of negative thoughts that help patients recognize patterns, develop coping mechanisms, and build emotional regulation. It is highly evidence-based, allowing therapists to track and adjust what's working." },
      { type: "h", text: "Why CBT doesn't always work" },
      { type: "p", text: "CBT struggles to fully address the root of unresolved trauma, which creates nervous system triggers that thought-pattern changes alone can't settle. It also relies heavily on client self-awareness, which can be difficult for someone deep in a depressive episode. And its foundational model \u2014 that mental illness stems from faulty thinking \u2014 can make it difficult to distinguish between temporary and disordered thinking patterns." },
      { type: "h2", text: "Medical treatments for mental disorders" },
      { type: "h", text: "The four main medication categories" },
      { type: "ul", items: [
        "Antidepressants: primarily for depression, also used for anxiety, PTSD, MDD, and OCD.",
        "Antipsychotics: used to treat psychosis (delusions, paranoia, hallucinations) in schizophrenia, bipolar disorder, and BPD.",
        "Anti-anxiety medications (anxiolytics): includes benzodiazepines, SSRIs, beta-blockers, and azapirones.",
        "Mood stabilizers: balance mood swings in bipolar disorder, schizoaffective disorder, and BPD.",
      ]},
      { type: "h", text: "How antipsychotics work" },
      { type: "p", text: "Antipsychotics alter brain chemistry by affecting neurotransmitters \u2014 chemicals that carry messages between neurons. They primarily regulate dopamine (and sometimes serotonin), reducing symptoms like hallucinations, delusions, paranoia, and incoherent speech. First-generation antipsychotics target dopamine; second-generation target both dopamine and serotonin; next-generation act on acetylcholine receptors and are still under evaluation." },
      { type: "h", text: "How antidepressants work" },
      { type: "p", text: "Antidepressants increase levels of serotonin, norepinephrine, and dopamine, helping reduce sadness, low energy, and loss of interest. Different subtypes target different neurotransmitters: SNRIs block norepinephrine reuptake to enhance cognitive flexibility and mood; SSRIs target serotonin. Their versatility also makes them effective for eating disorders, chronic nerve pain, and menopausal symptoms." },
      { type: "h", text: "Why medications don't always work" },
      { type: "p", text: "The most common reason is adherence \u2014 patients stopping medication due to side effects, underestimating symptoms, or substance use. About one third of schizophrenia patients are treatment-resistant. Studies show roughly 75% of people discontinue medication within 18\u201320 months due to effects like weight gain, sexual dysfunction, and movement disorders. Mixing medications with alcohol or other substances can also distort their effects and increase dependency." },
      { type: "h2", text: "Conclusion" },
      { type: "p", text: "Whether CBT or medication is better depends on condition, preferences, timeline, and mindset. CBT offers long-lasting benefits: thought management, emotional regulation, reduced relapse rates, and resilience. Medication offers faster relief from acute symptoms. Medication may suit conditions like IED, BPD, Panic Disorder, and MDD; CBT may suit depression, anxiety, PTSD, and OCD. Outside those tendencies, they are roughly equal. The right choice depends entirely on the patient." },
      { type: "h2", text: "Sources" },
      { type: "ul", items: [
        "Treatment Options: CBT or Medication \u2014 ABCT",
        "Why CBT Works \u2014 East Side CBT",
        "Cognitive Behavior Therapy \u2014 StatPearls, NCBI Bookshelf",
        "Why CBT Does Not Work: Understanding Its Limitations",
        "Antipsychotic Medications \u2014 Better Health Channel",
        "Understanding the Distinction Between Antipsychotics and Antidepressants \u2014 MedShun",
        "Norepinephrine Reuptake Inhibitors, Selective \u2014 Drug Class, Uses, Side Effects",
        "Understanding the Pros and Cons of Antidepressants",
        "Antidepressants: Not Just for Mood Disorders \u2014 Harvard Health",
      ]},
    ],
  },
];
