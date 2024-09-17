import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, Redis,";

export const PROJECTS = [
  {
    id: 1,
    title: "Google Gemini Clone",
    description:
      "A full-featured Google Gemini built with React and Generative Gemini Api",
    imgSrc: project1,
    link: "https://gemini-clone-olive-chi.vercel.app/",
  },
  {
    id: 2,
    title: "Space Website",
    description:
      "Created a space-themed website with interactive elements and visuals to engage users in exploring celestial content.",
    imgSrc: project8,
    link: "https://react-space-three.vercel.app/",
  },
  {
    id: 3,
    title: "Youtube Clone",
    description:
      "A Youtube Clone application with real-time Video Access.",
    imgSrc: project2,
    link: "https://react-youtube-clone-ecru.vercel.app/",
  },
  {
    id: 4,
    title: "E-Commerce",
    description:
      "Built a React.js e-commerce website with dynamic product displays and a shopping cart.",
    imgSrc: project4,
    link: "https://react-e-commerce-pink.vercel.app/",
  },
  {
    id: 5,
    title: "Virtual VR Website",
    description: "Built an immersive virtual reality (VR) website using React JS, offering interactive 3D experiences directly in the browser",
    imgSrc: project5,
    link: "https://react-virtualr.vercel.app/",
  },
  {
    id: 6,
    title: "Clothing Application",
    description:
      "An online Clothing platform offering various trends.",
    imgSrc: project6,
    link: "https://bane-studio-xg55.vercel.app/",
  },
 
];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "Luminar Technolab",
    role: "Software Intern",
    year: "7/2024 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  {
    company: "Skillvertex",
    role: "Frontend Developer",
    year: "5/2024 - 6/2024",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://discord.com/channels/@me",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/ba_n_ish/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/BENNY9016",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/baanishh",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/banish3737/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "banishonedirection@gmail.com",
  phone: "+91 8137053223",
};
