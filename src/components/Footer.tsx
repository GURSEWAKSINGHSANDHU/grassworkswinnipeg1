import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1e5631] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GrassWorks Winnipeg</h3>
            <p className="text-sm text-gray-300">Previously known as Grass Guru Winnipeg</p>
            <p className="text-sm">Delivering professional, reliable, and affordable lawn care services that enhance the beauty and value of your Winnipeg property.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#4caf50] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#4caf50] transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-[#4caf50] transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-[#4caf50] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>Lawn Mowing</li>
              <li>Aeration</li>
              <li>Fertilization</li>
              <li>Weed Control</li>
              <li>Power Raking</li>
              <li>Seasonal Cleanups</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <a href="tel:4387971777" className="hover:text-[#4caf50] transition-colors">438-797-1777</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:grassworkswinnipeg@gmail.com" className="hover:text-[#4caf50] transition-colors">grassworkswinnipeg@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Winnipeg, MB</span>
            </div>
            <a 
              href="https://form.jotform.com/243613462309454"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4caf50] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#1e5631] transition-colors mt-4"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} GrassWorks Winnipeg. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://wa.me/14387971777"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#25D366] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}