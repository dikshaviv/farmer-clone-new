import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Images
import sewerImg from "../assets/sewer.jpg";
import hydroImg from "../assets/hydro.jpg";
import emergencyImg from "../assets/emergency.jpg";
import reliabilityImg from "../assets/Reliability.jpg";
import qualityImg from "../assets/Quality Workmanship.jpg";
import waterhImg from "../assets/waterh.jpg";
import office1 from "../assets/headoffice.jpg";
import office2 from "../assets/office2.jpg";
import step1 from "../assets/step1.jpg";
import step2 from "../assets/step2.jpg";
import step3 from "../assets/step3.jpg";

// Services Data
const services = [
  { id: 1, name: "Sewer Cleaning", image: sewerImg, description: "Professional sewer cleaning removes clogs, grease, and buildup.", details: "We handle all types of sewer and drain systems, using modern tools and cameras for precise cleaning." },
  { id: 2, name: "Hydro Jetting", image: hydroImg, description: "High-pressure hydro jetting to remove stubborn blockages.", details: "Hydro jetting uses water at high pressure to clean pipes efficiently without damaging plumbing." },
  { id: 3, name: "Emergency Plumbing", image: emergencyImg, description: "24/7 emergency plumbing service for urgent issues.", details: "Quick response to leaks, burst pipes, and clogs to minimize damage and downtime." },
  { id: 4, name: "Reliable Plumbing", image: reliabilityImg, description: "Dependable plumbing solutions for residential and commercial needs.", details: "Consistent results with high-quality workmanship every time." },
  { id: 5, name: "Quality Workmanship", image: qualityImg, description: "Expert plumbing work with attention to detail.", details: "Skilled plumbers use modern tools and techniques for long-lasting results." },
  { id: 6, name: "Water Heater Service", image: waterhImg, description: "Installation, repair, and maintenance of water heaters.", details: "We handle tank and tankless water heaters, ensuring optimal performance and efficiency." },
];

// Booking Steps Data
const bookingSteps = [
  { id: 1, title: "Choose Plumbing Service", description: "Browse our range of plumbing services tailored to address various issues in your home or business. Select the service that fits your needs.", image: step1 },
  { id: 2, title: "Quickly Schedule Service", description: "Use our online booking system or call our hotline to schedule an appointment at a convenient time that works best for you.", image: step2 },
  { id: 3, title: "Job Completion Satisfaction", description: "Our professional plumber will complete the job efficiently. Once satisfied, we will clean up the work area and ensure quality service.", image: step3 },
];

const ServicesPage = () => {
  const [modalService, setModalService] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="space-y-20">

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-transform hover:scale-105 overflow-hidden"
              onClick={() => setModalService(service)}
            >
              <img src={service.image} alt={service.name} className="w-full h-52 md:h-64 object-cover rounded-t-xl" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                <p className="text-gray-500 text-sm mt-2">{service.description}</p>
                <button
                  onClick={() => navigate(`/service/${service.id}`)}
                  className="mt-2 text-blue-600 hover:underline"
                >
                  View Full Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full overflow-y-auto max-h-[90vh]">
            <img src={modalService.image} alt={modalService.name} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{modalService.name}</h2>
              <p className="text-gray-700 mb-2">{modalService.description}</p>
              <p className="text-gray-600 mb-4">{modalService.details}</p>
              <h3 className="font-semibold text-lg mb-2">Why Choose Us?</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Fast Response Time – Quick emergency service.</li>
                <li>Certified & Experienced Plumbers – Skilled and professional.</li>
                <li>Upfront Pricing – Transparent costs with no hidden fees.</li>
                <li>Satisfaction Guaranteed – We stand by our work.</li>
                <li>Eco-Friendly Solutions – Save water and energy.</li>
                <li>Fully Equipped & Prepared – Latest tools and techniques.</li>
              </ul>
              <div className="mt-4 flex justify-end gap-4">
                <button
                  onClick={() => navigate(`/service/${modalService.id}`)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Full Details
                </button>
                <button
                  onClick={() => setModalService(null)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book Your Service in 3 Steps */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Book Your Service in 3 Easy Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {bookingSteps.map((step) => (
            <motion.div
              key={step.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-56 overflow-hidden">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Office Locations */}
      <section className="max-w-6xl mx-auto px-4 space-y-8 mt-16">
        <h2 className="text-3xl font-bold text-center">Where Does SwiftRooter Operate?</h2>
        <p className="text-center text-gray-600">We proudly serve multiple locations, ensuring prompt and reliable plumbing services near you.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img src={office1} alt="Headquarters" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">SwiftRooter Headquarters</h3>
              <p className="text-gray-600">123 Main Street, Los Angeles, CA 90001</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img src={office2} alt="Office" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">SwiftRooter Office</h3>
              <p className="text-gray-600">456 Ocean Drive, San Diego, CA 92101</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <h3 className="text-xl font-bold">Get in Touch!</h3>
          <p>Have questions or need assistance? We’re here to help!</p>
          <p>Email: hallo.test@gmail.com</p>
          <p>Phone: +1 [303] 873-2983</p>
          <p>Address: 1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
          <div className="flex space-x-4 mt-4">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-400 mt-4">Build by Framer Geeks, a part of Saeculum Solutions.</p>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
