'use client';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <div className="min-h-screen px-6 sm:px-10 py-16 bg-white text-[#3e2f1c] font-sans">
      <section className="max-w-6xl mx-auto space-y-20">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-medium mb-3">Who We Are</h1>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Craftsmanship meets simplicity. We don't just build furniture — we shape experiences.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1616627781310-7d2da62d8b90?auto=format&fit=crop&w=800&q=80"
            alt="Workshop"
            className="w-full h-72 object-cover rounded-lg shadow-sm"
          />
          <div>
            <h2 className="text-xl font-semibold mb-3">Our Story</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Launched in 2020 from a humble garage, UrbanAura began with a dream to reimagine how wood meets modern homes.
              With a deep love for design and detail, we've become a trusted name across India.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#f9f7f3] p-6 sm:p-10 rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            To craft sustainable, intentional furniture that blends into your life effortlessly. Every piece reflects precision, passion, and responsibility.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-xl font-semibold mb-6">Meet the Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {['Aarav', 'Meera', 'Karan', 'Divya'].map((name, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-gray-300 mb-2" />
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-gray-500">Designer</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
