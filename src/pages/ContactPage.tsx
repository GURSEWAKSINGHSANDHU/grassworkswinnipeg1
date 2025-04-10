import React from 'react';
import SEOHead from '../components/SEOHead';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <SEOHead 
        title="Contact Us"
        description="Get in touch with GrassWorks Winnipeg for professional lawn care services. Request a free quote or schedule a consultation."
        canonicalUrl="/contact"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#1e5631] mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-[#4caf50]" />
                <a href="tel:4387971777" className="hover:text-[#4caf50] transition-colors">
                  438-797-1777
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#4caf50]" />
                <a href="mailto:grassworkswinnipeg@gmail.com" className="hover:text-[#4caf50] transition-colors">
                  grassworkswinnipeg@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#4caf50]" />
                <span>Winnipeg, MB</span>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://form.jotform.com/243613462309454"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4caf50] text-white px-6 py-3 rounded-full hover:bg-[#1e5631] transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Service Area</h2>
            <p className="text-lg mb-4">
              We proudly serve residential and commercial properties throughout Winnipeg 
              and surrounding areas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}