import { useState } from 'react';
const Faq = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section className="why-choose-us">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/icons/pattern1-5.png)' }}
        ></div>
        <div className="icon-sailboat-line-1 bounce-y"></div>
        <div className="icon-wheel-compass-1"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="sec-title-two">
              <h2 className="words-slide-up text-split">Luxury Yacht</h2>
            </div>
            <div className="row">
              {/*  Content Column  */}
              <div
                className="content-column col-xl-5 offset-xl-1 col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="inner-column">
                  <div className="sec-title mb-0">
                    <h2 className="words-slide-up text-split">
                      First-class full service yachting house
                    </h2>
                  </div>
                  <ul className="accordion-box">
                    {/* Block */}
                    <li className="accordion block active-block">
                      <div
                        className={
                          isActive.key == 1 ? 'acc-btn active' : 'acc-btn'
                        }
                        onClick={() => handleClick(1)}
                      >
                        <i className="icon flaticon-yacht flaticon-lifebuoy"></i>
                        We specialise in yachts from 25m upwards
                        <i className="arrow fal fa-plus"></i>
                      </div>
                      <div
                        className={
                          isActive.key == 1
                            ? 'acc-content current'
                            : 'acc-content'
                        }
                      >
                        <div className="content">
                          <div className="text">
                            With over four decades of experience providing
                            solutions to large-scale enterprises who fail their
                            duty through weakness.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Block */}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 2 ? 'acc-btn active' : 'acc-btn'
                        }
                        onClick={() => handleClick(2)}
                      >
                        <i className="icon flaticon-yacht flaticon-sailing-boat"></i>
                        Covering everything from a day boat
                        <i className="arrow fal fa-plus"></i>
                      </div>
                      <div
                        className={
                          isActive.key == 2
                            ? 'acc-content current'
                            : 'acc-content'
                        }
                      >
                        <div className="content">
                          <div className="text">
                            With over four decades of experience providing
                            solutions to large-scale enterprises who fail their
                            duty through weakness.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Block */}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 3 ? 'acc-btn active' : 'acc-btn'
                        }
                        onClick={() => handleClick(3)}
                      >
                        <i className="icon flaticon-yacht flaticon-anchor"></i>
                        Unique client experience division
                        <i className="arrow fal fa-plus"></i>
                      </div>
                      <div
                        className={
                          isActive.key == 3
                            ? 'acc-content current'
                            : 'acc-content'
                        }
                      >
                        <div className="content">
                          <div className="text">
                            With over four decades of experience providing
                            solutions to large-scale enterprises who fail their
                            duty through weakness.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*  Image Column  */}
              <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image overlay-anim">
                      <img src="/images/resource/choose1-1.png" alt="Image" />
                    </figure>
                    <figure className="image-2 overlay-anim">
                      <img src="/images/resource/choose1-2.jpg" alt="Image" />
                    </figure>
                    <figure className="image-3 overlay-anim">
                      <img src="/images/resource/choose1-3.jpg" alt="Image" />
                    </figure>
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
export default Faq;
