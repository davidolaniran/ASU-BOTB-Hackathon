import React from 'react';


function VideoPlayer() {
  return (
    <div style={{ textAlign: 'center' }}>
      <video width="560" height="315" controls>
        <source src="Game.mp4" type="video/mp4" />
      </video>
      <div style={{ marginTop: '20px', marginLeft: '40px', fontSize: '40px' }}>
          Philadelphia Eagles vs Kansas City Chiefs
      </div>
    </div>
  );
}

export default VideoPlayer;
