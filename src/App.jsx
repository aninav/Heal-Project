import { useState, useEffect } from "react";

/* ============================================================
   THE HEAL PROJECT — Editorial redesign, v2
   Pale teal paper background, hairline rules, serif headlines.
   ============================================================ */

const INK = "#16221D";
const INK_SOFT = "#5C6B64";
const LINE = "#D8E3DD";
const PAPER = "#F3F8F6";       // pale teal tint
const CARD = "#FFFFFF";
const ACCENT = "#0E6B53";
const ACCENT_SOFT = "#E4F1EC";

const SERIF = "'Source Serif 4', Georgia, 'Times New Roman', serif";
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

/* ============================================================
   TEAM — used both for the meet-the-team grid and author bylines
   ============================================================ */

const TEAM = [
  { slug: "laylah-wolf", name: "Laylah Wolf", role: "Founder & CEO", bio: "Laylah founded The HEAL Project to bring free, stigma-free health education to teens everywhere. She leads strategy, partnerships, and the org's research direction." },
  { slug: "lee-t", name: "Lee T.", role: "Vice President", bio: "Lee oversees day-to-day operations and helps coordinate programs across HEAL's chapters and initiatives." },
  { slug: "brycen-w", name: "Brycen W.", role: "Social Media Manager", bio: "Brycen runs HEAL's social presence, helping spread free health resources to a wider teen audience." },
  { slug: "ayla-t", name: "Ayla T.", role: "Leader of Writing & Research", bio: "Ayla co-leads HEAL's writing and research team, helping fact-check and develop original health content." },
  { slug: "nicola-k", name: "Nicola K.", role: "Leader of Writing & Research", bio: "Nicola co-leads HEAL's writing and research team, focusing on nutrition and wellness content." },
  { slug: "angel-g", name: "Angel G.", role: "Leader of Art & Graphic Design", bio: "Angel leads HEAL's visual identity and design work across the site and social channels." },
  { slug: "anirudh-n", name: "Anirudh N.", role: "Chief Technology Officer", bio: "Anirudh manages HEAL's website and technical infrastructure." },
  { slug: "dhanya-duvvuru", name: "Dhanya Duvvuru", role: "Writer & Researcher", bio: "Dhanya writes and researches original science and health explainers for The HEAL Project." },
  { slug: "oyindamola-borisade", name: "Oyindamola Borisade", role: "Writer", bio: "Oyindamola contributes original research-based writing to The HEAL Project, with a focus on mental health topics." },
];

function findTeamMember(slug) {
  return TEAM.find(t => t.slug === slug);
}
function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const TOPICS = [
  "Mental Health", "Nutrition", "Sexual Health", "Sleep & Rest",
  "Fitness", "Digital Wellness", "Substance Awareness", "Body Image",
  "Relationships", "Stress Management", "First Aid", "Chronic Illness",
];

const PROGRAMS = [
  { title: "Peer Education", desc: "Teen educators trained to deliver health workshops in schools and community centers." },
  { title: "Wellness Workshops", desc: "Interactive sessions covering mental health, nutrition, sleep, and more." },
  { title: "Resource Library", desc: "Free downloadable guides, toolkits, and fact sheets on every health topic." },
  { title: "Community Chapters", desc: "Start or join a HEAL chapter at your school and bring health education to your peers." },
  { title: "Speaker Series", desc: "Monthly virtual events with health professionals, advocates, and change-makers." },
  { title: "Challenge Program", desc: "30-day wellness challenges designed to build healthy habits one day at a time." },
];

const PARTNERS = [
  { name: "Food for Good", desc: "Fighting food insecurity in our communities." },
  { name: "M.I.K.D. Youth Empowerment Network", desc: "Empowering youth through mentorship and community." },
  { name: "M.O.R.S.", desc: "Mental health and wellness advocacy." },
];

/* ============================================================
   CHAPTER LEADERS & AMBASSADORS
   ============================================================ */

const CHAPTER_LEADERS = [
  { name: "Maya Chen", location: "Plano, TX, USA", region: "Texas", instagram: "@heal.plano", blurb: "Started a HEAL chapter at my high school to make sure health class actually covers what students need to know." },
  { name: "Jordan Reyes", location: "Sacramento, CA, USA", region: "California", instagram: "@heal.sacramento", blurb: "I want students at my school to feel comfortable asking questions about their health without judgment." },
  { name: "Priya Nair", location: "Edison, NJ, USA", region: "New Jersey", instagram: null, blurb: "Coming soon!" },
  { name: "Caleb Owusu", location: "Atlanta, GA, USA", region: "Georgia", instagram: "@heal.atl", blurb: "Health education shouldn't depend on which school you go to. I'm working to close that gap in my community." },
  { name: "Sofia Marquez", location: "Toronto, ON, Canada", region: "Canada", instagram: "@heal.toronto", blurb: "Bringing HEAL workshops to my school's wellness club, focused on mental health and sleep." },
  { name: "Ezra Klein", location: "Columbus, OH, USA", region: "Ohio", instagram: null, blurb: "Coming soon!" },
];

const REGIONS = ["All", ...Array.from(new Set(CHAPTER_LEADERS.map(c => c.region))).sort()];

/* ============================================================
   FELLOWSHIP DATA
   ============================================================ */

