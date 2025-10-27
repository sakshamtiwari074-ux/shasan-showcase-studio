import { BookOpen, Users, Award, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Teaching = () => {
  const courses = [
    {
      title: "Circuit Theory",
      level: "Undergraduate",
      description: "Fundamentals of circuit analysis, network theorems, and AC/DC circuits.",
    },
    {
      title: "Digital Electronics",
      level: "Undergraduate",
      description: "Digital logic design, combinational and sequential circuits, microprocessors.",
    },
    {
      title: "Control Systems",
      level: "Undergraduate/Postgraduate",
      description: "Classical and modern control theory, stability analysis, and system design.",
    },
    {
      title: "Basic Electrical Engineering",
      level: "Undergraduate",
      description: "Introduction to electrical concepts, machines, and power systems.",
    },
    {
      title: "Measurement and Instrumentation",
      level: "Undergraduate/Postgraduate",
      description: "Measurement techniques, sensors, transducers, and instrumentation systems.",
    },
    {
      title: "Power System Analysis",
      level: "Postgraduate",
      description: "Power flow studies, fault analysis, stability, and economic operation.",
    },
    {
      title: "High Voltage DC Transmission",
      level: "Postgraduate",
      description: "HVDC systems, converter technology, and transmission line analysis.",
    },
    {
      title: "Automatic Control Systems",
      level: "Postgraduate",
      description: "Advanced control strategies, digital control, and optimal control theory.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Teaching
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Committed to delivering quality education and inspiring students to excel 
            in Electronics & Communication Engineering
          </p>
        </div>

        {/* Teaching Philosophy */}
        <section className="mb-20 animate-fade-in-up">
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Teaching Philosophy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                My teaching philosophy centers on creating an engaging, interactive learning environment 
                where students are encouraged to think critically and apply theoretical concepts to 
                real-world problems. I believe in:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Active Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Encouraging student participation through discussions, problem-solving, and hands-on activities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Practical Application</h4>
                    <p className="text-sm text-muted-foreground">
                      Bridging theory with industry practices and real-world scenarios
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Individual Attention</h4>
                    <p className="text-sm text-muted-foreground">
                      Recognizing diverse learning styles and providing personalized guidance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Innovation & Research</h4>
                    <p className="text-sm text-muted-foreground">
                      Inspiring students to think beyond textbooks and explore new ideas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Courses Taught */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Courses Taught
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full">
                        {course.level}
                      </span>
                    </div>
                    <BookOpen className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Teaching Impact */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-3xl">Teaching Impact</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <p className="text-muted-foreground">Years of Teaching</p>
                </div>
                <div className="p-6 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                  <p className="text-muted-foreground">Students Mentored</p>
                </div>
                <div className="p-6 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-bold text-secondary mb-2">8+</div>
                  <p className="text-muted-foreground">Core Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Student Resources */}
        <section className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-accent/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-3xl">Commitment to Excellence</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                This website serves as a comprehensive resource platform for students, providing access to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Course Materials:</strong> Lecture notes, presentations, and study guides
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Reference Books:</strong> Recommended textbooks and academic resources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Practice Problems:</strong> Problem sets and solutions for self-study
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Research Guidance:</strong> Support for project work and research initiatives
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Teaching;
