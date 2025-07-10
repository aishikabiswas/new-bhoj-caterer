import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Users, Award, Clock } from "lucide-react";
import bengaliFoodImage from "@/assets/bengali-food.jpg";

const About = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Highly skilled chefs specializing in authentic Bengali cuisine and international dishes"
    },
    {
      icon: Users,
      title: "3000+ Events",
      description: "Successfully catered weddings, corporate events, and social gatherings"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Fresh ingredients sourced daily from local markets for authentic flavors"
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Punctual delivery and professional service for all your catering needs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              About New Bhoj Caterer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              We Provide the Best Catering Service in Kolkata for All Events Since 2002
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When it comes to specialty catering services in Kolkata, <strong>New Bhoj Caterer</strong> takes
              immense pride in providing only the finest and most exquisite culinary experiences. As one of the
              premier caterers in Kolkata, we understand that every event is unique and requires personalized
              attention to detail.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team comprises highly skilled and passionate chefs who excel in traditional Bengali delicacies
              and offer a wide array of cuisines crafted with precision and expertise. We source only the freshest
              ingredients from local markets, ensuring that each dish bursts with vibrant flavors and tantalizing aromas.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="bg-accent text-accent-foreground p-2 rounded-lg shrink-0">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src="about.jpeg"
                alt="Traditional Bengali food presentation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-elegant">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Years Serving</div>
                  <div className="text-sm text-muted-foreground">Kolkata</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;