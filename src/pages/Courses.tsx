import { GraduationCap, ExternalLink, Clock, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const udemyCourses = [
    {
      title: "Course Title 1",
      description: "Comprehensive course covering essential concepts and practical applications in electronics and communication engineering",
      level: "Beginner",
      duration: "10 hours",
      students: "1,000+",
      rating: "4.5",
      link: "https://www.udemy.com/course/your-course-1",
    },
    {
      title: "Course Title 2",
      description: "Advanced topics in digital electronics with hands-on projects and real-world examples",
      level: "Intermediate",
      duration: "15 hours",
      students: "800+",
      rating: "4.7",
      link: "https://www.udemy.com/course/your-course-2",
    },
    {
      title: "Course Title 3",
      description: "Master circuit theory and analysis techniques with practical problem-solving approaches",
      level: "Beginner",
      duration: "12 hours",
      students: "1,500+",
      rating: "4.6",
      link: "https://www.udemy.com/course/your-course-3",
    },
    {
      title: "Course Title 4",
      description: "Complete guide to power systems engineering with industry-relevant case studies",
      level: "Advanced",
      duration: "20 hours",
      students: "600+",
      rating: "4.8",
      link: "https://www.udemy.com/course/your-course-4",
    },
    {
      title: "Course Title 5",
      description: "Fundamentals of control systems with MATLAB simulations and practical examples",
      level: "Intermediate",
      duration: "18 hours",
      students: "900+",
      rating: "4.5",
      link: "https://www.udemy.com/course/your-course-5",
    },
    {
      title: "Course Title 6",
      description: "Introduction to HVDC transmission systems and modern grid technologies",
      level: "Advanced",
      duration: "25 hours",
      students: "500+",
      rating: "4.9",
      link: "https://www.udemy.com/course/your-course-6",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-secondary/10 text-secondary hover:bg-secondary/20";
      case "Intermediate":
        return "bg-accent/10 text-accent hover:bg-accent/20";
      case "Advanced":
        return "bg-primary/10 text-primary hover:bg-primary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Online Courses
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my comprehensive online courses on Udemy, designed to help students and 
            professionals master electronics and communication engineering concepts
          </p>
        </div>

        {/* Courses Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {udemyCourses.map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(course.link, "_blank")}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart className="w-4 h-4" />
                      ⭐ {course.rating}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {course.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">{course.students}</strong> students enrolled
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(course.link, "_blank");
                    }}
                  >
                    View Course on Udemy
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Take These Courses */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-secondary/5 to-primary/5">
            <CardHeader>
              <CardTitle className="text-3xl">Why Enroll in My Courses?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expert Instruction</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn from 25+ years of teaching and industry experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Practical Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-world examples and hands-on projects in every course
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Comprehensive Content</h4>
                    <p className="text-sm text-muted-foreground">
                      From fundamentals to advanced topics, structured for easy learning
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Lifetime Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn at your own pace with unlimited access to course materials
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Start Your Learning Journey Today
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of students worldwide who are advancing their careers with my courses. 
                Each course is designed to provide practical knowledge and skills you can apply immediately.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="https://www.udemy.com/user/your-profile" target="_blank" rel="noopener noreferrer">
                  View All Courses on Udemy
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

export default Courses;
