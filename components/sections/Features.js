import Link from 'next/link';
const Features = () => {
  return (
    <>
      <section className="features-section">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/icons/bg-pattern-1.png)' }}
        ></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="content-column col-xl-5 col-lg-6">
                <div className="inner-column">
                  <div className="sec-title mb-0">
                    {' '}
                    <span className="sub-title">Experience Yacht</span>
                    <h2 className="words-slide-up text-split">
                      We are here to help you get sealife
                    </h2>
                    <div className="text">
                      With the largest fleet of luxury catamarans, sailing and
                      motor yachts in Santorini we guarantee the ultimate
                      sailing experience!
                    </div>
                  </div>
                  <div className="bottom-box">
                    <div className="author-box">
                      <div className="inner">
                        <div className="author-info">
                          {' '}
                          <img
                            src="/images/resource/sign.png"
                            alt="Signature"
                          />
                          <div className="name">Alen Hispro</div>
                          <div className="designation">CEO, Voyacht</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features-column col-xl-6 offset-xl-1 col-lg-6">
                <div className="inner-column">
                  <div className="feature-block">
                    <div className="inner-box">
                      <div className="box-number">01</div>
                      <div className="icon-box">
                        <i className="icon flaticon-yacht flaticon-anchor"></i>
                      </div>
                      <div className="content-box">
                        <h6 className="title">Luxury Cruises</h6>
                        <Link href="#" className="read-more">
                          Learn More
                        </Link>
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage:
                              'url(images/resource/feature1-1.jpg)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-block">
                    <div className="inner-box">
                      <div className="box-number">02</div>
                      <div className="icon-box">
                        <i className="icon flaticon-yacht flaticon-sailing-boat"></i>
                      </div>
                      <div className="content-box">
                        <h6 className="title">Best-crewed yachts</h6>
                        <Link href="#" className="read-more">
                          Learn More
                        </Link>
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage:
                              'url(images/resource/feature1-1.jpg)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-block">
                    <div className="inner-box">
                      <div className="box-number">03</div>
                      <div className="icon-box">
                        <i className="icon flaticon-yacht flaticon-lifebuoy"></i>
                      </div>
                      <div className="content-box">
                        <h6 className="title">Best Sailing Experience</h6>
                        <Link href="#" className="read-more">
                          Learn More
                        </Link>
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage:
                              'url(images/resource/feature1-1.jpg)',
                          }}
                        ></div>
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
export default Features;
