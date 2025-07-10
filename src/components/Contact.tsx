// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Clock, 
//   Send,
//   MessageSquare
// } from "lucide-react";

// const Contact = () => {
//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Phone Numbers",
//       details: ["+91-9831844313", "+91-9831650490", "+91-9830257520"],
//       description: "Call us anytime for immediate assistance"
//     },
//     {
//       icon: Mail,
//       title: "Email Address",
//       details: ["info@newbhojcaterers.com", "bookings@newbhojcaterers.com"],
//       description: "Send us your requirements via email"
//     },
//     {
//       icon: MapPin,
//       title: "Our Location", 
//       details: ["Meghnad Saha Sarani, New Barrakpur, Kolkata, West Bengal 700131"],
//       description: "Visit our office for detailed consultation"
//     },
//     {
//       icon: Clock,
//       title: "Working Hours",
//       details: ["Mon - Sun: 9:00 AM - 10:30 PM", "Except Thursdays"],
//       description: "We're here to serve you"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <Badge variant="secondary" className="mb-4">
//             Contact Us
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
//             Let's Plan Your Perfect Event
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Get in touch with us today to discuss your catering needs. Our team is ready to create
//             an unforgettable culinary experience for your special occasion.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div>
//             <h3 className="text-2xl font-bold text-primary mb-8">Get in Touch</h3>
            
//             <div className="grid sm:grid-cols-2 gap-6 mb-8">
//               {contactInfo.map((info, index) => (
//                 <Card key={index} className="hover:shadow-warm transition-shadow">
//                   <CardHeader className="pb-3">
//                     <div className="flex items-center gap-3">
//                       <div className="bg-accent text-accent-foreground p-2 rounded-lg">
//                         <info.icon className="h-5 w-5" />
//                       </div>
//                       <CardTitle className="text-lg">{info.title}</CardTitle>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="pt-0">
//                     {info.details.map((detail, idx) => (
//                       <p key={idx} className="font-medium text-primary mb-1">
//                         {detail}
//                       </p>
//                     ))}
//                     <p className="text-sm text-muted-foreground mt-2">
//                       {info.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Quick Message */}
//             <Card className="bg-primary text-primary-foreground">
//               <CardContent className="p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="bg-accent text-accent-foreground p-2 rounded-lg">
//                     <MessageSquare className="h-5 w-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
//                     <p className="text-primary-foreground/90 text-sm">
//                       We typically respond to all inquiries within 2 hours during business hours.
//                       For urgent requests, please call us directly.
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <Card className="shadow-warm">
//               <CardHeader>
//                 <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
//                 <p className="text-muted-foreground">
//                   Fill out the form below and we'll get back to you with a personalized quote.
//                 </p>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm font-medium text-primary mb-2 block">
//                       Your Name *
//                     </label>
//                     <Input placeholder="Enter your full name" />
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium text-primary mb-2 block">
//                       Phone Number *
//                     </label>
//                     <Input placeholder="Your contact number" />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="text-sm font-medium text-primary mb-2 block">
//                     Email Address *
//                   </label>
//                   <Input type="email" placeholder="your.email@example.com" />
//                 </div>
                
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm font-medium text-primary mb-2 block">
//                       Event Type
//                     </label>
//                     <Input placeholder="Wedding, Corporate, etc." />
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium text-primary mb-2 block">
//                       Event Date
//                     </label>
//                     <Input type="date" />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="text-sm font-medium text-primary mb-2 block">
//                     Number of Guests
//                   </label>
//                   <Input placeholder="Approximate number of people" />
//                 </div>
                
//                 <div>
//                   <label className="text-sm font-medium text-primary mb-2 block">
//                     Additional Details
//                   </label>
//                   <Textarea 
//                     placeholder="Tell us about your event requirements, dietary preferences, special requests, etc." 
//                     rows={4}
//                   />
//                 </div>
                
//                 <Button variant="hero" size="lg" className="w-full">
//                   <Send className="mr-2 h-5 w-5" />
//                   Send Message & Get Quote
//                 </Button>
                
