import React, { useState, useEffect } from 'react';

const DemoCase = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const boxes = [
    { id: 1, title: "Amazon Prime", image: 'primeVideo.png' },
    { id: 2, title: "MagicBricks", image: 'magicBricks.png' },
    { id: 3, title: "Miro", image: 'miro.png' },
    { id: 4, title: "Amazon.com", image: 'amazon.png' },
    { id: 5, title: "Netflix", image: 'netflix.png' },
    { id: 6, title: "Canva", image: 'canva.png' },
    { id: 7, title: "Google", image: 'google.png' },
  ];

  return (
    <div className="masonry-grid-container">
      <div
        className="grid grid-cols-5 grid-rows-2 gap-4 p-4"
      >
        {boxes.map((box, index) => (
          <div
            key={index}
            onClick={() => setSelectedBox(index === selectedBox ? null : index)}
            className={`box ${
              selectedBox === index
                ? "box-large"
                : "box-small"
            }`}
            style={{
              backgroundImage: `url(${box.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay">
              <div className="title">{box.title}</div>
              {selectedBox === index && (
                <div className="details">
                  <h3>Improving {box.title} Viewing Experience</h3>
                  <p>A sneak peek into what you will learn in our 10-week curriculum.</p>
                  <div className="date">Published on: 25th May 24</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoCase;
