import Link from 'next/link';
const Banner = () => {
  return (
    <>
      <section className="banner-section-two">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/main-slider/3.jpg)' }}
        ></div>
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-xl-12">
              <div className="inner-column text-center">
                <div className="icon-box wow fadeInUp" data-wow-delay="400ms">
                  <i className="icon flaticon-yacht flaticon-sailing-boat"></i>
                </div>
                <h1 className="title wow fadeInUp" data-wow-delay="600ms">
                  Yacht
                </h1>
                <div className="text wow fadeInUp" data-wow-delay="750ms">
                  Luxury Boat and yacht Rentals
                </div>
                <Link
                  href="page-contact"
                  className="theme-btn btn-style-two light-bg wow fadeInUp"
                  data-wow-delay="900ms"
                >
                  <span className="btn-title">Explore Yacht </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
