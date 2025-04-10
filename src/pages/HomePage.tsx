import React, { useEffect } from 'react';
import { Sprout, Phone, Star, Users, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const featuredImages = [
    {
      image: "https://i.ibb.co/tPTKTNLC/sod-installation-cost-hero-1.webp",
      title: "Professional Sodding"
    },
    {
      image: "https://i.ibb.co/PsVRdrJR/Sodding-Newmarket.jpg",
      title: "Landscape Design"
    },
    {
      image: "https://i.ibb.co/5WhhZj40/Ddv-Kx9s-Uw-AE1-M6l.jpg",
      title: "Lawn Maintenance"
    },
    {
      image: "https://i.ibb.co/HLZKqhV1/Sodding-Company-Newmarket-1024x768.jpg",
      title: "All Kind Of Yard Work"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Professional Lawn Care Services"
        description="GrassWorks Winnipeg provides professional, reliable, and affordable lawn care services. Expert lawn maintenance, aeration, and seasonal care in Winnipeg.formly grassguruwinnipeg 4312941043"
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              Winnipeg's Trusted Lawn Care Experts
            </h1>
            <a 
              href="tel:4387971777"
              className="inline-flex items-center space-x-2 bg-[#4caf50] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1e5631] transition-colors mb-6"
            >
              <Phone size={20} />
              <span>Call Now: 438-797-1777</span>
            </a>
            <p className="text-xl mb-8">
              Reliable. Affordable. Professional.
            </p>
            <a 
              href="https://form.jotform.com/243613462309454"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4caf50] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1e5631] transition-colors inline-flex items-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <Sprout size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#1e5631] mb-4">Our Track Record of Excellence</h2>
            <p className="text-xl text-center text-gray-600 mb-12">Stats don't lie</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Star className="w-12 h-12 text-[#4caf50]" />
                </div>
                <div className="text-4xl font-bold text-[#1e5631]">40+</div>
                <div className="text-gray-600">Five star reviews</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-[#4caf50]" />
                </div>
                <div className="text-4xl font-bold text-[#1e5631]">400+</div>
                <div className="text-gray-600">Customers served</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-[#4caf50]" />
                </div>
                <div className="text-4xl font-bold text-[#1e5631]">5000+</div>
                <div className="text-gray-600">Service Appointments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1e5631] mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredImages.map((item, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-semibold p-6">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the existing sections */}
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#1e5631]">Welcome to GrassWorks Winnipeg</h2>
            <p className="text-lg text-gray-700 mb-8">
              Serving Winnipeg homeowners for over 3 years (formerly Grass Guru Winnipeg), 
              we understand the unique challenges of Winnipeg lawns. Our commitment to excellence 
              and customer satisfaction has made us the preferred choice for lawn care services 
              in the community.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1e5631]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Lawn Mowing',
                description: 'Regular maintenance for a perfectly manicured lawn',
                image: 'https://media.istockphoto.com/id/166736424/photo/mowing-the-grass.jpg?s=612x612&w=0&k=20&c=Bt91WCdmICMIO19uL9q2ijTOgtf-wPtIIU7hJ-stcf8='
              },
              {
                title: 'Aeration',
                description: 'Improve soil health and grass root growth',
                image: 'https://i.ibb.co/9Mcz07Y/Core-Aeration-1024x683.jpg'
              },
              {
                title: 'Fertilization',
                description: 'Nutrient-rich solutions for a greener lawn',
                image: 'https://framerusercontent.com/images/mBO6maoKQrRACyzS4Y2WljpteM.webp?scale-down-to=1024'
              },
              {
                title: 'Weed Control',
                description: 'Effective treatment for common lawn weeds',
                image: 'https://i.ibb.co/6cRM05kF/weed-control-services-in-winnipeg.jpg'
              },
              {
                title: 'Power Raking',
                description: 'Remove thatch for healthier grass growth',
                image: 'https://i.ibb.co/Gfq9YP2n/homeguide-lawn-dethatching-with-an-electric-dethatcher.jpg'
              },
              {
                title: 'Seasonal Cleanups',
                description: 'Comprehensive care for every season',
                image: 'https://i.ibb.co/xSxhvQXn/rake-leaves-460503846-1500x844.jpg'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a 
                    href="https://form.jotform.com/243613462309454"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4caf50] font-semibold hover:text-[#1e5631] transition-colors"
                  >
                    Get a Free Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1e5631]">What Our Clients Say</h2>
          <div className="elfsight-app-8601fc27-482f-4765-8cd9-a5e4b9b0eb33" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e5631] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Lawn?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with a free quote today and see why we're Winnipeg's trusted choice for lawn care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
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
              className="text-white hover:text-[#4caf50] transition-colors text-lg font-semibold"
            >
              Call Us: 438-797-1777  431-294-1043
            </a>
          </div>
        </div>
      </section>
    </>
  );
}