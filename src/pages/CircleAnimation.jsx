import React, { useState, useEffect } from 'react';
import logo from "../assets/ps-logo.svg"

const CircleAnimation = () => {
  return (
    <div className="circle-container">
      <div className='icon'>
        <div className="imgBx" style={{ '--i': 1 }}>
          <img src={logo} />
        </div>
        <div className="imgBx" style={{ '--i': 2 }}>
          <img src={logo} />
          
        </div>
        <div className="imgBx" style={{ '--i': 3 }}>
          <img src={logo} />
          
        </div>
        <div className="imgBx" style={{ '--i': 4 }}>
          <img src={logo} />
          
        </div>
        <div className="imgBx" style={{ '--i': 5 }}>
          <img src={logo} />
          
        </div>
        <div className="imgBx" style={{ '--i': 6 }}>
          <img src={logo} />
          
        </div>
        <div className="imgBx" style={{ '--i': 7 }}>
          <img src={logo} />
          
        </div>
        <div className="imgBx" style={{ '--i': 8 }}>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};

export default CircleAnimation;
