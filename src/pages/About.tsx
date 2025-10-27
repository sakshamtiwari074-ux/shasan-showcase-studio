import { GraduationCap, Briefcase, Award, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </div>

        {/* Education Section */}
        <section className="mb-20 animate-fade-in-up">
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Educational Background</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Doctor of Philosophy (PhD)
                </h3>
                <p className="text-muted-foreground font-medium mb-1">
                  Integral University, Lucknow
                </p>
                <p className="text-sm text-muted-foreground">Year: 2010</p>
                <p className="mt-3 text-foreground/80">
                  Advanced research in Electronics & Communication Engineering, 
                  focusing on innovative solutions and theoretical frameworks.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6 py-2">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-muted-foreground font-medium mb-1">
                  Electrical Engineering
                </p>
                <p className="text-sm text-muted-foreground mb-1">
                  Zakir Hussain College of Engineering and Technology
                </p>
                <p className="text-sm text-muted-foreground mb-1">
                  Aligarh Muslim University (AMU), Aligarh, Uttar Pradesh
                </p>
                <p className="text-sm text-muted-foreground">Year: 1992</p>
                <p className="mt-3 text-foreground/80">
                  Strong foundation in electrical engineering principles, circuit theory, 
                  and power systems from one of India's premier institutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Position */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Current Position</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Professor & Head of Department
                  </h3>
                  <p className="text-lg text-foreground mb-2">
                    Electronics & Communication Engineering
                  </p>
                  <p className="text-lg text-foreground font-medium mb-4">
                    Faculty of Engineering, Integral University, Lucknow
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg space-y-3">
                  <h4 className="font-semibold text-lg text-foreground mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Leading the department's academic and administrative functions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Developing and updating curriculum to meet industry standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Mentoring faculty members and guiding student research projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Fostering industry-academia collaborations and partnerships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Promoting research culture and innovation in the department</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Areas of Expertise */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-3xl">Areas of Expertise</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Circuit Theory & Analysis",
                  "Digital Electronics",
                  "Control Systems",
                  "Power System Analysis",
                  "High Voltage DC Transmission",
                  "Measurement & Instrumentation",
                  "Basic Electrical Engineering",
                  "Automatic Control Systems",
                ].map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission */}
        <section className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-3xl">My Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                My mission is to inspire and nurture the next generation of engineers by providing 
                quality education, fostering critical thinking, and promoting research excellence. 
                I am committed to bridging the gap between theoretical knowledge and practical 
                applications, ensuring students are well-prepared for the challenges of the modern 
                technological landscape.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Through this platform, I aim to create a comprehensive resource hub for students 
                and researchers, making quality educational materials accessible and promoting 
                continuous learning in the field of Electronics & Communication Engineering.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
