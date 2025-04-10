import React from 'react';
import SEOHead from '../components/SEOHead';

export default function BlogPage() {
  return (
    <>
      <SEOHead 
        title="Lawn Care Blog - Expert Tips for Winnipeg Homeowners"
        description="Discover expert lawn care tips for Winnipeg homeowners, including weed control, grass cutting heights, pet damage repair, and selecting the right grass breed."
        canonicalUrl="/blog"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#1e5631] mb-8">Lawn Care Blog</h1>

        {/* Blog 1: How to Kill Weeds Without Chemicals */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">How to Kill Weeds Without Chemicals</h2>
          <img src="https://lh4.googleusercontent.com/u2pEXPtwmfosmtgp1xwCROm7liD7hiupP8Fg6Fmhu9yG9K1Gt1OuUjaZ2_f1k3aZ5xgO18anX1DGx7tPcKp_1g=w1280" 
               alt="Natural Weed Removal" 
               className="w-full h-auto rounded-lg mb-4" />
          <p className="text-lg">Many homeowners are looking for ways to remove weeds without harming the environment. Here are some effective, natural solutions:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Boiling water: Pouring hot water directly on weeds kills them instantly.</li>
            <li>Vinegar solution: A mix of vinegar and water works as a natural herbicide.</li>
            <li>Mulching: Blocking sunlight with organic mulch prevents weed growth.</li>
          </ul>
          <p className="text-lg">By using these eco-friendly methods, you can maintain a healthy, chemical-free lawn.</p>
        </div>

        {/* Blog 2: The Right Lawn Cutting Height */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">What Height Should I Cut My Grass?</h2>
          <img src="https://framerusercontent.com/images/mBO6maoKQrRACyzS4Y2WljpteM.webp?scale-down-to=1024" 
               alt="Ideal Lawn Cutting Height" 
               className="w-full h-auto rounded-lg mb-4" />
          <p className="text-lg">The ideal cutting height depends on the type of grass and the season. Cutting too short can weaken your lawn, making it prone to weeds and disease.</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Cool-season grasses: Keep at 2.5-3.5 inches.</li>
            <li>Warm-season grasses: Maintain at 1.5-2 inches.</li>
            <li>During summer: Increase height slightly to retain moisture.</li>
          </ul>
          <p className="text-lg">Following these guidelines ensures a lush, healthy lawn.</p>
        </div>

        {/* Blog 3: Repairing Grass Patches from Pets */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">How to Repair Lawn Patches Caused by Pets</h2>
          <img src="https://framerusercontent.com/images/mBO6maoKQrRACyzS4Y2WljpteM.webp?scale-down-to=1024" 
               alt="Fixing Pet Damage on Lawn" 
               className="w-full h-auto rounded-lg mb-4" />
          <p className="text-lg">Pets can cause patches in your lawn due to urine burns or digging. Here’s how to fix them:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Rake the area to remove dead grass and loosen the soil.</li>
            <li>Apply a soil conditioner to neutralize excess nitrogen.</li>
            <li>Seed the area with matching grass type and water regularly.</li>
          </ul>
          <p className="text-lg">This method helps your lawn recover quickly while keeping it pet-friendly.</p>
        </div>

        {/* Blog 4: Why Choosing the Right Grass Breed Matters */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choosing the Right Grass Breed is Essential for a Green Garden</h2>
          <img src="https://www.asianturfgrass.com/post/grass-grows-more-makes-roots/featured.jpg" 
               alt="Best Grass for Winnipeg" 
               className="w-full h-auto rounded-lg mb-4" />
          <p className="text-lg">Selecting the right grass type ensures a low-maintenance and vibrant lawn. Here’s what to consider:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Climate: Choose cool-season grasses like Kentucky Bluegrass for Winnipeg.</li>
            <li>Shade tolerance: Fine fescue thrives in shaded areas.</li>
            <li>Traffic resistance: Perennial ryegrass is best for high foot traffic.</li>
          </ul>
          <p className="text-lg">Understanding your lawn’s needs will help you achieve a green, lush garden.</p>
        </div>

        <div className="text-center mt-12">
          <a href="https://form.jotform.com/243613462309454" 
             className="bg-green-600 text-white px-6 py-3 rounded-lg text-xl font-bold hover:bg-green-700 transition">Get a Free Quote</a>
        </div>
      </div>
    </>
  );
}
