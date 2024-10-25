const About2 = () => {
  return (
    <>
      <section className="about-section-two">
        <div className="icon-big-boat-2 bounce-y"></div>
        <div className="auto-container">
          <div className="row">
            <div className="col-xl-11 offset-xl-1">
              <div className="outer-box">
                <div
                  className="bg bg-image"
                  style={{
                    backgroundImage: 'url(images/background/about1-bg1.png)',
                  }}
                ></div>
                <div className="row">
                  <div className="content-column col-xl-5 col-lg-6 order-lg-2">
                    <div className="inner-column">
                      <div className="inner">
                        <div className="icon-wheel-1"></div>
                        <div className="sec-title">
                          {' '}
                          <span className="sub-title">About Us</span>
                          <h2 className="words-slide-up text-split">
                            The experience <br /> of a lifetime
                          </h2>
                        </div>
                        <div className="text">
                          With the largest fleet of luxury catamarans, sailing
                          and motor yachts in Santorini we guarantee the
                          ultimate sailing experience!
                        </div>
                        <ul className="list-style">
                          <li>
                            <i className="icon flaticon-yacht flaticon-anchor-1"></i>{' '}
                            We specialise in yachts from 25m upwards
                          </li>
                          <li>
                            <i className="icon flaticon-yacht flaticon-anchor-1"></i>{' '}
                            Covering everything from a day boat
                          </li>
                          <li>
                            <i className="icon flaticon-yacht flaticon-anchor-1"></i>{' '}
                            Unique client experience division
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="image-column col-xl-5 col-lg-6">
                    <div className="inner-column">
                      <div className="icon-sailboat-line-2 bounce-y"></div>
                      <div className="image-box">
                        <figure className="image overlay-anim">
                          <img
                            src="/images/resource/about2-1.jpg"
                            alt="Image"
                          />
                        </figure>
                        <figure className="image-2 overlay-anim">
                          <img
                            src="/images/resource/about2-2.jpg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About2;