const FELLOWSHIP = {
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
    "Optionally write a full research paper",
  ],
  weeks: [
    { title: "Week 1: Foundations", desc: "Find a research interest, learn to read papers, identify a research gap, form a research question, and get matched with a mentor." },
    { title: "Week 2: Building the project", desc: "Choose a research type (review, computational, or experimental), gather data, and draft a research proposal and abstract." },
    { title: "Week 3: Analysis", desc: "Analyze data, draw conclusions, and begin the poster and paper with peer feedback and writing support." },
    { title: "Week 4: Finalization", desc: "Finish the presentation, paper, and poster. Optional entrepreneurship workshops." },
    { title: "Week 5: Summit", desc: "Networking, peer review, and the final research presentation summit." },
  ],
  deliverables: [
    "Attendance & active participation in sessions and mentor meetings",
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

/* ============================================================
   ARTICLES — 6 original posts + 2 newly embedded research pieces
   ============================================================ */

const ARTICLES = [
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
      { type: "p", text: "You\u2019ve just been hit by a Brain Freeze." },
      { type: "p", text: "Scientists have a very long, fancy name for it: sphenopalatine ganglioneuralgia. Even though it feels like your brain is actually turning into an ice cube, there is a lot of cool science happening behind the scenes to keep you safe." },
      { type: "h", text: "Why does it happen?" },
      { type: "p", text: "Your brain has a very important job: it acts like a thermostat to keep your head at the perfect temperature. When you eat something freezing cold too fast, it touches the roof of your mouth (your palate) and your throat. This sends your body into a \u201Csurvival reflex.\u201D" },
      { type: "ol", items: [
        "The Squeeze: First, your blood vessels shrink down small (vasoconstriction) to try and keep your core heat inside.",
        "The Rush: A second later, your body realizes the area is too cold and tries to fix it by rushing warm blood back to the area. Your blood vessels open up really wide and fast (vasodilation).",
      ]},
      { type: "p", text: "This quick \u201Cshrinking and growing\u201D happens right next to the trigeminal nerve. This nerve is like a telephone wire that carries signals from your face to your brain. Because the blood vessels change size so fast, the nerve sends a \u201CBURST\u201D of activity to your brain." },
      { type: "h", text: "The brain's big mistake" },
      { type: "p", text: "Here is the funny part: even though the cold is in your mouth, your brain gets confused! This is called referred pain. Because the trigeminal nerve covers your whole face, your brain thinks the pain is coming from your forehead, your temples, or even behind your eyes." },
      { type: "p", text: "It\u2019s basically a natural alarm clock telling you to \u201Cslow down\u201D before you get too cold." },
      { type: "h", text: "Who gets it?" },
      { type: "ul", items: [
        "Kids: Children get brain freezes more often than adults. This isn't because their brains are different; it's usually because kids are more eager to finish a delicious popsicle.",
        "Animals: Believe it or not, cats can get brain freeze too if they eat something cold too quickly.",
        "Migraine sufferers: People who get regular bad headaches are more likely to have sensitive nerves that react to the cold.",
      ]},
      { type: "h", text: "How to stop the sting" },
      { type: "p", text: "If you get \u201Cnailed\u201D by a brain freeze, don\u2019t worry \u2014 it\u2019s not dangerous and won\u2019t cause any permanent damage. Most only last about 30 seconds. But if you want it to go away faster, try these tricks:" },
      { type: "ul", items: [
        "The tongue press: push your warm tongue against the roof of your mouth.",
        "The thumb trick: if your tongue isn't working, press your thumb against the roof of your mouth to transfer heat.",
        "Drink water: sip some room-temperature or warm water to melt the \u201Cfreeze.\u201D",
        "The pre-warm: next time, hold the ice cream in the front of your mouth for a few seconds to warm it up before you swallow.",
      ]},
      { type: "h", text: "Is it worth the risk?" },
      { type: "p", text: "Neuroscientists say that even though the pain is sharp, it is totally harmless. Taking medicine like aspirin won\u2019t help because the brain freeze is usually gone before the medicine even reaches your stomach." },
      { type: "p", text: "A summer without ice cream or snow cones would be pretty sad. So, the next time you feel that \u201Ccold burn,\u201D just remember: it\u2019s just your amazing brain doing its job to look out for you. Take a deep breath, warm up your mouth, and then get back to enjoying your treat \u2014 a little bit slower this time." },
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
      { type: "p", text: "This paper discusses the pros and cons of Cognitive Behavioral Therapy and different medications when treating mental disorders and illnesses. It asks the question: which one is better, CBT or medications like antidepressants and antipsychotics? The answer depends on the patient and their preferences. Medications could work well for disorders like BPD, bipolar disorder, and panic disorder. CBT could work well for very common disorders like anxiety, depression, and smaller stages of OCD \u2014 or the reverse could be true depending on the person. Both approaches have their strengths and limitations; broadly, they are equal." },
      { type: "h", text: "What is Cognitive Behavioral Therapy (CBT)?" },
      { type: "p", text: "Cognitive Behavioral Therapy, formally known as CBT, is a goal-oriented, structured form of psychotherapy that helps people understand how their thoughts influence their feelings and actions. CBT is based on the idea that thoughts affect emotions, emotions affect behaviors, and behaviors reinforce thoughts. Common goals of CBT include identifying and changing unhelpful thinking patterns and behaviors, and improving emotional regulation, coping skills, and overall mental well-being." },
      { type: "p", text: "There are four main forms of CBT:" },
      { type: "ul", items: [
        "Mindfulness-Based Cognitive Therapy (MBCT): combines behavioral therapy with mindfulness techniques like yoga, meditation, and cultivating a present mindset. Used for anxiety and depression.",
        "Dialectical Behavioral Therapy (DBT): focuses on living in the moment, regulating emotions, developing healthy coping mechanisms, and improving relationships. Often used for Borderline Personality Disorder (BPD) and PTSD.",
        "Rational Emotive Behavior Therapy (REBT): teaches coping mechanisms for irrational thoughts and beliefs, and promotes self-acceptance. Commonly used for anxiety, depression, and PTSD.",
        "Acceptance and Commitment Therapy (ACT): relies on positive reinforcement and counter-conditioning how a person responds to their inner experiences. Commonly used for anxiety and panic disorder.",
      ]},
      { type: "p", text: "Each type of CBT is tailored to the individual and their specific needs. Though distinct, they all share a common goal: helping individuals change negative thought patterns and improve mental well-being." },
      { type: "h", text: "How does CBT work?" },
      { type: "p", text: "CBT was developed by Dr. Aaron Beck in the 1960s. It operates on the idea that our thoughts shape our feelings and behaviors. The human brain communicates constantly with every part of the body, helping process everything going on around us. Because the brain performs so many tasks, it forms shortcuts \u2014 much like people do with routine activities. Once a shortcut is well established, it can be extremely hard to deviate from, even when the brain has confused a troublesome habit with a helpful one. This is due to the habit loop." },
      { type: "p", text: "The habit loop is a three-part neurological process that automates repeated habits: a trigger, a behavior, and a reward. Once the loop fully forms in the basal ganglia, it runs automatically \u2014 which is part of why the brain doesn\u2019t naturally distinguish between good and bad habits. The basal ganglia are a group of subcortical nuclei located deep within the brain, surrounding the thalamus and positioned beneath the cerebral cortex. Their central location allows them to integrate signals from higher brain regions and coordinate motor and cognitive functions, which is why they play a significant role in a patient\u2019s progress during CBT." },
      { type: "p", text: "This is where CBT comes in: it uses cognitive restructuring to build new shortcuts and encourage healthier habits and mindsets. Cognitive restructuring engages the logical part of the brain, where someone holds pessimistic thoughts about themselves, others, or the world. CBT uses techniques like journaling, exposure therapy, behavioral activation, cognitive restructuring, and art to identify, discuss, and adjust these thoughts." },
      { type: "h", text: "Why does CBT work?" },
      { type: "p", text: "In the 1960s, Dr. Aaron Beck noticed that people he treated for depression showed certain unhelpful thinking patterns. He used a cognitive model to explain emotional conditions, based on the relationships among cognition, emotion, and behavior. Three aspects of cognition are emphasized: automatic thoughts, cognitive distortions, and underlying beliefs or schemas." },
      { type: "p", text: "Automatic thoughts are a person\u2019s instant, spontaneous interpretations of events, and they often impact mood. Cognitive distortions are faulty beliefs and perspectives often seen in people with psychopathology. Underlying beliefs or schemas shape how a person interprets events \u2014 like internal rules for how they process the world." },
      { type: "p", text: "A basic principle underpinning CBT is that most emotional and behavioral reactions are learned, and therefore can be unlearned or changed. CBT mainly works because it focuses on present feelings and events, and because of the techniques therapists use." },
      { type: "p", text: "A common technique is the thought diary, where patients log their negative thoughts. Thought diaries promote emotional regulation, self-awareness, and mental well-being, helping individuals understand maladaptive thought patterns and build healthy coping mechanisms. CBT is also very evidence-based, which helps therapists track what is and isn\u2019t working and adjust accordingly." },
      { type: "h", text: "Why does CBT not work?" },
      { type: "p", text: "As effective as CBT is, it has limitations. One persistent limitation is its inability to fully address the origin of trauma and the complexity of certain mental health issues. While CBT\u2019s main goal is to shift individuals out of a negative mindset, it often fails to address unsettled trauma, which highly impacts the nervous system and creates triggers that can\u2019t be resolved by changing thought patterns alone. Without addressing the root of trauma, emotional symptoms can worsen." },
      { type: "p", text: "CBT also relies heavily on client self-awareness \u2014 essentially, helping yourself. That can be especially difficult for someone deep in a depressive episode, which can set them back rather than forward." },
      { type: "p", text: "Additionally, CBT is based on the idea that many mental illnesses stem from faulty or negative thinking. This can make it harder to distinguish between normal and disordered thinking \u2014 for example, a patient going through a temporary phase might be mistakenly diagnosed with long-term distorted thinking, which raises questions about the validity of the cognitive model in some cases." },
      { type: "h2", text: "Medical treatments for mental disorders" },
      { type: "h", text: "What are common medical treatments?" },
      { type: "p", text: "The four most common categories of mental health medications are:" },
      { type: "ul", items: [
        "Antidepressants: primarily used to treat depression, but also used for anxiety, PTSD, Major Depressive Disorder (MDD), and OCD.",
        "Antipsychotics: used to treat psychosis, including delusions, paranoia, hallucinations, and disordered thinking \u2014 most commonly in schizophrenia, bipolar disorder, and BPD.",
        "Anti-anxiety medications (anxiolytics): an umbrella term covering benzodiazepines, SSRIs, beta-blockers, and azapirones.",
        "Mood stabilizers: balance mood swings in conditions like bipolar disorder, schizoaffective disorder, and BPD, helping manage manic and depressive episodes and prevent relapse.",
      ]},
      { type: "p", text: "Each medication has potential side effects, so it is essential to work with a healthcare provider before, during, and after starting any of them, to make sure treatment is helping rather than harming." },
      { type: "h", text: "How do antipsychotics work?" },
      { type: "p", text: "Antipsychotic medications work by altering brain chemistry through their effect on neurotransmitters \u2014 chemicals that carry messages between neurons. When a signal reaches the end of a neuron, it triggers the release of neurotransmitters, which cross the synapse and bind to receptors on the next neuron, continuing the message. This process, neurotransmission, controls countless functions including mood and emotion." },
      { type: "p", text: "Antipsychotics primarily regulate dopamine, and sometimes serotonin, which reduces psychotic symptoms like hallucinations, delusions, and disordered thinking. They don\u2019t cure psychosis, but they are highly effective at reducing and controlling symptoms such as paranoia, agitation, mania, confusion, and incoherent speech." },
      { type: "p", text: "First-generation (typical) antipsychotics like haloperidol and chlorpromazine specifically target dopamine receptors. Second-generation (atypical) antipsychotics target both dopamine and serotonin receptors. Next-generation antipsychotics act on acetylcholine receptors instead and remain under clinical evaluation. First-generation drugs carry a higher risk of movement disorders; second-generation drugs carry lower movement-disorder risk but higher metabolic side-effect risk; next-generation drugs aim for fewer side effects with a focus on cognition and memory." },
      { type: "h", text: "How do antidepressants work?" },
      { type: "p", text: "Antidepressants alleviate symptoms of mood disorders like depression and anxiety by increasing levels of neurotransmitters such as serotonin, norepinephrine, and dopamine. This helps reduce sadness, low energy, and loss of interest in activities. While antipsychotics primarily target dopamine, antidepressants primarily target serotonin, norepinephrine, and dopamine \u2014 with different subtypes emphasizing different combinations." },
      { type: "p", text: "Selective Norepinephrine Reuptake Inhibitors (SNRIs), for example, increase norepinephrine levels by blocking the presynaptic norepinephrine transporter (NET), which normally reabsorbs norepinephrine after neurotransmission. The resulting increase enhances cognitive flexibility, regulates mood, and helps manage stress and fatigue. Common side effects of antidepressants include nausea, weight gain, insomnia, and sexual dysfunction." },
      { type: "h", text: "Why do antipsychotics and antidepressants not work?" },
      { type: "p", text: "A common reason for treatment failure is medication adherence \u2014 patients stopping medication due to unbearable side effects, underestimating their symptoms, or substance use. About one third of patients with schizophrenia are treatment-resistant, meaning symptoms persist despite consistent medication use. Studies show roughly 75 percent of individuals discontinue medication within 18 to 20 months due to unfavorable effects like weight gain, sexual dysfunction, movement disorders, and metabolic issues \u2014 though fear of withdrawal symptoms keeps some patients on medication even through difficult side effects." },
      { type: "p", text: "Combining antipsychotics or antidepressants with alcohol or other substances can also enhance and distort their effects. Long-term misuse can alter the brain\u2019s natural serotonin and dopamine balance, making it difficult to function without the substance and increasing dependency and withdrawal risk." },
      { type: "h2", text: "Conclusion" },
      { type: "p", text: "Whether CBT is better than medication for treating mental disorders ultimately depends on a person\u2019s condition, preferences, timeline, and mindset. Some people pair medication with therapy like CBT to balance fast symptom relief with long-term skill building. Both are highly effective treatments in their own right." },
      { type: "p", text: "A key difference is how long benefits last: CBT offers long-lasting benefits like thought management, emotional regulation skills, reduced relapse rates, and resilience, while medication offers faster relief from acute symptoms like paranoia, mania, confusion, and insomnia. Medication may be better suited to more acute conditions like Intermittent Explosive Disorder (IED), BPD, Panic Disorder, and MDD, while CBT may be better suited to conditions like depression, anxiety, PTSD, and OCD. Outside of those general tendencies, CBT and medication are roughly equal in value \u2014 the right choice depends entirely on the patient and what works best for them." },
      { type: "h2", text: "Sources" },
      { type: "ul", items: [
        "Treatment Options: CBT or Medication \u2014 ABCT, Association for Behavioral and Cognitive Therapies",
        "Why CBT Works: The Science Behind Cognitive Behavioral Therapy \u2014 East Side CBT",
        "Cognitive Behavior Therapy \u2014 StatPearls, NCBI Bookshelf",
        "Why CBT Does Not Work: Understanding Its Limitations",
        "Antipsychotic Medications \u2014 Better Health Channel",
        "Understanding the Distinction Between Antipsychotics and Antidepressants \u2014 MedShun",
        "Norepinephrine Reuptake Inhibitors, Selective: Drug Class, Uses, Side Effects, Drug Names",
        "Understanding the Pros and Cons of Antidepressants",
        "Antidepressants: Not Just for Mood Disorders \u2014 Harvard Health",
      ]},
    ],
  },
];

