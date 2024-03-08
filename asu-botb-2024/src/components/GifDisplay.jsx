import React from 'react';

function GifDisplay() {
    const videoUrl = "https://youtu.be/zp7_DdBo_8o?si=QOdlGEWlSensG10-" 
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <video width="80%" height="auto" controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
}

export default GifDisplay;
