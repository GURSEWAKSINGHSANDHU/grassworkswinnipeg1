import React from 'react';
import SEOHead from '../components/SEOHead';

export default function GalleryPage() {
  const galleryImages = [
    {
      title: "Professional Sodding",
      image: "https://i.ibb.co/tPTKTNLC/sod-installation-cost-hero-1.webp",
      description: "Expert sod installation for instant green lawns",
      size: "large"
    },
    {
      title: "Landscape Transformation",
      image: "https://i.ibb.co/PsVRdrJR/Sodding-Newmarket.jpg",
      description: "Creating beautiful, sustainable landscapes",
      size: "medium"
    },
    {
      title: "Lawn Care Excellence",
      image: "https://i.ibb.co/5WhhZj40/Ddv-Kx9s-Uw-AE1-M6l.jpg",
      description: "Maintaining pristine lawns year-round",
      size: "small"
    },
    {
      title: "Custom Landscaping",
      image: "https://i.ibb.co/HLZKqhV1/Sodding-Company-Newmarket-1024x768.jpg",
      description: "Tailored solutions for your outdoor space",
      size: "large"
    },
    {
      title: "Garden Maintenance",
      image: "https://i.ibb.co/hRq2SJfW/sod-4-1.jpg",
      description: "Professional garden care and maintenance",
      size: "medium"
    },
    {
      title: "Rock Garden Design",
      image: "https://i.ibb.co/sdGTv1N0/Di-Biase-Portfolio-of-Work-Landscaping-Front-Yard-River-Rock-Bed-4-Website-Banner.jpg",
      description: "Creative rock garden installations",
      size: "large"
    },
    {
      title: "Lawn Restoration",
      image: "https://www.fafard.ca/wp-content/uploads/2022/08/Fafard-reparer-reparation-pelouse-gazon-abime.jpg",
      description: "Bringing dead lawns back to life",
      size: "medium"
    },
    {
      title: "Professional Results",
      image: "https://i.ibb.co/ym5SnSYn/Whats-App-Image-2025-03-03-at-22-25-19-9ee80e01.jpg",
      description: "Quality workmanship in every project",
      size: "small"
    },
    {
      title: "Fertilization Services",
      image: "https://i.ibb.co/gZ0yQnxw/Fertilize.jpg",
      description: "Expert lawn fertilization programs",
      size: "large"
    },
    {
      title: "Weed Control",
      image: "https://i.ibb.co/s8bLnY6/garden-in-need-of-weeding-4-1.webp",
      description: "Effective weed management solutions",
      size: "medium"
    },
    {
      title: "Overgrown Weed Removal",
      image: "https://i.ibb.co/CpH87Qnc/AF1-Qip-Nj5z3-K9q30-Rnzl-ut-Qmx-l-HIc-YXV-i-F0-S97e2r-w3060-h4080.jpg",
      description: "Year-round lawn care services",
      size: "small"
    },
    {
      title: "Weed Removal",
      image: "https://i.ibb.co/Css1vRRQ/IMG-20230721-180901-05.jpg",
      description: "Comprehensive property improvements",
      size: "large"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Our Work Gallery | GrassWorks Winnipeg"
        description="Browse our gallery of lawn care projects in Winnipeg. See the quality and expertise we bring to every property we service."
        canonicalUrl="/gallery"
      />

      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#1e5631] mb-6">Our Work Gallery</h1>
            <p className="text-xl text-gray-600">
              Showcasing our commitment to excellence in lawn care
            </p>
          </div>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((item, index) => (
              <div 
                key={index} 
                className="break-inside-avoid-column bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative group">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover ${
                      item.size === 'large' ? 'h-96' :
                      item.size === 'medium' ? 'h-72' :
                      'h-56'
                    }`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#1e5631] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Lawn?</h2>
          <p className="text-xl mb-8">Let us help you achieve the lawn you've always wanted</p>
          <a 
            href="https://form.jotform.com/243613462309454"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4caf50] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#4caf50] transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </>
  );
}