//                 <p className="text-xs text-muted-foreground text-center">
//                   By submitting this form, you agree to our terms and conditions.
//                   We respect your privacy and will never share your information.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   MessageSquare,
// } from "lucide-react";

// const Contact = () => {
//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Phone Numbers",
//       details: ["+91-9831844313(Amit)", "+91-9831650490(Bivash)", "+91-9830257520(Sanjay)"],
//       description: "Call us anytime for immediate assistance",
//     },
//     {
//       icon: Mail,
//       title: "Email Address",
//       details: ["a.sengupta1975@gmail.com"],
//       description: "Send us your requirements via email",
//     },
//     {
//       icon: MapPin,
//       title: "Our Location",
//       details: [
//         "Meghnad Saha Sarani, New Barrakpur, Kolkata, West Bengal 700131",
//       ],
//       description: "Visit our office for detailed consultation",
//     },
//     {
//       icon: Clock,
//       title: "Working Hours",
//       details: ["Mon - Sun: 9:00 AM - 10:30 PM", "Except Thursdays"],
//       description: "We're here to serve you",
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <Badge variant="secondary" className="mb-4">
//             Contact Us
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
//             Let's Plan Your Perfect Event
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Get in touch with us today to discuss your catering needs. Our team
//             is ready to create an unforgettable culinary experience for your
//             special occasion.
//           </p>
//         </div>

//         {/* Contact Information Full Width */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {contactInfo.map((info, index) => (
//             <Card key={index} className="hover:shadow-warm transition-shadow h-full">
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className="bg-accent text-accent-foreground p-2 rounded-lg">
//                     <info.icon className="h-5 w-5" />
//                   </div>
//                   <CardTitle className="text-lg">{info.title}</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 {info.details.map((detail, idx) => (
//                   <p key={idx} className="font-medium text-primary mb-1">
//                     {detail}
//                   </p>
//                 ))}
//                 <p className="text-sm text-muted-foreground mt-2">
//                   {info.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Quick Message Card */}
//         <div className="max-w-4xl mx-auto">
//           <Card className="bg-primary text-primary-foreground">
//             <CardContent className="p-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-accent text-accent-foreground p-2 rounded-lg">
//                   <MessageSquare className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2">
//                     Quick Response Guarantee
//                   </h4>
//                   <p className="text-primary-foreground/90 text-sm">
//                     We typically respond to all inquiries within 2 hours during
//                     business hours. For urgent requests, please call us
//                     directly.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   MessageSquare,
// } from "lucide-react";

// const Contact = () => {
//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Phone Numbers",
//       details: ["+91-9831844313 (Amit)", "+91-9831650490 (Bivash)", "+91-9830257520 (Sanjay)"],
//       description: "Call us anytime for immediate assistance",
//     },
//     {
//       icon: Mail,
//       title: "Email Address",
//       details: ["a.sengupta1975@gmail.com"],
//       description: "Send us your requirements via email",
//     },
//     {
//       icon: Clock,
//       title: "Working Hours",
//       details: ["Mon - Sun: 9:00 AM - 10:30 PM", "Except Thursdays"],
//       description: "We're here to serve you",
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <Badge variant="secondary" className="mb-4">
//             Contact Us
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
//             Let's Plan Your Perfect Event
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Get in touch with us today to discuss your catering needs. Our team
//             is ready to create an unforgettable culinary experience for your
//             special occasion.
//           </p>
//         </div>

