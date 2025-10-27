import { BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Books = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Books & Publications
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive textbooks and academic materials designed to support student learning 
            and advance knowledge in Electronics & Communication Engineering
          </p>
        </div>

        {/* Books Section */}
        <section className="mb-20 animate-fade-in-up">
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Published Textbooks</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Throughout my academic career, I have authored and co-authored several textbooks 
                in the field of Electronics and Electrical Engineering. These books serve as 
                comprehensive resources for undergraduate and postgraduate students, covering 
                fundamental concepts and advanced topics with clarity and precision.
              </p>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Key Features of My Books:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Clear Explanations</h4>
                      <p className="text-sm text-muted-foreground">
                        Complex concepts explained in an accessible manner
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Practical Examples</h4>
                      <p className="text-sm text-muted-foreground">
                        Real-world applications and industry-relevant case studies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Problem Sets</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive exercises with solutions for practice
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Updated Content</h4>
                      <p className="text-sm text-muted-foreground">
                        Aligned with latest curriculum and industry standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Subject Areas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Areas Covered in Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Circuit Theory",
                topics: ["Network Analysis", "AC/DC Circuits", "Network Theorems", "Two-Port Networks"],
              },
              {
                title: "Digital Electronics",
                topics: ["Logic Gates", "Sequential Circuits", "Microprocessors", "Digital Systems"],
              },
              {
                title: "Control Systems",
                topics: ["Transfer Functions", "Stability Analysis", "Frequency Response", "State Space"],
              },
              {
                title: "Power Systems",
                topics: ["Load Flow", "Fault Analysis", "Stability Studies", "Economic Operation"],
              },
              {
                title: "HVDC Transmission",
                topics: ["Converter Technology", "Line Commutation", "HVDC Systems", "Grid Integration"],
              },
              {
                title: "Instrumentation",
                topics: ["Measurement Techniques", "Sensors", "Signal Processing", "Data Acquisition"],
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Impact */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-secondary/5 to-primary/5">
            <CardHeader>
              <CardTitle className="text-3xl">Academic Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                My publications have been widely adopted by universities and technical institutions 
                across India, serving as primary reference materials for thousands of students. 
                The books are known for their pedagogical approach, combining theoretical rigor 
                with practical insights.
              </p>
              
              <div className="bg-card p-6 rounded-lg">
                <blockquote className="text-lg text-foreground/80 italic border-l-4 border-accent pl-6">
                  "A good textbook is not just a collection of facts and formulas; it's a carefully 
                  crafted journey that guides students from foundational concepts to advanced 
                  applications, inspiring curiosity and fostering deep understanding along the way."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Book Inquiries
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Students and educators interested in obtaining copies of my publications or 
                seeking more information about specific books can reach out through the contact page.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/contact">
                  Contact Me
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Books;
