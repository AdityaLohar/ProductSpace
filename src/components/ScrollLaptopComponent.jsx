import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import ipad from '../assets/ipad.svg';
import applePencil from '../assets/apple-pencil.svg';

const ScrollLaptopComponent = () => {
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const controls = useAnimation();
  const pencilControls = useAnimation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const maxScrollRange = 400; // Adjust this value for smoothness of animation
    const laptopRotation = Math.min(Math.max((scrollY / maxScrollRange) * 90, 0), 90); // Clamp between 0 and 90 degrees

    // Animate the laptop opening based on scroll position
    controls.start({
      rotateX: -90 + laptopRotation, // From -90 (closed) to 0 (open)
      transition: { duration: 0.2, ease: 'easeOut' }
    });

    // Animate the pencil movement and rotation
    pencilControls.start({
      x: Math.min(Math.max((scrollY / maxScrollRange) * 200, 0), 200), // Move right up to 200px
      rotate: Math.min(Math.max((scrollY / maxScrollRange) * 90, 0), 90), // Rotate from 0 to 90 degrees
      transition: { duration: 0.2, ease: 'easeOut' }
    });

  }, [scrollY, controls, pencilControls]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Main Container */}
      <div className="relative w-full max-w-2xl h-[600px] flex items-center justify-center"> {/* Increased height to fit iPad */}
        
        {/* Pencil */}
        <motion.img
          src="/"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 -translate-y-12" // Positioned pencil above the iPad
          animate={pencilControls}
          initial={{ x: 0, rotate: 0 }} // Pencil starts horizontal and centered
        />

        {/* Laptop Image (iPad) */}
        <motion.div
          className="relative w-[85%] h-[85%] flex justify-center items-center" // Ensure iPad fits inside the container
          animate={controls}
          initial={{ rotateX: -90 }} // Closed laptop position
          style={{ transformOrigin: 'bottom center' }} // Laptop opens like a lid
        >
          <img
            src={ipad}
            className="w-full h-full object-contain" // Makes sure iPad fits the container and is responsive
            alt="Laptop"
          />

          {/* Content Inside Laptop */}
          <motion.div
            className={`absolute inset-0 p-4 overflow-y-scroll`}
          >
            <div className="text-center text-white">
              <h1 className="text-2xl">Scroll through the content</h1>
              <p className="mt-4">Content block 1</p>
              <p className="mt-4">Content block 2</p>
              <p className="mt-4">Content block 3</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollLaptopComponent;
