import React from "react";
import reliable from "../assets/Reliability.jpg";
import quality from "../assets/Quality Workmanship.jpg";
import affordable from "../assets/Affordable Pricing.jpg";

const WhyChoose = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
      <div className="p-6 rounded-xl shadow flex flex-col items-center text-center">
        <img src={quality} alt="Quality" className="w-28 h-20 object-cover rounded-md mb-4" />
        <h3 className="font-semibold">Quality Workmanship</h3>
        <p className="text-gray-600 mt-2">Skilled technicians and high standards.</p>
      </div>

      <div className="p-6 rounded-xl shadow flex flex-col items-center text-center">
        <img src={reliable} alt="Reliable" className="w-28 h-20 object-cover rounded-md mb-4" />
        <h3 className="font-semibold">Reliability</h3>
        <p className="text-gray-600 mt-2">On-time, dependable service.</p>
      </div>

      <div className="p-6 rounded-xl shadow flex flex-col items-center text-center">
        <img src={affordable} alt="Affordable" className="w-28 h-20 object-cover rounded-md mb-4" />
        <h3 className="font-semibold">Affordable Pricing</h3>
        <p className="text-gray-600 mt-2">Transparent and competitive rates.</p>
      </div>
    </div>
  </section>
);

export default WhyChoose;
