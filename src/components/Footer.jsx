import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12 mt-8">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl text-white font-bold">SwiftRooter</h3>
        <p className="mt-2">Professional drain & plumbing services near you.</p>
      </div>

      <div>
        <h4 className="font-semibold text-white">Quick Links</h4>
        <ul className="mt-3 space-y-2">
          <li><a href="/" className="hover:text-white">Home</a></li>
          <li><a href="/services" className="hover:text-white">Services</a></li>
          <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
          <li><a href="/contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white">Contact</h4>
        <p className="mt-3">+91 12345 67890</p>
        <p className="mt-1">support@swiftrooter.com</p>
      </div>
    </div>

    <div className="text-center text-gray-500 mt-8">
      © {new Date().getFullYear()} SwiftRooter. All rights reserved.
    </div>
  </footer>
);

export default Footer;
