import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import phoenixB2B from "../assets/phoenix_project.png";
import ajkerMenuHero from "../assets/ajkermenu_hero.png";

export function Projects() {
  const projects = [
    {
      title: "AjkerMenu",
      description:
        "Homemade food marketplace connecting customers with verified local home kitchens. Built end-to-end as sole frontend developer — React Native app, marketing site, and a PWA/ERP system for kitchen owners.",
      image: ajkerMenuHero,
      imgStyle: { objectFit: "cover" as const, objectPosition: "top center", transform: "scale(1.1)", transformOrigin: "top center" },
      technologies: ["React Native", "React", "PWA", "GA4", "Meta Pixel", "GTM"],
      link: "https://ajkermenu.com",
      isPersonal: true,
    },
    {
      title: "PHOENIX B2B Pharma Portal",
      description:
        "Modernised a large-scale B2B pharmaceutical portal (100k+ users) with Angular 15+ Standalone Components and Signals, NgRx state management, and GitHub Actions CI/CD pipelines.",
      image: phoenixB2B,
      imgStyle: { objectFit: "cover" as const, objectPosition: "center center" },
      technologies: ["Angular 15+", "NgRx", "TypeScript", "RxJS", "CI/CD"],
      link: null,
      isPersonal: false,
    },
    {
      title: "NexxDeli — Real-time Delivery Platform",
      description:
        "Architected and built a real-time vehicle tracking, order management and POS platform for food delivery operations, including a cross-platform mobile app.",
      image:
        "https://plus.unsplash.com/premium_photo-1681487855134-d6c0434f91f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgStyle: { objectFit: "cover" as const, objectPosition: "center center" },
      technologies: ["Angular", "Ionic", "Node.js", "Maps API", "WebSockets"],
      link: null,
      isPersonal: false,
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected work — from enterprise B2B portals serving 100k+ users to a full-stack restaurant tech startup built from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-44 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full transition-[transform,filter] duration-300 hover:brightness-105"
                  style={project.imgStyle}
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2">
                  {project.title}
                  {project.isPersonal && (
                    <Badge className="shrink-0 text-xs">Personal</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.link.replace("https://", "")}
                    </a>
                  ) : (
                    <Badge variant="outline" className="gap-2">
                      <Github className="h-4 w-4" />
                      Private repository
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
