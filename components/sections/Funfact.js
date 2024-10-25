import Link from 'next/link';
import dynamic from 'next/dynamic';
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
});
const Funfact = () => {
  return (
    <>
      <section className="fun-fact-section">
        <div className="auto-container">
          <div className="fact-counter">
            <div className="row">
              <div className="counter-block mb-90 mb-md-50 col-lg-3 col-sm-6 wow fadeInUp">
                <div className="inner-box mb-md--0">
                  <div className="content-box">
                    <div className="count-box">
                      <CounterUp count={30} time={3} />+
                    </div>
                    <div className="counter-title">Of yachts</div>
                  </div>
                </div>
              </div>
              <div className="counter-block mb-90 mb-md-50 col-lg-3 col-sm-6 wow fadeInUp">
                <div className="inner-box mb-md--0">
                  <div className="content-box">
                    <div className="count-box">
                      <CounterUp count={5} time={3} />+
                    </div>
                    <div className="counter-title">Years of experience</div>
                  </div>
                </div>
              </div>
              <div className="counter-block mb-90 mb-md-50 col-lg-3 col-sm-6 wow fadeInUp">
                <div className="inner-box mb-md--0">
                  <div className="content-box">
                    <div className="count-box">
                      <CounterUp count={10} time={3} />+
                    </div>
                    <div className="counter-title">Professional Crew</div>
                  </div>
                </div>
              </div>
              <div className="counter-block mb-90 mb-md-50 col-lg-3 col-sm-6 wow fadeInUp">
                <div className="inner-box mb-md--0">
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
export default Funfact;