/* ============================================================
   PRIMITIVES
   ============================================================ */

function Container({ children, style }) {
  return <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 32px", ...style }}>{children}</div>;
}

function Kicker({ children }) {
  return (
    <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: ACCENT, marginBottom: 14 }}>
      {children}
    </div>
  );
}

function SectionHeading({ kicker, title, sub }) {
  return (
    <div style={{ marginBottom: 56 }}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(28px, 4vw, 38px)", color: INK, margin: 0, letterSpacing: "-0.01em", lineHeight: 1.15 }}>{title}</h2>
      {sub && <p style={{ fontFamily: SANS, fontSize: 16, color: INK_SOFT, marginTop: 14, maxWidth: 560, lineHeight: 1.6 }}>{sub}</p>}
    </div>
  );
}

function Rule() {
  return <div style={{ borderTop: `1px solid ${LINE}` }} />;
}

function Pill({ active, children, onClick }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: SANS, fontSize: 13, padding: "8px 16px", borderRadius: 100,
      border: `1px solid ${active ? INK : LINE}`,
      background: active ? INK : CARD,
      color: active ? "#fff" : INK_SOFT, cursor: "pointer"
    }}>{children}</button>
  );
}

/* ============================================================
   NAVBAR
   ============================================================ */

function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const items = [
    ["Home", "home"], ["Programs", "programs"], ["Journal", "blog"],
    ["Team", "team"], ["Chapters", "chapters"], ["Fellowship", "fellowship"],
    ["Partners", "partners"], ["Get Involved", "involved"],
  ];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(243,248,246,0.92)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${LINE}` }}>
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div onClick={() => { setPage("home"); setOpen(false); }} style={{ cursor: "pointer" }}>
          <span style={{ fontFamily: SERIF, fontSize: 21, fontWeight: 600, color: INK, letterSpacing: "-0.01em" }}>The HEAL Project</span>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="heal-desktop-nav">
          {items.map(([label, id]) => (
            <button key={id} onClick={() => setPage(id)} style={{
              background: "none", border: "none", cursor: "pointer", fontFamily: SANS, fontSize: 13.5, padding: "8px 11px",
              color: page === id ? INK : INK_SOFT, fontWeight: page === id ? 500 : 400,
              borderBottom: page === id ? `1px solid ${ACCENT}` : "1px solid transparent",
            }}>{label}</button>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="heal-mobile-toggle" style={{
          display: "none", background: "none", border: `1px solid ${LINE}`, borderRadius: 6,
          width: 36, height: 36, cursor: "pointer", fontFamily: SANS, fontSize: 18, color: INK
        }}>{open ? "\u2715" : "\u2630"}</button>
      </Container>

      {open && (
        <div style={{ borderTop: `1px solid ${LINE}`, background: PAPER }}>
          <Container style={{ display: "flex", flexDirection: "column", padding: "8px 32px 16px" }}>
            {items.map(([label, id]) => (
              <button key={id} onClick={() => { setPage(id); setOpen(false); }} style={{
                background: "none", border: "none", textAlign: "left", padding: "12px 0",
                fontFamily: SANS, fontSize: 15, color: page === id ? INK : INK_SOFT,
                borderBottom: `1px solid ${LINE}`, fontWeight: page === id ? 500 : 400
              }}>{label}</button>
            ))}
          </Container>
        </div>
      )}

      <style>{`
        @media (max-width: 920px) {
          .heal-desktop-nav { display: none !important; }
          .heal-mobile-toggle { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}

/* ============================================================
   HERO
   ============================================================ */

function Hero({ setPage }) {
  return (
    <section style={{ padding: "96px 0 88px", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <div style={{ maxWidth: 720 }}>
          <Kicker>Student-led nonprofit \u00B7 Est. 2024</Kicker>
          <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(40px, 7vw, 68px)", color: INK, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 28px" }}>
            Health education,<br />by teens, for teens.
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 19, lineHeight: 1.7, color: INK_SOFT, maxWidth: 560, margin: "0 0 40px" }}>
            The HEAL Project is the Health Education Access League \u2014 a free, stigma-free
            resource built by students, for students, covering the topics health class
            leaves out.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => setPage("blog")} style={{ fontFamily: SANS, background: INK, color: "#fff", border: "none", padding: "14px 28px", fontSize: 15, fontWeight: 500, cursor: "pointer", borderRadius: 4 }}>Read the journal</button>
            <button onClick={() => setPage("involved")} style={{ fontFamily: SANS, background: "none", color: INK, border: `1px solid ${LINE}`, padding: "14px 28px", fontSize: 15, fontWeight: 500, cursor: "pointer", borderRadius: 4 }}>Get involved</button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 0, marginTop: 80, borderTop: `1px solid ${LINE}` }}>
          {[["500+", "Students reached"], ["12", "Health topics"], ["9", "Team & writers"], ["3", "Partner orgs"]].map(([n, l], i) => (
            <div key={l} style={{ padding: "28px 0 0", borderLeft: i === 0 ? "none" : `1px solid ${LINE}`, paddingLeft: i === 0 ? 0 : 28 }}>
              <div style={{ fontFamily: SERIF, fontSize: 34, color: INK }}>{n}</div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   PROGRAMS
   ============================================================ */

function Programs() {
  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading kicker="What we do" title="Our programs" sub="Six pillars of health education, designed for and by young people." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {PROGRAMS.map((p, i) => (
            <div key={p.title} style={{ padding: "28px 28px 28px 0", borderTop: `1px solid ${LINE}`, borderLeft: i % 3 !== 0 ? `1px solid ${LINE}` : "none", paddingLeft: i % 3 !== 0 ? 28 : 0 }}>
              <div style={{ fontFamily: SANS, fontSize: 12, color: ACCENT, marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 style={{ fontFamily: SERIF, fontSize: 21, fontWeight: 600, color: INK, margin: "0 0 10px" }}>{p.title}</h3>
              <p style={{ fontFamily: SANS, fontSize: 14.5, color: INK_SOFT, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HealthTopics() {
  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading kicker="Coverage" title="Health topics" sub="Comprehensive, stigma-free coverage of what matters most." />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {TOPICS.map(t => (
            <span key={t} style={{ fontFamily: SANS, fontSize: 14, color: INK, padding: "10px 18px", border: `1px solid ${LINE}`, background: CARD, borderRadius: 100 }}>{t}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   TEAM + AUTHOR PROFILE
   ============================================================ */

function Team({ setPage, setAuthorSlug }) {
  const core = TEAM.filter(t => !["dhanya-duvvuru", "oyindamola-borisade"].includes(t.slug));
  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading kicker="Who we are" title="Meet the team" sub="The students behind The HEAL Project. Click anyone to see their profile and writing." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {core.map((m, i) => (
            <div key={m.slug} onClick={() => { setAuthorSlug(m.slug); setPage("author"); }} style={{
              padding: "24px 24px 24px 0", borderTop: `1px solid ${LINE}`,
              borderLeft: i % 3 !== 0 ? `1px solid ${LINE}` : "none", paddingLeft: i % 3 !== 0 ? 24 : 0, cursor: "pointer"
            }}>
              <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, color: INK, marginBottom: 6 }}>{m.name}</div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: ACCENT }}>{m.role}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AuthorProfile({ slug, onBack, onOpenArticle }) {
  const member = findTeamMember(slug);
  const posts = ARTICLES.filter(a => slugify(a.author) === slug);
  if (!member) return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px" }}>
        <p style={{ fontFamily: SANS, color: INK_SOFT }}>Profile not found.</p>
        <button onClick={onBack} style={{ fontFamily: SANS, color: ACCENT, background: "none", border: "none", cursor: "pointer", marginTop: 12 }}>\u2190 Back</button>
      </Container>
    </div>
  );
  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px 100px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: SANS, fontSize: 14, color: ACCENT, padding: 0, marginBottom: 40 }}>\u2190 Back</button>
        <Kicker>{member.role}</Kicker>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 600, color: INK, margin: "0 0 16px", letterSpacing: "-0.01em" }}>{member.name}</h1>
        <p style={{ fontFamily: SANS, fontSize: 17, color: INK_SOFT, maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>{member.bio}</p>
        <Rule />
        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 600, color: INK, marginBottom: 24 }}>
            {posts.length ? `Writing by ${member.name.split(" ")[0]}` : "No published articles yet"}
          </h2>
          {posts.map((a, i) => <ArticleCard key={a.id} article={a} index={i} onClick={onOpenArticle} />)}
        </div>
      </Container>
    </div>
  );
}

/* ============================================================
   ARTICLE CARD + JOURNAL + READER
   ============================================================ */

function AuthorLink({ name, onOpen }) {
  return (
    <span onClick={(e) => { e.stopPropagation(); onOpen(slugify(name)); }} style={{ color: ACCENT, cursor: "pointer" }}>
      {name}
    </span>
  );
}

function ArticleCard({ article, onClick, index, onOpenAuthor }) {
  return (
    <div style={{ padding: "32px 0", borderTop: `1px solid ${LINE}`, display: "grid", gridTemplateColumns: "auto 1fr", gap: 28 }}>
      <div style={{ fontFamily: SERIF, fontSize: 15, color: INK_SOFT, paddingTop: 4, minWidth: 36 }}>{String(index + 1).padStart(2, "0")}</div>
      <div>
        <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, marginBottom: 10 }}>{article.category}</div>
        <h3 onClick={() => onClick(article)} style={{ fontFamily: SERIF, fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 600, color: INK, margin: "0 0 12px", lineHeight: 1.25, cursor: "pointer" }}>{article.title}</h3>
        <p onClick={() => onClick(article)} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.7, margin: "0 0 16px", maxWidth: 640, cursor: "pointer" }}>{article.dek}</p>
        <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <span>By {onOpenAuthor ? <AuthorLink name={article.author} onOpen={onOpenAuthor} /> : article.author}</span>
          <span>\u00B7</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
  );
}

function ArticleReader({ article, onBack, onOpenAuthor }) {
  useEffect(() => { window.scrollTo({ top: 0 }); }, [article]);
  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ maxWidth: 740, padding: "56px 32px 120px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: SANS, fontSize: 14, color: ACCENT, padding: 0, marginBottom: 40 }}>\u2190 Back to journal</button>

        <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>{article.category}</div>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 5vw, 46px)", fontWeight: 600, color: INK, lineHeight: 1.15, letterSpacing: "-0.01em", margin: "0 0 18px" }}>{article.title}</h1>
        <p style={{ fontFamily: SANS, fontSize: 18, color: INK_SOFT, lineHeight: 1.6, margin: "0 0 32px" }}>{article.dek}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", padding: "20px 0", borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Author</div>
            <div style={{ fontFamily: SANS, fontSize: 14, marginTop: 3 }}><AuthorLink name={article.author} onOpen={onOpenAuthor} /></div>
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Researcher</div>
            <div style={{ fontFamily: SANS, fontSize: 14, marginTop: 3 }}><AuthorLink name={article.researcher} onOpen={onOpenAuthor} /></div>
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Read time</div>
            <div style={{ fontFamily: SANS, fontSize: 14, color: INK, marginTop: 3 }}>{article.readTime}</div>
          </div>
        </div>

        <article>
          {article.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i} style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 600, color: INK, margin: "44px 0 18px" }}>{block.text}</h2>;
            if (block.type === "h") return <h3 key={i} style={{ fontFamily: SERIF, fontSize: 21, fontWeight: 600, color: INK, margin: "38px 0 16px" }}>{block.text}</h3>;
            if (block.type === "p") return <p key={i} style={{ fontFamily: SERIF, fontSize: 18, lineHeight: 1.85, color: "#28332F", margin: "0 0 22px" }}>{block.text}</p>;
            if (block.type === "ul") return (
              <ul key={i} style={{ margin: "0 0 24px", paddingLeft: 24 }}>
                {block.items.map((it, j) => <li key={j} style={{ fontFamily: SERIF, fontSize: 17, lineHeight: 1.8, color: "#28332F", marginBottom: 10 }}>{it}</li>)}
              </ul>
            );
            if (block.type === "ol") return (
              <ol key={i} style={{ margin: "0 0 24px", paddingLeft: 24 }}>
                {block.items.map((it, j) => <li key={j} style={{ fontFamily: SERIF, fontSize: 17, lineHeight: 1.8, color: "#28332F", marginBottom: 10 }}>{it}</li>)}
              </ol>
            );
            return null;
          })}
        </article>

        <div style={{ marginTop: 56, paddingTop: 32, borderTop: `1px solid ${LINE}` }}>
          <button onClick={onBack} style={{ fontFamily: SANS, background: INK, color: "#fff", border: "none", padding: "13px 26px", fontSize: 14, fontWeight: 500, cursor: "pointer", borderRadius: 4 }}>More from the journal</button>
        </div>
      </Container>
    </div>
  );
}

