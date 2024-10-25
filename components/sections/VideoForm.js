import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const VideoForm = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="contact-section-two">
        <div
          className="bg bg-image"
          style={{
            backgroundImage: 'url(images/background/bg-contact2-1.jpg)',
          }}
        ></div>
        <div
          className="bg bg-image-2"
          style={{
            backgroundImage: 'url(images/background/bg-contact2-2.jpg)',
          }}
        ></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="form-column col-lg-8 offset-lg-4 col-xl-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="contact-form-two wow fadeInLeft">
                    <div className="sec-title">
                      {' '}
                      <span className="sub-title">Contact Us</span>
                      <h2 className="words-slide-up text-split">
                        Get in Touch
                      </h2>
                    </div>

                    <form id="contact_form" name="contact_form">
                      <div className="row">
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            type="text"
                            name="form_name"
                            placeholder="NAME"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            className="required"
                            type="email"
                            name="form_email"
                            placeholder="YOUR MAIL"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            type="tel"
                            name="form_phone"
                            placeholder="PHONE"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            className="required"
                            type="text"
                            name="form_subject"
                            placeholder="SUBJECT"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-12">
                          <textarea
                            className="required"
                            name="form_message"
                            placeholder="MESSAGE"
                            rows="2"
                          ></textarea>
                        </div>
                        <div className="form-group col-lg-12">
                          <input
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                          />
                          <button
                            type="submit"
                            className="theme-btn btn-style-one"
                            data-loading-text="Please wait..."
                          >
                            <span className="btn-title">Message</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="contact-video-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link href="#">
                            <img
                              src="/images/background/bg-contact2-3.jpg"
                              alt="Image"
                            />
                          </Link>
                        </figure>
                      </div>
                      <div className="content-box">
                        <h2 className="title">
                          {' '}
                          <span>
                            {' '}
                            a full-service <br />
                            yachting house <br />
                            for ocean
                          </span>
                        </h2>
                        <a onClick={() => setOpen(true)} className="play-now">
                          <i className="icon fa-thin fa-play" />
                          <span className="ripple"></span>
                        </a>
                      </div>
                    </div>
                  </div>
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
export default VideoForm;
