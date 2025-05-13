import React, { useEffect, useRef } from "react";
// Import your video assets here (ensure the paths are correct)
// import greenery from "../assets/greenery.mp4";
// import man from "../assets/man.mp4";
// import news from "../assets/news.mp4";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const TestimonialsCustomer: React.FC = () => {
  const parent = useRef<HTMLDivElement>(null);
  const first = useRef<HTMLDivElement>(null);
  const second = useRef<HTMLDivElement>(null);
  const third = useRef<HTMLDivElement>(null);
  const fourth = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the first video
    gsap.to(first.current, {
      x: "60%", // Move horizontally by 40% of the element width
      ease: "linear",
      scrollTrigger: {
        trigger: first.current,
        start: "top bottom", // Start when the top of the element reaches the bottom of the viewport
        end: "top top", // End when the top of the element reaches the top of the viewport
        scrub: 1, // Scrub the animation with the scroll
      },
    });

    // Animation for the third video
    gsap.to(third.current, {
      x: "-40%",
      ease: "linear",
      scrollTrigger: {
        trigger: third.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });

    gsap.to(second.current, {
      y: "60%",
      ease: "linear",
      scrollTrigger: {
        trigger: third.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });

    gsap.to(fourth.current, {
      x: "40%",
      // y: "40%",
      ease: "linear",
      scrollTrigger: {
        trigger: third.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });

  }, []);

  return (
    <>


    
    <div
      ref={parent}
      className="w-full h-[50vh] sm:h-[100vh] bg-zinc-100 relative"
    >

<div className="w-full max-w-7xl mx-auto heading flex flex-col items-center sm:mb-20">
        {/* "Spread" coming from the left */}  
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }} // Start from the left
          whileInView={{ x: 0, opacity: 1 }} // Move to the center
          transition={{ ease: "easeInOut", duration: 1.5 }} // Smooth easing
          className="origin-left text-3xl font-light text-center sm:mt-5"
        >
          Behind Every Build ,
        </motion.h1>

        {/* "The News" coming from the right */}
        <motion.span
          initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right
          whileInView={{ x: 0, opacity: 1 }} // Move to the center
          transition={{ ease: "easeInOut", duration: 1.5 }} // Smooth easing
          className="text-3xl font-light origin-bottom-left"
        >
          A Story Told
        </motion.span>
      </div>
      
      <div className="centre-img top-1/2 left-1/2 absolute w-50 mt-10 -translate-x-1/2 -translate-y-1/2 sm:w-96 sm:mt-60">
        <img
          src="https://marketplace.canva.com/EAFUdYqHyx0/1/0/1280w/canva-green-modern-customer-testimonials-instagram-post-p8RrhQOeAmc.jpg"
          alt=""
        />
      </div>

      <div
        ref={first}
        className="absolute w-32 aspect-video top-30 sm:top-40 right-70  sm:left-50 sm:w-72"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="https://videocdn.cdnpk.net/videos/ccba6ca9-4d36-41a0-8351-b75aaa243aca/horizontal/previews/clear/large.mp4?token=exp=1747131737~hmac=11c75a9eacb759673bca8ca1d19a11d7cd473af43c6c5524e73edca94f6d885c" 
        ></video>
      </div>

      <div ref={second} className="absolute w-20 h-28 sm:w-60 sm:h-72 top-10 right-15 sm:right-90">
        <img
          className="w-full h-full object-contain object-center"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/client-testimonials.-round-avatar-design-template-21b9c38b388028647d03c627ffce3832_screen.jpg?ts=1677560419"
          alt=""
        />
      </div>

      <div
        ref={third}
        className="absolute w-20 sm:w-120 aspect-video top-60 left-15 sm:top-100 sm:left-60"
      >
        <img
          className="w-full h-full object-contain object-center"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/customer-testimonial-feedback-graphic-social-design-template-3e88ec45491af37dbd0205b25d963b2c_screen.jpg?ts=1617976928" 
          alt=""
        />
           
        
      </div>

      <div ref={fourth} className="absolute sm:w-64 w-32 aspect-video top-65 sm:top-120 right-20 sm:right-80">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-contain object-top"
          src="https://videocdn.cdnpk.net/videos/b52faaf7-def8-4161-8c21-49a1b071d923/horizontal/previews/clear/large.mp4?token=exp=1747131581~hmac=e04dad8720f294ddefaaca696d194cb39b14956ecfd3da35d465e76cb2e60403"  
        ></video>
      </div>
    </div>
    </>
  );
}

export default TestimonialsCustomer;
