import React from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="https://i.ibb.co/mVJGXWhg/IMG-20250402-113925-247.webp" 
              alt="GrassWorks Winnipeg Logo" 
              className="h-12 w-auto"
            />
            <div>
              <span className="text-[#1e5631] text-2xl font-bold">GrassWorks</span>
              <span className="text-[#4caf50]">Winnipeg</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#4caf50] transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#4caf50] transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#4caf50] transition-colors">Services</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-[#4caf50] transition-colors">Gallery</Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#4caf50] transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#4caf50] transition-colors">Contact</Link>
            <a 
              href="https://form.jotform.com/243613462309454"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4caf50] text-white px-6 py-2 rounded-full hover:bg-[#1e5631] transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-[#4caf50] transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-[#4caf50] transition-colors">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-[#4caf50] transition-colors">Services</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-[#4caf50] transition-colors">Gallery</Link>
              <Link to="/blog" className="text-gray-700 hover:text-[#4caf50] transition-colors">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#4caf50] transition-colors">Contact</Link>
              <a 
                href="https://form.jotform.com/243613462309454"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4caf50] text-white px-6 py-2 rounded-full text-center hover:bg-[#1e5631] transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}