function JournalPage({ onOpenAuthor }) {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(ARTICLES.map(a => a.category)))];
  const filtered = filter === "All" ? ARTICLES : ARTICLES.filter(a => a.category === filter);

  if (selected) return <ArticleReader article={selected} onBack={() => setSelected(null)} onOpenAuthor={onOpenAuthor} />;

  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px 16px" }}>
        <Kicker>The journal</Kicker>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(36px, 6vw, 54px)", fontWeight: 400, color: INK, margin: "0 0 18px", letterSpacing: "-0.01em" }}>Research & writing</h1>
        <p style={{ fontFamily: SANS, fontSize: 17, color: INK_SOFT, maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
          Original, evidence-based articles written and researched by HEAL Project students.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {cats.map(c => <Pill key={c} active={filter === c} onClick={() => setFilter(c)}>{c}</Pill>)}
        </div>
      </Container>
      <Container style={{ padding: "16px 32px 120px" }}>
        {filtered.map((a, i) => (
          <ArticleCard key={a.id} article={a} index={i} onClick={setSelected} onOpenAuthor={onOpenAuthor} />
        ))}
        <Rule />
      </Container>
    </div>
  );
}

/* ============================================================
   CHAPTERS & AMBASSADORS
   ============================================================ */

function ChaptersPage() {
  const [region, setRegion] = useState("All");
  const filtered = region === "All" ? CHAPTER_LEADERS : CHAPTER_LEADERS.filter(c => c.region === region);

  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px 16px" }}>
        <Kicker>Chapters & Ambassadors</Kicker>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(34px, 6vw, 50px)", fontWeight: 400, color: INK, margin: "0 0 18px", letterSpacing: "-0.01em" }}>
          Our chapter leaders
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 16, color: INK_SOFT, maxWidth: 580, lineHeight: 1.7, marginBottom: 32 }}>
          HEAL chapters are student-led clubs that bring free health education to schools and
          communities. Explore current chapter leaders and ambassadors below, or start your
          own chapter if there isn't one near you yet.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
          <a href="mailto:thehealproject48@gmail.com" style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, color: "#fff", background: INK, padding: "12px 24px", borderRadius: 4 }}>Start a chapter</a>
        </div>
        <div style={{ marginBottom: 8, fontFamily: SANS, fontSize: 12, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.08em" }}>Filter by region</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
          {REGIONS.map(r => <Pill key={r} active={region === r} onClick={() => setRegion(r)}>{r}</Pill>)}
        </div>
      </Container>

      <Container style={{ padding: "32px 32px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 0 }}>
          {filtered.map((c, i) => (
            <div key={c.name} style={{
              background: CARD, border: `1px solid ${LINE}`, borderRadius: 8, padding: 24,
              margin: 8
            }}>
              <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, color: INK, marginBottom: 4 }}>{c.name}</div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, marginBottom: 12 }}>{c.location}</div>
              {c.instagram ? (
                <a href={`https://instagram.com/${c.instagram.replace("@", "")}`} style={{ fontFamily: SANS, fontSize: 13, color: ACCENT, fontWeight: 500, display: "inline-block", marginBottom: 14 }}>{c.instagram}</a>
              ) : (
                <div style={{ fontFamily: SANS, fontSize: 13, color: INK_SOFT, fontStyle: "italic", marginBottom: 14 }}>Coming soon</div>
              )}
              <p style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, lineHeight: 1.65, margin: 0 }}>{c.blurb}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

/* ============================================================
   FELLOWSHIP
   ============================================================ */

function FellowshipPage() {
  return (
    <div style={{ paddingTop: 64 }}>
      <Container style={{ padding: "72px 32px 16px" }}>
        <Kicker>{FELLOWSHIP.partner}</Kicker>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(34px, 6vw, 50px)", fontWeight: 400, color: INK, margin: "0 0 14px", letterSpacing: "-0.01em" }}>
          {FELLOWSHIP.name}
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 18, color: INK_SOFT, maxWidth: 600, lineHeight: 1.7, marginBottom: 32 }}>{FELLOWSHIP.tagline}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 32px", padding: "20px 0", borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Dates</div>
            <div style={{ fontFamily: SANS, fontSize: 14, color: INK, marginTop: 3 }}>{FELLOWSHIP.dates}</div>
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Format</div>
            <div style={{ fontFamily: SANS, fontSize: 14, color: INK, marginTop: 3 }}>{FELLOWSHIP.format}</div>
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Contact</div>
            {FELLOWSHIP.contacts.map(c => <div key={c}><a href={`mailto:${c}`} style={{ fontFamily: SANS, fontSize: 14, color: ACCENT, marginTop: 3, display: "block" }}>{c}</a></div>)}
          </div>
        </div>
      </Container>

      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 18 }}>Weekly time commitment</h2>
        <ul style={{ margin: "0 0 8px", paddingLeft: 22 }}>
          {FELLOWSHIP.commitment.map((c, i) => <li key={i} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.8 }}>{c}</li>)}
        </ul>
      </Container>

      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 18 }}>What you'll learn</h2>
        <ul style={{ margin: "0 0 8px", paddingLeft: 22 }}>
          {FELLOWSHIP.goals.map((g, i) => <li key={i} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.8 }}>{g}</li>)}
        </ul>
      </Container>

      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 24 }}>Program structure</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {FELLOWSHIP.weeks.map((w, i) => (
            <div key={w.title} style={{ padding: "20px 20px 20px 0", borderTop: `1px solid ${LINE}`, borderLeft: i % 3 !== 0 ? `1px solid ${LINE}` : "none", paddingLeft: i % 3 !== 0 ? 20 : 0 }}>
              <h3 style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 600, color: INK, margin: "0 0 8px" }}>{w.title}</h3>
              <p style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, lineHeight: 1.65, margin: 0 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container style={{ padding: "0 32px 56px" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 18 }}>Required deliverables</h2>
        <ul style={{ margin: "0 0 32px", paddingLeft: 22 }}>
          {FELLOWSHIP.deliverables.map((d, i) => <li key={i} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.8 }}>{d}</li>)}
        </ul>
        <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: INK, marginBottom: 18 }}>Optional opportunities</h2>
        <ul style={{ margin: 0, paddingLeft: 22 }}>
          {FELLOWSHIP.optional.map((d, i) => <li key={i} style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, lineHeight: 1.8 }}>{d}</li>)}
        </ul>
      </Container>

      <section style={{ background: ACCENT_SOFT, padding: "56px 0" }}>
        <Container style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 600, color: INK, marginBottom: 12 }}>Interested in applying?</h2>
          <p style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, marginBottom: 24, maxWidth: 480, margin: "0 auto 24px" }}>
            Reach out to either contact email above for the current application and mentor matching process.
          </p>
          <a href="mailto:thehealproject48@gmail.com" style={{ fontFamily: SANS, background: INK, color: "#fff", padding: "13px 28px", fontSize: 14, fontWeight: 500, borderRadius: 4 }}>Email us</a>
        </Container>
      </section>
    </div>
  );
}

