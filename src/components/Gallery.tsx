
// // import { useState } from "react";
// // import { Card } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { X, ChevronLeft, ChevronRight } from "lucide-react";

// // const Gallery = () => {
// //   const [selectedImage, setSelectedImage] = useState<number | null>(null);

// //   const galleryImages = [
// //     {
// //       id: 1,
// //       src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop&crop=center",
// //       alt: "Wedding banquet setup",
// //       category: "Wedding",
// //       title: "Elegant Wedding Reception"
// //     },
// //     {
// //       id: 2,
// //       src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=center",
// //       alt: "Traditional Bengali thali",
// //       category: "Bengali Cuisine",
// //       title: "Authentic Bengali Thali"
// //     },
// //     {
// //       id: 3,
// //       src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center",
// //       alt: "Corporate event catering",
// //       category: "Corporate",
// //       title: "Corporate Event Setup"
// //     },
// //     {
// //       id: 4,
// //       src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&crop=center",
// //       alt: "Gourmet appetizers",
// //       category: "Appetizers",
// //       title: "Gourmet Appetizer Selection"
// //     },
// //     {
// //       id: 5,
// //       src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&crop=center",
// //       alt: "Dessert presentation",
// //       category: "Desserts",
// //       title: "Premium Dessert Display"
// //     },
// //     {
// //       id: 6,
// //       src: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=600&h=400&fit=crop&crop=center",
// //       alt: "Buffet arrangement",
// //       category: "Buffet",
// //       title: "Grand Buffet Setup"
// //     },
// //     {
// //       id: 7,
// //       src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop&crop=center",
// //       alt: "Festival catering",
// //       category: "Festival",
// //       title: "Festival Celebration Catering"
// //     },
// //     {
// //       id: 8,
// //       src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop&crop=center",
// //       alt: "Fine dining setup",
// //       category: "Fine Dining",
// //       title: "Luxury Fine Dining Experience"
// //     }
// //   ];

// //   const categories = ["All", "Wedding", "Corporate", "Bengali Cuisine", "Festival"];
// //   const [activeCategory, setActiveCategory] = useState("All");

// //   const filteredImages = activeCategory === "All" 
// //     ? galleryImages 
// //     : galleryImages.filter(img => img.category === activeCategory);

// //   const openLightbox = (index: number) => {
// //     setSelectedImage(index);
// //   };

// //   const closeLightbox = () => {
// //     setSelectedImage(null);
// //   };

// //   const nextImage = () => {
// //     if (selectedImage !== null) {
// //       setSelectedImage((selectedImage + 1) % filteredImages.length);
// //     }
// //   };

// //   const prevImage = () => {
// //     if (selectedImage !== null) {
// //       setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
// //     }
// //   };

// //   return (
// //     <section id="gallery" className="py-24 bg-gradient-to-b from-background to-muted/30">
// //       <div className="max-w-7xl mx-auto px-4">
// //         {/* Section Header */}
// //         <div className="text-center mb-16 animate-fade-in">
// //           <Badge variant="secondary" className="mb-6 text-sm font-inter">
// //             Our Gallery
// //           </Badge>
// //           <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-playfair leading-tight">
// //             Our Previous Work
// //           </h2>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
// //             Take a look at some of our finest catering work and see how we bring culinary excellence to every event.
// //           </p>
// //         </div>

// //         {/* Category Filter */}
// //         <div className="flex flex-wrap justify-center gap-4 mb-12">
// //           {categories.map((category) => (
// //             <Button
// //               key={category}
// //               variant={activeCategory === category ? "default" : "outline"}
// //               onClick={() => setActiveCategory(category)}
// //               className="font-inter font-medium hover-lift"
// //             >
// //               {category}
// //             </Button>
// //           ))}
// //         </div>

// //         {/* Gallery Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //           {filteredImages.map((image, index) => (
// //             <Card 
// //               key={image.id}
// //               className="group overflow-hidden cursor-pointer hover-lift border-0 shadow-warm"
// //               onClick={() => openLightbox(index)}
// //             >
// //               <div className="relative overflow-hidden">
// //                 <img
// //                   src={image.src}
// //                   alt={image.alt}
// //                   className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                 <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
// //                   <Badge variant="secondary" className="mb-2 text-xs">
// //                     {image.category}
// //                   </Badge>
// //                   <h3 className="font-playfair font-semibold text-lg leading-tight">
// //                     {image.title}
// //                   </h3>
// //                 </div>
// //               </div>
// //             </Card>
// //           ))}
// //         </div>

