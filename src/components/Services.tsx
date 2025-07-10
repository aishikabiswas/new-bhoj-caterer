// // import {useState, useEffect} from "react";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { 
// //   Users, 
// //   Briefcase, 
// //   Heart, 
// //   GraduationCap, 
// //   Home, 
// //   Utensils,
// //   ArrowRight
// // } from "lucide-react";

// // const Services = () => {
// //   const services = [
// //     {
// //       icon: Heart,
// //       title: "Wedding Catering",
// //       description: "Make your special day unforgettable with our exquisite wedding catering services featuring traditional Bengali cuisine and international dishes.",
// //       features: ["Traditional Bengali Menu", "Custom Menu Planning", "Professional Service Staff", "Elegant Presentation"],
// //       image: "wedding.jpg",
// //       popular: true
// //     },
// //     {
// //       icon: Briefcase,
// //       title: "Corporate Events",
// //       description: "Professional catering services for corporate meetings, conferences, and business gatherings with punctual service and quality food.",
// //       features: ["Business Lunch Packages", "Conference Catering", "Executive Dining", "Flexible Timing"],
// //       image: "coorporate.jpg",
// //       popular: false
// //     },
// //     {
// //       icon: Users,
// //       title: "Social Gatherings",
// //       description: "Perfect catering solutions for birthday parties, anniversaries, family reunions, and other social celebrations.",
// //       features: ["Birthday Parties", "Anniversary Celebrations", "Family Reunions", "Custom Decorations"],
// //       image: "birthday.jpg",
// //       popular: false
// //     },
// //     {
// //       icon: GraduationCap,
// //       title: "Educational Events",
// //       description: "Specialized catering for schools, colleges, and educational institutions with healthy and nutritious meal options.",
// //       features: ["School Events", "College Functions", "Educational Seminars", "Healthy Meal Options"],
// //       image: "hey.jpg",
// //       popular: false
// //     },
// //     {
// //       icon: Home,
// //       title: "Home Catering",
// //       description: "Bring restaurant-quality food to your home with our convenient home catering services for intimate gatherings.",
// //       features: ["House Parties", "Intimate Dinners", "Festival Celebrations", "Family Events"],
// //       image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop&crop=center",
// //       popular: false
// //     },
// //     {
// //       icon: Utensils,
// //       title: "Specialty Menus",
// //       description: "Customized menu options including vegetarian, vegan, and special dietary requirements to suit all preferences.",
// //       features: ["Vegetarian Options", "Vegan Dishes", "Special Dietary Needs", "Custom Recipes"],
// //       image: "special.jpg",
// //       popular: false
// //     }
// //   ];

// //   return (
// //     <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background">
// //       <div className="max-w-7xl mx-auto px-4">
// //         {/* Section Header */}
// //         <div className="text-center mb-20 animate-fade-in">
// //           <Badge variant="secondary" className="mb-6 text-sm font-inter">
// //             Our Services
// //           </Badge>
// //           <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-playfair leading-tight">
// //             Comprehensive Catering Solutions
// //           </h2>
// //           <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed">
// //             From intimate family gatherings to grand celebrations, we provide exceptional catering services
// //             tailored to make your event memorable and stress-free.
// //           </p>
// //         </div>

// //         {/* Services Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {services.map((service, index) => (
// //             <Card 
// //               key={index} 
// //               className="relative service-card-hover group overflow-hidden border-0 shadow-warm bg-white/80 backdrop-blur-sm"
// //               style={{ animationDelay: `${index * 0.1}s` }}
// //             >
// //               {service.popular && (
// //                 <Badge className="absolute -top-2 left-6 bg-accent text-accent-foreground z-20 font-inter font-semibold shadow-lg">
// //                   Most Popular
// //                 </Badge>
// //               )}
              
// //               {/* Service Image */}
// //               <div className="relative h-48 overflow-hidden">
// //                 <img
// //                   src={service.image}
// //                   alt={service.title}
// //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
// //                 <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
// //                   <service.icon className="h-5 w-5" />
// //                 </div>
// //               </div>

