import React from "react";
import ReactPlayer from "react-player";
import video from "./../assets/video/haderVideo1.mp4";

const HeaderVideo = () => {
  const videoUrl = video;

  return (
    <React.Fragment>
      <div className="video-container">
        <ReactPlayer
          url={videoUrl}
          loop
          muted
          playing
          width="100%"
          height="100%"
        />
      </div>
    </React.Fragment>
  );
};

export default HeaderVideo;
