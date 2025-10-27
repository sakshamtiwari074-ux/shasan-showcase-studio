import { ArrowRight, GraduationCap, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-professor.jpg";

const Home = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "25+ Years of Experience",
      description: "Dedicated to excellence in engineering education and research",
    },
    {
      icon: BookOpen,
      title: "Published Author",
      description: "Multiple textbooks and research publications in electronics",
    },
    {
      icon: Users,
      title: "Mentoring Excellence",
      description: "Guided hundreds of students in their academic journey",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 47, 95, 0.95), rgba(0, 47, 95, 0.85), rgba(0, 128, 128, 0.8)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-secondary/30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30">
              <span className="text-accent font-semibold text-sm sm:text-base">
                Professor & Department Head
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Dr. Syed Hasan Saeed
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 mb-8 font-light">
              Electronics & Communication Engineering
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Empowering the next generation of engineers through innovative teaching, 
              cutting-edge research, and a passion for electronics and communication technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/about">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group shadow-lg hover:shadow-xl transition-all">
                  Learn More About Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm shadow-lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-2 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
              Welcome to My Academic Portfolio
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                I am currently serving as <strong className="text-foreground">Professor and Head of the Department</strong> in the Electronics & Communication 
                Engineering department at the Faculty of Engineering, <strong className="text-foreground">Integral University, Lucknow</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                This platform is dedicated to engineering and science students at both undergraduate and postgraduate levels 
                who share a passion for Electronics & Communication Engineering. Here, you will find valuable resources, 
                research insights, and educational materials to support your academic journey.
              </p>
              <div className="bg-card p-6 rounded-lg border-l-4 border-accent mt-8">
                <p className="text-base text-foreground/80 italic">
                  "Education is not the filling of a pail, but the lighting of a fire. Through dedication to teaching 
                  and research, we illuminate the path for future innovators in electronics and communication technology."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
