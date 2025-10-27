import { FileText, Lightbulb, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Research = () => {
  const researchAreas = [
    {
      title: "Power Systems & HVDC Transmission",
      description: "Advanced research in high voltage direct current transmission systems, power system analysis, and grid optimization.",
      icon: TrendingUp,
    },
    {
      title: "Control Systems",
      description: "Automatic control systems, feedback mechanisms, and modern control theory applications in industrial automation.",
      icon: Lightbulb,
    },
    {
      title: "Circuit Theory & Electronics",
      description: "Fundamental and advanced circuit analysis, digital electronics design, and integrated circuit applications.",
      icon: FileText,
    },
    {
      title: "Instrumentation & Measurement",
      description: "Precision measurement techniques, sensor technology, and instrumentation systems for industrial applications.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Research & Publications
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to advancing knowledge in Electronics & Communication Engineering 
            through rigorous research and academic contributions
          </p>
        </div>

        {/* Research Areas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Research Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <area.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PhD Research */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-3xl">Doctoral Research</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">
                  PhD from Integral University, Lucknow (2010)
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  My doctoral research focused on advancing the field of Electronics & Communication 
                  Engineering through innovative theoretical frameworks and practical applications. 
                  The research contributed significantly to the understanding of complex systems 
                  and their optimization.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Institution:</strong> Integral University, Lucknow, India
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Year:</strong> 2010
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Field:</strong> Electronics & Communication Engineering
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Academic Contributions */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-3xl">Academic Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Research Publications
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Multiple research papers published in reputed national and international journals, 
                    contributing to advancements in power systems, control theory, and electronics.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Conference Presentations
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Presented research findings at numerous national and international conferences, 
                    facilitating knowledge exchange and collaboration with peers worldwide.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Student Guidance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Supervised and mentored numerous postgraduate students in their research endeavors, 
                    helping them develop critical research skills and contribute to the field.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Philosophy */}
        <section className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-secondary/5 to-primary/5">
            <CardHeader>
              <CardTitle className="text-3xl">Research Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg text-foreground/80 leading-relaxed italic border-l-4 border-accent pl-6 py-2">
                "Research is not just about discovering new knowledge; it's about solving real-world 
                problems and creating impact. Every research endeavor should bridge the gap between 
                theory and practice, ultimately contributing to technological advancement and societal 
                betterment."
              </blockquote>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Research;