// //         {/* Lightbox */}
// //         {selectedImage !== null && (
// //           <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
// //             <div className="relative max-w-6xl max-h-full">
// //               <img
// //                 src={filteredImages[selectedImage].src}
// //                 alt={filteredImages[selectedImage].alt}
// //                 className="max-w-full max-h-full object-contain"
// //               />
              
// //               {/* Close button */}
// //               <Button
// //                 variant="outline"
// //                 size="icon"
// //                 className="absolute top-4 right-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
// //                 onClick={closeLightbox}
// //               >
// //                 <X className="h-4 w-4" />
// //               </Button>

// //               {/* Navigation buttons */}
// //               <Button
// //                 variant="outline"
// //                 size="icon"
// //                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
// //                 onClick={prevImage}
// //               >
// //                 <ChevronLeft className="h-4 w-4" />
// //               </Button>

// //               <Button
// //                 variant="outline"
// //                 size="icon"
// //                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
// //                 onClick={nextImage}
// //               >
// //                 <ChevronRight className="h-4 w-4" />
// //               </Button>

// //               {/* Image info */}
// //               <div className="absolute bottom-4 left-4 right-4 text-center text-white">
// //                 <Badge variant="secondary" className="mb-2">
// //                   {filteredImages[selectedImage].category}
// //                 </Badge>
// //                 <h3 className="font-playfair text-xl font-semibold">
// //                   {filteredImages[selectedImage].title}
// //                 </h3>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Gallery;
// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);

//   const galleryImages = [
//     {
//       id: 1,
//       src: "1.jpg",
//       alt: "Wedding banquet setup",
//       category: "Wedding",
//       title: "Elegant Wedding Reception"
//     },
//     {
//       id: 2,
//       src: "2.png",
//       alt: "Traditional Bengali thali",
//       category: "Bengali Cuisine",
//       title: "Authentic Bengali Thali"
//     },
//     {
//       id: 3,
//       src: "3.png",
//       alt: "Corporate event catering",
//       category: "Corporate",
//       title: "Corporate Event Setup"
//     },
//     {
//       id: 4,
//       src: "4.png",
//       alt: "Gourmet appetizers",
//       category: "Appetizers",
//       title: "Gourmet Appetizer Selection"
//     },
//     {
//       id: 5,
//       src: "5.png",
//       alt: "Dessert presentation",
//       category: "Desserts",
//       title: "Premium Dessert Display"
//     },
//     {
//       id: 6,
//       src: "6.jpeg",
//       alt: "Buffet arrangement",
//       category: "Buffet",
//       title: "Grand Buffet Setup"
//     },
//     {
//       id: 7,
//       src: "7.png",
//       alt: "Festival catering",
//       category: "Festival",
//       title: "Festival Celebration Catering"
//     },
//     {
//       id: 8,
//       src: "8.png",
//       alt: "Fine dining setup",
//       category: "Fine Dining",
//       title: "Luxury Fine Dining Experience"
//     }
//   ];

//   const openLightbox = (index: number) => {
//     setSelectedImage(index);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   const nextImage = () => {
//     if (selectedImage !== null) {
//       setSelectedImage((selectedImage + 1) % galleryImages.length);
//     }
//   };

//   const prevImage = () => {
//     if (selectedImage !== null) {
//       setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
//     }
//   };

