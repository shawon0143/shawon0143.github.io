import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Engineer",
      company: "PHOENIX Pharmahandel GmbH & Co KG",
      location: "Mannheim, DE",
      period: "Mar 2020 – Present",
      description:
        "Modernised a large-scale B2B pharmaceutical portal (100k+ users) by migrating to Angular 15+ with Standalone Components and Signals. Introduced NgRx state management, established GitHub Actions CI/CD pipelines, led performance optimisation through lazy loading and bundle analysis, and mentored junior frontend developers.",
      technologies: ["Angular 15+", "NgRx", "TypeScript", "RxJS", "Signals", "GitHub Actions", "CI/CD", "SCSS"],
    },
    {
      title: "Software Developer",
      company: "ComValue GmbH",
      location: "Wiesbaden, DE",
      period: "May 2019 – Feb 2020",
      description:
        "Developed SPAs and Electron desktop client plugins for pharmacy management tools using React and Redux. Built a cross-platform mobile application with React Native and contributed to Node.js/Express API design.",
      technologies: ["React", "Redux", "Electron", "React Native", "Node.js", "Express"],
    },
    {
      title: "Software Developer",
      company: "PTC-Telematik GmbH",
      location: "Koblenz, DE",
      period: "Aug 2017 – Apr 2019",
      description:
        "Architected and built NexxDeli (nexxdeli.de) — a real-time vehicle tracking, order management and POS platform for food delivery operations. Integrated GPS tracking, shop management, inventory and delivery APIs, and built a cross-platform mobile companion app with Ionic.",
      technologies: ["Angular", "Ionic", "Node.js", "WebSockets", "Maps API", "REST"],
    },
    {
      title: "Student Assistant",
      company: "IWM / University of Koblenz-Landau",
      location: "Koblenz, DE",
      period: "Jan 2017 – Jul 2019",
      description:
        "Built Badgelor — an Angular web application for digital badge management at the university, supporting student achievement recognition workflows.",
      technologies: ["Angular", "TypeScript"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            8+ years delivering enterprise B2B portals, real-time systems, and
            cross-platform apps across Germany.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-foreground mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
