// ============================================
// PORTFOLIO CONTENT — edit this file to update
// every section of the site from one place.
// ============================================
import chefXShot from '../assets/Chefxlp.png';
export const profile = {
  name: 'Sushil Kumar',
  roles: ['Frontend Developer', 'UI/UX Designer', 'Web Designer', 'Computer Science Student'],
  objective:
    'Actively looking for Frontend Development, Web Design, and UI/UX Design internship opportunities.',
  location: 'Kurukshetra, Haryana',
  phone: '+91 70151-04227',
  email: 'sushilthakurkkr@gmail.com',
  resumeUrl: '/Resume.pdf',
  socials: {
    linkedin: 'https://www.linkedin.com/in/sushil-thakur-769159363/',
    github: 'https://github.com/sushilthakurkkr-creator',
    instagram: 'https://instagram.com/',
  },
};

export const stats = [
  { label: 'Projects Built', value: 1, },
  { label: 'Certificates', value: 3, suffix: '+' },
  { label: 'Core Skills', value: 7, suffix: '+' },
  { label: 'Technologies Learning', value: 4, suffix: '+' },
];

export const education = [
  {
    degree: 'B.Tech, Computer Science',
    school: 'NIILM University',
    period: '2024 — Present',
    detail: 'Coursework in data structures, web technologies, and human-computer interaction.',
  },
  {
    degree: 'Class 12',
    school: 'CBSE',
    period: 'Completed',
    detail: 'Senior secondary education with a focus on science and computer fundamentals.',
  },
  {
    degree: 'Class 10',
    school: 'CBSE',
    period: 'Completed',
    detail: 'Foundational schooling — first introduction to programming logic.',
  },
];

export const skills = {
  Languages: [
    { name: 'Python', level: 50 },
    { name: 'C++', level: 40 },
    { name: 'HTML', level: 75 },
    { name: 'CSS', level: 65 },
  ],
  Tools: [
    { name: 'Figma', level: 75 },
    { name: 'Canva', level: 90 },
    { name: 'MS Office', level: 85 },
    { name: 'VS Code', level: 75 },
  ]
};

export const softSkills = [
  { name: 'Leadership', icon: '🧭' },
  { name: 'Communication', icon: '💬' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Critical Thinking', icon: '🧠' },
  { name: 'Time Management', icon: '⏱️' },
];

export const projects = [
  {
    id: 'chef-x',
    title: 'Chef-X',
    tagline: 'AI Recipe & Meal Management Application',
    description:
      'A smart cooking companion that suggests recipes from ingredients on hand, plans weekly meals, and keeps the interface clean and distraction-free.',
    tags: ['AI Recipes', 'Meal Planning', 'Beautiful UI', 'Responsive', 'Modern Design'],
    category: 'Web App',
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    image: chefXShot, // was: null
  },
];

export const workshop = {
  title: 'Artificial Intelligence Workshop',
  duration: '5 Days',
  organizer: 'NIILM University',
  description:
    'Hands-on introduction to AI fundamentals — from core concepts and machine learning basics to real-world applications, delivered over an intensive five-day program.',
};

export const testimonials = [
  {
    name: 'Faculty Mentor',
    role: 'NIILM University',
    quote:
      'Sushil consistently brings a designer\u2019s eye to every assignment — his interfaces are clean, considered, and genuinely enjoyable to use.',
  },
  {
    name: 'Workshop Peer',
    role: 'AI Workshop Cohort',
    quote:
      'One of the few students who can explain a design decision as clearly as the code behind it. Great collaborator.',
  },
];


// export const projects = [
//   {
//     id: 'chef-x',
//     title: 'Chef-X',
//     // ...
//     image: chefXShot, // was: null
//     // ...
//   },
// ];