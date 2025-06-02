import React from 'react';
import backgroundVideo from '../../assets/background.mp4'; // adjust the path

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-20">
      <video 
        autoPlay 
        loop 
        muted 
        className="min-w-full min-h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
