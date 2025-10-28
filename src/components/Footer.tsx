import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Syed Hasan Saeed</h3>
            <p className="text-primary-foreground/80 text-sm">
              Professor & Head of Department
              <br />
              Electronics & Communication Engineering
              <br />
              Integral University, Lucknow
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.iul.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Integral University
                </a>
              </li>
              <li>
                <a
                  href="http://www.amu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Aligarh Muslim University
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Faculty of Engineering, Integral University
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a 
                  href="mailto:hasansaeedcontrol@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  hasansaeedcontrol@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/70">
          <p>
            © {new Date().getFullYear()} Dr. Syed Hasan Saeed. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
