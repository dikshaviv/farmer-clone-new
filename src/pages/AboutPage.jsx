import React from "react";

// Images
import about1 from "../assets/about.jpg"; // plumbing close-up
import about2 from "../assets/about2.jpg"; // smiling plumber
import expert1 from "../assets/Robert Mitchell.jpg";
import expert2 from "../assets/plumber1.jpg";
import expert3 from "../assets/plumber2.jpg";
import office1 from "../assets/headoffice.jpg";
import office2 from "../assets/office2.jpg";

const experts = [
  { name: "James Carter", image: expert1, jobs: "1500+ Jobs Completed", rating: "5.0", description: "James specializes in quick emergency fixes and complex installations with precision and efficiency." },
  { name: "Sarah Mitchell", image: expert2, jobs: "800+ Jobs Completed", rating: "4.9", description: "Sarah is known for her expertise in leak detection and providing reliable bathroom plumbing solutions." },
  { name: "Robert Thompson", image: expert3, jobs: "1000+ Jobs Completed", rating: "4.7", description: "Robert ensures commercial properties run smoothly with expert plumbing and backflow solutions." }
];

const locations = [
  { name: "SwiftRooter Headquarters", image: office1, address: "123 Main Street, Los Angeles, CA 90001" },
  { name: "SwiftRooter Office", image: office2, address: "456 Ocean Drive, San Diego, CA 92101" }
];

const AboutPage = () => {
  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 pt-12">

      {/* Top About Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About SwiftRooter Plumbing</h2>
          <p className="text-gray-700 mb-4">
            SwiftRooter Plumbing is a trusted name in the industry, offering top-quality residential and commercial plumbing services. With years of experience, we take pride in delivering efficient, reliable, and customer-focused solutions.
          </p>
          <p className="text-gray-700">
            Whether it's a small repair or a major installation, our team is committed to ensuring your plumbing system functions flawlessly.
          </p>
        </div>
        <div className="flex gap-4">
          <img src={about1} alt="Plumbing Work" className="w-1/2 h-80 object-cover rounded-lg shadow-lg" />
          <img src={about2} alt="Plumber Smiling" className="w-1/2 h-80 object-cover rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Experts Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Meet Some of Our Plumbing Experts</h2>
        <p className="text-gray-600 text-center mb-8">Our certified plumbers bring years of expertise and dedication to delivering top-quality service for all plumbing needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experts.map((exp, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg text-center p-4">
              <img src={exp.image} alt={exp.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{exp.name}</h3>
              <p className="text-gray-600 mt-1">{exp.jobs} ⭐ {exp.rating}</p>
              <p className="text-gray-700 text-sm mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Where Does SwiftRooter Operate?</h2>
        <p className="text-gray-600 text-center mb-8">We proudly serve multiple locations, ensuring prompt and reliable plumbing services near you.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
              <img src={loc.image} alt={loc.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{loc.name}</h3>
                <p className="text-gray-600">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* GET IN TOUCH (footer replica-ish using your style) */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Top area with small logo and tagline + 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: logo + tagline */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-extrabold text-red-500">Swift</span>
                <span className="text-2xl font-extrabold text-blue-600">Rooter</span>
              </div>
              <p className="text-gray-600">Fast, reliable & professional 24/7 plumbing & rooter services.</p>
            </div>

            {/* Middle: Explore & Company & Get in Touch headings */}
            <div className="flex justify-around">
              <div>
                <h4 className="font-semibold mb-3">Explore</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Home</li>
                  <li>Location</li>
                  <li>Services</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>

            {/* Right: social icons small */}
            <div>
              <h4 className="font-semibold mb-3">Get in Touch</h4>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center text-white">X</div>
                <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center text-white">f</div>
                <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center text-white"></div>
                <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center text-white">in</div>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-200" />

          {/* Big Get in Touch area (matches screenshot): left big heading + input, right contact blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: Large heading + description + input */}
            <div className="md:col-span-1">
              <h2 className="text-4xl font-bold mb-3">Get in Touch!</h2>
              <p className="text-gray-600 mb-6">have questions or need assistance? We’re here to help!</p>

              <div className="flex gap-3">
                <input type="email" placeholder="Your Email Address" className="flex-1 p-3 rounded-lg border border-gray-200" />
                <button className="px-5 py-3 bg-blue-600 text-white rounded-lg">Subscribe</button>
              </div>
            </div>

            {/* Right side: two-column contact blocks (Address / Phone / Address / Email) */}
            <div className="md:col-span-2 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-gray-600">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-gray-600">+1 [303] 873-2983</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-gray-600">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">hallo.test@gmail.com</p>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-200" />
          {/* Footer bottom credit */}
          <div className="text-center text-gray-500 py-6">
            Build by Framer Geeks, a part of Saeculum Solutions.
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;
