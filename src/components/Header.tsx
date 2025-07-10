
// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Phone, Mail, Menu, X, MessageCircle } from "lucide-react";

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const navItems = [
// //     { label: "About Us", href: "#about" },
// //     { label: "Services", href: "#services" },
// //     { label: "Gallery", href: "#gallery" },
// //     { label: "Contact", href: "#contact" },
// //   ];

// //   return (
// //     <header className="bg-background/95 backdrop-blur-md shadow-elegant sticky top-0 z-50 border-b border-border/50">
// //       {/* Top bar with contact info */}
// //       <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-3">
// //         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
// //           <div className="flex items-center gap-8">
// //             <div className="flex items-center gap-2 hover:text-accent transition-colors">
// //               <Phone className="h-4 w-4" />
// //               <span className="font-medium">+91-9876543210</span>
// //             </div>
// //             <div className="flex items-center gap-2 hover:text-accent transition-colors">
// //               <Mail className="h-4 w-4" />
// //               <span className="font-medium">info@newbhojcaterers.com</span>
// //             </div>
// //           </div>
// //           <div className="hidden md:block">
// //             <span className="font-playfair italic">Serving with Excellence Since 2002</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main navigation */}
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="flex justify-between items-center h-20">
// //           {/* Logo */}
// //           {/* <div className="flex items-center group">
// //             <div className="bg-warm-gradient text-white p-4 rounded-2xl shadow-warm group-hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
// //               <span className="font-bold text-2xl font-playfair">NB</span>
// //             </div>
// //             <div className="ml-4">
// //               <h1 className="text-2xl font-bold text-primary font-playfair group-hover:text-accent transition-colors">
// //                 New Bhoj Caterers
// //               </h1>
// //               <p className="text-sm text-muted-foreground font-inter">Premium Catering Services</p>
// //             </div>
// //           </div> */}
// //           <div className="flex items-center w-32 h-32"> 
// //             <a href="#">
// //               <img src="logo.png" alt="logo" />
// //             </a>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden md:flex items-center space-x-10">
// //             {navItems.map((item) => (
// //               <a
// //                 key={item.label}
// //                 href={item.href}
// //                 className="relative text-foreground hover:text-primary transition-all duration-300 font-medium font-inter group py-2"
// //               >
// //                 {item.label}
// //                 <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
// //               </a>
// //             ))}
// //           </nav>

// //           {/* CTA Button & Mobile Menu */}
// //           <div className="flex items-center gap-4">
// //             <Button 
// //               variant="hero" 
// //               size="lg" 
// //               className="hidden sm:inline-flex font-inter font-semibold px-8 hover:scale-105 transition-transform duration-300"
// //             >
// //               Get Quote
// //             </Button>
            
// //             {/* Mobile menu button */}
// //             <button
// //               className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             >
// //               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isMenuOpen && (
// //           <div className="md:hidden pb-6 animate-slide-up">
// //             <div className="glass-morphism rounded-2xl p-6 mx-2">
// //               <nav className="flex flex-col space-y-4">
// //                 {navItems.map((item) => (
// //                   <a
// //                     key={item.label}
// //                     href={item.href}
// //                     className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300 font-medium"
// //                     onClick={() => setIsMenuOpen(false)}
// //                   >
// //                     {item.label}
// //                   </a>
// //                 ))}
// //                 {/* <div className="pt-4">
// //                   <Button variant="hero" size="lg" className="w-full font-semibold">
// //                     Get Quote
// //                   </Button>
// //                 </div> */}
                

// //               </nav>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Phone, Mail, Menu, X } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp Icon

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { label: "About Us", href: "#about" },
//     { label: "Services", href: "#services" },
//     { label: "Gallery", href: "#gallery" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <header className="bg-background/95 backdrop-blur-md shadow-elegant sticky top-0 z-50 border-b border-border/50">
//       {/* Top bar with contact info */}
//       <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-3">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
//           <div className="flex items-center gap-8">
//             <div className="flex items-center gap-2 hover:text-accent transition-colors">
//               <span className="font-medium">We assure Quality, Quantity and Reliability.</span>
//             </div>
//             {/* <div className="flex items-center gap-2 hover:text-accent transition-colors">
//               <Mail className="h-4 w-4" />
//               <span className="font-medium">info@newbhojcaterers.com</span>
//             </div> */}
//           </div>
//           {/* <div className="hidden md:block">
//             <span className="font-playfair italic">Serving with Excellence Since 2002</span>
//           </div> */}
//         </div>
//       </div>

//       {/* Main navigation */}
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex items-center w-32 h-32">
//             <a href="#">
//               <img src="logo.png" alt="logo" />
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-10">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="relative text-foreground hover:text-primary transition-all duration-300 font-medium font-inter group py-2"
//               >
//                 {item.label}
//                 <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//               </a>
//             ))}
//           </nav>

//           {/* ✅ WhatsApp Button & Mobile Menu */}
//           <div className="flex items-center gap-4">
//             <a 
//               href="https://wa.me/+919831844313" // Replace with actual WhatsApp number
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               <Button 
//                 variant="hero" 
//                 size="lg" 
//                 className="hidden sm:inline-flex font-inter font-semibold px-8 hover:scale-105 transition-transform duration-300 bg-green-600 hover:bg-green-700 text-white"
//               >
//                 <FaWhatsapp className="w-5 h-5 mr-2" />
//                 WhatsApp
//               </Button>
//             </a>

//             {/* Mobile menu button */}
//             <button
//               className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden pb-6 animate-slide-up">
//             <div className="glass-morphism rounded-2xl p-6 mx-2">
//               <nav className="flex flex-col space-y-4">
//                 {navItems.map((item) => (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300 font-medium"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.label}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp Icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md shadow-elegant sticky top-0 z-50 border-b border-border/50">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center text-sm">
          <div className="flex items-center gap-2 hover:text-accent transition-colors">
            <span className="font-medium italic">
              We assure quality, quantity and reliability.
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center w-32 h-32">
            <a href="#">
              <img src="logo.png" alt="logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-medium font-inter group py-2"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </nav>

          {/* ✅ WhatsApp Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/+919831844313" // Replace with actual WhatsApp number
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="hidden sm:inline-flex font-inter font-semibold px-8 hover:scale-105 transition-transform duration-300 bg-green-600 hover:bg-green-700 text-white"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-slide-up">
            <div className="glass-morphism rounded-2xl p-6 mx-2">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
