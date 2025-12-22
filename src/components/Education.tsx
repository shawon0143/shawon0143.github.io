import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

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

export function Education() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl">Education & Languages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and language proficiency for global
            collaboration.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <Card key={edu.degree}>
              <CardHeader className="pb-0">
                <CardTitle className="text-lg">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground pt-0">
                <p>{edu.school}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {languages.map((lang) => (
            <Badge key={lang.name} variant="outline" className="text-sm">
              {lang.name} — {lang.level}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
