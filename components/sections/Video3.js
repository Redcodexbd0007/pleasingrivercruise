import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Video3 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="video-section-two">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="outer-box">
                <h2 className="title words-slide-up text-split">
                  A full-service yachting house for ocean
                </h2>
                <a onClick={() => setOpen(true)} className="play-now">
                  <i className="icon fa-thin fa-play" />
                  <span className="ripple"></span>
                </a>
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
export default Video3;
