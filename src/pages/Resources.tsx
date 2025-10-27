import { Download, FileText, BookOpen, Video, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: "Lecture Notes",
      description: "Comprehensive lecture notes and study materials for all courses",
      items: [
        "Circuit Theory - Complete Notes",
        "Digital Electronics - Study Guide",
        "Control Systems - Lecture Series",
        "Power System Analysis - Notes",
      ],
    },
    {
      icon: BookOpen,
      title: "Reference Materials",
      description: "Recommended textbooks, papers, and academic resources",
      items: [
        "Recommended Textbook List",
        "Research Paper Repository",
        "Standard Reference Guides",
        "Online Learning Resources",
      ],
    },
    {
      icon: Video,
      title: "Video Lectures",
      description: "Recorded lectures and tutorial videos for enhanced learning",
      items: [
        "Circuit Analysis Tutorials",
        "Digital Logic Design Videos",
        "Control Systems Demonstrations",
        "Problem-Solving Sessions",
      ],
    },
    {
      icon: LinkIcon,
      title: "Useful Links",
      description: "Curated links to educational websites and tools",
      items: [
        "IEEE Xplore Digital Library",
        "Circuit Simulation Tools",
        "Engineering Software Tutorials",
        "Online Calculators & Tools",
      ],
    },
  ];

  const importantLinks = [
    {
      name: "Integral University",
      url: "http://www.integraluniversity.ac.in/",
      description: "Official university website",
    },
    {
      name: "Aligarh Muslim University",
      url: "http://www.amu.ac.in/",
      description: "AMU Official Portal",
    },
    {
      name: "IEEE",
      url: "https://www.ieee.org/",
      description: "Institute of Electrical and Electronics Engineers",
    },
    {
      name: "NPTEL",
      url: "https://nptel.ac.in/",
      description: "National Programme on Technology Enhanced Learning",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Student Resources
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive collection of educational materials, tools, and resources to support 
            your learning journey in Electronics & Communication Engineering
          </p>
        </div>

        {/* Resource Categories */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer group/item"
                      >
                        <Download className="w-4 h-4 text-accent mt-1 group-hover/item:text-primary transition-colors" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Links */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <LinkIcon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-3xl">Important Links</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {importantLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link"
                  >
                    <div className="p-4 bg-card rounded-lg border-2 border-border hover:border-primary/30 transition-all hover:shadow-md">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover/link:text-primary transition-colors">
                            {link.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                        <LinkIcon className="w-5 h-5 text-muted-foreground group-hover/link:text-primary transition-colors flex-shrink-0" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Download Guidelines */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-3xl">Resource Usage Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Academic Use Only</h4>
                    <p className="text-sm text-muted-foreground">
                      All materials provided are for educational purposes and personal study. 
                      Commercial use is strictly prohibited.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Respect Copyright</h4>
                    <p className="text-sm text-muted-foreground">
                      Please respect intellectual property rights and do not redistribute 
                      materials without proper authorization.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Regular Updates</h4>
                    <p className="text-sm text-muted-foreground">
                      Resources are updated regularly. Check back frequently for new materials 
                      and updated content.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Resources */}
        <section className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need Specific Resources?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you're looking for specific course materials, reference documents, or have 
                questions about available resources, feel free to reach out.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/contact">
                  Contact Me
                  <Download className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Resources;
