import React, { useState } from 'react';
const Tab = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <>
      <section className="destination-section">
        <div className="auto-container">
          <div className="outer-box tabs-box">
            <div className="row">
              <div className="content-column col-xl-6 col-lg-5">
                <div className="inner-column">
                  <div className="sec-title mb-0">
                    {' '}
                    <span className="sub-title">Top Destination</span>
                    <h2 className="words-slide-up text-split">
                      Explore destination <br />
                      by yaxht
                    </h2>
                  </div>
                </div>
              </div>
              <div className="content-column col-xl-6 col-lg-7">
                <div className="inner-column">
                  <div className="default-tabs">
                    <ul className="tab-buttons clearfix">
                      <li
                        className={
                          activeIndex === 1 ? 'tab-btn active-btn' : 'tab-btn'
                        }
                        onClick={() => handleOnClick(1)}
                      >
                        <span className="title">Jamaica</span>
                      </li>
                      <li
                        className={
                          activeIndex === 2 ? 'tab-btn active-btn' : 'tab-btn'
                        }
                        onClick={() => handleOnClick(2)}
                      >
                        <span className="title">Dominic</span>
                      </li>
                      <li
                        className={
                          activeIndex === 3 ? 'tab-btn active-btn' : 'tab-btn'
                        }
                        onClick={() => handleOnClick(3)}
                      >
                        <span className="title">Haiti</span>
                      </li>
                      <li
                        className={
                          activeIndex === 4 ? 'tab-btn active-btn' : 'tab-btn'
                        }
                        onClick={() => handleOnClick(4)}
                      >
                        <span className="title">Mexico</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabs-content">
              <div className="icon-wheel-compass-3"></div>
              <div className={activeIndex === 1 ? 'tab active-tab' : 'tab'}>
                <div className="tab-block">
                  <div
                    className="bg-image"
                    style={{
                      backgroundImage:
                        'url(images/background/destination1-1.png)',
                    }}
                  ></div>
                  <div
                    className="bg-image-2"
                    style={{
                      backgroundImage: 'url(images/icons/map-line-1.png)',
                    }}
                  ></div>
                  <div className="image-box">
                    <figure className="image overlay-anim wow zoomIn animated">
                      {' '}
                      <img
                        src="/images/resource/destination1-1.png"
                        alt=""
                      />{' '}
                    </figure>
                    <span>Jamaica</span>
                  </div>
                  <div className="name-box">
                    <div className="name">Jamaica</div>
                  </div>
                  <div className="image-box pull-down">
                    <figure className="image overlay-anim wow zoomIn animated">
                      {' '}
                      <img
                        src="/images/resource/destination1-2.png"
                        alt=""
                      />{' '}
                    </figure>
                    <span>Atlantic</span>
                  </div>
                </div>
              </div>

              <div className={activeIndex === 2 ? 'tab active-tab' : 'tab'}>
                <div className="tab-block">
                  <div
                    className="bg-image"
                    style={{
                      backgroundImage:
                        'url(images/background/destination1-1.png)',
                    }}
                  ></div>
                  <div
                    className="bg-image-2"
                    style={{
                      backgroundImage: 'url(images/background/map-line-1.png)',
                    }}
                  ></div>
                  <div className="image-box">
                    <figure className="image overlay-anim">
                      {' '}
                      <img
                        src="/images/resource/destination1-2.png"
                        alt=""
                      />{' '}
                    </figure>
                    <span>Jamaica</span>
                  </div>
                  <div className="name-box">
                    <div className="name">Jamaica</div>
                  </div>
                  <div className="image-box pull-down">
                    <figure className="image overlay-anim">
                      {' '}
                      <img
                        src="/images/resource/destination1-1.png"
                        alt=""
                      />{' '}
                    </figure>
                    <span>Atlantic</span>
                  </div>
                </div>
              </div>

              <div className={activeIndex === 3 ? 'tab active-tab' : 'tab'}>
                <div className="tab-block">
                  <div
                    className="bg-image"
                    style={{
                      backgroundImage:
                        'url(images/background/destination1-1.png)',
                    }}
                  ></div>
                  <div
                    className="bg-image-2"
                    style={{
                      backgroundImage: 'url(images/background/map-line-1.png)',
                    }}
                  ></div>
                  <div className="image-box">
                    <figure className="image overlay-anim">
                      {' '}
                      <img
                        src="/images/resource/destination1-1.png"
                        alt=""
                      />{' '}
                    </figure>
                    <span>Jamaica</span>
                  </div>
                  <div className="name-box">
                    <div className="name">Jamaica</div>
                  </div>
                  <div className="image-box pull-down">
                    <figure className="image overlay-anim">
                      {' '}
                      <img
                        src="/images/resource/destination1-2.png"
                        alt=""
                      />{' '}
                    </figure>
                    <span>Atlantic</span>
                  </div>
                </div>
              </div>

              <div className={activeIndex === 4 ? 'tab active-tab' : 'tab'}>
                <div className="tab-block">
                  <div
                    className="bg-image"
                    style={{
                      backgroundImage:
                        'url(images/background/destination1-1.png)',
                    }}
                  ></div>
                  <div
                    className="bg-image-2"
                    style={{
                      backgroundImage: 'url(images/background/map-line-1.png)',
                    }}
                  ></div>
                  <div className="image-box">
                    <figure className="image overlay-anim">
                      {' '}
                      <img
                        src="/images/resource/destination1-2.png"
                        alt=""
                      />{' '}
                    </figure>
                    <span>Jamaica</span>
                  </div>
                  <div className="name-box">
                    <div className="name">Jamaica</div>
                  </div>
                  <div className="image-box pull-down">
                    <figure className="image overlay-anim">
                      {' '}
                      <img
                        src="/images/resource/destination1-1.png"
                        alt=""
                      />{' '}
                    </figure>
                    <span>Atlantic</span>
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
export default Tab;
