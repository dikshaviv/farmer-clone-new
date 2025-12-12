import React from "react";

// Images
import about1 from "../assets/about.jpg"; // About top-left
import about2 from "../assets/about2.jpg"; // About top-right
import expert1 from "../assets/Robert Mitchell.jpg"; // James Carter
import expert2 from "../assets/plumber1.jpg"; // Sarah Mitchell
import expert3 from "../assets/plumber2.jpg"; // Replacing Robert Thompson image
import office1 from "../assets/office2.jpg"; // Headquarters
import office2 from "../assets/headoffice.jpg"; // Office

const experts = [
  {
    name: "James Carter",
    image: expert1,
    jobs: "1500+ Jobs Completed",
    rating: "5.0",
    description: "James specializes in quick emergency fixes and complex installations with precision and efficiency."
  },
  {
    name: "Sarah Mitchell",
    image: expert2,
    jobs: "800+ Jobs Completed",
    rating: "4.9",
    description: "Sarah is known for her expertise in leak detection and providing reliable bathroom plumbing solutions."
  },
  {
    name: "Robert Thompson",
    image: expert3, // New image
    jobs: "1000+ Jobs Completed",
    rating: "4.7",
    description: "Robert ensures commercial properties run smoothly with expert plumbing and backflow solutions."
  }
];

const locations = [
  {
    name: "SwiftRooter Headquarters",
    image: office1,
    address: "123 Main Street, Los Angeles, CA 90001"
  },
  {
    name: "SwiftRooter Office",
    image: office2,
    address: "456 Ocean Drive, San Diego, CA 92101"
  }
];

const AboutPage = () => {
  return (
    <div className="space-y-16">

      {/* Top About Section */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About SwiftRooter Plumbing</h2>
          <p className="text-gray-700 mb-4">
            SwiftRooter Plumbing is a trusted name in the industry, offering top-quality residential and commercial plumbing services. With years of experience, we take pride in delivering efficient, reliable, and customer-focused solutions.
          </p>
          <p className="text-gray-700">
            Whether it's a small repair or a major installation, our team is committed to ensuring your plumbing system functions flawlessly.
          </p>
        </div>
        <div className="space-y-4">
          <img
            src={about1}
            alt="Plumbing Work"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
          <img
            src={about2}
            alt="Plumber Team"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Meet the Experts Section */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Some of Our Plumbing Experts</h2>
        <p className="text-gray-600 mb-8">Our certified plumbers bring years of expertise and dedication to delivering top-quality service for all plumbing needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{expert.name}</h3>
              <p className="text-gray-600">{expert.jobs} ⭐ {expert.rating}</p>
              <p className="text-gray-700 mt-2 text-sm">{expert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Locations Section */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Where Does SwiftRooter Operate?</h2>
        <p className="text-gray-600 mb-8">We proudly serve multiple locations, ensuring prompt and reliable plumbing services near you.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition">
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{loc.name}</h3>
                <p className="text-gray-600">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
