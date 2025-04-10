import React from 'react';
import SEOHead from '../components/SEOHead';
import { Check } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <SEOHead 
        title="About Us"
        description="Learn about GrassWorks Winnipeg's commitment to excellence in lawn care services. Formerly known as Grass Guru Winnipeg, we bring years of experience to your lawn."
        canonicalUrl="/about"
      />
      
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#1e5631] mb-6">About GrassWorks Winnipeg</h1>
            <p className="text-xl text-gray-600 mb-8">
              With over 3 years of experience in Winnipeg's lawn care industry (formerly Grass Guru Winnipeg), 
              we've built a reputation for quality and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1e5631] mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Delivering professional, reliable, and affordable lawn care services that enhance 
              the beauty and value of your Winnipeg property.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1e5631] mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Locally Owned & Operated",
                description: "We're a Winnipeg-based company, committed to serving our community."
              },
              {
                title: "Competitive Pricing",
                description: "Get exceptional results without breaking the bank."
              },
              {
                title: "Experienced & Trusted",
                description: "Rest assured, your lawn is in the hands of qualified professionals."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Check className="text-[#4caf50] w-6 h-6 mr-2" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#1e5631] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Lawn?</h2>
          <p className="text-xl mb-8">Let's work together to create the perfect lawn for your property.</p>
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