import { Icons } from "@/components/icons";
import MyImage from "../../public/landthatjob_screen.png";
import MyImage2 from "../../public/2.png";
import MyImage3 from "../../public/3.png";

export const DATA = {
  name: "Tarun Pahade",
  initials: "TP",
  url: "https://tarunpahade.dev", // Placeholder URL, update if applicable
  location: "India", // Update with specific location if needed
  locationLink: "https://www.google.com/maps/place/India", // Update as needed
  description: "AI and Software Developer",
  summary:
    "Aspiring AI specialist with a keen interest in full-stack and data science projects. I am passionate about leveraging AI to solve impactful real-world problems and enhancing user experiences.",
  // avatarUrl: "/profile-pic.png", // Update with your avatar image path
  skills: [
    "Python",
    "React",
    "Next.js",
    "TypeScript",
    "Docker",
    "Streamlit",
    "LangChain",
    "AWS",
    "MongoDB",
    "Pandas",
    "NumPy",
    "Machine Learning"
  ],
  contact: {
    email: "your_email@example.com", // Replace with your actual email
    tel: "Your Phone Number", // Replace with your actual phone number
    social: {
      GitHub: {
        url: "https://github.com/tarunpahade",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/tarun-pahade-38b350236/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/TarunPahade",
        icon: Icons.x,
      }
    },
  },

  work: [
    {
      company: "Freelance AI and Software Development",
      href: "https://tarunpahade.dev", // Placeholder, update with relevant URL if any
      badges: [],
      location: "Remote",
      title: "Freelance Developer",
      start: "2023", // Adjust as per your timeline
      end: "Present",
      logoUrl: "",
      description:
        "Developing AI-powered applications and providing software solutions focused on enhancing educational experiences, medical diagnostics, and productivity tools.",
    },
    {
      company: "Nath School Developer Club",
      href: "", // Update with relevant link if available
      badges: [],
      location: "College Project",
      title: "Founder",
      start: "2024",
      end: "Present",
      description:
        "Leading the Nath School Developer Club to foster innovation, tech learning, and project development within the college community.",
    },
    {
      company: "IMS Development for College",
      href: "", // Provide a link if available
      badges: [],
      location: "College Project",
      title: "IMS Developer",
      start: "2023",
      end: "2023",
      description:
        "Built a comprehensive Institute Management System with features to help students master DSA and streamline academic processes.",
    },
  ],
  education: [
    {
      school: "Your University Name Here", // Update as necessary
      href: "https://your-university-link.com", // Replace with actual link
      degree: "Your Degree Here",
      logoUrl: "/university_logo.png", // Replace with appropriate logo
      start: "Year",
      end: "Year",
    },
  ],
  projects: [
    {
      title: "AI-Powered Educational Content Recommendation System",
      href: "", // Provide a link if available
      dates: "2024 - Present", // Update as needed
      active: true,
      description:
        "A system designed to analyze students' learning patterns and offer tailored educational content. Leveraging MongoDB Atlas, AWS Gen AI services, and LangChain.",
      technologies: [
        "LangChain",
        "MongoDB",
        "AWS Gen AI",
        "React",
        "Next.js"
      ],
      links: [
        {
          type: "Website",
          href: "", // Add the link if applicable
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: MyImage,
      video: "",
    },
    {
      title: "X-ray Image Classifier for Medical Diagnostics",
      href: "", // Provide a link if available
      dates: "2024",
      active: true,
      description:
        "Building an AI model to classify X-ray images for lung cancer, fractures, and other medical conditions using Python, Streamlit, and a Kaggle dataset.",
      technologies: [
        "Python",
        "Streamlit",
        "Kaggle",
        "AI/ML"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tarunpahade?tab=repositories", // Update with project-specific link if available
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: MyImage2,
      video: "",
    },
    {
      title: "Next.js Health Management System",
      href: "", // Provide a link if available
      dates: "2024",
      active: true,
      description:
        "Developing a health management system in Next.js that integrates with EHR and FHIR APIs to provide seamless user access to medical records.",
      technologies: [
        "Next.js",
        "TypeScript",
        "EHR/FHIR APIs"
      ],
      links: [
        {
          type: "Website",
          href: "", // Add the link if applicable
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: MyImage3,
      video: "",
    },
  ],
} as const;
