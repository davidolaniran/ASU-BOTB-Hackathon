import React from 'react';
import './HorizontalScroll.css'; // Import CSS file for styling

const HorizontalScroll = () => {
  return (
    <div className="horizontal-scroll-container">
      <div className="content">
        {/* Your content goes here */}
        <img src={require('./g1.jpeg')} alt="Image 1" className="item" />
        <img src={require('./g2.jpeg')} alt="Image 2" className="item" />
        <img src={require('./g3.jpeg')} alt="Image 3" className="item" />
        <img src={require('./g4.jpeg')} alt="Image 1" className="item" />
        <img src={require('./g5.jpeg')} alt="Image 2" className="item" />
        <img src={require('./g6.jpeg')} alt="Image 3" className="item" />
        <img src={require('./g7.jpeg')} alt="Image 1" className="item" />
        
      </div>
    </div>
  );
}

export default HorizontalScroll;
