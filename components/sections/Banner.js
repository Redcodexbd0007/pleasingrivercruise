import Link from 'next/link';
const Banner = () => {
  return (
    <>
      <section className="banner-section">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/main-slider/2.jpg)' }}
        ></div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-12">
              <div className="inner-column">
                <h1 className="sub-title-2 wow fadeInUp" data-wow-delay="200ms">
                  Luxury Yacht
                </h1>
                <span className="sub-title wow fadeInUp" data-wow-delay="400ms">
                  Dream Yacht Charter{' '}
                </span>
                <h1 className="title wow fadeInUp" data-wow-delay="600ms">
                  Luxury charter <br />
                  boat rental
                </h1>
                <Link
                  href="page-about"
                  className="theme-btn btn-style-one light-bg wow fadeInUp"
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
