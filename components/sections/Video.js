import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="video-section">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/background/bg-video1.jpg)' }}
        ></div>
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="outer-box">
                <a onClick={() => setOpen(true)} className="play-now">
                  <i className="icon fa-thin fa-play" />
                  <span className="ripple"></span>
                </a>
                <h2 className="title words-slide-up text-split">
                  A full-service yachting house for ocean
                </h2>
                <div className="text">
                  With over four decades of experience providing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </>
  );
};
export default Video;
