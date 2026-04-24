export const COLORS = {
  teal: '#2DB8A0',
  tealDark: '#1A8F7A',
  tealLight: '#E8F9F6',
  tealMid: '#5ECDB8',
  navy: '#0D2B3E',
  navyLight: '#163D56',
  mint: '#A8EDE2',
  white: '#FFFFFF',
  offWhite: '#F5FFFE',
  gray: '#7A9090',
  grayLight: '#EEF5F4',
  accent: '#FF6B6B',
  accentYellow: '#FFD166',
  text: '#1A2E2B',
};

export const NAV_ITEMS = [
  { label: 'Home',         id: 'home' },
  { label: 'About',        id: 'about' },
  { label: 'Programs',     id: 'programs' },
  { label: 'Learn',        id: 'learn' },
  { label: 'Get Involved', id: 'involved' },
];

export const SOCIAL_LINKS = [
  {
    href: 'https://www.instagram.com/thehealproject48/',
    label: 'Instagram',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  },
  {
    href: 'https://www.tiktok.com/@thehealproject48',
    label: 'TikTok',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>`,
  },
  {
    href: 'https://www.youtube.com/@thehealproject48/videos',
    label: 'YouTube',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`,
  },
  {
    href: 'https://www.pinterest.com/thehealproject48/',
    label: 'Pinterest',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>`,
  },
];

export const HERO_STATS = [
  { num: '20%',  label: 'Teens with unmet\nmental health needs' },
  { num: '50%',  label: 'U.S. high schools teaching\nall health topics' },
  { num: 'Free', label: 'All HEAL resources,\nalways' },
  { num: '2025', label: 'Year we were\nfounded' },
];

export const PROGRAMS = [
  { icon: '🧠', color: '#EEF4FF', title: 'Mental Health Education',   badge: 'Most Popular', desc: 'Learn to recognize signs, reduce stigma, and access mental health resources with confidence.' },
  { icon: '🥗', color: '#F0FEF4', title: 'Nutrition & Wellness',       desc: 'Practical guides on balanced eating, understanding labels, and building healthy relationships with food.' },
  { icon: '🔬', color: '#FFF8EE', title: 'STEM Health Careers',        desc: 'Explore pathways into medicine, nursing, public health, and research through our career exploration content.' },
  { icon: '❤️', color: '#FFF0F0', title: 'Sexual Health & Safety',     desc: 'Inclusive, science-based education on reproductive health, consent, and relationships.' },
  { icon: '💊', color: '#F5F0FF', title: 'Healthcare Navigation',      desc: 'Learn how to access healthcare, understand your rights, and advocate for yourself in medical settings.' },
  { icon: '🌍', color: '#E8FFF8', title: 'Global Health Equity',       desc: 'Understand health disparities, social determinants of health, and how to get involved in advocacy.' },
];

export const TOPICS = [
  { emoji: '🧠', name: 'Mental Health',  color: '#EEF4FF', desc: 'Learn to identify stress, anxiety, depression, and other mental health challenges. Find coping strategies, understand when to seek help, and reduce stigma.', facts: ['1 in 5 teens experiences a mental health disorder', 'Only 20% of those receive proper care', 'Early intervention greatly improves outcomes'], resources: ['Stress & Anxiety Guide', 'Mindfulness 101', 'When to Talk to a Counselor'] },
  { emoji: '🍎', name: 'Nutrition',       color: '#F0FEF4', desc: 'Understand macros, micronutrients, how to read food labels, and build a balanced diet that actually works for your lifestyle.', facts: ['Only 1 in 10 teens eat enough fruits & vegetables', 'Diet directly impacts mood and brain function', 'Skipping breakfast affects focus and memory'], resources: ['Balanced Plate Guide', 'Reading Food Labels', 'Healthy Eating on a Budget'] },
  { emoji: '💤', name: 'Sleep',           color: '#F5F0FF', desc: 'Discover why sleep is non-negotiable for teen brain development, mood regulation, and physical health — and how to get more of it.', facts: ['Teens need 8–10 hours of sleep per night', 'Most teens get fewer than 7 hours', 'Sleep deprivation affects memory and mood significantly'], resources: ['Sleep Hygiene Checklist', 'Screen Time & Sleep', 'Understanding Your Sleep Cycle'] },
  { emoji: '🏃', name: 'Exercise',        color: '#FFF8EE', desc: 'From beginner workouts to understanding sports injuries, learn how movement benefits your mental and physical health.', facts: ['Only 24% of teens get recommended daily activity', 'Exercise reduces anxiety as effectively as medication in some cases', '30 minutes/day improves focus and mood'], resources: ['Beginner Workout Guide', 'Exercise & Mental Health', 'Sports Safety Tips'] },
  { emoji: '❤️', name: 'Sexual Health',  color: '#FFF0F0', desc: 'Inclusive, science-based information on reproductive health, consent, relationships, contraception, and STI prevention.', facts: ['50% of STIs occur in people aged 15–24', 'Only 4 in 10 high schools teach consent education', 'Access to sex ed reduces teen pregnancy rates'], resources: ['Consent & Boundaries', 'Contraception 101', 'STI Prevention Guide'] },
  { emoji: '💊', name: 'Medications',     color: '#F0FFF8', desc: 'Learn how common medications work, safe usage, drug interactions, and how to talk to your doctor about prescriptions.', facts: ['Over 25% of teens misuse prescription medications', 'Drug interactions can be life-threatening', 'Always read medication labels carefully'], resources: ['OTC Medication Guide', 'Talking to Your Doctor', 'Medication Safety Tips'] },
  { emoji: '🦷', name: 'Oral Health',     color: '#FFFBEE', desc: 'Oral health is a window to your overall health. Learn about hygiene habits, nutrition\'s role, and dental care access.', facts: ['Tooth decay is the #1 chronic disease in teens', 'Poor oral health is linked to heart disease', 'Brushing twice daily prevents 80% of cavities'], resources: ['Daily Oral Care Routine', 'Diet & Dental Health', 'Finding Affordable Dental Care'] },
  { emoji: '👁️', name: 'Eye Health',     color: '#EEF8FF', desc: 'Understand how screen time, nutrition, and lifestyle affect your vision, and what symptoms should prompt a check-up.', facts: ['Myopia (nearsightedness) has doubled in teens since 1970', '2+ hours outdoors per day reduces myopia risk', 'Screen breaks help more than blue light glasses'], resources: ['Screen Time & Eyes', 'Eye Nutrition Guide', 'When to See an Eye Doctor'] },
  { emoji: '🫁', name: 'Respiratory',     color: '#F0FEFF', desc: 'From asthma management to understanding air quality and the effects of vaping, keep your lungs healthy.', facts: ['Asthma affects 1 in 12 teens', 'Vaping causes irreversible lung damage in young people', 'Air quality directly impacts asthma and allergy symptoms'], resources: ['Asthma Management 101', 'Vaping: The Real Risks', 'Air Quality & Your Health'] },
  { emoji: '🧬', name: 'Genetics',        color: '#FFF0FB', desc: 'Explore how your genes influence health risks, what genetic testing means, and how family history guides prevention.', facts: ['Family history is one of the strongest health risk factors', 'Many genetic conditions are manageable with early knowledge', 'Epigenetics shows lifestyle can change how genes express'], resources: ['Family Health History Guide', 'Genetics & Chronic Disease', 'Understanding Genetic Testing'] },
  { emoji: '💉', name: 'Vaccines',         color: '#F5FFF0', desc: 'Get the facts on how vaccines work, which ones teens need, and how immunization protects communities.', facts: ['Vaccines prevent 2–3 million deaths globally each year', 'HPV vaccine prevents 90% of HPV-related cancers', 'Vaccine ingredients are rigorously safety-tested'], resources: ['Teen Vaccine Schedule', 'How Vaccines Work', 'Addressing Common Vaccine Myths'] },
  { emoji: '🩺', name: 'Doctor Visits',   color: '#FFF5F0', desc: 'Know your rights, how to prepare for appointments, what questions to ask, and how to access care even without insurance.', facts: ['60% of teens skip annual checkups', 'Most states allow teens to consent to some care independently', 'Preventive care reduces long-term healthcare costs dramatically'], resources: ['How to Prepare for an Appointment', 'Your Healthcare Rights', 'Finding Free or Low-Cost Care'] },
];

export const ARTICLES = [
  { tag: 'Mental Health', emoji: '🧠', bg: '#EEF4FF', title: '5 Signs You Should Talk to Someone About Your Mental Health', excerpt: 'Persistent mood changes and withdrawal from activities are key indicators.', author: 'AK', name: 'Aisha K.',  date: 'Apr 15' },
  { tag: 'Nutrition',     emoji: '🥦', bg: '#F0FEF4', title: 'What Teens Actually Need to Know About Processed Food',       excerpt: 'Understanding ingredient labels can change how you make food choices forever.', author: 'MJ', name: 'Marcus J.', date: 'Apr 8'  },
  { tag: 'Sleep Science', emoji: '🌙', bg: '#F5F0FF', title: 'Why Your Brain Needs More Sleep Than You Think',               excerpt: 'During adolescence, your brain is literally rewiring — and sleep is when it does most of that work.', author: 'SL', name: 'Sofia L.',  date: 'Mar 28' },
];

export const TOOLKITS = [
  { emoji: '📋', title: 'Mental Health Check-In Kit',    desc: 'Self-assessment tools & resource guide' },
  { emoji: '🥗', title: 'Nutrition 101 Toolkit',          desc: 'Meal planning & label reading guides' },
  { emoji: '🏥', title: 'Healthcare Navigation Guide',    desc: 'Know your rights & how to advocate' },
  { emoji: '📚', title: 'STEM Career Exploration Pack',   desc: 'Career paths, scholarships & mentors' },
  { emoji: '🧬', title: 'Genetics & Heredity Guide',      desc: 'Family health history resources' },
  { emoji: '🤝', title: 'Community Health Toolkit',       desc: 'Start a chapter & health advocacy' },
];

export const HABITS = [
  { emoji: '💧', label: 'Drink 8 glasses of water' },
  { emoji: '🏃', label: '30 minutes of movement' },
  { emoji: '😴', label: '8+ hours of sleep' },
  { emoji: '🧘', label: '5-minute mindfulness' },
  { emoji: '🥦', label: 'Eat a fruit or vegetable' },
  { emoji: '📵', label: '1 hour screen-free time' },
];

export const QUIZ_DATA = [
  { question: 'How many hours of sleep do teens (13–18) generally need per night?',          options: ['6–7 hours', '8–10 hours', '10–12 hours', '5–6 hours'],              correct: 1, explanation: 'Teens need 8–10 hours per night for optimal physical and mental health, per the American Academy of Sleep Medicine.' },
  { question: 'Which vitamin does our skin produce when exposed to sunlight?',                 options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],                  correct: 2, explanation: 'The skin synthesizes Vitamin D when exposed to UVB rays. It\'s crucial for bone health and immune function.' },
  { question: 'What percentage of the human body is made up of water?',                       options: ['About 40%', 'About 50%', 'About 60%', 'About 80%'],                  correct: 2, explanation: 'The adult human body is approximately 60% water. Staying hydrated is essential for all bodily functions.' },
  { question: 'What is the recommended daily step count for general health?',                  options: ['3,000 steps', '5,000 steps', '10,000 steps', '15,000 steps'],        correct: 2, explanation: '10,000 steps per day is a widely recommended target for maintaining good cardiovascular health.' },
  { question: 'Which of these is a sign of a mental health concern worth talking about?',      options: ['Feeling sad once', 'Persistent sadness or withdrawal', 'Being tired after exercise', 'Having a bad day'], correct: 1, explanation: 'Persistent changes in mood or withdrawal from friends are signs worth discussing with a trusted adult or counselor.' },
];

export const INVOLVED_CARDS = [
  { title: 'Volunteer With Us',    desc: 'Join our team as a content creator, event organizer, or outreach volunteer.',             btn: 'Apply Now',       bg: 'linear-gradient(135deg, #0D2B3E 0%, #1A6B5A 100%)' },
  { title: 'Start a Chapter',      desc: 'Bring HEAL to your school or community — we\'ll support you every step of the way.',      btn: 'Learn How',       bg: 'linear-gradient(135deg, #1A8F7A 0%, #2DB8A0 100%)' },
  { title: 'Join a Challenge',     desc: 'Participate in our health education challenges and win recognition for your work.',        btn: 'See Challenges',  bg: 'linear-gradient(135deg, #163D56 0%, #2DB8A0 100%)' },
];

export const PARTNERS = [
  'MIND Global Project', 'Project MARS', 'Foods For Good',
  'Teen Health Alliance', 'Youth STEM Network', 'Community Health Fund',
];
