import type {
  Project,
  SkillCategory,
  CodingStat,
  EducationItem,
  CertificationItem,
  AchievementItem,
  NavItem
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Vijay Sharad Khonde',
  shortName: 'Vijay Khonde',
  headline: 'Computer Engineering Student building Full-Stack & AI-powered applications.',
  role: 'Full-Stack & AI Developer',
  location: 'Shirpur, Maharashtra',
  phone: '+91-9130901803',
  email: 'khondeshad987@gmail.com',
  cgpa: '8.37/10',
  academicProfile: 'Computer Engineering Undergraduate',
  college: 'R. C. Patel Institute of Technology (RCPIT), Shirpur',
  socials: {
    github: 'https://github.com/VijayKhondeX18',
    linkedin: 'https://www.linkedin.com/in/vijay-khonde-53a40a331',
    codechef: 'https://www.codechef.com/users/vijay_khonde',
    leetcode: 'https://leetcode.com/u/VijayKhondeX18/',
  }
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Coding', href: '#coding' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'carenet-echorise',
    title: 'CareNet EchoRise',
    subtitle: 'Community Risk Reporting System',
    description: 'A platform for anonymous reporting and geographic visualization of community risks with automated priority calculation and moderation.',
    technologies: ['MERN', 'Cloudinary', 'Maps API', 'Express.js', 'MongoDB', 'React.js'],
    features: [
      'Anonymous reporting mechanism',
      'Geographic visualization with maps API',
      'Dynamic risk-scoring algorithm combining density, recency, & user trust',
      'Report density calculation & recency decay modeling',
      'User trust level weighting system',
      'Interactive risk heatmaps',
      'Administrative dashboard for report review, moderation, & approval'
    ],
    algorithmDetail: 'Risk Score = (Report Density × 0.4) + (Recency Decay × 0.35) + (User Trust Level × 0.25)',
    githubUrl: 'https://github.com/VijayKhondeX18/CareNet_EchoRise-voices-rising-for-change',
    featured: true,
    category: 'Full Stack & Maps'
  },
  {
    id: 'nexchat',
    title: 'NexChat',
    subtitle: 'Real-Time Chat Application',
    description: 'A MERN-based real-time chat application supporting instant messaging, structured message management, and scalable WebSocket connections.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'REST APIs'],
    features: [
      'Bidirectional WebSocket communication',
      'Instant real-time messaging & status updates',
      'Secure user authentication & session handling',
      'REST APIs for user management & message history',
      'Full CRUD operations for messages',
      'Structured MongoDB database schemas for chat storage'
    ],
    githubUrl: 'https://github.com/VijayKhondeX18/NexChat---ChatApplication',
    featured: true,
    category: 'Real-Time & Backend'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code',
    skills: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'Core Computer Science',
    iconName: 'Cpu',
    skills: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering'
    ]
  },
  {
    title: 'Databases',
    iconName: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Web Technologies',
    iconName: 'Globe',
    skills: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSockets',
      'Authentication',
      'HTML5',
      'CSS3',
      'Tailwind CSS'
    ]
  },
  {
    title: 'Tools & Libraries',
    iconName: 'Wrench',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Vercel',
      'Cloudinary',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Scikit-learn'
    ]
  }
];

export const CODING_STATS: CodingStat[] = [
  {
    label: 'LeetCode Problems Solved',
    value: 200,
    suffix: '+',
    platform: 'LeetCode',
    icon: 'SiLeetcode',
    link: 'https://leetcode.com/u/VijayKhondeX18/'
  },
  {
    label: 'GeeksforGeeks Problems Solved',
    value: 100,
    suffix: '+',
    platform: 'GeeksforGeeks',
    icon: 'SiGeeksforgeeks',
    link: 'https://www.geeksforgeeks.org/profile/khondesxwj5'
  },
  {
    label: 'CodeChef Problem Solving Streak',
    value: 230,
    suffix: ' Days',
    platform: 'CodeChef',
    icon: 'SiCodechef',
    link: 'https://www.codechef.com/users/vijay_khonde'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Engineering',
    institution: 'R. C. Patel Institute of Technology (RCPIT)',
    location: 'Shirpur, Maharashtra',
    period: 'Third Year (Current)',
    score: 'CGPA: 8.37/10',
    details: 'Focusing on Core Computer Science, Advanced Data Structures & Algorithms, Full-Stack MERN development, and AI API integrations.'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'R. C. Patel Junior College',
    location: 'Shirpur, Maharashtra',
    period: 'Completed',
    score: '80%',
    details: 'Completed with Science stream specialization in Mathematics and Physics.'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'R. C. Patel Secondary High School',
    location: 'Shirpur, Maharashtra',
    period: 'Completed',
    score: '94.60%',
    details: 'Graduated with high distinction and top academic standing in board examinations.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Data Structures & Algorithms',
    issuer: 'CodeChef',
    icon: 'Award'
  },
  {
    title: 'JavaScript',
    issuer: 'Infosys Springboard',
    icon: 'CheckCircle'
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google / Coursera',
    icon: 'BookOpen'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Finalist — AI Buildathon',
    organization: 'Government College of Engineering, Jalgaon',
    type: 'hackathon',
    description: 'Built an AI-driven system solution and qualified among the top finalist teams.'
  },
  {
    title: 'Secured 23rd Rank in Maharashtra',
    organization: 'PM YASASVI Scholarship',
    type: 'rank',
    description: 'Achieved state rank 23rd out of thousands of candidates statewide in the competitive merit exam.'
  },
  {
    title: 'Adobe Hackathon Participant',
    organization: 'Adobe',
    type: 'hackathon',
    description: 'Participated in competitive hackathon solving real-world digital experience challenges.'
  },
  {
    title: 'ACM Student Chapter Member',
    organization: 'ACM Chapter (2026)',
    type: 'leadership',
    description: 'Active member participating in technical workshops, coding contests, and peer learning.'
  },
];
