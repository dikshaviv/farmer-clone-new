import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/Testimonials.jpg";

const items = [
  { text: "Fixed my drain in 30 mins. Reliable!", name: "Ramesh" },
  { text: "Very professional and friendly technicians.", name: "Anita" },
  { text: "Affordable and fast. Highly recommended!", name: "Suresh" },
];

const Testimonials = () => (
  <section className="py-16 bg-fixed" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">What Customers Say</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.div key={i} className="bg-white p-6 rounded-xl shadow" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="italic">"{t.text}"</p>
            <p className="mt-3 font-semibold">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
