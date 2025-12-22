import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import phoenixB2B from "../assets/phoenix_project.png";

export function Projects() {
  const projects = [
    {
      title: "PHOENIX B2B Pharma Portal",
      description:
        "Enterprise portal with responsive Angular UI, consistent design system, and secure API integrations for pharmaceutical partners.",
      image: phoenixB2B,
      technologies: ["Angular", "TypeScript", "RxJS", "SCSS", "REST APIs"],
    },
    {
      title: "Pharmacy Ops Suite",
      description:
        "SPAs and Electron desktop tools for pharmacy workflows plus a React Native companion app; includes offline-friendly interfaces and synced APIs.",
      image:
        "https://plus.unsplash.com/premium_photo-1682129906083-e802555764bf?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Redux", "Electron", "React Native", "Node.js"],
    },
    {
      title: "NexxDeli Real-time Delivery",
      description:
        "Vehicle tracking and order management platform with integrated POS, inventory APIs, and live map updates for food delivery operations.",
      image:
        "https://plus.unsplash.com/premium_photo-1681487855134-d6c0434f91f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Angular", "Node.js", "Maps", "WebSockets", "REST"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected work across enterprise B2B portals, pharmacy ops tools, and
            real-time delivery systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full grayscale transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="pt-2">
                  <Badge variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    Private repository / demo
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