// //               <CardHeader className="pb-4">
// //                 <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors font-playfair">
// //                   {service.title}
// //                 </CardTitle>
// //                 <p className="text-muted-foreground leading-relaxed font-inter">
// //                   {service.description}
// //                 </p>
// //               </CardHeader>

// //               <CardContent className="pt-0">
// //                 <div className="space-y-3 mb-6">
// //                   {service.features.map((feature, idx) => (
// //                     <div key={idx} className="flex items-center gap-3 text-sm">
// //                       <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
// //                       <span className="text-muted-foreground font-inter">{feature}</span>
// //                     </div>
// //                   ))}
// //                 </div>
                
// //                 <Button 
// //                   variant="outline" 
// //                   className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 font-inter font-medium"
// //                 >
// //                   Learn More
// //                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
// //                 </Button>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>

// //         {/* CTA Section */}
// //         <div className="text-center mt-20 animate-fade-in">
// //           <Card className="bg-gradient-to-r from-primary via-primary-hover to-primary p-10 max-w-4xl mx-auto shadow-elegant overflow-hidden relative">
// //             <div className="absolute inset-0 bg-warm-gradient opacity-20"></div>
// //             <CardContent className="p-0 relative z-10">
// //               <h3 className="text-3xl font-bold text-white mb-6 font-playfair">
// //                 Ready to Plan Your Perfect Event?
// //               </h3>
// //               <p className="text-white/90 mb-8 text-lg font-inter leading-relaxed">
// //                 Contact us today for a personalized consultation and let us create an unforgettable culinary experience for your special occasion.
// //               </p>
// //               <div className="flex flex-col sm:flex-row gap-6 justify-center">
// //                 <Button 
// //                   variant="outline" 
// //                   size="lg" 
// //                   className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold hover-lift"
// //                 >
// //                   Call Now: +91-9876543210
// //                 </Button>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;
// import { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Users,
//   Briefcase,
//   Heart,
//   GraduationCap,
//   Home,
//   Utensils,
//   ArrowRight
// } from "lucide-react";

// const Services = () => {
//   const [currentNumber, setCurrentNumber] = useState(0);
//   const numbers = ["+91-9876543210", "+91-9123456780", "+91-9012345678"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentNumber((prev) => (prev + 1) % numbers.length);
//     }, 2000); // changes every 2 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const services = [
//     {
//       icon: Heart,
//       title: "Wedding Catering",
//       description:
//         "Make your special day unforgettable with our exquisite wedding catering services featuring traditional Bengali cuisine and international dishes.",
//       features: [
//         "Traditional Bengali Menu",
//         "Custom Menu Planning",
//         "Professional Service Staff",
//         "Elegant Presentation"
//       ],
//       image: "wedding.jpg",
//       popular: true
//     },
//     {
//       icon: Briefcase,
//       title: "Corporate Events",
//       description:
//         "Professional catering services for corporate meetings, conferences, and business gatherings with punctual service and quality food.",
//       features: [
//         "Business Lunch Packages",
//         "Conference Catering",
//         "Executive Dining",
//         "Flexible Timing"
//       ],
//       image: "coorporate.jpg",
//       popular: false
//     },
//     {
//       icon: Users,
//       title: "Social Gatherings",
//       description:
//         "Perfect catering solutions for birthday parties, anniversaries, family reunions, and other social celebrations.",
//       features: [
//         "Birthday Parties",
//         "Anniversary Celebrations",
//         "Family Reunions",
//         "Custom Decorations"
//       ],
//       image: "birthday.jpg",
//       popular: false
//     },
//     {
//       icon: GraduationCap,
//       title: "Educational Events",
//       description:
//         "Specialized catering for schools, colleges, and educational institutions with healthy and nutritious meal options.",
//       features: [
//         "School Events",
//         "College Functions",
//         "Educational Seminars",
//         "Healthy Meal Options"
//       ],
//       image: "hey.jpg",
//       popular: false
//     },
//     {
//       icon: Home,
//       title: "Home Catering",
//       description:
//         "Bring restaurant-quality food to your home with our convenient home catering services for intimate gatherings.",
//       features: [
//         "House Parties",
//         "Intimate Dinners",
//         "Festival Celebrations",
//         "Family Events"
//       ],
//       image:
//         "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop&crop=center",
//       popular: false
//     },
//     {
//       icon: Utensils,
//       title: "Specialty Menus",
//       description:
//         "Customized menu options including vegetarian, vegan, and special dietary requirements to suit all preferences.",
//       features: [
//         "Vegetarian Options",
//         "Vegan Dishes",
//         "Special Dietary Needs",
//         "Custom Recipes"
//       ],
//       image: "special.jpg",
//       popular: false
//     }
//   ];

