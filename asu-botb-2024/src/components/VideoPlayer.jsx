import React from 'react';


function VideoPlayer() {
  return (
    <div style={{ textAlign: 'center' }}> {/* Ensures content is centered */}
   <iframe width="560" height="315" src="https://www.youtube.com/embed/Sf25jaaL0AQ?si=gLd1YbuAWbWKauCd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* Centralized text with increased font size */}
    <div style={{ marginTop: '20px', marginLeft: '40px', fontSize: '40px' }}>
      San Francisco 49ers vs Green Bay Packers
    </div>
  </div>
  );
}

export default VideoPlayer;
