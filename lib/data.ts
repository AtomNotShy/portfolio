export const personalInfo = {
  name: "Tong Zhou",
  title: "Full Stack Engineer",
  description:
    "I'm a passionate developer with expertise in modern web technologies. I love building scalable and user-friendly applications.",
  email: "zhoutong7979@gmail.com",
  social: {
    github: "https://github.com/AtomNotShy",
    linkedin: "https://www.linkedin.com/in/sde-zhoutong/",
    twitter: "https://twitter.com/zhoutong7979",
  },
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot","Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "Vercel", "AWS", "DevOps"],
  },
];

export const projects = [
  {
    id: 1,
    title: "EV Charging Management Platform",
    description: "A full-stack EV charging management platform for station operators, supporting real-time monitoring, smart billing, and multi-tenant operations.",
    longDescription: "Laidian is a full-stack EV charging management platform designed for charge-station operators. It provides end-to-end capabilities including device onboarding, remote start/stop control, smart billing, real-time monitoring, and tenant-based operations. Built with a React + Spring Cloud microservices architecture, the system enables scalable deployment and is suitable for both single-station and multi-site commercial scenarios.",
    technologies: ["React", "Ant Design", "Axios", "Spring Boot", "Spring Cloud", "MyBatis", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=500&fit=crop",
    year: "2025",
    link: "http://1.14.106.45/",
    demo: "http://1.14.106.45/",
  },
  {
    id: 2,
    title: "TBBid: Bidding Information Crawler and Analytics System",
    description: "A bidding information crawler and analytics system that automates data collection, cleansing, and aggregation for public tender announcements across China.",
    longDescription: "TBBid is a data crawling and analytics platform focused on public bidding and procurement information. It automatically collects and updates tender announcements from the National Public Resource Trading Center, performs data cleaning, deduplication, and classification, and enriches the dataset by matching each winning company with third-party business information. The system delivers structured bidding insights and daily incremental updates for downstream search, filtering, monitoring, and visualization use cases.",
    technologies: ["Python", "Scrapy", "PostgreSQL", "Redis", "Celery", "Docker", "Pandas", "BeautifulSoup"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    year: "2023",
    link: "https://github.com", 
    demo: "https://example.com",
  }
];

export const experience = [
  {
    id: 1,
    company: "Trace Gaming Hotel Management Group",
    position: "Chief Technology Officer (CTO) / Lead Engineer",
    duration: "Oct 2024 - Present",
    description: [
      "Designed and developed an internal gamified incentive platform, incorporating leaderboard and reward mechanisms inspired by LOL. This initiative boosted overall sales performance by 20% through enhanced staff motivation and engagement.",  
      "Implemented a PMS (Property Management System) to digitize business operations and centralize data management. The system significantly improved operational efficiency and guest experience, reducing manual errors in booking and financial reconciliation through automation and workflow optimization.",
      "Introduced an OA (Office Automation) system, streamlining internal workflows and communication. The integration increased cross-department collaboration, reduced operational costs, and established a scalable digital foundation to support future business expansion.",
      "Developed a comprehensive hotel management system, integrating PMS, OA, and gamified incentive platform to streamline business operations and enhance overall efficiency.",
    ],
  },
  {
    id: 2,
    company: "Huawei Data Storage Department",
    position: "Backend Engineer",
    duration: "May 2023 - Sep 2024",
    description: [
      "Led the development of file-level recovery at any point in time based on CDP technology", 
      "Supported mainstream Linux and Windows file systems", 
      "Designed and independently implemented an optimized recovery workflow", 
      "Improved recovery performance by over 80% in industrial scenarios",
      "Independently implemented the data backup consistency verification feature in a backup management system", 
      "Enhanced disaster recovery integrity and prevented data tampering during backup and restore processes",
    ],
  },
  {
    id: 3,
    company: "LightInTheBox (www.lightinthebox.com)",
    position: "AI Engineer (Image Search & Recommendation System)",
    duration: "Aug 2020 - Dec 2020",
    description: [
      "Developed image search and recommendation systems using deep learning and computer vision techniques",
      "Implemented image feature extraction and similarity matching algorithms",
      "Optimized search results using ranking and filtering techniques",
      "Integrated with e-commerce platforms for real-time product recommendations",
      "Improved user engagement and conversion rates through personalized image search and recommendation",
    ],
  },
];
