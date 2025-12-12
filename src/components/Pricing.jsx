import React from "react";
import pricingHeader from "../assets/Pricing Page.jpg";

const plans = [
  { name: "Basic", price: "₹299/mo", items: ["Basic checks", "Standard support"] },
  { name: "Standard", price: "₹599/mo", items: ["Priority scheduling", "Extended coverage"] },
  { name: "Premium", price: "₹999/mo", items: ["24/7 support", "Full coverage"] },
];

const Pricing = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <img src={pricingHeader} alt="Pricing" className="mx-auto rounded-lg shadow mb-8 w-full max-w-3xl object-cover" />
      <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <div key={i} className={`p-8 rounded-2xl shadow ${i===1 ? 'border-2 border-green-600 bg-white' : 'bg-white'}`}>
            <h3 className="text-2xl font-semibold">{p.name}</h3>
            <p className="text-4xl font-bold text-green-600 my-4">{p.price}</p>
            <ul className="text-gray-700 space-y-2 mb-4">
              {p.items.map((it, idx) => <li key={idx}>✔ {it}</li>)}
            </ul>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
