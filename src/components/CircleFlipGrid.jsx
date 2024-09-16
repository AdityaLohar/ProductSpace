import { useEffect, useState } from "react";
import "../index.css";
import meet1 from "../assets/placement-support.png";
import meet5 from "../assets/teardowns.png";
import meet8 from "../assets/interview-prep.png";

import meet2 from "../assets/expert-guidance.png";
import meet6 from "../assets/jobs-internships.png";
import meet7 from "../assets/industry-tested-content.png";

import meet3 from "../assets/networking events.png";
import meet4 from "../assets/personalized-assesment.png";
import meet9 from "../assets/live-classroom.png";

const CircleFlipGrid = () => {
  const initialState = Array(9).fill(false); // Initial state for all circles (false = front, true = back)
  const [flipped, setFlipped] = useState(initialState);
  const [index, setIndex] = useState(0);

  // Groups of circles to flip
  const groups = [
    [0, 4, 7], // (1, 5, 8)
    [1, 5, 6], // (2, 6, 7)
    [2, 3, 8], // (3, 4, 9)
  ];

  // Background images for the circles
  const circleData = [
    { image: meet1, color: "bg-[#FFAD66]", borderRadius: "rounded-full", borderFlipped: "rounded-full" },
    { image: meet2, color: "bg-[#FFE3EF]", borderRadius: "rounded-bl-full", borderFlipped: "rounded-br-full" },
    { image: meet3, color: "bg-[#F15031]", borderRadius: "rounded-full", borderFlipped: "rounded-full" },
    { image: meet4, color: "bg-[#FFF1D4]", borderRadius: "", borderFlipped: "" },
    { image: meet5, color: "bg-[#FFE3EF]", borderRadius: "", borderFlipped: "" },
    { image: meet6, color: "bg-[#FFF1D4]", borderRadius: "rounded-bl-full", borderFlipped: "rounded-br-full" },
    { image: meet7, color: "bg-[#AEECFF]", borderRadius: "rounded-tl-full", borderFlipped: "rounded-tr-full" },
    { image: meet8, color: "bg-[#21C1F3]", borderRadius: "rounded-full", borderFlipped: "rounded-full" },
    { image: meet9, color: "bg-[#FFE3EF]", borderRadius: "rounded-br-full", borderFlipped: "rounded-bl-full" },
  ]

  useEffect(() => {
    const flipAndUnflip = () => {
      const newFlipped = [...initialState];

      // Flip the current group
      groups[index].forEach((i) => {
        newFlipped[i] = true;
      });
      setFlipped(newFlipped);

      // After 1 second, unflip the group and simultaneously flip the next group
      setTimeout(() => {
        const unflipFlipped = [...initialState];
        groups[index].forEach((i) => {
          unflipFlipped[i] = false; // Unflip current group
        });

        // Calculate the next group to flip while unflipping the current one
        const nextIndex = (index + 1) % groups.length;
        groups[nextIndex].forEach((i) => {
          unflipFlipped[i] = true; // Flip the next group
        });

        setFlipped(unflipFlipped); // Update the flipped state with unflipped and next group flipped
        setIndex(nextIndex); // Move to the next group
      }, 2000); // Wait for 1 second before starting the unflip and flip process
    };

    const interval = setInterval(flipAndUnflip, 1000); // Run the flip/unflip cycle every 1 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [index]);

  return (
    <div className="grid grid-cols-3 gap-0">
      {circleData.map((circle, idx) => (
        <div key={idx} className="circle-container p-0 m-0 w-[85px] h-[85px]  custom-1:w-[95px] custom-1:h-[95px] md:w-[126px] md:h-[126px] xl:w-[169px] xl:h-[169px]">
          <div className={`circle  ${flipped[idx] ? "flip" : ""}`}>
            {/* Front side with color */}
            <div className={`circle-front w-[85px] h-[85px] custom-1:w-[95px] custom-1:h-[95px] md:w-[126px] md:h-[126px] xl:w-[169px] xl:h-[169px] ${circle.color} ${circle.borderRadius}`}></div>

            {/* Back side with image */}
            <div
              className={`circle-back w-[85px] h-[85px] custom-1:w-[95px] custom-1:h-[95px] md:w-[126px] md:h-[126px] xl:w-[169px] xl:h-[169px] ${circle.borderFlipped} bg-cover`}
              style={{ backgroundImage: `url(${circle.image})` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CircleFlipGrid;