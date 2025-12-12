import React from "react";
import { Link } from "react-router-dom";

// Import images
import sewerImg from "../assets/sewer.jpg";
import hydroImg from "../assets/hydro.jpg";
import emergencyImg from "../assets/emergency.jpg";
import reliabilityImg from "../assets/Reliability.jpg";
import qualityImg from "../assets/Quality Workmanship.jpg";
import waterhImg from "../assets/waterh.jpg";

// Services Data
const services = [
  { id: 1, name: "Sewer Cleaning", image: sewerImg },
  { id: 2, name: "Hydro Jetting", image: hydroImg },
  { id: 3, name: "Emergency Plumbing", image: emergencyImg },
  { id: 4, name: "Reliable Plumbing", image: reliabilityImg },
  { id: 5, name: "Quality Workmanship", image: qualityImg },
  { id: 6, name: "Water Heater Service", image: waterhImg },
];

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="group block bg-white rounded-lg shadow hover:shadow-xl transition duration-300"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
