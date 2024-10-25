import Link from 'next/link';
import dynamic from 'next/dynamic';
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
});
const Funfact2 = () => {
  return (
    <>
      <section className="fun-fact-section-two">
        <div className="auto-container">
          <div className="fact-counter">
            <div className="row">
              {/* Counter block */}
              <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="count-box">
                      <CounterUp count={30} time={3} />+
                    </div>
                    <div className="counter-title">Of yachts</div>
                  </div>
                </div>
              </div>
              {/* Counter block */}
              <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="count-box">
                      <CounterUp count={5} time={3} />+
                    </div>
                    <div className="counter-title">Years of experience</div>
                  </div>
                </div>
              </div>
              {/* Counter block */}
              <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="count-box">
                      <CounterUp count={10} time={3} />+
                    </div>
                    <div className="counter-title">Professional Crew</div>
                  </div>
                </div>
              </div>
              {/* Counter block */}
              <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="count-box">
                      <CounterUp count={3} time={3} />
                    </div>
                    <div className="counter-title">Best Yacht Awards</div>
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
export default Funfact2;
