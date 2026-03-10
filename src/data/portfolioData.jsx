import avatarImg from "../assets/avatar.png";
import photoImg  from "../assets/photo.jpg";

export const PROFILE = {
  name: "Pintu Karjee",
  title: "Full Stack Java Developer",
  tagline: "Building scalable backends & intuitive frontends",
  avatar: avatarImg,
  photo: photoImg,
};

export const CONTACT = {
  email: "pintukarjee6@gmail.com",
  phone: "8847876574",
  location: "Berhampur (Odisha)",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const EDUCATION = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    university: "Centurion University of Technology and Management",
    location: "Paralakhemundi, Gajapati, Odisha",
    year: "2021",
    icon: "🎓",
    tag: "Graduation",
  },
  {
    degree: "+2 Intermediate (Science)",
    university: "Khallikote (Junior) College",
    location: "Berhampur, Odisha",
    year: "2017",
    icon: "🏫",
    tag: "Intermediate",
  },
  {
    degree: "10th - Higher Secondary Education (HSC)",
    university: "Sri Limeswari Bidya Pitha",
    location: "Tumbagada, Ganjam, Odisha",
    year: "2015",
    icon: "📚",
    tag: "Schooling",
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "☁️",
    badge: "AWS CP",
  },
];

export const SKILLS = {
  backend: [
    "Core Java",
    "Spring Boot",
    "Spring MVC",
    "Spring",
    "Hibernate",
    "JPA",
    "Servlet",
    "JSP",
    "REST API",
    "Microservices",
    "JWT",
    "Multithreading",
    "Auth & Authorization",
    "ORM",
  ],
  cloud: ["AWS CP", "Docker", "Kafka", "Redis"],
  frontend: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "ReactJS"],
  database: ["MySQL", "RDBMS"],
  tools: ["IntelliJ IDEA", "Eclipse", "STS", "VS Code", "Postman", "Git", "GitHub"],
  methodology: ["Agile", "Scrum"],
};

export const SKILL_CATEGORIES = [
  { key: "backend",     icon: "☕", label: "Backend"         },
  { key: "cloud",       icon: "☁️", label: "Cloud & DevOps"  },
  { key: "frontend",    icon: "🎨", label: "Frontend"        },
  { key: "database",    icon: "🗄️", label: "Database"        },
  { key: "tools",       icon: "🔧", label: "Tools & IDEs"    },
  { key: "methodology", icon: "📋", label: "Methodology"     },
];

// Projects will be added later
export const PROJECTS = [];

export const NAV_LINKS = ["About", "Skills", "Education", "Projects", "Contact"];
