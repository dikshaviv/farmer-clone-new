// src/components/Contact.jsx
import React, { useState } from "react";

// Import the expert image used in Contact page
import contactExpertImg from "../assets/plumber1.jpg"; // replace with the correct image for contact page

// FAQ Data
const faqs = [
  { question: "What plumbing services do you offer?", answer: "We provide residential and commercial plumbing services, including emergency repairs, drain cleaning, water heater installation, leak detection, and more." },
  { question: "Do you offer 24/7 emergency plumbing services?", answer: "Yes, we provide round-the-clock emergency plumbing services to address urgent issues immediately." },
  { question: "How can I schedule a service appointment?", answer: "You can schedule online through our website or call our hotline to book a convenient time." },
  { question: "How much do your services cost?", answer: "Our pricing is transparent and depends on the service required. Contact us for a detailed quote." },
  { question: "Do you offer warranties on your plumbing work?", answer: "Yes, we stand by our work and offer warranties on all plumbing services provided." },
];

const Contact = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="space-y-16 max-w-6xl mx-auto px-4">

      {/* Get in Touch With Us */}
      <section className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Get in Touch with Us</h2>
          <p>Reach out to us for inquiries, support, or partnership opportunities. We're here to assist you!</p>

          <div className="space-y-2">
            <button className="w-full md:w-auto flex items-center justify-between bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
              <span>hallo@test@gmail.com</span>
              <span className="font-semibold">Message</span>
            </button>
            <button className="w-full md:w-auto flex items-center justify-between bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
              <span>+1 [303] 873-2983</span>
              <span className="font-semibold">Call Now</span>
            </button>
            <button className="w-full md:w-auto flex items-center justify-between bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
              <span>Online Appointment</span>
              <span className="font-semibold">Schedule</span>
            </button>
          </div>
        </div>

        {/* Send a Message Form */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Send Us a Message</h2>
          <p>Use our convenient contact form to reach out with questions, feedback, or collaboration inquiries.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Message" rows="5" className="w-full p-2 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Submit</button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="grid md:grid-cols-2 gap-8 mt-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-2 border-b border-gray-200">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left py-2 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span>{faqOpen === idx ? "-" : "+"}</span>
              </button>
              {faqOpen === idx && <p className="text-gray-700 py-2">{faq.answer}</p>}
            </div>
          ))}
        </div>

        {/* Expert Image */}
        <div className="flex items-center justify-center">
          <img src={contactExpertImg} alt="Contact Expert" className="w-72 h-72 object-cover rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Support Box */}
      <section className="bg-black text-white py-8 rounded-lg text-center mt-8">
        <h3 className="text-xl font-bold mb-2">Need More Help?</h3>
        <p className="mb-4">Contact us for support, inquiries, or partnership—we're happy to assist!</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">Contact Us</button>
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
};

export default Contact;
