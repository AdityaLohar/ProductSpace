import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';


// import ipad from '../assets/laptop.svg';
import ipad from '../assets/ipad.svg';
import pencil from '../assets/apple-pencil.svg';

const ScrollLinkedLaptop = () => {
  const containerRef = useRef(null);
  const innerContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const { scrollYProgressInner } = useScroll({
    target: innerContainerRef,
    offset: ["start end", "end end"]
  });

  
  const imageValue = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  // Ipad 
  const imageRotateValue = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["-90deg", "-70deg", "-30deg", "0deg"]);
  
  const ipadScaleXValue = useTransform(scrollYProgress, [0, 0.5, 0.7], [1.7, 1.4, 1]); 
  const ipadScaleYValue = useTransform(scrollYProgress, [0, 0.5, 0.7], [1.7, 1.4, 1]);
  
  
  // Pencil
  const pencilRotateValue = useTransform(scrollYProgress, [0.4, 0.6, 0.7, 0.8, 0.9, 1], ["-90deg", "-70deg", "-50deg", "-30deg", "-15deg", "0deg"]);
  const pencilValueX = useTransform(scrollYProgress, [0.4, 0.6, 0.7, 0.8, 0.9, 1], ["0%", "300%", "500%", "800%", "1200%", "1600%"]);
  const pencilValueY = useTransform(scrollYProgress, [0.4, 0.6, 0.7, 0.8, 0.9, 1], ["-40%", "-30%", "-20%", "-15%", "-5%", "0%"]);


  // const contentMoveUpValue = useTransform(scrollYProgress, [0.6, 0.8], ["25%", "20%"]);  // Moves up as pencil goes down


  return (
    <section className="scroll-container" ref={containerRef}>
      <div className="text-[40px] font-sans font-bold text-[#111]">
        <h2>Course Curicullum</h2>
      </div>

      <div className="img-container flex justify-center" ref={scrollYProgressInner}>
        <motion.div className="img-inner"
          style={{
            maxHeight: "70vh"
          }}
        >
          <motion.img 
            src={pencil} 
            alt="a green plant" 
            className='' 
            style={{ 
              rotateZ: pencilRotateValue, 
              translateX: pencilValueX,  
              translateY: pencilValueY,  
              maxHeight: '80vh',  // This ensures the pencil is not too large
              objectFit: 'contain',  // Keeps the aspect ratio intact
              zIndex: 10,
            }}
          />

          <motion.div 
            className="bottom-content flex justify-center" 
            // style={{ translateY: contentMoveUpValue }}
          >
            {/* Bottom content here */}
            <motion.img 
              src={ipad} 
              alt="a green plant" 
              className='bg-red-200' 
              style={{ 
                rotateX: imageRotateValue, 
                transformOrigin: "bottom center",  // Focus on scaling from the top
                scaleX: ipadScaleXValue,  // New animated value
                scaleY: ipadScaleYValue   // New animated value
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollLinkedLaptop;