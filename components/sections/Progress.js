import dynamic from 'next/dynamic';
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
});
import Link from 'next/link';
const Progress = () => {
  return (
    <>
      <section className="why-choose-us-two">
        <div className="icon-big-boat-2 bounce-y"></div>
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/resource/choose2-1.jpg)' }}
        ></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="content-column col-xl-7 col-lg-6">
                <div className="inner-column">
                  <div className="sec-title mb-0">
                    {' '}
                    <span className="sub-title">iNTERNATIONAL YACHT</span>
                    <h2 className="words-slide-up text-split">
                      Beyond exceptional since 1972{' '}
                    </h2>
                    <div className="text">
                      With the largest fleet of luxury catamarans, sailing and
                      motor yachts in Santorini we guarantee the ultimate
                    </div>
                    <div className="skills">
                      <div className="skill-item">
                        <div className="skill-header">
                          <div className="skill-title">Service</div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div
                              className="bar progress-line"
                              style={{ width: '80%' }}
                            >
                              <div className="skill-percentage">
                                <div className="count-box counted">
                                  <CounterUp count={80} time={3} />%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skill-item">
                        <div className="skill-header">
                          <div className="skill-title">Maintenence</div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div
                              className="bar progress-line"
                              style={{ width: '90%' }}
                            >
                              <div className="skill-percentage">
                                <div className="count-box counted">
                                  <CounterUp count={90} time={3} />%
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
              <div className="content-column-two col-xl-5 col-lg-6">
                <div className="text">Yacht </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Progress;
