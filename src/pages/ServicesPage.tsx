import React from 'react';
import SEOHead from '../components/SEOHead';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Phone } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "Professional Lawn Mowing in Winnipeg",
      description: "Expert lawn mowing services in Winnipeg with precise cutting techniques. We maintain your lawn at the ideal height for Manitoba's climate, ensuring healthy growth and a beautiful appearance year-round.",
      image: "https://images.unsplash.com/photo-1592420114353-99344882c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Winnipeg Lawn Aeration Services",
      description: "Professional lawn aeration services designed for Winnipeg's clay-rich soil. Our aeration service helps your lawn breathe, reducing soil compaction and promoting stronger root growth in Manitoba's unique climate.",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Expert Lawn Fertilization in Winnipeg",
      description: "Specialized fertilization treatments tailored for Winnipeg lawns. We use premium, climate-appropriate fertilizers to give your lawn the nutrients it needs to thrive in Manitoba's challenging weather conditions.",
      image: "https://images.unsplash.com/photo-1589923188900-85f5579e6cc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Winnipeg Weed Control Services",
      description: "Effective weed control solutions for common Manitoba weeds. Our targeted treatments eliminate dandelions, crabgrass, and other invasive plants while protecting your lawn's health.",
      image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Power Raking Services in Winnipeg",
      description: "Professional power raking service to remove thatch and prepare your Winnipeg lawn for the growing season. Essential for maintaining a healthy lawn in Manitoba's climate.",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Winnipeg Seasonal Lawn Maintenance",
      description: "Comprehensive seasonal lawn care services adapted for Winnipeg's weather. From spring cleanup to fall preparation, we keep your lawn healthy through Manitoba's distinct seasons.",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Winnipeg Lawn Care Services | Professional Lawn Maintenance"
        description="Expert lawn care services in Winnipeg including mowing, aeration, fertilization, and weed control. Local professionals serving Manitoba homeowners with quality lawn maintenance."
        canonicalUrl="/services"
      />

      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#1e5631] mb-6">Professional Lawn Care Services in Winnipeg</h1>
            <p className="text-xl text-gray-600">
              Trusted local experts providing comprehensive lawn care solutions for Winnipeg homeowners
            </p>
          </div>
        </div>
      </div>

      {/* Services Carousel */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1e5631] mb-12">Our Lawn Care Services</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-xl transition-shadow">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href="https://form.jotform.com/243613462309454"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#4caf50] text-white px-4 py-2 rounded-full text-center hover:bg-[#1e5631] transition-colors"
                      >
                        Get a Free Quote
                      </a>
                      <a 
                        href="tel:4387971777"
                        className="flex items-center justify-center gap-2 border border-[#4caf50] text-[#4caf50] px-4 py-2 rounded-full hover:bg-[#4caf50] hover:text-white transition-colors"
                      >
                        <Phone size={16} />
                        <span>Call for Details</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-[#1e5631]">Why Choose GrassWorks for Your Winnipeg Lawn?</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                As Winnipeg's premier lawn care service, we understand the unique challenges that Manitoba's climate presents to your lawn. From harsh winters to hot summers, our expert team delivers tailored solutions that keep your lawn healthy and beautiful year-round.
              </p>
              <p className="mb-4">
                Our comprehensive lawn care services are designed specifically for Winnipeg's soil conditions and weather patterns. We use locally-tested techniques and premium products to ensure your lawn receives the best possible care.
              </p>
              <p>
                Serving residential and commercial properties throughout Winnipeg and surrounding areas, we're committed to delivering professional, reliable, and affordable lawn care services that enhance the beauty and value of your property.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#1e5631] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Winnipeg Lawn?</h2>
          <p className="text-xl mb-8">Contact us today for a free, no-obligation quote</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://form.jotform.com/243613462309454"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4caf50] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#4caf50] transition-colors"
            >
              Get a Free Quote
            </a>
            <a 
              href="tel:4387971777"
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1e5631] transition-colors"
            >
              <Phone size={20} />
              <span>Call Us: 438-797-1777</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}