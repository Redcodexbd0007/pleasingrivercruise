import Link from 'next/link';
const PricingTable = () => {
  return (
    <>
      <section className="pricing-section pt-150 pb-150">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/background/pricing1.jpg)' }}
        ></div>
        <div className="icon-pattern-11 bounce-y"></div>
        <div className="auto-container">
          <div className="row">
            {/* pricing-block */}
            <div className="pricing-block col-xl-4 col-lg-4 col-md-6 p-0 wow flipInY animated">
              <div className="inner-box wow fadeInLeft animated">
                <div className="content-box">
                  {' '}
                  <span>silver</span>
                  <h2 className="title">$250</h2>
                  <button
                    type="submit"
                    className="theme-btn btn-style-two btn pricing-btn"
                  >
                    <span className="btn-title">Contact us</span>
                  </button>
                </div>
                <div className="list-sec">
                  <ul className="list">
                    <li> Professional assessment</li>
                    <li> Yachts over 25m</li>
                    <li> Go beyond luxury. </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* pricing-block */}
            <div className="pricing-block col-xl-4 col-lg-4 col-md-6 p-0 wow flipInY animated">
              <div className="inner-box active">
                <div className="content-box">
                  {' '}
                  <span>Gold</span>
                  <h2 className="title">$350</h2>
                  <button
                    type="submit"
                    className="theme-btn btn-style-two btn pricing-btn"
                  >
                    <span className="btn-title">Contact us</span>
                  </button>
                </div>
                <div className="list-sec">
                  <ul className="list">
                    <li> Professional assessment</li>
                    <li> Yachts over 25m</li>
                    <li> Go beyond luxury. </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* pricing-block */}
            <div className="pricing-block col-xl-4 col-lg-4 col-md-6 p-0 wow flipInY animated">
              <div className="inner-box wow fadeInRight animated">
                <div className="content-box">
                  {' '}
                  <span>Diamond</span>
                  <h2 className="title">$450</h2>
                  <button
                    type="submit"
                    className="theme-btn btn-style-two btn pricing-btn"
                  >
                    <span className="btn-title">Contact us</span>
                  </button>
                </div>
                <div className="list-sec">
                  <ul className="list">
                    <li> Professional assessment</li>
                    <li> Yachts over 25m</li>
                    <li> Go beyond luxury. </li>
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
export default PricingTable;