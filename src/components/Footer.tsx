import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  ChefHat
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      "Wedding Catering",
      "Corporate Events", 
      "Social Gatherings",
      "Home Catering",
      "Custom Menus"
    ],
    quickLinks: [
      "About Us",
      "Our Services", 
      "Gallery",
      "Testimonials",
      "Contact Us"
    ],
    specialties: [
      "Bengali Cuisine",
      "North Indian",
      "Chinese Dishes",
      "Continental Food",
      "Desserts & Sweets"
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100070407516687", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-accent text-accent-foreground p-3 rounded-full">
                <ChefHat className="h-6 w-6" />
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">New Bhoj Caterer</h3>
                <p className="text-sm text-primary-foreground/80">Premium Catering Services</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Serving Kolkata with authentic Bengali cuisine and exceptional catering services since 2002. 
              Making every event memorable with quality food and professional service.
              <p><strong>FSSAI LIC. NO. : 12819013000615</strong></p>
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/90">+91-9831844313(Amit)</p>
                  <p className="text-primary-foreground/90">+91-9831650490(Bivash)</p>
                  <p className="text-primary-foreground/90">+91-9830257520(Sanjay)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/90">a.sengupta1975@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <a href="https://maps.app.goo.gl/qm5Ud1R6yzpM3pHA6">
                  <p className="text-primary-foreground/90">Meghnad Saha Sarani, New</p>
                  <p className="text-primary-foreground/90">Barrackpur, Kolkata, West Bengal 700131</p>   
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-6 p-4 bg-primary-hover rounded-lg">
              <h5 className="font-medium mb-2 text-accent">Operating Hours</h5>
              <p className="text-sm text-primary-foreground/90">Mon - Sun: 9:00 AM - 10:30 PM</p>
              <p className="text-sm text-primary-foreground/90">Except Thursdays</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />
      
      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 New Bhoj Caterer. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;