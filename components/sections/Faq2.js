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
      <section className="why-choose-us-three">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/resource/choose3-1.jpg)' }}
        ></div>
        <div className="icon-big-boat-5 bounce-y"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              {/*  Content Column  */}
              <div
                className="content-column col-lg-7 offset-lg-5 order-lg-2 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="inner-column">
                  <div
                    className="bg bg-image"
                    style={{
                      backgroundImage: 'url(images/background/choose3-bg1.png)',
                    }}
                  ></div>
                  <div className="sec-title mb-0">
                    <h2 className="words-slide-up text-split">
                      First-class full service yachting house
                    </h2>
                  </div>
                  <ul className="accordion-box-three accordion-box">
                    {/* Block */}
                    <li className="accordion block active-block">
                      <div
                        className={
                          isActive.key == 1 ? 'acc-btn active' : 'acc-btn'
                        }
                        onClick={() => handleClick(1)}
                      >
                        <i className="icon flaticon-yacht flaticon-lifebuoy"></i>
                        We specialise in yachts from 25m upwards{' '}
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
                        Covering everything from a day boat{' '}
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
                        Unique client experience division{' '}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;
