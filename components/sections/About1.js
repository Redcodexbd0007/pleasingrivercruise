const About1 = () => {
  return (
    <>
      <section className="about-section p-0">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="content-column col-xl-9 offset-xl-3 col-lg-9 offset-lg-3">
                <div className="inner-column">
                  <div
                    className="bg bg-image"
                    style={{
                      backgroundImage: 'url(images/background/about1-bg1.png)',
                    }}
                  ></div>
                  <div className="inner">
                    <div className="icon-wheel-1"></div>
                    <div className="icon-big-boat-1 bounce-x"></div>
                    <div className="sec-title">
                      {' '}
                      <span className="sub-title">About Us</span>
                      <h2 className="words-slide-up text-split">
                        The experience of a lifetime
                      </h2>
                    </div>
                    <div className="text">
                      With the largest fleet of luxury catamarans, sailing and
                      motor yachts in Santorini we guarantee the ultimate
                      sailing experience!
                    </div>
                    <div className="bottom-box">
                      <div className="since-box">
                        <div className="inner">
                          <figure className="image">
                            <img
                              src="/images/resource/about1-1.jpg"
                              alt="Image"
                            />
                          </figure>
                          <div className="since-info">
                            <h6 className="since-title">Since year</h6>
                            <div className="since-year">1992</div>
                          </div>
                        </div>
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
export default About1;
