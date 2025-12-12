import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// All Residential & Commercial images
import sewerImg from "../assets/sewer.jpg";
import hydroImg from "../assets/hydro.jpg";
import emergencyImg from "../assets/emergency.jpg";
import reliabilityImg from "../assets/Reliability.jpg";
import qualityImg from "../assets/Quality Workmanship.jpg";
import waterhImg from "../assets/waterh.jpg";
import plumber3Img from "../assets/plumber3.jpg";
import plumber4Img2 from "../assets/plumber4.jpg";
import plumber6Img2 from "../assets/plumber6.jpg";
import plumber8Img2 from "../assets/plumber8.jpg";
import plumber5Img2 from "../assets/plumber5.jpg";
import plumber10Img2 from "../assets/plumber10.jpg";

const allServices = [
  { id: 1, slug: "sewer-cleaning", name: "Sewer Cleaning", image: sewerImg, description: "Professional sewer cleaning removes clogs, grease, and buildup.", details: "We handle all types of sewer and drain systems, using modern tools and cameras for precise cleaning." },
  { id: 2, slug: "hydro-jetting", name: "Hydro Jetting", image: hydroImg, description: "High-pressure hydro jetting to remove stubborn blockages.", details: "Hydro jetting uses water at high pressure to clean pipes efficiently without damaging plumbing." },
  { id: 3, slug: "emergency-plumbing", name: "Emergency Plumbing", image: emergencyImg, description: "24/7 emergency plumbing service for urgent issues.", details: "Quick response to leaks, burst pipes, and clogs to minimize damage and downtime." },
  { id: 4, slug: "reliable-plumbing", name: "Reliable Plumbing", image: reliabilityImg, description: "Dependable plumbing solutions for residential and commercial needs.", details: "Consistent results with high-quality workmanship every time." },
  { id: 5, slug: "quality-workmanship", name: "Quality Workmanship", image: qualityImg, description: "Expert plumbing work with attention to detail.", details: "Skilled plumbers use modern tools and techniques for long-lasting results." },
  { id: 6, slug: "water-heater-service", name: "Water Heater Service", image: waterhImg, description: "Installation, repair, and maintenance of water heaters.", details: "We handle tank and tankless water heaters, ensuring optimal performance and efficiency." },
  { id: 7, slug: "gas-line-installation", name: "Gas Line Installation & Repair", image: plumber3Img, description: "Safe and efficient installation of commercial gas lines.", details: "Commercial gas line work requires strict safety and code compliance. Our certified technicians install, inspect and repair gas lines for businesses." },
  { id: 8, slug: "pipe-fixtures", name: "Pipe & Fixtures", image: plumber4Img2, description: "Professional installation and repairs for commercial plumbing systems.", details: "From industrial fixtures to complex piping systems, we deliver robust installations and maintenance to keep business operations running." },
  { id: 9, slug: "high-capacity-water-heaters", name: "High-Capacity Water Heaters", image: plumber6Img2, description: "Installation and maintenance of commercial water heaters.", details: "We handle large-scale water heating systems for commercial properties — ensuring consistent hot water and efficient operation." },
  { id: 10, slug: "grease-traps", name: "Grease Traps", image: plumber8Img2, description: "Installation and maintenance to keep commercial kitchens compliant.", details: "Grease trap installation and service prevents clogs and regulatory issues in restaurants and food-service establishments." },
  { id: 11, slug: "backflow-testing", name: "Backflow Testing", image: plumber5Img2, description: "Ensuring safe and uncontaminated water supply.", details: "Certified backflow prevention and testing ensures water systems are protected from contamination and meet local code requirements." },
  { id: 12, slug: "hydro-jetting-business", name: "Hydro Jetting (Business)", image: plumber10Img2, description: "High-pressure cleaning for commercial pipelines.", details: "Commercial hydro jetting removes grease, scale and debris from business plumbing and sewer lines to restore full flow and prevent downtime." },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = allServices.find(s => s.slug === id);

  if (!service) return <div className="text-center py-20">Service not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline mb-4">&larr; Back</button>
      <img src={service.image} alt={service.name} className="w-full h-96 object-cover rounded-lg" />
      <h1 className="text-4xl font-bold">{service.name}</h1>
      <p className="text-gray-700 mt-4">{service.description}</p>
      <p className="text-gray-600 mt-2">{service.details}</p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Fast Response Time – Quick emergency service.</li>
          <li>Certified & Experienced Plumbers – Skilled and professional.</li>
          <li>Upfront Pricing – Transparent costs with no hidden fees.</li>
          <li>Satisfaction Guaranteed – We stand by our work.</li>
          <li>Eco-Friendly Solutions – Save water and energy.</li>
          <li>Fully Equipped & Prepared – Latest tools and techniques.</li>
        </ul>
      </section>
    </div>
  );
};

export default ServiceDetail;
