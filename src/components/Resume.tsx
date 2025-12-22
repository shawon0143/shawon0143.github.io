import { Badge } from "./ui/badge";
import { Mail, Github, Linkedin } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Developer",
    company: "PHOENIX Pharmahandel",
    period: "Mar 2020 – Present",
    bullets: [
      "Building and maintaining a B2B pharmaceutical portal with responsive UI, design consistency, and secure API integrations.",
      "Collaborate with cross-functional teams to improve UX, accessibility, and performance across large enterprise surfaces.",
    ],
    stack: ["Angular", "TypeScript", "RxJS", "REST APIs", "SCSS"],
  },
  {
    role: "Software Developer",
    company: "ComValue",
    period: "May 2019 – Feb 2020",
    bullets: [
      "Shipped SPAs and Electron desktop apps for pharmacy workflows plus a cross-platform React Native app.",
      "Contributed to backend API design and sync flows between desktop, mobile, and web surfaces.",
    ],
    stack: ["React", "Redux", "Electron", "React Native", "Node.js"],
  },
  {
    role: "Software Developer",
    company: "PTC-Telematik",
    period: "Aug 2017 – Apr 2019",
    bullets: [
      "Delivered NexxDeli: real-time vehicle tracking and order management with integrated POS and inventory APIs.",
      "Built live map updates and telemetry views for delivery operations teams.",
    ],
    stack: ["Angular", "Node.js", "WebSockets", "Maps APIs"],
  },
];

const skills = {
  frontend: [
    "React",
    "Redux",
    "Angular",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SASS",
  ],
  mobile: ["React Native", "Ionic"],
  backend: ["Node.js", "Express", "PHP", "REST"],
  cloudData: ["Firebase", "MongoDB", "AWS S3"],
  devops: ["Docker", "InfluxDB", "Grafana", "Prometheus"],
  tools: ["Git", "Jira", "Azure DevOps"],
};

const education = [
  {
    degree: "MSc in Web Science",
    school: "University of Koblenz-Landau, Germany",
  },
  {
    degree: "BSc in Computing",
    school: "University of Greenwich, UK",
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "German", level: "B1 (conversational)" },
  { name: "Bengali", level: "Native" },
];

export function Resume() {

  return (
    <div className="bg-white text-neutral-900 min-h-screen resume-page">
      <div className="max-w-4xl mx-auto px-6 py-6 space-y-6 resume-container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Mohammad Nizam Uddin</h1>
            <p className="text-neutral-600">
              Software Developer · Frontend Specialist · React, TypeScript,
              Node.js, Firebase
            </p>
            <div className="flex flex-wrap gap-3 mt-3 text-sm text-neutral-600">
              <a
                className="inline-flex items-center gap-1 hover:text-neutral-900"
                href="mailto:sha0143@hotmail.com"
              >
                <Mail className="h-4 w-4" />
                sha0143@hotmail.com
              </a>
              <a
                className="inline-flex items-center gap-1 hover:text-neutral-900"
                href="https://github.com/shawon0143"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                github.com/shawon0143
              </a>
              <a
                className="inline-flex items-center gap-1 hover:text-neutral-900"
                href="https://www.linkedin.com/in/mohammad-nizam-uddin/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/mohammad-nizam-uddin
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4 resume-section">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="text-neutral-700 leading-relaxed">
            5+ years delivering enterprise B2B portals, pharmacy operations
            tools, and real-time delivery systems across web and mobile.
            Frontend-first, with hands-on experience in design systems,
            performance tuning, and API integration.
          </p>
        </div>

        <div className="space-y-4 resume-section">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="space-y-3">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="border border-neutral-200 rounded-lg p-3 resume-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium">{exp.role}</p>
                    <p className="text-neutral-900">{exp.company}</p>
                  </div>
                  <p className="text-sm text-neutral-600 mt-1 sm:mt-0">
                    {exp.period}
                  </p>
                </div>
                <ul className="list-disc list-inside text-neutral-700 mt-3 space-y-1">
                  {exp.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-neutral-100 text-neutral-800 border-neutral-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 resume-section">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="grid md:grid-cols-2 gap-3 resume-skills-grid">
            {Object.entries(skills).map(([label, values]) => (
              <div
                key={label}
                className="border border-neutral-200 rounded-lg p-3 resume-card"
              >
                <p className="font-medium mb-2 capitalize">
                  {label.replace(/([A-Z])/g, " $1").trim()}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {values.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-neutral-100 text-neutral-800 border-neutral-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 resume-section">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="border border-neutral-200 rounded-lg p-3 resume-card"
              >
                <p className="font-medium">{edu.degree}</p>
                <p className="text-neutral-800">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 resume-section">
          <h2 className="text-xl font-semibold">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Badge
                key={lang.name}
                variant="outline"
                className="bg-neutral-100 text-neutral-800 border-neutral-200"
              >
                {lang.name} — {lang.level}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
