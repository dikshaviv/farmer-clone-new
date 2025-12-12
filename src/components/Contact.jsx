import React, { useState } from "react";
import contactImg from "../assets/Contact Page.jpg";

const Contact = () => {
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const data = new FormData(e.target);
    data.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // replace with your key

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("Message sent!");
        e.target.reset();
      } else {
        setStatus("Error sending message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">Fill the form and we'll get back to you shortly.</p>

          <form onSubmit={submit} className="space-y-4">
            <input name="name" required className="w-full p-3 border rounded" placeholder="Your name" />
            <input name="email" type="email" required className="w-full p-3 border rounded" placeholder="Email" />
            <input name="phone" className="w-full p-3 border rounded" placeholder="Phone (optional)" />
            <textarea name="message" required className="w-full p-3 border rounded" rows="6" placeholder="Message" />
            <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded">Send Message</button>
          </form>

          {status && <p className="mt-4 text-green-600">{status}</p>}
        </div>

        <div>
          <img src={contactImg} alt="Contact" className="rounded-lg shadow-lg object-cover w-full" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
