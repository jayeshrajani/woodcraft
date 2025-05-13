'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TestimonialsCustomer from './TestimonialsCustomer';

const images = [
  '/furniture_landing.png',
  '/chair.png',
  '/table.png',
];

export default function Hero() {
  const [elems, setElems] = useState([
    {
      heading: "The Driftwood Resort – Alibaug",
      subheading: "Nature meets design. Where every corner whispers calm.",
      video:
        "https://videocdn.cdnpk.net/videos/352f1574-b6ff-4528-af88-af22300d30ae/horizontal/previews/clear/large.mp4?token=exp=1747132833~hmac=1a9313460dcf1e6ae4ba2f18346c3db2d54f27cdf69d0349167ce3f3c6dff7c3"
    },
    {
      heading: "Multi-Utility Wall Storage",
      subheading: "Designed for a studio apartment — part bookshelf, part workspace, part display unit.",
      video: "https://videocdn.cdnpk.net/videos/e69627b0-11ca-4808-afd3-870b556c1caf/horizontal/previews/clear/large.mp4?token=exp=1747132354~hmac=080f2ea7272e7a9a31c67894fce2f49d92e760d7dfb76dc5da40967ea1780be1"
    },
    {
      heading: "Barfly Restrobar – Mumbai",
      subheading: "Rustic meets industrial. A curated vibe with custom seating, reclaimed wood bar, and raw metal finishes.",
      video:"https://videocdn.cdnpk.net/videos/2204d13b-c714-452c-90aa-4a4ab159395c/horizontal/previews/clear/large.mp4?token=exp=1747132551~hmac=aa9c340c47501b9d55c130514534763d2d144aa5c54fb21f1adbbad8309734f4"
    },
    {
      heading: "Startup HQ – Bangalore",
      subheading: "Built for productivity & creativity. A modular workspace with ergonomic desks, collaborative zones, and ambient lighting.",
      video:
        "https://videocdn.cdnpk.net/videos/a6c4b38a-f982-5b76-9654-ed0e23333d47/horizontal/previews/clear/large.mp4?token=exp=1747132714~hmac=9ff6507f095c21ff70c4b7e10d119ccc323da22174e233e4dde1041bd4d5ff25",
    },
    
  ]);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center bg-[#f7f5f0] text-[#3e2f1c] px-6 sm:px-10 overflow-hidden relative">
        <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 sm:gap-24 py-12 sm:py-20">
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight mb-6 tracking-tight">
              Crafted for Living.
            </h1>
            <p className="text-lg text-[#5c5244] mb-8 max-w-md mx-auto md:mx-0">
              Handmade wooden furniture inspired by nature — timeless, warm, and built to last.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="/collections"
                className="bg-[#6d4c41] text-white px-6 py-3 rounded-full text-sm hover:bg-[#5c3b30] transition"
              >
                Explore our catalogue
              </Link>
              <Link
                href="/about"
                className="border border-[#6d4c41] text-[#6d4c41] px-6 py-3 rounded-full text-sm hover:bg-[#ebe6de] transition"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>

          {/* Image Carousel with subtle parallax */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 relative w-full h-[300px] sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Wooden furniture product ${i + 1}`}
                fill
                className={`object-contain transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
                priority={i === 0}
              />
            ))}

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10 sm:p-3 shadow-md"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-[#3e2f1c]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10 sm:p-3 shadow-md"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-[#3e2f1c]" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full ${i === current ? 'bg-[#6d4c41]' : 'bg-white/60'} transition`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative glow */}
        <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#e5d7c4] rounded-full blur-3xl opacity-20 z-0" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#d4c2aa] rounded-full blur-3xl opacity-20 z-0" />
      </section>

      <div className="w-full relative bg-[#c8c2b2]">
        <div className="max-w-7xl mx-auto py-20 px-5 sm:px-10">
          <h1 className="sm:ml-13">Featured Projects</h1>
          <h3 className="text-9xl mt-4 sm:ml-13 overflow-hidden">
            <motion.span
              initial={{ rotate: 90, y: "40%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ easeIn: "easeIn", duration: 0.5, delay: 1 * 0.3 }}
              className="inline-block origin-left"
            >
              Work
            </motion.span>
          </h3>
          <p className="mt-4 leading-none tracking-normal sm:ml-13">
          A showcase of spaces we've elevated <br />  <br />Built with intent, functionality, and timeless style.


          </p>
          <div className="elems mt-10 sm:flex sm:flex-wrap sm:gap-4 justify-evenly">
            {elems.map((elem, index) => {
              return (
                <div key={index} className="elem w-full sm:w-[48%] lg:w-[43%] mt-12 flex-shrink-0">
                  <div className="video w-full h-[60vw] sm:h-[30vw] lg:h-[20vw] bg-red-300 overflow-hidden">
                    <motion.video
                      className="w-full h-full object-cover scale-[1.2]"
                      autoPlay
                      muted
                      loop
                      whileHover={{ scale: 1.2 }}
                      src={elem.video}
                      aria-label={elem.heading}
                    />
                  </div>
                  <div className="mt-2">
                    <h1 className="font-semibold">{elem.heading}</h1>
                    <p className="text-zinc-600">{elem.subheading}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <TestimonialsCustomer/>

      <div className="w-full h-[70vh] flex justify-center items-center  flex flex-col gap-20 text-black overflow-hidden sm:mt-40">
      <div className="w-full max-w-7xl mx-auto heading flex flex-col items-center">
        {/* "Spread" coming from the left */}
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }} // Start from the left
          whileInView={{ x: 0, opacity: 1 }} // Move to the center
          transition={{ ease: "easeInOut", duration: 1.5 }} // Smooth easing
          className="origin-left text-6xl font-light text-center"
        >
          Spread
        </motion.h1>

        {/* "The News" coming from the right */}
        <motion.span
          initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right
          whileInView={{ x: 0, opacity: 1 }} // Move to the center
          transition={{ ease: "easeInOut", duration: 1.5 }} // Smooth easing
          className="text-6xl font-light origin-bottom-left"
        >
          The News
        </motion.span>
      </div>
      <p className="px-5 text-center text-s">
      Because good design is worth talking about.
      </p>
    </div>
    </>
  );
}
