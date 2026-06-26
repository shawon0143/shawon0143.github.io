import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Code,
  Globe,
  Database,
  BarChart2,
  Cloud,
  Smartphone,
  Wrench,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: ["Angular 15+", "Signals", "Standalone Components", "React", "TypeScript", "RxJS", "NgRx", "Redux", "HTML5", "CSS3", "SASS", "Bootstrap"],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      skills: ["React Native", "Ionic", "PWA"],
    },
    {
      icon: Globe,
      title: "Backend & APIs",
      skills: ["Node.js", "Express", "PHP", "REST"],
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      skills: ["MongoDB", "InfluxDB", "AWS S3", "Docker"],
    },
    {
      icon: Cloud,
      title: "DevOps",
      skills: ["GitHub Actions", "CI/CD", "Grafana", "Prometheus"],
    },
    {
      icon: BarChart2,
      title: "Analytics",
      skills: ["GA4", "Google Tag Manager", "Meta Pixel"],
    },
    {
      icon: Wrench,
      title: "Tooling",
      skills: ["Git", "Jira", "Vite", "Webpack"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Frontend-first engineer with cross-platform delivery across web, mobile, and B2B systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
