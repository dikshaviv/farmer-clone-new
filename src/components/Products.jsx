import React from "react";

import apple from "../assets/products/apple.jpg";
import carrot from "../assets/products/carrot.jpg";
import tomato from "../assets/products/tomato.jpg";
import cauliflower from "../assets/products/cauliflower.jpg";

const Products = () => {
  const items = [
    {
      name: "Fresh Apples",
      price: "₹120 / kg",
      image: apple,
      description: "Crisp, sweet, and perfect for a healthy lifestyle.",
    },
    {
      name: "Organic Carrots",
      price: "₹60 / kg",
      image: carrot,
      description: "Rich in vitamins and naturally grown.",
    },
    {
      name: "Farm Tomatoes",
      price: "₹40 / kg",
      image: tomato,
      description: "Juicy and fresh, directly from local farmers.",
    },
    {
      name: "Cauliflower",
      price: "₹30 / piece",
      image: cauliflower,
      description: "Freshly harvested, clean, and chemical-free.",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-700">
          Our Fresh Farm Products
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>

              <p className="text-green-600 font-bold mt-1">{item.price}</p>

              <p className="text-gray-600 text-sm mt-2">{item.description}</p>

              <button className="mt-4 bg-green-600 text-white w-full py-2 rounded-xl hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
