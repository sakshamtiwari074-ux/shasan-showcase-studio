import { Mail, MapPin, Building, Phone, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I will get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Feel free to reach out for academic inquiries, collaboration opportunities, 
            or any questions related to Electronics & Communication Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-2 hover:shadow-xl transition-shadow animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Department of Electronics & Communication Engineering<br />
                      Faculty of Engineering<br />
                      Integral University<br />
                      Lucknow, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a 
                      href="mailto:hasansaeedcontrol@gmail.com"
                      className="text-sm text-primary hover:underline"
                    >
                      hasansaeedcontrol@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-xl">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold text-foreground">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Your Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="border-2 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      required
                      rows={6}
                      className="border-2 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="mt-6 border-2 bg-gradient-to-br from-accent/5 to-secondary/5">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Note:</strong> For current students at Integral University, 
                    please use official university channels for course-related queries. For collaboration 
                    opportunities, research inquiries, or academic discussions, feel free to use this contact form.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Email Integration:</strong> To receive form submissions via email, 
                      follow the Mailchimp setup instructions in the README.md file. The form is ready to be connected 
                      to your preferred email service provider.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
