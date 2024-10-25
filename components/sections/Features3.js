import Link from 'next/link';

const Features3 = () => {
  return (
    <>
      <section className="features-section-three">
        <div className="icon-features3-1 bounce-y"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              {/* Features Column */}
              <div className="features-column-three col-xl-12">
                <div className="inner-column">
                  {/* Feature Block */}
                  <div className="feature-block-three">
                    <div className="inner-box">
                      <div
                        className="bg bg-image"
                        style={{
                          backgroundImage:
                            'url(images/background/feature3-1.jpg)',
                        }}
                      ></div>
                      <div className="icon-box">
                        {' '}
                        <i className="icon flaticon-yacht flaticon-sailing-boat"></i>{' '}
                      </div>
                      <div className="content-box">
                        <div className="box-number">01</div>
                        <h6 className="title">Luxury Cruises</h6>
                      </div>
                      <div className="text-box">
                        <div className="text">
                          With the largest fleet of luxury catamarans, sailing{' '}
                          <br /> and motor yachts in Santorini we guarantee the{' '}
                          <br /> ultimate sailing experience!
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Block */}
                  <div className="feature-block-three">
                    <div className="inner-box">
                      <div
                        className="bg bg-image"
                        style={{
                          backgroundImage:
                            'url(images/background/feature3-1.jpg)',
                        }}
                      ></div>
                      <div className="icon-box">
                        {' '}
                        <i className="icon flaticon-yacht flaticon-anchor"></i>{' '}
                      </div>
                      <div className="content-box content-box-two">
                        <div className="box-number">02</div>
                        <h6 className="title">Best-crewed yachts</h6>
                      </div>
                      <div className="text-box">
                        <div className="text">
                          With the largest fleet of luxury catamarans, sailing{' '}
                          <br /> and motor yachts in Santorini we guarantee the{' '}
                          <br /> ultimate sailing experience!
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Block */}
                  <div className="feature-block-three">
                    <div className="inner-box">
                      <div
                        className="bg bg-image"
                        style={{
                          backgroundImage:
                            'url(images/background/feature3-1.jpg)',
                        }}
                      ></div>
                      <div className="icon-box">
                        {' '}
                        <i className="icon flaticon-yacht flaticon-lifebuoy"></i>{' '}
                      </div>
                      <div className="content-box content-box-three">
                        <div className="box-number">03</div>
                        <h6 className="title">Best Sailing Experience</h6>
                      </div>
                      <div className="text-box">
                        <div className="text">
                          With the largest fleet of luxury catamarans, sailing{' '}
                          <br /> and motor yachts in Santorini we guarantee the{' '}
                          <br /> ultimate sailing experience!
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
export default Features3;
