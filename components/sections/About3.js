import Link from 'next/link';
const AboutHome3 = () => {
  return (
    <>
      <section className="about-section-three">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/icons/pattern3-2.png)' }}
        ></div>
        <div
          className="bg bg-image2"
          style={{ backgroundImage: 'url(images/icons/pattern3-1.png)' }}
        ></div>
        <div className="icon-sailboat-line-3 bounce-y"></div>
        <div className="icon-sailboat-6 d-none d-lg-block bounce-y"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="content-column col-lg-6">
                <div className="inner-column">
                  <div className="icon-wheel-5"></div>
                  <div className="sec-title m-0">
                    {' '}
                    <span className="sub-title">About Us</span>
                    <h2 className="words-slide-up text-split">
                      A first-class <br />
                      full-service best <br />
                      yachting house
                    </h2>
                  </div>
                  <figure className="image overlay-anim">
                    <img src="/images/resource/about3-1.jpg" alt="Image" />
                  </figure>
                </div>
              </div>
              <div className="content-column-two col-lg-6">
                <div className="inner-column">
                  <div className="top-box">
                    <div className="text-box">
                      <div className="text text-one">
                        With the largest fleet of luxury catamarans, sailing and
                        motor yachts in Santorini we guarantee the ultimate
                        sailing experience!
                      </div>
                      <div className="text">
                        With the largest fleet of luxury catamarans, sailing and
                        motor yachts in Santorini we guarantee the ultimate
                        sailing experience!
                      </div>
                    </div>
                  </div>
                  <div
                    className="bottom-box wow fadeInRight"
                    data-wow-delay="300ms"
                  >
                    <div className="icon-dots-5"></div>
                    <div className="row">
                      <div className="about-block col-sm-6">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              {' '}
                              <Link href="#">
                                {' '}
                                <img
                                  src="/images/resource/about3-2.jpg"
                                  alt="Image"
                                />{' '}
                              </Link>{' '}
                            </figure>
                          </div>
                          <div className="content-box">
                            <h4 className="title">
                              <Link href="page-about">Beyond exceptional</Link>
                            </h4>
                            <div className="text">
                              With over four decades of experience providing
                              solutions to large-scale{' '}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="about-block col-sm-6">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              {' '}
                              <Link href="#">
                                {' '}
                                <img
                                  src="/images/resource/about3-3.jpg"
                                  alt="Image"
                                />{' '}
                              </Link>{' '}
                            </figure>
                          </div>
                          <div className="content-box">
                            <h4 className="title">
                              <Link href="page-about">
                                Sustainable yachting{' '}
                              </Link>
                            </h4>
                            <div className="text">
                              With over four decades of experience providing
                              solutions to large-scale{' '}
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
        </div>
      </section>
    </>
  );
};
export default AboutHome3;
