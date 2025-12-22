import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "PHOENIX Pharmahandel",
      location: "Remote / DE",
      period: "Mar 2020 – Present",
      description:
        "Building and maintaining a B2B pharmaceutical portal with responsive UI, design consistency, and API integrations in a large enterprise environment.",
      technologies: ["Angular", "TypeScript", "RxJS", "REST APIs", "SCSS"],
    },
    {
      title: "Software Developer",
      company: "ComValue",
      location: "Wiesbaden / DE",
      period: "May 2019 – Feb 2020",
      description:
        "Shipped SPAs and Electron desktop apps for pharmacy workflows, built a cross-platform React Native app, and contributed to backend API design.",
      technologies: [
        "React",
        "Redux",
        "Electron",
        "React Native",
        "Node.js",
        "REST",
      ],
    },
    {
      title: "Software Developer",
      company: "PTC-Telematik",
      location: "Koblenz / DE",
      period: "Aug 2017 – Apr 2019",
      description:
        "Delivered NexxDeli: real-time vehicle tracking and order management with integrated POS and inventory APIs for food delivery.",
      technologies: [
        "Angular",
        "Ionic",
        "Node.js",
        "Real-time tracking",
        "REST",
        "Maps",
      ],
    },
    {
      title: "Student Assistant",
      company: "Institut für Wissensmedien",
      location: "Koblenz, DE",
      period: "Jan 2017 – Jul 2019",
      description:
        "Developed Badgelor, an Angular app for badge management at the University of Koblenz-Landau.",
      technologies: ["Angular", "TypeScript"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            5+ years delivering B2B portals, real-time systems, and
            cross-platform apps.
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
