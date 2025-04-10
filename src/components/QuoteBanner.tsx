import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function QuoteBanner() {
  return (
    <div className="fixed bottom-4 right-24 z-40">
      <a 
        href="https://form.jotform.com/243613462309454"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[#4caf50] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1e5631] transition-all duration-300 flex items-center space-x-2 shadow-lg"
      >
        <span>Get Your Free Quote</span>
        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}