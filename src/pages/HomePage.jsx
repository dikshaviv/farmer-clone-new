import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Images (use your existing ones)
import heroImage from "../assets/hero.jpg";
import sewerImg from "../assets/sewer.jpg";
import hydroImg from "../assets/hydro.jpg";
import emergencyImg from "../assets/emergency.jpg";
import reliabilityImg from "../assets/Reliability.jpg";
import qualityImg from "../assets/Quality Workmanship.jpg";
import waterhImg from "../assets/waterh.jpg";
import step1Img from "../assets/step1.jpg";
import step2Img from "../assets/step2.jpg";
import step3Img from "../assets/step3.jpg";
import mikeImg from "../assets/mike.jpg";
import lisaImg from "../assets/lisa.jpg";
import robertImg from "../assets/robert.jpg";
import office1 from "../assets/headoffice.jpg";
import office2 from "../assets/office2.jpg";

// Services Data
const services = [
  { id: 1, name: "Sewer Cleaning", image: sewerImg, description: "Professional sewer cleaning removes clogs, grease, and buildup.", details: "We handle all types of sewer and drain systems, using modern tools and cameras for precise cleaning." },
  { id: 2, name: "Hydro Jetting", image: hydroImg, description: "High-pressure hydro jetting to remove stubborn blockages.", details: "Hydro jetting uses water at high pressure to clean pipes efficiently without damaging plumbing." },
  { id: 3, name: "Emergency Plumbing", image: emergencyImg, description: "24/7 emergency plumbing service for urgent issues.", details: "Quick response to leaks, burst pipes, and clogs to minimize damage and downtime." },
  { id: 4, name: "Reliable Plumbing", image: reliabilityImg, description: "Dependable plumbing solutions for residential and commercial needs.", details: "Consistent results with high-quality workmanship every time." },
  { id: 5, name: "Quality Workmanship", image: qualityImg, description: "Expert plumbing work with attention to detail.", details: "Skilled plumbers use modern tools and techniques for long-lasting results." },
  { id: 6, name: "Water Heater Service", image: waterhImg, description: "Installation, repair, and maintenance of water heaters.", details: "We handle tank and tankless water heaters, ensuring optimal performance and efficiency." },
];

// Booking Steps
const bookingSteps = [
  { id: 1, title: "Choose Plumbing Service", description: "Browse our range of plumbing services tailored to address various issues in your home or business.", image: step1Img },
  { id: 2, title: "Quickly Schedule Service", description: "Use our online booking system or call our hotline to schedule an appointment at a convenient time.", image: step2Img },
  { id: 3, title: "Job Completion Satisfaction", description: "Our professional plumber will complete the job efficiently. Once finished, you can relax knowing the problem has been resolved.", image: step3Img },
];

// Testimonials
const testimonials = [
  { id: 1, name: "Mike R", date: "March 5, 2024", feedback: "SwiftRooter responded quickly and fixed my burst pipe in no time! Highly recommend their service!", image: mikeImg },
  { id: 2, name: "Lisa T", date: "February 20, 2024", feedback: "Excellent drain cleaning service! The plumber was professional, and now everything works perfectly.", image: lisaImg },
  { id: 3, name: "Robert G", date: "January 28, 2024", feedback: "Very professional and affordable. They fixed my water heater, and now I have hot water again!", image: robertImg },
];

// FAQ
const faqData = [
  { question: "What plumbing services do you offer?", answer: "We offer residential & commercial plumbing services including emergency repairs, drain cleaning, water heater installations, leak detection, and more." },
  { question: "Do you offer 24/7 emergency plumbing services?", answer: "Yes — our team is available 24/7 to handle plumbing emergencies quickly and effectively." },
  { question: "How can I schedule a service?", answer: "You can schedule through our online form or call our support number — we’ll get you scheduled fast." },
  { question: "How much do services cost?", answer: "Pricing varies by service. We provide transparent quotes before any work begins." },
  { question: "Is there a warranty for services?", answer: "Yes — we offer warranties on eligible services depending on job type and parts used." },
];

const HomePage = () => {
  const [modalService, setModalService] = useState(null);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="space-y-20">

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[700px]">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-center text-white px-6">
          <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold">
            Swift<span className="text-red-500">Rooter</span> — Fast & Reliable Plumbing
          </motion.h1>
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="text-lg md:text-2xl mt-4 max-w-3xl mx-auto">
            Your trusted partner for professional plumbing solutions — from drain clearing and repairs to full installations. Available 24/7.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="bg-white rounded-lg shadow hover:shadow-xl cursor-pointer transition-transform hover:scale-105" onClick={() => setModalService(service)}>
              <img src={service.image} alt={service.name} className="w-full h-52 md:h-64 object-cover rounded-t-lg" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                <p className="text-gray-500 text-sm mt-2">{service.description}</p>
                <button onClick={() => navigate(`/service/${service.id}`)} className="mt-2 text-blue-600 hover:underline">
                  View Full Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Modal */}
      {modalService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full overflow-y-auto max-h-[90vh]">
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
                <button onClick={() => navigate(`/service/${modalService.id}`)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  View Full Details
                </button>
                <button onClick={() => setModalService(null)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Steps Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Service in 3 Easy Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bookingSteps.map((step, idx) => (
            <motion.div key={step.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden">
              <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        <h2 className="text-3xl font-bold text-center mb-8">What They Say About Our Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="bg-white rounded-lg shadow p-4 text-center">
              <img src={t.image} alt={t.name} className="w-20 h-20 mx-auto rounded-full object-cover mb-4" />
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{t.date}</p>
              <p className="text-gray-700 text-sm">{t.feedback}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        {faqData.map((faq, idx) => (
          <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="border rounded-lg overflow-hidden">
            <button onClick={() => setOpenFAQIndex(openFAQIndex === idx ? null : idx)} className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 font-semibold flex justify-between">
              {faq.question}
              <span>{openFAQIndex === idx ? "-" : "+"}</span>
            </button>
            <div className={`transition-all duration-300 p-4 text-gray-700 ${openFAQIndex === idx ? "max-h-96" : "max-h-0 overflow-hidden"}`}>
              {faq.answer}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Office Locations */}
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

      {/* Why Choose Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose SwiftRooter?</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Reliable, fast, and professional plumbing solutions with 24/7 availability, upfront pricing, and expert service for homes and businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Fast Response Time</h3>
                <p className="text-gray-600">We understand that plumbing emergencies can't wait. Our team is available 24/7 to ensure that your issues are resolved quickly, minimizing damage and inconvenience.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Certified & Experienced Plumbers</h3>
                <p className="text-gray-600">Our team consists of licensed and highly trained professionals who use the latest techniques and technology to get the job done right.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Upfront Pricing</h3>
                <p className="text-gray-600">No hidden costs or surprise fees. We believe in honest, transparent pricing, so you know exactly what to expect before any work begins.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">Our satisfaction is our priority. We stand by our work and ensure high-quality service. If you’re not happy, we’ll make it right.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Eco-Friendly Solutions</h3>
                <p className="text-gray-600">We offer sustainable and energy-efficient plumbing solutions that help conserve water and reduce energy consumption while lowering your bills.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Fully Equipped & Prepared</h3>
                <p className="text-gray-600">Our plumbers arrive with the latest tools and equipment, ready to diagnose and fix plumbing issues quickly and efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch / Footer Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p>Email: hallo.test@gmail.com</p>
            <p>Phone: +1 [303] 873-2983</p>
            <p>Address: 1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Business Info</h3>
            <p>Build by Framer Geeks, a part of Saeculum Solutions.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
