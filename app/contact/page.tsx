'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Form submitted successfully');
    }, 2000);
  };

  return (
    <section className="bg-[#f7f5f0] py-20 px-6 sm:px-10 text-[#3e2f1c]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">Contact Us</h1>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row gap-12 mb-14">
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-base text-[#5c5244] mb-6">
              Feel free to reach out to us for any inquiries or feedback. We’d love to hear from you!
            </p>

            {/* Service Mention */}
            <p className="text-base text-[#5c5244] mb-6">
              We specialize in providing high-quality furniture for commercial spaces, offices, and custom-made furniture solutions tailored to your needs. Whether you’re outfitting a corporate office, designing a commercial space, or looking for bespoke furniture pieces, we’ve got you covered!
            </p>

            {/* Contact Info */}
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Email:</h3>
                <p className="text-[#5c5244]">support@example.com</p>
              </li>
              <li>
                <h3 className="font-semibold">Phone:</h3>
                <p className="text-[#5c5244]">+1 123-456-7890</p>
              </li>
              <li>
                <h3 className="font-semibold">Address:</h3>
                <p className="text-[#5c5244]">123 Furniture St, City, Country</p>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d4c41] transition"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d4c41] transition"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d4c41] transition"
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-[#6d4c41] text-white py-2 rounded-md text-lg font-semibold transition ${isSubmitting ? 'bg-opacity-60 cursor-not-allowed' : 'hover:bg-[#5c3b30]'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="my-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Location</h2>
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=123+Furniture+St,+City,+Country"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
