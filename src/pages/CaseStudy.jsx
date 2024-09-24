import { useState } from "react";
import { motion } from "framer-motion";

const CaseStudy = () => {
  // State to track the selected box
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Number of boxes
  const totalBoxes = 7;

  // Generate the box components
  const boxes = Array.from({ length: totalBoxes }, (_, index) => (
    <motion.div
      key={index}
      className="bg-blue-400 cursor-pointer"
      onHoverStart={() => setSelectedIndex(index)}
      onHoverEnd={() => setSelectedIndex(0)} // Revert back to the first box if no box is hovered
      animate={{
        width: selectedIndex === index ? 40 : 20, // Bigger when selected
        height: selectedIndex === index ? 40 : 20, // Bigger when selected
        transition: { duration: 0.3, ease: "easeInOut" }, // Smooth animation
      }}
    />
  ));

  return (
    <div
      className="bg-gray-100 h-screen"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${totalBoxes}, minmax(20px, 40px))`,
          gap: "10px",
        }}
      >
        {boxes}
      </div>
    </div>
  );
};

export default CaseStudy;
