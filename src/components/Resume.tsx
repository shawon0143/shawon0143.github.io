import { Mail, Github, Linkedin, Globe } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "PHOENIX Pharmahandel GmbH & Co KG",
    location: "Mannheim, DE",
    period: "Mar 2020 – Present",
    bullets: [
      "Modernised a large-scale B2B pharmaceutical portal (100k+ users) by migrating to Angular 15+ with Standalone Components and Signals, reducing bundle complexity and improving maintainability.",
      "Introduced and standardised NgRx state management across the portal, improving predictability and simplifying debugging in a multi-developer codebase.",
      "Led frontend performance optimisation — improved load times through lazy loading, code splitting, and bundle analysis.",
      "Established GitHub Actions CI/CD pipelines, reducing deployment overhead and increasing release cadence.",
      "Mentored 1–2 junior frontend developers through code reviews, pair programming, and architectural guidance.",
    ],
    stack: ["Angular 15+", "Signals", "NgRx", "TypeScript", "RxJS", "GitHub Actions", "CI/CD"],
  },
  {
    role: "Software Developer",
    company: "ComValue GmbH",
    location: "Wiesbaden, DE",
    period: "May 2019 – Feb 2020",
    bullets: [
      "Developed SPAs and Electron desktop client plugins for pharmacy management tools using React and Redux.",
      "Built a cross-platform mobile application with React Native; contributed to Node.js/Express API design.",
    ],
    stack: ["React", "Redux", "Electron", "React Native", "Node.js", "Express"],
  },
  {
    role: "Software Developer",
    company: "PTC-Telematik GmbH",
    location: "Koblenz, DE",
    period: "Aug 2017 – Apr 2019",
    bullets: [
      "Architected and built NexxDeli (nexxdeli.de) — a real-time vehicle tracking, order management and POS platform for food delivery operations.",
      "Integrated GPS tracking, shop management, inventory, and delivery APIs; built mobile companion app with Ionic.",
    ],
    stack: ["Angular", "Ionic", "Node.js", "WebSockets", "Maps API"],
  },
  {
    role: "Student Assistant",
    company: "IWM / University of Koblenz-Landau",
    location: "Koblenz, DE",
    period: "Jan 2017 – Jul 2019",
    bullets: [
      "Built Badgelor — an Angular web application for digital badge management at the university.",
    ],
    stack: ["Angular", "TypeScript"],
  },
];

const projects = [
  {
    role: "Lead Frontend Engineer",
    company: "AjkerMenu",
    location: "ajkermenu.com",
    period: "2023 – Present",
    bullets: [
      "AjkerMenu is a homemade food marketplace connecting customers with verified local home kitchens — supporting daily menus, recurring menus, weekly subscriptions, and special catering orders.",
      "Built the React Native mobile app end-to-end as sole developer — enabling customers to discover kitchens, browse menus, and place orders across iOS and Android.",
      "Designed and developed the marketing website and PWA/ERP admin system in React, giving kitchen owners full control over menus, orders, subscriptions, and kitchen operations.",
      "Owned the full analytics stack: GA4, Meta Pixel, and Google Tag Manager — covering acquisition funnels, user behaviour, and conversion tracking.",
    ],
    stack: ["React Native", "React", "PWA", "GA4", "Meta Pixel", "GTM", "Java Spring Boot"],
  },
];

const skillGroups = [
  { label: "Frontend", values: ["Angular 15+", "Signals", "Standalone Components", "React", "TypeScript", "RxJS", "NgRx", "Redux"] },
  { label: "Mobile", values: ["React Native", "Ionic", "PWA"] },
  { label: "Backend", values: ["Node.js", "Express", "PHP"] },
  { label: "Databases", values: ["MongoDB", "InfluxDB"] },
  { label: "DevOps", values: ["GitHub Actions", "CI/CD", "Docker", "AWS S3"] },
  { label: "Analytics", values: ["GA4", "Google Tag Manager", "Meta Pixel"] },
  { label: "Styling", values: ["HTML5", "CSS3", "SASS", "Bootstrap"] },
  { label: "Tooling", values: ["Git", "Jira", "Grafana", "Prometheus"] },
];

const education = [
  { degree: "MSc in Web Science", school: "University of Koblenz-Landau, Germany" },
  { degree: "BSc in Computing", school: "University of Greenwich, UK" },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "German", level: "B1 (conversational)" },
  { name: "Bengali", level: "Native" },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-1">
        {title}
      </h2>
      <div className="h-px bg-neutral-200" />
    </div>
  );
}

function ExperienceBlock({ entries }: { entries: typeof experiences }) {
  return (
    <div className="space-y-5">
      {entries.map((exp, i) => (
        <div key={i} className="resume-card">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
            <div>
              <span className="font-semibold text-neutral-900 text-sm">{exp.role}</span>
              <span className="text-neutral-500 text-sm"> · {exp.company}</span>
            </div>
            <span className="text-xs text-neutral-400 shrink-0">{exp.period}</span>
          </div>
          <ul className="mt-2 space-y-1">
            {exp.bullets.map((b, j) => (
              <li key={j} className="text-xs text-neutral-600 leading-relaxed pl-3 relative before:content-['–'] before:absolute before:left-0 before:text-neutral-300">
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1 mt-2.5">
            {exp.stack.map((tech) => (
              <span key={tech} className="text-[10px] px-1.5 py-0.5 bg-neutral-100 text-neutral-500 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Resume() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen resume-page">
      <div className="max-w-3xl mx-auto px-8 py-8 space-y-7 resume-container">

        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            Mohammad Nizam Uddin
          </h1>
          <p className="text-base text-neutral-500 font-medium">
            Senior Frontend Engineer · Angular · React · TypeScript
          </p>
          <div className="flex flex-wrap gap-4 pt-1 text-xs text-neutral-500">
            <a href="mailto:sha0143@hotmail.com" className="inline-flex items-center gap-1 hover:text-neutral-900">
              <Mail className="h-3 w-3" /> sha0143@hotmail.com
            </a>
            <a href="https://github.com/shawon0143" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-neutral-900">
              <Github className="h-3 w-3" /> github.com/shawon0143
            </a>
            <a href="https://www.linkedin.com/in/mohammad-nizam-uddin/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-neutral-900">
              <Linkedin className="h-3 w-3" /> linkedin.com/in/mohammad-nizam-uddin
            </a>
            <span className="inline-flex items-center gap-1">
              <Globe className="h-3 w-3" /> shawon0143.github.io
            </span>
            <span className="inline-flex items-center gap-1 text-neutral-400">
              Mannheim, Germany
            </span>
          </div>
          <div className="h-px bg-neutral-900 mt-3" />
        </div>

        {/* Profile */}
        <div className="resume-section">
          <SectionHeader title="Profile" />
          <p className="text-xs text-neutral-600 leading-relaxed">
            Senior Frontend Engineer with 8+ years of experience delivering enterprise-scale web applications in Germany. Specialising in Angular (v15+, Signals, Standalone Components), React, and TypeScript, with a strong focus on performance optimisation, scalable component architecture, and advanced state management with NgRx and Redux. Proven track record of driving technical modernisation, establishing CI/CD pipelines, and mentoring junior engineers in large cross-functional teams.
          </p>
        </div>

        {/* Experience */}
        <div className="resume-section">
          <SectionHeader title="Work Experience" />
          <ExperienceBlock entries={experiences} />
        </div>

        {/* Personal Projects */}
        <div className="resume-section">
          <SectionHeader title="Personal Projects" />
          <ExperienceBlock entries={projects} />
        </div>

        {/* Skills */}
        <div className="resume-section">
          <SectionHeader title="Skills" />
          <div className="space-y-1.5 resume-skills-grid">
            {skillGroups.map(({ label, values }) => (
              <div key={label} className="flex gap-2 items-baseline">
                <span className="text-xs font-semibold text-neutral-700 w-24 shrink-0">{label}</span>
                <span className="text-xs text-neutral-500">{values.join(" · ")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="resume-section">
          <SectionHeader title="Education" />
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.degree} className="flex justify-between items-baseline resume-card">
                <span className="text-xs font-semibold text-neutral-800">{edu.degree}</span>
                <span className="text-xs text-neutral-500">{edu.school}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="resume-section">
          <SectionHeader title="Languages" />
          <div className="flex gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="text-xs">
                <span className="font-semibold text-neutral-800">{lang.name}</span>
                <span className="text-neutral-400"> — {lang.level}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
