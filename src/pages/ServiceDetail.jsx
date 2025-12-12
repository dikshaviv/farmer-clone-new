import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Images
import step1Img from "../assets/step1.jpg";
import step2Img from "../assets/step2.jpg";
import step3Img from "../assets/step3.jpg";
import mikeImg from "../assets/mike.jpg";
import lisaImg from "../assets/lisa.jpg";
import robertImg from "../assets/robert.jpg";

import sewerImg from "../assets/sewer.jpg";
import hydroImg from "../assets/hydro.jpg";
import emergencyImg from "../assets/emergency.jpg";
import reliabilityImg from "../assets/Reliability.jpg";
import qualityImg from "../assets/Quality Workmanship.jpg";
import waterhImg from "../assets/waterh.jpg";

// Services Data
const services = [
  {
    id: 1,
    name: "Sewer Cleaning",
    image: sewerImg,
    description: "Professional sewer cleaning removes clogs, grease, and buildup for smooth drainage.",
    details: "We handle all types of sewer and drain systems, using modern tools and cameras for precise cleaning.",
  },
  {
    id: 2,
    name: "Hydro Jetting",
    image: hydroImg,
    description: "High-pressure hydro jetting to remove stubborn blockages.",
    details: "Hydro jetting uses water at high pressure to clean pipes efficiently without damaging plumbing.",
  },
  {
    id: 3,
    name: "Emergency Plumbing",
    image: emergencyImg,
    description: "24/7 emergency plumbing service for urgent issues.",
    details: "Quick response to leaks, burst pipes, and clogs to minimize damage and downtime.",
  },
  {
    id: 4,
    name: "Reliable Plumbing",
    image: reliabilityImg,
    description: "Dependable plumbing solutions for residential and commercial needs.",
    details: "Consistent results with high-quality workmanship every time.",
  },
  {
    id: 5,
    name: "Quality Workmanship",
    image: qualityImg,
    description: "Expert plumbing work with attention to detail.",
    details: "Skilled plumbers use modern tools and techniques for long-lasting results.",
  },
  {
    id: 6,
    name: "Water Heater Service",
    image: waterhImg,
    description: "Installation, repair, and maintenance of water heaters.",
    details: "We handle tank and tankless water heaters, ensuring optimal performance and efficiency.",
  },
];

// Why Choose Us
const whyChoose = [
  { title: "Fast Response Time", desc: "We respond quickly 24/7 to emergencies across all areas." },
  { title: "Certified & Experienced Plumbers", desc: "Trained professionals with modern tools and techniques." },
  { title: "Upfront Pricing", desc: "No surprises — we provide honest pricing up front." },
  { title: "Satisfaction Guaranteed", desc: "We stand behind our work with a satisfaction guarantee." },
  { title: "Eco-Friendly Solutions", desc: "Eco-conscious plumbing choices that save water & energy." },
  { title: "Fully Equipped & Prepared", desc: "We arrive ready with all tools and parts needed." },
];

// Booking Steps
const steps = [
  { id: 1, title: "Choose Plumbing Service", desc: "Browse our range of plumbing services and select the service that fits your needs.", image: step1Img },
  { id: 2, title: "Quickly Schedule Service", desc: "Use our online booking system or call our hotline to schedule an appointment.", image: step2Img },
  { id: 3, title: "Job Completion Satisfaction", desc: "Our plumber completes the job efficiently and ensures quality service.", image: step3Img },
];

// Testimonials
const testimonials = [
  { id: 1, name: "Mike R", date: "March 5, 2024", feedback: "SwiftRooter responded quickly and fixed my burst pipe in no time! Highly recommend their service!", image: mikeImg },
  { id: 2, name: "Lisa T", date: "February 20, 2024", feedback: "Excellent drain cleaning service! The plumber was professional, and now everything works perfectly.", image: lisaImg },
  { id: 3, name: "Robert G", date: "January 28, 2024", feedback: "Very professional and affordable. They fixed my water heater, and now I have hot water again!", image: robertImg },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-blue-500 underline">Go Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">

      {/* Service Hero Image */}
      <div className="w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
        <img src={service.image} alt={service.name} className="w-full h-full object-cover object-center transform transition duration-700 hover:scale-105" />
      </div>

      {/* Service Info */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">{service.name}</h2>
        <p className="text-gray-700 text-lg">{service.description}</p>
        <p className="text-gray-600">{service.details}</p>
      </div>

      {/* Why Choose Us */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold mb-4">Why Choose SwiftRooter?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChoose.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-4 bg-gray-50 rounded-lg shadow hover:scale-105 transition-transform">
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Steps */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-center mb-6">Book Your Service in 3 Easy Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div key={step.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-700 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-center mb-6">What They Say About Our Service</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-lg shadow p-4 text-center">
              <img src={t.image} alt={t.name} className="w-20 h-20 mx-auto rounded-full object-cover mb-4" />
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-gray-500 text-sm mb-2">{t.date}</p>
              <p className="text-gray-700 text-sm">{t.feedback}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Link to="/services" className="inline-block mt-6 text-blue-600 hover:underline">
        ← Back to Services
      </Link>
    </div>
  );
};

export default ServiceDetail;
