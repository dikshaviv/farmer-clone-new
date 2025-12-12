import React from "react";

const CTA = () => (
  <section className="py-12 bg-green-600 text-white">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <h3 className="text-2xl font-bold">Need immediate help? Book a technician now.</h3>
      <a href="/contact" className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold">Contact Us</a>
    </div>
  </section>
);

export default CTA;