//   return (
//     <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-20 animate-fade-in">
//           <Badge variant="secondary" className="mb-6 text-sm font-inter">
//             Our Services
//           </Badge>
//           <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-playfair leading-tight">
//             Comprehensive Catering Solutions
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed">
//             From intimate family gatherings to grand celebrations, we provide exceptional catering services
//             tailored to make your event memorable and stress-free.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               className="relative service-card-hover group overflow-hidden border-0 shadow-warm bg-white/80 backdrop-blur-sm"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {service.popular && (
//                 <Badge className="absolute -top-2 left-6 bg-accent text-accent-foreground z-20 font-inter font-semibold shadow-lg">
//                   Most Popular
//                 </Badge>
//               )}

//               {/* Service Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
//                 <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
//                   <service.icon className="h-5 w-5" />
//                 </div>
//               </div>

//               <CardHeader className="pb-4">
//                 <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors font-playfair">
//                   {service.title}
//                 </CardTitle>
//                 <p className="text-muted-foreground leading-relaxed font-inter">
//                   {service.description}
//                 </p>
//               </CardHeader>

//               <CardContent className="pt-0">
//                 <div className="space-y-3 mb-6">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center gap-3 text-sm">
//                       <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
//                       <span className="text-muted-foreground font-inter">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <Button
//                   variant="outline"
//                   className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 font-inter font-medium"
//                 >
//                   Learn More
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-20 animate-fade-in">
//           <Card className="bg-gradient-to-r from-primary via-primary-hover to-primary p-10 max-w-4xl mx-auto shadow-elegant overflow-hidden relative">
//             <div className="absolute inset-0 bg-warm-gradient opacity-20"></div>
//             <CardContent className="p-0 relative z-10">
//               <h3 className="text-3xl font-bold text-white mb-6 font-playfair">
//                 Ready to Plan Your Perfect Event?
//               </h3>
//               <p className="text-white/90 mb-8 text-lg font-inter leading-relaxed">
//                 Contact us today for a personalized consultation and let us create an unforgettable culinary experience for your special occasion.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold hover-lift"
//                 >
//                   Call Now:{" "}
//                   <span className="ml-2 animate-blink font-bold">
//                     {numbers[currentNumber]}
//                   </span>
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>

         
//           {/* <style jsx>{`
//             @keyframes blink {
//               0%, 100% { opacity: 1; }
//               50% { opacity: 0.3; }
//             }
//             .animate-blink {
//               animation: blink 1s infinite;
//             }
//           `}</style> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
// import { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Users,
//   Briefcase,
//   Heart,
//   GraduationCap,
//   Home,
//   Utensils,
//   ArrowRight
// } from "lucide-react";

