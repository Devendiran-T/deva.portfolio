export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "AI & ML Engineer" },
  { title: "Python Developer" },
  { title: "React.js Developer" },
];

export const technologies = [
  { name: "Python" },
  { name: "React.js" },
  { name: "Machine Learning" },
  { name: "Deep Learning" },
  { name: "TensorFlow" },
  { name: "AWS" },
  { name: "Microsoft Azure" },
  { name: "Git & GitHub" },
  { name: "Prompt Engineering" },
  { name: "HTML" },
  { name: "CSS" },
];

export const technicalSkills = [
  {
    category: "Programming & Query Languages",
    icon: "💻",
    items: ["Python", "SQL"],
  },
  {
    category: "Big Data & Data Engineering",
    icon: "⚙️",
    items: ["PySpark", "ETL Pipelines", "Data Integration", "Data Transformation"],
  },
  {
    category: "Data Analysis & Visualization",
    icon: "📊",
    items: ["Microsoft Excel (Pivot Tables, VLOOKUP)", "Power BI"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MySQL"],
  },
  {
    category: "AI & Automation Tools",
    icon: "🤖",
    items: ["LangChain", "API Integration"],
  },
];

export const experiences = [
  {
    title: "Cloud Computing Intern (AWS & Azure)",
    company_name: "Gateway Software Solutions, Coimbatore",
    date: "December 2025 – January 2026",
    points: [
      "Worked with AWS services: EC2, S3, IAM, Lambda.",
      "Deployed ML model endpoints on AWS cloud.",
      "Worked with Microsoft Azure VMs and Blob Storage.",
    ],
  },
  {
    title: "Frontend Web Development Intern",
    company_name: "Emglitz Technologies, Coimbatore",
    date: "June 2025 – July 2025",
    points: [
      "Built responsive pages using HTML5, CSS3, JavaScript.",
      "Improved UI/UX and reduced layout bugs by 30%.",
      "Delivered Car Showcase as main project deliverable.",
    ],
  },
];

export const projects = [
  {
    name: "AI Human Tracking System",
    description:
      "Real-time human detection system using YOLO algorithm for security monitoring. Processes live camera feeds with object detection and bounding box visualization.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "YOLO", color: "pink-text-gradient" },
      { name: "Computer Vision", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/Devendiran-T",
  },
  {
    name: "Online Bus Booking",
    description:
      "Full-stack bus ticket reservation platform with dynamic seat selection, route search, and booking confirmation. RESTful backend with Python.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "Full Stack", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/Devendiran-T",
  },
  {
    name: "Car Showcase Website",
    description:
      "Modern responsive React.js single-page application showcasing car models with dynamic filtering, reusable UI components, and React Hooks state management.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "Responsive UI", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/Devendiran-T",
  },
];

export const personalInfo = {
  name: "Devendiran T",
  role: "AI & ML Engineer | B.Tech AI & Data Science",
  tagline: "Building intelligent systems with Python & ML",
  college: "RVS College of Engineering and Technology, Coimbatore",
  duration: "2023 – 2027",
  cgpa: "8.2 / 10.0",
  email: "tdevendirandevdevidtamil@gmail.com",
  github: "https://github.com/Devendiran-T",
  linkedin: "https://www.linkedin.com/in/devendiran-t-5250892a5",
  phone: "9025965405",
  location: "Coimbatore, Tamil Nadu",
  // Resume PDF — served from /public/resume.pdf
  resumeUrl: "/resume.pdf",
};
