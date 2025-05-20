import React from "react";
import { motion } from "framer-motion";
import HelpForm from "@/components/form/HelpForm";

const HomePage: React.FC = () => {
  return (
    <main className="overflow-x-hidden text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-100 to-white min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Roadside Assistance at Your Fingertips
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Stuck on the road? Flat tire? Engine trouble? Car Doctor is here to
          help 24/7, anywhere, anytime.
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 transition"
          whileHover={{ scale: 1.05 }}
        >
          Get Help Now
        </motion.a>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 bg-white text-center px-4">
        <motion.h2
          className="text-3xl font-bold mb-6 text-blue-700"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Car Doctor?
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-gray-600"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We're fast, reliable, and professional. With expert mechanics, fast
          response time, and 24/7 service, we ensure you're never left stranded.
        </motion.p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-blue-700"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Flat Tyre Repair",
              desc: "Quick on-spot puncture repair and replacement.",
            },
            {
              title: "Battery Jumpstart",
              desc: "Dead battery? We'll restart your car in minutes.",
            },
            {
              title: "Fuel Delivery",
              desc: "Ran out of fuel? We’ll bring it to you.",
            },
            {
              title: "Towing Service",
              desc: "Need a tow? We’ll safely transport your vehicle.",
            },
            {
              title: "Mechanical Fixes",
              desc: "Minor mechanical issues handled on the spot.",
            },
            {
              title: "Emergency Support",
              desc: "24/7 helpline and emergency breakdown assistance.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Amit S.",
              review: "They reached within 20 minutes. Lifesavers!",
            },
            {
              name: "Priya K.",
              review:
                "Professional service and friendly staff. Highly recommend.",
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <p className="text-gray-700 italic">"{testimonial.review}"</p>
              <p className="mt-4 font-semibold text-blue-700">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="help-form" className="py-20 bg-gray-100 px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-blue-700 mb-10"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Request Service / Contact Us
        </motion.h2>
        <HelpForm />
      </section>
    </main>
  );
};

export default HomePage;