// const Services = () => {
//   const [currentNumber, setCurrentNumber] = useState(0);
//   const numbers = ["+91-9831844313", "+91-9831650490", "+91-9830257520"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentNumber((prev) => (prev + 1) % numbers.length);
//     }, 2000); // change every 2 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const services = [
//     {
//       icon: Heart,
//       title: "Wedding Catering",
//       description:
//         "Make your special day unforgettable with our exquisite wedding catering services featuring traditional Bengali cuisine and international dishes.",
//       features: [
//         "Traditional Bengali Menu",
//         "Custom Menu Planning",
//         "Professional Service Staff",
//         "Elegant Presentation"
//       ],
//       image: "wedding.jpg",
//       popular: true
//     },
//     {
//       icon: Briefcase,
//       title: "Corporate Events",
//       description:
//         "Professional catering services for corporate meetings, conferences, and business gatherings with punctual service and quality food.",
//       features: [
//         "Business Lunch Packages",
//         "Conference Catering",
//         "Executive Dining",
//         "Flexible Timing"
//       ],
//       image: "coorporate.jpg",
//       popular: false
//     },
//     {
//       icon: Users,
//       title: "Social Gatherings",
//       description:
//         "Perfect catering solutions for birthday parties, anniversaries, family reunions, and other social celebrations.",
//       features: [
//         "Birthday Parties",
//         "Anniversary Celebrations",
//         "Family Reunions",
//         "Custom Decorations"
//       ],
//       image: "birthday.jpg",
//       popular: false
//     },
//     {
//       icon: GraduationCap,
//       title: "Educational Events",
//       description:
//         "Specialized catering for schools, colleges, and educational institutions with healthy and nutritious meal options.",
//       features: [
//         "School Events",
//         "College Functions",
//         "Educational Seminars",
//         "Healthy Meal Options"
//       ],
//       image: "hey.jpg",
//       popular: false
//     },
//     {
//       icon: Home,
//       title: "Home Catering",
//       description:
//         "Bring restaurant-quality food to your home with our convenient home catering services for intimate gatherings.",
//       features: [
//         "House Parties",
//         "Intimate Dinners",
//         "Festival Celebrations",
//         "Family Events"
//       ],
//       image:
//         "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop&crop=center",
//       popular: false
//     },
//     {
//       icon: Utensils,
//       title: "Specialty Menus",
//       description:
//         "Customized menu options including vegetarian, vegan, and special dietary requirements to suit all preferences.",
//       features: [
//         "Vegetarian Options",
//         "Vegan Dishes",
//         "Special Dietary Needs",
//         "Custom Recipes"
//       ],
//       image: "special.jpg",
//       popular: false
//     }
//   ];

//   return (
//     <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-20 animate-fade-in">
//           <Badge variant="secondary" className="mb-6 text-sm font-inter">
//             Our Services
//           </Badge>
//           <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-playfair leading-tight">
//             Comprehensive Catering Solutions
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed">
//             From intimate family gatherings to grand celebrations, we provide exceptional catering services
//             tailored to make your event memorable and stress-free.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               className="relative service-card-hover group overflow-hidden border-0 shadow-warm bg-white/80 backdrop-blur-sm"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {service.popular && (
//                 <Badge className="absolute top-2 left-6 bg-accent text-accent-foreground z-20 font-inter font-semibold shadow-lg">
//                   Most Popular
//                 </Badge>
//               )}

//               {/* Service Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
//                 <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
//                   <service.icon className="h-5 w-5" />
//                 </div>
//               </div>

//               <CardHeader className="pb-4">
//                 <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors font-playfair">
//                   {service.title}
//                 </CardTitle>
//                 <p className="text-muted-foreground leading-relaxed font-inter">
//                   {service.description}
//                 </p>
//               </CardHeader>