//   return (
//     <section id="gallery" className="py-24 bg-gradient-to-b from-background to-muted/30">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <Badge variant="secondary" className="mb-6 text-sm font-inter">
//             Our Gallery
//           </Badge>
//           <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-playfair leading-tight">
//             Our Previous Work
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
//             Take a look at some of our finest catering work and see how we bring culinary excellence to every event.
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {galleryImages.map((image, index) => (
//             <Card
//               key={image.id}
//               className="group overflow-hidden cursor-pointer hover-lift border-0 shadow-warm"
//               onClick={() => openLightbox(index)}
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                   <Badge variant="secondary" className="mb-2 text-xs">
//                     {image.category}
//                   </Badge>
//                   <h3 className="font-playfair font-semibold text-lg leading-tight">
//                     {image.title}
//                   </h3>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>

//         {/* Lightbox */}
//         {selectedImage !== null && (
//           <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//             <div className="relative max-w-6xl max-h-full">
//               <img
//                 src={galleryImages[selectedImage].src}
//                 alt={galleryImages[selectedImage].alt}
//                 className="max-w-full max-h-full object-contain"
//               />

//               {/* Close button */}
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="absolute top-4 right-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
//                 onClick={closeLightbox}
//               >
//                 <X className="h-4 w-4" />
//               </Button>

//               {/* Navigation buttons */}
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
//                 onClick={prevImage}
//               >
//                 <ChevronLeft className="h-4 w-4" />
//               </Button>

//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
//                 onClick={nextImage}
//               >
//                 <ChevronRight className="h-4 w-4" />
//               </Button>

//               {/* Image info */}
//               <div className="absolute bottom-4 left-4 right-4 text-center text-white">
//                 <Badge variant="secondary" className="mb-2">
//                   {galleryImages[selectedImage].category}
//                 </Badge>
//                 <h3 className="font-playfair text-xl font-semibold">
//                   {galleryImages[selectedImage].title}
//                 </h3>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Gallery;
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const galleryItems = [
    {
      id: 1,
      src: "1.jpg",
      alt: "Wedding banquet setup",
      category: "Wedding",
      title: "Elegant Wedding Reception",
      type: "image"
    },
    {
      id: 2,
      src: "2.png",
      alt: "Traditional Bengali thali",
      category: "Bengali Cuisine",
      title: "Authentic Bengali Thali",
      type: "image"
    },
    {
      id: 3,
      src: "3.png",
      alt: "Corporate event catering",
      category: "Corporate",
      title: "Corporate Event Setup",
      type: "image"
    },
    {
      id: 4,
      src: "4.png",
      alt: "Gourmet appetizers",
      category: "Appetizers",
      title: "Gourmet Appetizer Selection",
      type: "image"
    },
    {
      id: 5,
      src: "5.png",
      alt: "Dessert presentation",
      category: "Desserts",
      title: "Premium Dessert Display",
      type: "image"
    },
    {
      id: 6,
      src: "6.jpeg",
      alt: "Buffet arrangement",
      category: "Buffet",
      title: "Grand Buffet Setup",
      type: "image"
    },
    {
      id: 7,
      src: "7.png",
      alt: "Festival catering",
      category: "Festival",
      title: "Festival Celebration Catering",
      type: "image"
    },
    {
      id: 8,
      src: "8.png",
      alt: "Fine dining setup",
      category: "Fine Dining",
      title: "Luxury Fine Dining Experience",
      type: "image"
    },
    {
      id: 9,
      src: "9.jpeg",
      alt: "Excellent Service Crew",
      category: "Excellent Service Crew",
      title: "Experience the best service",
      type: "image"
    },
    {
      id: 10,
      src: "10.png",
      alt: "Fine dining setup",
      category: "Delicious Cuisines",
      title: "Top quality cuisines",
      type: "image"
    },
    {
      id: 11,
      src: "11.png",
      alt: "Fine dining setup",
      category: "Exquisite Beverage",
      title: "Luxury Fine Dining Experience",
      type: "image"
    },
    {
      id: 12,
      src: "12.png",
      alt: "Fine dining setup",
      category: "Fine Dining",
      title: "Luxury Fine Dining Experience",
      type: "image"
    },
    {
      id: 13,
      src: "promo1.mp4",
      alt: "Behind the scenes",
      category: "Promo",
      title: "Our Process Behind the Scenes",
      type: "video"
    },
    {
      id: 14,
      src: "event-highlight.mp4",
      alt: "Event Highlight Reel",
      category: "Events",
      title: "Event Highlight Reel",
      type: "video"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  // Autoplay videos on scroll into view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video) => {
      if (video) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              video.play();
            } else {
              video.pause();
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(video);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-6 text-sm font-inter">
            Our Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-playfair leading-tight">
            Our Previous Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            Take a look at some of our finest catering work and see how we bring culinary excellence to every event.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden cursor-pointer hover-lift border-0 shadow-warm"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                {item.type === "video" ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.src}
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="font-playfair font-semibold text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              {galleryItems[selectedImage].type === "video" ? (
                <video
                  src={galleryItems[selectedImage].src}
                  className="max-w-full max-h-full object-contain"
                  autoPlay
                  controls
                  muted
                  loop
                />
              ) : (
                <img
                  src={galleryItems[selectedImage].src}
                  alt={galleryItems[selectedImage].alt}
                  className="max-w-full max-h-full object-contain"
                />
              )}

              {/* Close button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                <Badge variant="secondary" className="mb-2">
                  {galleryItems[selectedImage].category}
                </Badge>
                <h3 className="font-playfair text-xl font-semibold">
                  {galleryItems[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
