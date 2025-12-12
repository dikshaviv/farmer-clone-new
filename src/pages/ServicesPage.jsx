// src/pages/ServicesPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Images from your assets folder
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

import step1 from "../assets/step1.jpg";
import step2 from "../assets/step2.jpg";
import step3 from "../assets/step3.jpg";
import office1 from "../assets/headoffice.jpg";
import office2 from "../assets/office2.jpg";

const residentialServices = [
  { id: 1, slug: "sewer-cleaning", name: "Sewer Cleaning", image: sewerImg, short: "Preventative cleaning and repair to avoid costly blockages.", long: "Professional sewer cleaning removes clogs, grease, and buildup to restore flow and prevent backups. We use modern tools and inspection cameras to diagnose and clear blockages safely." },
  { id: 2, slug: "hydro-jetting", name: "Hydro Jetting", image: hydroImg, short: "High-pressure water cleaning for tough clogs and buildup.", long: "High-pressure hydro jetting clears stubborn blockages and scale without damaging pipes. Ideal for drains, sewer lines and thorough pipe maintenance." },
  { id: 3, slug: "emergency-plumbing", name: "24/7 Emergency Plumbing", image: emergencyImg, short: "Quick response for leaks, burst pipes and urgent plumbing issues.", long: "Our rapid response team is available 24/7 to minimize damage during plumbing emergencies. We stabilize the situation and provide permanent repairs where possible." },
  { id: 4, slug: "reliable-plumbing", name: "Bathroom & Kitchen Repair", image: reliabilityImg, short: "Repairs and installations for faucets, sinks, toilets and showers.", long: "We fix and install fixtures, piping and appliances in bathrooms and kitchens — ensuring reliable performance and clean finishes." },
  { id: 5, slug: "quality-workmanship", name: "Quality Workmanship", image: qualityImg, short: "Expert plumbing work with attention to detail.", long: "Skilled plumbers using industry-standard materials and methods to ensure long-lasting repairs and installations." },
  { id: 6, slug: "water-heaters", name: "Water Heaters", image: waterhImg, short: "Installation, repair and maintenance of water heaters.", long: "We service tank and tankless water heaters — diagnosing failures, replacing parts, and performing preventive maintenance for optimal performance." },
];

const commercialServices = [
  { id: 7, slug: "gas-line-installation", name: "Gas Line Installation & Repair", image: plumber3Img, short: "Safe and efficient installation of commercial gas lines.", long: "Commercial gas line work requires strict safety and code compliance. Our certified technicians install, inspect and repair gas lines for businesses." },
  { id: 8, slug: "pipe-fixtures", name: "Pipe & Fixtures", image: plumber4Img2, short: "Professional installation and repairs for commercial plumbing systems.", long: "From industrial fixtures to complex piping systems, we deliver robust installations and maintenance to keep business operations running." },
  { id: 9, slug: "high-capacity-water-heaters", name: "High-Capacity Water Heaters", image: plumber6Img2, short: "Installation and maintenance of commercial water heaters.", long: "We handle large-scale water heating systems for commercial properties — ensuring consistent hot water and efficient operation." },
  { id: 10, slug: "grease-traps", name: "Grease Traps", image: plumber8Img2, short: "Installation and maintenance to keep commercial kitchens compliant.", long: "Grease trap installation and service prevents clogs and regulatory issues in restaurants and food-service establishments." },
  { id: 11, slug: "backflow-testing", name: "Backflow Testing", image: plumber5Img2, short: "Ensuring safe and uncontaminated water supply.", long: "Certified backflow prevention and testing ensures water systems are protected from contamination and meet local code requirements." },
  { id: 12, slug: "hydro-jetting-business", name: "Hydro Jetting (Business)", image: plumber10Img2, short: "High-pressure cleaning for commercial pipelines.", long: "Commercial hydro jetting removes grease, scale and debris from business plumbing and sewer lines to restore full flow and prevent downtime." },
];

const bookingSteps = [
  { id: 1, title: "Choose Plumbing Service", description: "Browse our range of plumbing services tailored to address various issues in your home or business. Select the service that fits your needs.", image: step1 },
  { id: 2, title: "Quickly Schedule Service", description: "Use our online booking system or call our hotline to schedule an appointment at a convenient time that works best for you.", image: step2 },
  { id: 3, title: "Job Completion Satisfaction", description: "Our professional plumber will complete the job efficiently. Once satisfied, we will clean up the work area and ensure quality service.", image: step3 },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("residential");
  const navigate = useNavigate();
  const services = activeTab === "residential" ? residentialServices : commercialServices;

  const openService = (slug) => navigate(`/services/${slug}`);

  return (
    <div className="space-y-20 pt-24">
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-sm text-gray-500 mb-2">Services</div>
            <h1 className="text-4xl font-extrabold text-gray-900">Our Services</h1>
          </div>
          <div className="flex gap-3 items-center">
            <button onClick={() => setActiveTab("residential")} className={`px-4 py-2 rounded-full text-sm font-medium border ${activeTab === "residential" ? "bg-white text-gray-800 border-gray-300" : "bg-gray-100 text-gray-600 border-transparent"}`}>Residential</button>
            <button onClick={() => setActiveTab("commercial")} className={`px-4 py-2 rounded-full text-sm font-medium border ${activeTab === "commercial" ? "bg-black text-white border-black" : "bg-gray-100 text-gray-600 border-transparent"}`}>Commercial</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <motion.article key={s.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="relative rounded-2xl overflow-hidden bg-white shadow p-0" onClick={() => openService(s.slug)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") openService(s.slug); }}>
              <div className="h-44 md:h-48 overflow-hidden rounded-t-2xl">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="text-sm text-gray-600">{s.short}</div>
                  <div className="ml-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="#374151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{s.name}</h3>
                <div className="mt-3">
                  <button onClick={(e) => { e.stopPropagation(); openService(s.slug); }} className="inline-flex items-center gap-3 py-2 px-3 rounded-full bg-black text-white text-sm font-medium hover:opacity-95 transition">
                    <span>See Details</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-90" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* BOOKING STEPS */}
           <section className="max-w-6xl mx-auto px-4 space-y-10">
             <h2 className="text-3xl font-bold text-center mb-8">Book Your Service in 3 Easy Steps</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {bookingSteps.map((step, idx) => (
                 <motion.div key={step.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12 }} className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden">
                   <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
                   <div className="p-4 text-center">
                     <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                     <p className="text-gray-700 text-sm">{step.description}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </section>
     
           

      {/* OFFICE LOCATIONS */}
            <section className="max-w-6xl mx-auto px-4 space-y-8">
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
}
