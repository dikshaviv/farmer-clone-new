import React from "react";
import { motion } from "framer-motion";

const Template = () => {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900"
        >
          SwiftRooter – <span className="text-green-600">Framer Template</span>
        </motion.h1>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          A professionally designed Framer template for plumbing services,
          repair businesses, and maintenance professionals — built for speed,
          conversions, and modern branding.
        </p>

        {/* PREVIEW LINK */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-6"
        >
          <a
            href="https://swiftrooter.framer.website"
            target="_blank"
            rel="noreferrer"
            className="text-green-600 font-semibold text-lg underline"
          >
            🔗 Preview Template
          </a>
        </motion.div>

        {/* DESCRIPTION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-white shadow-lg rounded-2xl p-8 border"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Template Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SwiftRooter is a premium Framer template crafted for plumbing
            services, home repair experts, and maintenance businesses. With a
            clean modern layout, smooth animations, and fully responsive design,
            it helps businesses build credibility and attract more clients.
          </p>

          <p className="text-gray-700 leading-relaxed mt-3">
            It includes ready-made service pages, testimonials, pricing
            sections, contact forms, and strong call-to-action buttons.
            SEO-optimized and easy to customize.
          </p>
        </motion.div>

        {/* LICENSE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-white shadow-md rounded-2xl p-8 border"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔒 License</h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Use for 1 personal or commercial project.</li>
            <li>❌ No redistribution or resale.</li>
            <li>❌ Cannot publish files online for free download.</li>
          </ul>

          <p className="text-gray-700 mt-3">
            For unlimited usage (personal, commercial, client projects), you
            must purchase the Extended License.
          </p>
        </motion.div>

        {/* REFUND POLICY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-white shadow-md rounded-2xl p-8 border"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💸 Refund Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            All purchases are non-refundable due to the nature of digital
            products. Please review the preview carefully before purchasing.
            For any questions, feel free to contact us — we’re here to help.
          </p>
        </motion.div>

        {/* EXCLUSIVE OFFER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-gradient-to-r from-green-100 to-green-200 rounded-xl p-8 border border-green-300 shadow"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">🎁 Exclusive Offer</h2>
          <p className="text-gray-800">
            Get <strong>3 months of Framer Pro FREE</strong> when you purchase
            this template!
          </p>
          <p className="text-gray-900 font-semibold mt-2">
            Use code: <span className="bg-white px-2 py-1 rounded">partner25proyearly</span>
          </p>
        </motion.div>

        {/* PRICING CARDS */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          {/* BASIC */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-xl font-bold">SwiftRooter Template</h3>
            <p className="text-gray-500">Framer Template Only</p>
            <p className="text-3xl font-extrabold mt-4">$19</p>
            <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg">
              Buy Now
            </button>
          </div>

          {/* FULL VERSION */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-xl font-bold">SwiftRooter Full Version</h3>
            <p className="text-gray-500">Framer + Figma Files</p>
            <p className="text-3xl font-extrabold mt-4">$29</p>
            <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg">
              Buy Now
            </button>
          </div>

          {/* EXTENDED LICENSE */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-xl font-bold">Extended License</h3>
            <p className="text-gray-500">Unlimited Projects</p>
            <p className="text-3xl font-extrabold mt-4">$249</p>
            <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg">
              Buy Now
            </button>
          </div>
        </div>

        {/* FOOT NOTE */}
        <p className="text-center text-gray-500 mt-8">
          Payments are secure & encrypted — Powered by Lemon Squeezy
        </p>

      </div>
    </div>
  );
};

export default Template;
