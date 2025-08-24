import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css"; // Tailwind styles
import ProfileImage from "./assets/me.png"; // Your profile image

// ======== Import Project Screenshots ========
import Project1 from "./assets/me.png";
import Project2 from "./assets/codefest.jpg";
import Project3 from "./assets/interact.png";
import Project4 from "./assets/health.png";
import Project5 from "./assets/payroll.png";

// ========= Profile Data =========
const PROFILE = {
  name: "ROBERT JOHNN C. LLEMIT",
  title: "UI Designer & Frontend Developer",
  location: "Tagum City, Davao del Norte, Philippines",
  email: "robert.llemit@gmail.com",
  phone: "+63 963 509 5073",
  links: {
    linkedin: "#",
    github: "#",
    resume: "#",
  },
  summary:
    "Creative UI Designer and Frontend Developer with hands-on experience in React.js, modern JavaScript, and responsive design. Skilled in crafting intuitive, user-friendly interfaces that balance aesthetics with functionality.",
  skills: {
    "Frontend / UI": ["React.js", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Figma"],
    "Backend / Integration": ["Node.js", "REST APIs", "Database Connectivity"],
    "Design Tools": ["Photoshop", "Canva"],
    Other: ["Git / GitHub", "Project management"],
  },
  projects: [
    {
      title: "Personal Portfolio Website",
      period: "2024–2025",
      description: "A responsive portfolio built with React and TailwindCSS.",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      image: Project1,
    },
    {
      title: "UI/UX Practice – Codefest Entries",
      period: "2020, 2023",
      description: "Competition prototypes showcasing UI patterns and accessibility, A mobile platform integration",
      tags: ["UI/UX", "Prototyping", "Performance"],
      image: Project2,
    },
    {
      title: "Interactive Learning",
      period: "2023",
      description: "A web-based interactive learning game for teachers towards the vision of students' activities.",
      tags: ["React", "Redux", "TailwindCSS"],
      image: Project3,
    },
    {
      title: "Barangay Health Center Record Management System",
      period: "2025",
      description: "A full website development project for the Barangay Health Center, featuring a Geospatial Map and Record Management System that interacts with every citizen.",
      tags: ["React", "Firebase", "Material UI"],
      image: Project4,
    },
    {
      title: "Glow Learning Payroll System",
      period: "2025",
      description: "A fully integrated payroll system for Glow Learning English teachers that automatically generates payroll for their class sessions.",
      tags: ["React", "Node.js", "MongoDB"],
      image: Project5,
    },
  ],
  experience: [
    {
      company: "GC-TECH",
      role: "Frontend / Backend Web Developer",
      period: "2018–2019",
      bullets: [
        "Developed responsive websites with HTML, CSS, and JavaScript.",
        "Integrated backend services with optimized database queries.",
        "Improved UI/UX performance, reducing load time and enhancing experience.",
      ],
    },
    {
      company: "City Government of Tagum",
      role: "Administrative Assistant",
      period: "2024–2025",
      bullets: [
        "Ensured accuracy of data elements.",
        "Optimized data workflows.",
        "Collaborated with teams to streamline processes.",
      ],
    },
  ],
  education: [
    {
      school: "STI Tagum College",
      degree: "Bachelor of Science in Information Systems",
      period: "2019–2024",
    },
  ],
  achievements: ["Codefest Runner-up (2020, 2023)", "Official Tabulator, STI College Tagum (since 2018)"],
};

// ========= Reusable Components =========
const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">{title}</h2>
      {children}
    </div>
  </section>
);

const Tag = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full border border-blue-300 bg-blue-50 text-blue-700">{children}</span>
);

const Card = ({ children, className }) => (
  <div className={`rounded-2xl p-5 shadow-md bg-white ${className}`}>{children}</div>
);

// ========= Modal Component =========
const Modal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 p-6 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>

          {/* Project Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />

          {/* Project Info */}
          <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
          <p className="text-gray-600 mt-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ========= Main Page =========
export default function App() {
  const roles = ["UI Designer", "Frontend Developer", "React Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen transition-colors duration-500">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gray-100 border-b border-gray-300 shadow-sm">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-blue-600 text-xl">Robert.dev</a>
          <div className="hidden md:flex gap-6 text-sm">
            {["About", "Skills", "Projects", "Experience", "Education", "Achievements", "Contact"].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition">{label}</a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-16 pb-12 flex flex-col md:flex-row items-center gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-sm text-gray-500 font-semibold">{PROFILE.location}</p>
          <h1 className="text-5xl md:text-6xl font-extrabold">{PROFILE.name}</h1>
          <p className="text-xl text-blue-600 mt-2">{roles[currentRole]}</p>
          <p className="text-gray-700 max-w-2xl mt-4">{PROFILE.summary}</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a href={`mailto:${PROFILE.email}`} className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">Contact</a>
            <a href={`tel:${PROFILE.phone.replace(/\s|\+/g, "")}`} className="px-6 py-3 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-50 transition">Call Me</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Card className="p-0 overflow-hidden">
            <img src={ProfileImage} alt="Profile portrait of Robert" className="rounded-full border-4 border-blue-200 shadow-xl w-64 h-64 mx-auto object-cover" />
          </Card>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <p className="text-gray-700 leading-relaxed">{PROFILE.summary}</p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(PROFILE.skills).map(([category, skills]) => (
            <Card key={category}>
              <h3 className="font-semibold text-blue-600 mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects with Modal */}
      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE.projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedProject(p)}
            >
              <img src={p.image} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-80 transition-opacity rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white font-bold">{p.title}</h3>
                <p className="text-white text-sm mt-1">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          {PROFILE.experience.map((exp) => (
            <Card key={exp.company}>
              <h3 className="text-lg font-semibold text-blue-600">{exp.role}</h3>
              <p className="text-gray-500 text-sm">{exp.company} — {exp.period}</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        {PROFILE.education.map((edu) => (
          <Card key={edu.school} className="mb-4">
            <h3 className="font-semibold text-blue-600">{edu.degree}</h3>
            <p className="text-gray-500">{edu.school} — {edu.period}</p>
          </Card>
        ))}
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements">
        <ul className="list-disc list-inside text-gray-700">
          {PROFILE.achievements.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="text-gray-700">Feel free to reach out to me through the following channels:</p>
        <ul className="mt-3 space-y-2 text-blue-600">
          <li>Email: <a href={`mailto:${PROFILE.email}`} className="underline">{PROFILE.email}</a></li>
          <li>Phone: <a href={`tel:${PROFILE.phone}`} className="underline">{PROFILE.phone}</a></li>
          <li>LinkedIn: <a href={PROFILE.links.linkedin} className="underline">LinkedIn</a></li>
          <li>GitHub: <a href={PROFILE.links.github} className="underline">GitHub</a></li>
        </ul>
      </Section>

      {/* Modal */}
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}