//               <CardContent className="pt-0">
//                 <div className="space-y-3 mb-6">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center gap-3 text-sm">
//                       <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
//                       <span className="text-muted-foreground font-inter">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* <Button
//                   variant="outline"
//                   className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 font-inter font-medium"
//                 >
//                   Learn More
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Button> */}
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-20 animate-fade-in">
//           <Card className="bg-gradient-to-r from-primary via-primary-hover to-primary p-10 max-w-4xl mx-auto shadow-elegant overflow-hidden relative">
//             <div className="absolute inset-0 bg-warm-gradient opacity-20"></div>
//             <CardContent className="p-0 relative z-10">
//               <h3 className="text-3xl font-bold text-white mb-6 font-playfair">
//                 Ready to Plan Your Perfect Event?
//               </h3>
//               <p className="text-white/90 mb-8 text-lg font-inter leading-relaxed">
//                 Contact us today for a personalized consultation and let us create an unforgettable culinary experience for your special occasion.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold hover-lift"
//                 >
//                   Call Now:{" "}
//                   <span className="ml-2 animate-pulse font-bold">
//                     {numbers[currentNumber]}
//                   </span>
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Briefcase,
  Heart,
  GraduationCap,
  Home,
  Utensils,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const numbers = ["+91-9831844313", "+91-9831650490", "+91-9830257520"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prev) => (prev + 1) % numbers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Heart,
      title: "Wedding Catering",
      description:
        "Make your special day unforgettable with our exquisite wedding catering services featuring traditional Bengali cuisine and international dishes.",
      features: [
        "Traditional Bengali Menu",
        "Custom Menu Planning",
        "Professional Service Staff",
        "Elegant Presentation"
      ],
      image: "wedding.jpg",
      popular: true
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "Professional catering services for corporate meetings, conferences, and business gatherings with punctual service and quality food.",
      features: [
        "Business Lunch Packages",
        "Conference Catering",
        "Executive Dining",
        "Flexible Timing"
      ],
      image: "coorporate.jpg",
      popular: false
    },
    {
      icon: Users,
      title: "Social Gatherings",
      description:
        "Perfect catering solutions for birthday parties, anniversaries, family reunions, and other social celebrations.",
      features: [
        "Birthday Parties",
        "Anniversary Celebrations",
        "Family Reunions",
        "Custom Decorations"
      ],
      image: "birthday.jpg",
      popular: false
    },
    {
      icon: GraduationCap,
      title: "Educational Events",
      description:
        "Specialized catering for schools, colleges, and educational institutions with healthy and nutritious meal options.",
      features: [
        "School Events",
        "College Functions",
        "Educational Seminars",
        "Healthy Meal Options"
      ],
      image: "hey.jpg",
      popular: false
    },
    {
      icon: Home,
      title: "Home Catering",
      description:
        "Bring restaurant-quality food to your home with our convenient home catering services for intimate gatherings.",
      features: [
        "House Parties",
        "Intimate Dinners",
        "Festival Celebrations",
        "Family Events"
      ],
      image:
        "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop&crop=center",
      popular: false
    },
    {
      icon: Utensils,
      title: "Specialty Menus",
      description:
        "Customized menu options including vegetarian, vegan, and special dietary requirements to suit all preferences.",
      features: [
        "Vegetarian Options",
        "Vegan Dishes",
        "Special Dietary Needs",
        "Custom Recipes"
      ],
      image: "special.jpg",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="secondary" className="mb-6 text-sm font-inter">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-playfair leading-tight">
            Comprehensive Catering Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed">
            From intimate family gatherings to grand celebrations, we provide exceptional catering services
            tailored to make your event memorable and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative service-card-hover group overflow-hidden border-0 shadow-warm bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <Badge className="absolute top-2 left-6 bg-accent text-accent-foreground z-20 font-inter font-semibold shadow-lg">
                  Most Popular
                </Badge>
              )}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors font-playfair">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed font-inter">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-muted-foreground font-inter">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
{/* Google Review Card */}
<div className="max-w-sm mx-auto mt-16">
  <Card className="bg-[#1a1a1a] text-white text-center py-8 px-6 shadow-xl border border-neutral-700 relative rounded-xl">
    <div className="flex justify-center mb-5">
      <img
        src="/google.png" // make sure the path is correct
        alt="Google Logo"
        className="w-16 h-16 object-contain"
      />
    </div>
    <p className="text-xl font-semibold mb-1">4.8 Star Rating</p>

    <div className="flex justify-center mt-2 mb-2">
      {[...Array(4)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.5 12.36 1 8.545l6.06-.88L10 2l2.94 5.665 6.06.88-4.5 3.816 1.378 5.73z" />
        </svg>
      ))}
      {/* Half star */}
      <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="half">
            <stop offset="80%" stopColor="currentColor" />
            <stop offset="80%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M10 15l-5.878 3.09L5.5 12.36 1 8.545l6.06-.88L10 2l2.94 5.665 6.06.88-4.5 3.816 1.378 5.73z"
          fill="url(#half)"
        />
      </svg>
    </div>
    <a href="https://g.co/kgs/KRuUgmq">
    <p className="text-yellow-400 font-semibold mb-1">30+ reviews</p>    
    </a>
    <p className="text-lg mt-1 font-bold">Google</p>

    <div className="absolute bottom-0 left-1.5 right-1.5 w-92 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
  </Card>
