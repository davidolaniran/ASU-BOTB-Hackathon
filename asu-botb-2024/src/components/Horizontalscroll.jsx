import React from 'react';
import './HorizontalScroll.css'; 

const HorizontalScroll = () => {
  return (
    <div className="horizontal-scroll-container">
      <div className="content">
        <img src={require('./Aaron Donald.jpeg')} alt="Image 1" className="item" />
        <img src={require('./JustinJefferson.jpeg')} alt="Image 2" className="item" />
        <img src={require('./EdgeMyles.jpeg')} alt="Image 3" className="item" />
        <img src={require('./TravisKelce.jpeg')} alt="Image 1" className="item" />
        <img src={require('./ChrisJones.jpeg')} alt="Image 2" className="item" />
        <img src={require('./DavanteAdams.jpeg')} alt="Image 3" className="item" />
        <img src={require('./EdgeMicah.jpeg')} alt="Image 1" className="item" />
        
      </div>
      
    </div>
  );
}

export default HorizontalScroll;