/* ============================================================
   PARTNERS / GET INVOLVED / NEWSLETTER / FOOTER
   ============================================================ */

function Partners() {
  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading kicker="Collaboration" title="Our partners" sub="Organizations we're proud to work alongside." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {PARTNERS.map((p, i) => (
            <div key={p.name} style={{ padding: "26px 24px 26px 0", borderTop: `1px solid ${LINE}`, borderLeft: i !== 0 ? `1px solid ${LINE}` : "none", paddingLeft: i !== 0 ? 24 : 0 }}>
              <div style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, color: INK, marginBottom: 8 }}>{p.name}</div>
              <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, marginTop: 36 }}>
          Interested in partnering with us? Email <a href="mailto:thehealproject48@gmail.com" style={{ color: ACCENT }}>thehealproject48@gmail.com</a>
        </p>
      </Container>
    </section>
  );
}

function GetInvolved() {
  const cards = [
    ["Volunteer", "Join our team of peer educators and help deliver workshops in your community."],
    ["Start a chapter", "Bring HEAL to your school. We'll give you everything you need to get started."],
    ["Join a challenge", "Take our 30-day wellness challenges and build habits that last."],
  ];
  return (
    <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
      <Container>
        <SectionHeading kicker="Join us" title="Get involved" sub="Whether you want to volunteer, start a chapter, or join a challenge, there's a place for you." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {cards.map(([title, desc], i) => (
            <div key={title} style={{ padding: "28px 24px 28px 0", borderTop: `1px solid ${LINE}`, borderLeft: i !== 0 ? `1px solid ${LINE}` : "none", paddingLeft: i !== 0 ? 24 : 0 }}>
              <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 600, color: INK, margin: "0 0 10px" }}>{title}</h3>
              <p style={{ fontFamily: SANS, fontSize: 14, color: INK_SOFT, lineHeight: 1.7, margin: "0 0 18px" }}>{desc}</p>
              <a href="mailto:thehealproject48@gmail.com" style={{ fontFamily: SANS, fontSize: 14, color: ACCENT, fontWeight: 500 }}>Get started \u2192</a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email address."); return; }
    setError(""); setDone(true);
  };

  return (
    <section style={{ padding: "88px 0", background: ACCENT_SOFT }}>
      <Container style={{ maxWidth: 560, textAlign: "center" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 600, color: INK, margin: "0 0 12px" }}>Stay in the know</h2>
        <p style={{ fontFamily: SANS, fontSize: 15, color: INK_SOFT, marginBottom: 28 }}>Get free health resources and new articles delivered to your inbox.</p>
        {done ? (
          <div style={{ fontFamily: SANS, fontSize: 15, color: ACCENT, fontWeight: 500 }}>You're in \u2014 welcome to the HEAL community.</div>
        ) : (
          <form onSubmit={submit} style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={{ fontFamily: SANS, fontSize: 15, padding: "13px 16px", borderRadius: 4, border: `1px solid ${LINE}`, minWidth: 240, outline: "none", background: CARD }} />
            <button type="submit" style={{ fontFamily: SANS, background: INK, color: "#fff", border: "none", padding: "13px 26px", fontSize: 14, fontWeight: 500, cursor: "pointer", borderRadius: 4 }}>Subscribe</button>
          </form>
        )}
        {error && <p style={{ fontFamily: SANS, fontSize: 13, color: "#A3372F", marginTop: 12 }}>{error}</p>}
      </Container>
    </section>
  );
}

function Footer({ setPage }) {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: `1px solid ${LINE}`, padding: "64px 0 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, paddingBottom: 48 }}>
          <div>
            <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, color: INK, marginBottom: 12 }}>The HEAL Project</div>
            <p style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, lineHeight: 1.8 }}>Health Education Access League.<br />Free health education for teens, by teens.</p>
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: INK_SOFT, marginBottom: 14 }}>Navigate</div>
            {[["Home", "home"], ["Programs", "programs"], ["Journal", "blog"], ["Team", "team"], ["Chapters", "chapters"], ["Fellowship", "fellowship"], ["Partners", "partners"], ["Get involved", "involved"]].map(([label, id]) => (
              <div key={id} style={{ marginBottom: 9 }}>
                <span onClick={() => setPage(id)} style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, cursor: "pointer" }}>{label}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: INK_SOFT, marginBottom: 14 }}>Topics</div>
            {TOPICS.slice(0, 6).map(t => <div key={t} style={{ fontFamily: SANS, fontSize: 13.5, color: INK_SOFT, marginBottom: 9 }}>{t}</div>)}
          </div>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: INK_SOFT, marginBottom: 14 }}>Contact</div>
            <a href="mailto:thehealproject48@gmail.com" style={{ fontFamily: SANS, fontSize: 13.5, color: ACCENT, display: "block", marginBottom: 12 }}>thehealproject48@gmail.com</a>
            <p style={{ fontFamily: SANS, fontSize: 12.5, color: INK_SOFT, lineHeight: 1.8 }}>@thehealproject48 on all platforms</p>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: INK_SOFT, marginBottom: 8 }}>Crisis resources</div>
              <p style={{ fontFamily: SANS, fontSize: 12, color: INK_SOFT, lineHeight: 1.9 }}>
                Crisis Text Line: text HOME to 741741<br />
                988 Suicide & Crisis Lifeline: call 988<br />
                SAMHSA Helpline: 1-800-662-4357
              </p>
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${LINE}`, padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <p style={{ fontFamily: SANS, fontSize: 12.5, color: INK_SOFT, margin: 0 }}>\u00A9 {year} The HEAL Project (Health Education Access League). All rights reserved.</p>
          <p style={{ fontFamily: SANS, fontSize: 12.5, color: INK_SOFT, margin: 0 }}>Student-led nonprofit</p>
        </div>
      </Container>
    </footer>
  );
}

/* ============================================================
   HOME
   ============================================================ */

function HomePage({ setPage, openArticle, openAuthor }) {
  return (
    <>
      <Hero setPage={setPage} />
      <Programs />
      <HealthTopics />
      <Team setPage={setPage} setAuthorSlug={openAuthor} />
      <section style={{ padding: "88px 0", borderBottom: `1px solid ${LINE}` }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 8 }}>
            <SectionHeading kicker="From the journal" title="Latest writing" />
            <button onClick={() => setPage("blog")} style={{ fontFamily: SANS, background: "none", border: `1px solid ${LINE}`, color: INK, padding: "11px 22px", fontSize: 14, fontWeight: 500, cursor: "pointer", borderRadius: 4, marginBottom: 56 }}>View all \u2192</button>
          </div>
          {ARTICLES.slice(0, 4).map((a, i) => (
            <ArticleCard key={a.id} article={a} index={i} onClick={() => setPage("blog")} />
          ))}
          <Rule />
        </Container>
      </section>
      <Partners />
      <GetInvolved />
      <Newsletter />
    </>
  );
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  const [page, setPage] = useState("home");
  const [authorSlug, setAuthorSlug] = useState(null);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  const openAuthor = (slug) => { setAuthorSlug(slug); setPage("author"); };
  const goToBlog = () => setPage("blog");

  const render = () => {
    switch (page) {
      case "home": return <HomePage setPage={setPage} openAuthor={openAuthor} />;
      case "programs": return <div style={{ paddingTop: 64 }}><Programs /><HealthTopics /></div>;
      case "blog": return <JournalPage onOpenAuthor={openAuthor} />;
      case "team": return <div style={{ paddingTop: 64 }}><Team setPage={setPage} setAuthorSlug={openAuthor} /></div>;
      case "author": return <AuthorProfile slug={authorSlug} onBack={() => setPage("team")} onOpenArticle={() => setPage("blog")} />;
      case "chapters": return <ChaptersPage />;
      case "fellowship": return <FellowshipPage />;
      case "partners": return <div style={{ paddingTop: 64 }}><Partners /></div>;
      case "involved": return <div style={{ paddingTop: 64 }}><GetInvolved /><Newsletter /></div>;
      default: return <HomePage setPage={setPage} openAuthor={openAuthor} />;
    }
  };

  return (
    <div style={{ background: PAPER, minHeight: "100vh", fontFamily: SANS, color: INK }}>
      <Navbar page={page} setPage={setPage} />
      <main>{render()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
