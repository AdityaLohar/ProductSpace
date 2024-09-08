import React, { useState, useEffect } from 'react';

const CircularProgress = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prevRotation => (prevRotation + 1) % 360); // Update rotation
    }, 64); // Update every 100ms
    return () => clearInterval(interval);

  }, []);

  // Calculate the gradient for the pie chart
  const getGradient = () => {
    const segmentDegrees = 45; // Each segment covers 45 degrees
    const numberOfSegments = 8;
    const currentSegment = Math.floor(rotation / segmentDegrees);

    // Create gradient stops
    const gradientStops = [];
    for (let i = 0; i < numberOfSegments; i++) {
      const startAngle = i * segmentDegrees;
      const endAngle = startAngle + segmentDegrees;
      const color = i <= currentSegment ? 'black' : '#ff66ff'; // Black for highlighted, default for others
      gradientStops.push(`${color} ${startAngle}deg ${endAngle}deg`);
    }

    return `conic-gradient(${gradientStops.join(', ')})`;
  };

  return (
    <div className="pie-chart" style={{ background: getGradient() }}>
      <div className="inner-circle"></div>
      <div className="arc-pie" style={{ transform: `rotate(${rotation}deg)` }}></div>
    </div>
  );
};

export default CircularProgress;