</div>
{/* Google Testimonials Section */}
<div className="mt-20">
  <div className="text-center mb-10">
    <h3 className="text-2xl md:text-3xl font-bold font-playfair text-primary mb-2">
      What Our Customers Say...
    </h3>
    <p className="text-muted-foreground max-w-2xl mx-auto text-base font-inter">
      Here are some of the latest Google reviews from our valued clients.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        name: "Ankit Biswas",
        date: "June 2024",
        avatar: "a.png",
        rating: 5,
        review:
          "I recently took service from them for my sister's wedding ceremony and their service was really fabulous. I got awesome review from each and every guest came in the event. In fact, I came to know that they personally took care of each and every guest so that they can have hot dishes for each and every item. Such service was really beyond our imagination. Thank you for such wonderful arrangements. I would recommend everyone to take their service for any kind of event. In fact, I would look forward to have service from your end to enjoy more unique and delicious cuisines.",
      },
      {
        name: "Sourav Dhar",
        date: "May 2024",
        avatar: "s.png",
        rating: 5,
        review:
          "We recently hired New Bhoj Caterer and Buro Da for our son’s rice ceremony, and the experience was truly delightful from start to finish. Right from the initial discussion on the menu to the actual event, everything was handled with care, professionalism, and a personal touch. They listened to all our requests and ensured every detail was looked after. The food was delicious and beautifully presented, and every guest complimented the homely yet festive feel of the dinner. Buro Da and his team made it feel like our guests had come to our home, not just a catered event – such warmth and hospitality! Highly recommended for anyone looking for authentic food, attentive service, and a truly memorable experience. Thank you for making our special day even more special!",
      },
      {
        name: "Amitava Dey",
        date: "April 2024",
        avatar: "a2.png",
        rating: 5,
        review:
          "I was absolutely thrilled with the catering services provided by The Bhoj Caterer for my wedding reception. The food was not only delicious and beautifully presented, but the staff were incredibly attentive and accommodating to all dietary needs. From the initial planning stages to the seamless execution on the day, they went above and beyond to make our event a huge success. A big thanks to Respected Bibhas Da for making our reception ceremony so enjoyable with their delicious food and efficient service. He was very responsive to our needs and made the whole process stress-free. Thank you The New Bhoj Caterer, Thank you Bibhas Da. I would highly recommend them to anyone looking for top-notch catering.",
      },
    ].map((review, index) => (
      <Card key={index} className="shadow-md border border-muted/20 p-6">
        <div className="flex items-center gap-4 mb-3">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-primary">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.date} via Google</p>
          </div>
        </div>
        {/* Star Rating */}
        <div className="flex items-center mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 mr-1 ${
                i < review.rating ? "text-yellow-400" : "text-muted"
              } fill-current`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09L5.5 12.36 1 8.545l6.06-.88L10 2l2.94 5.665 6.06.88-4.5 3.816 1.378 5.73z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{review.review}</p>
      </Card>
    ))}
  </div>
</div>



        <div className="text-center mt-20 animate-fade-in">
          <Card className="bg-gradient-to-r from-primary via-primary-hover to-primary p-10 max-w-4xl mx-auto shadow-elegant overflow-hidden relative">
            <div className="absolute inset-0 bg-warm-gradient opacity-20"></div>
            <CardContent className="p-0 relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6 font-playfair">
                Ready to Plan Your Perfect Event?
              </h3>
              <p className="text-white/90 mb-8 text-lg font-inter leading-relaxed">
                Contact us today for a personalized consultation and let us create an unforgettable culinary experience for your special occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold hover-lift"
                >
                  Call Now: <span className="ml-2 animate-pulse font-bold">{numbers[currentNumber]}</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