//         {/* Top Contact Info: Phone, Email, Hours */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {contactInfo.map((info, index) => (
//             <Card key={index} className="hover:shadow-warm transition-shadow h-full">
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className="bg-accent text-accent-foreground p-2 rounded-lg">
//                     <info.icon className="h-5 w-5" />
//                   </div>
//                   <CardTitle className="text-lg">{info.title}</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 {info.details.map((detail, idx) => (
//                   <p key={idx} className="font-medium text-primary mb-1">
//                     {detail}
//                   </p>
//                 ))}
//                 <p className="text-sm text-muted-foreground mt-2">
//                   {info.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Location Card */}
//         <div className="max-w-3xl mx-auto mb-12">
//           <Card className="hover:shadow-warm transition-shadow h-full">
//             <CardHeader className="pb-3">
//               <div className="flex items-center gap-3">
//                 <div className="bg-accent text-accent-foreground p-2 rounded-lg">
//                   <MapPin className="h-5 w-5" />
//                 </div>
//                 <CardTitle className="text-lg">Our Location</CardTitle>
//               </div>
//             </CardHeader>
//             <CardContent className="pt-0 space-y-3">
//               <p className="font-medium text-primary">
//                 Meghnad Saha Sarani, New Barrackpore, Kolkata, West Bengal 700131
//               </p>
//               <p className="text-sm text-muted-foreground">
//                 Visit our office for detailed consultation
//               </p>
//               <div className="rounded-lg overflow-hidden">
//                 <iframe
//                   title="Google Map Location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.054521492115!2d88.44719889999999!3d22.6890142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f23835e6ad7%3A0x2d5be70a5785b4dc!2sNew%20Bhoj%20Caterers!5e0!3m2!1sen!2sin!4v1752129049599!5m2!1sen!2sin"
//                   width="100%"
//                   height="250"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Quick Message Card */}
//         <div className="max-w-4xl mx-auto">
//           <Card className="bg-primary text-primary-foreground">
//             <CardContent className="p-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-accent text-accent-foreground p-2 rounded-lg">
//                   <MessageSquare className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
//                   <p className="text-primary-foreground/90 text-sm">
//                     We typically respond to all inquiries within 2 hours during
//                     business hours. For urgent requests, please call us directly.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91-9831844313 (Amit)",
        "+91-9831650490 (Bivash)",
        "+91-9830257520 (Sanjay)",
      ],
      description: "Call us anytime for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["a.sengupta1975@gmail.com"],
      description: "Send us your requirements via email",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sun: 9:00 AM - 10:30 PM", "Except Thursdays"],
      description: "We're here to serve you",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Let's Plan Your Perfect Event
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us today to discuss your catering needs. Our team
            is ready to create an unforgettable culinary experience for your
            special occasion.
          </p>
        </div>

        {/* 📩 Booking Form */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-md border-muted/40">
            <CardHeader>
              <CardTitle className="text-xl">Book a Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formspree.io/f/xwpbgvbk"
                method="POST"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="border border-muted rounded-md px-3 py-2 text-sm"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="border border-muted rounded-md px-3 py-2 text-sm"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91-9876543210"
                    className="border border-muted rounded-md px-3 py-2 text-sm"
                    required
                  />
                </div>

                {/* Event Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="event" className="text-sm font-medium text-muted-foreground">
                    Event Type
                  </label>
                  <select
                    id="event"
                    name="event"
                    className="border border-muted rounded-md px-3 py-2 text-sm"
                    required
                  >
                    <option value="">Select an event</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Festival">Festival</option>
                    <option value="Birthday">Birthday / Personal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                    Message / Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your event or catering requirements..."
                    className="border border-muted rounded-md px-3 py-2 text-sm"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="col-span-1 md:col-span-2">
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="hover:shadow-warm transition-shadow h-full"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="font-medium text-primary mb-1">
                    {detail}
                  </p>
                ))}
                <p className="text-sm text-muted-foreground mt-2">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Map */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="hover:shadow-warm transition-shadow h-full">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Our Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <p className="font-medium text-primary">
                Meghnad Saha Sarani, New Barrackpore, Kolkata, West Bengal 700131
              </p>
              <p className="text-sm text-muted-foreground">
                Visit our office for detailed consultation
              </p>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.054521492115!2d88.44719889999999!3d22.6890142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f23835e6ad7%3A0x2d5be70a5785b4dc!2sNew%20Bhoj%20Caterers!5e0!3m2!1sen!2sin!4v1752129049599!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Response Note */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Quick Response Guarantee
                  </h4>
                  <p className="text-primary-foreground/90 text-sm">
                    We typically respond to all inquiries within 2 hours during
                    business hours. For urgent requests, please call us directly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
