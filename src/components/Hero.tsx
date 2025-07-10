import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-catering.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant catering setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-morphism px-6 py-3 rounded-full text-sm font-medium mb-8 font-inter">
            <Star className="h-4 w-4 fill-current text-accent" />
            Premium Bengali Catering
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-playfair animate-scale-in">
          Make Your Event
          <span className="block bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
            Memorable
          </span>
        </h1>

        {/* <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto font-inter font-light animate-slide-up">
          Quality Ingredients. Expert Chefs. Genuine Hospitality.
        </p> */}
         <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto font-inter font-light animate-slide-up">
          Expert in{" "}
          <span className="text-yellow-200 italic font-playfair">Indian</span>,{" "}
          <span className="text-yellow-200 italic font-playfair">Mughal</span> and{" "}
          <span className="text-yellow-200 italic font-playfair">Chinese</span> cuisine
        </p>
 

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/9831844313" // Change number if needed
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button
              variant="hero"
              size="lg"
              className="font-inter font-semibold text-lg px-10 py-4 hover-lift"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>

          {/* Services Anchor Button */}
          <a href="#services" className="group">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-inter font-semibold text-lg px-10 py-4 hover-lift"
            >
              View Our Services
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
          {[
            { number: "22+", label: "Years of Experience" },
            { number: "3000+", label: "Events Catered" },
            { number: "300000+", label: "Guests served" }
          ].map((stat, index) => (
            <div key={index} className="text-center  p-6 rounded-2xl hover-lift">
              <div className="text-4xl font-bold text-accent mb-3 font-playfair">{stat.number}</div>
              <div className="text-yellow-400 font-inter font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
