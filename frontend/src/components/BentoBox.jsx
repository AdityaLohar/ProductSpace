import { useState } from 'react';

const BentoBox = ({}) => {
  const [selectedBox, setSelectedBox] = useState(0);
  const boxes = Array(7).fill(null);

  return (
    <div className="grid grid-cols-5 gap-2 w-full h-full p-4">
      {boxes.map((_, index) => (
        <div
          key={index}
          onClick={() => setSelectedBox(index)}
          className={`transition-all duration-500 ease-in-out cursor-pointer ${
            selectedBox === index
              ? 'col-span-2 row-span-2'
              : 'col-span-1 row-span-1'
          } bg-blue-500 hover:bg-blue-600 flex items-center justify-center font-bold`}
        >
          {`Box ${index + 1}`}
        </div>
      ))}
    </div>
  );
};

export default BentoBox;