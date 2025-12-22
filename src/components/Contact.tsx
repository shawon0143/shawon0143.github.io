import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Prefer direct contact. Email or call anytime—I'm available for remote work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <h4>Email</h4>
                  <p className="text-muted-foreground break-all">
                    sha0143@hotmail.com
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full gap-2">
                <a href="mailto:sha0143@hotmail.com">Email me</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <h4>Phone</h4>
                  <p className="text-muted-foreground">+49 176 57971409</p>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full gap-2">
                <a href="tel:+4917657971409">Call now</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <h4>Location</h4>
                  <p className="text-muted-foreground">Available for remote work</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Based in DE time zone; happy to sync globally.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
