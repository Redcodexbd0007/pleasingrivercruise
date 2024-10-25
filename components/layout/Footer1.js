import Link from 'next/link';

export default function Footer1() {
  return (
    <>
      <footer className="main-footer footer-style-one">
        <div className="icon-big-boat-3 bounce-x"></div>
        <div className="icon-pattern1"></div>
        <div className="icon-pattern2"></div>
        <div className="icon-wheel-3"></div>
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-xl-3 col-sm-6">
                <div className="footer-widget about-widget">
                  <h5 className="widget-title">About Us</h5>
                  <div className="text">
                    We strongly support best <br />
                    practice sharing across our <br />
                    operations around the world{' '}
                  </div>
                  <button type="submit" className="theme-btn btn-style-two">
                    <span className="btn-title">Book Now</span>
                  </button>
                </div>
              </div>

              <div className="footer-column footer-column-style-two col-xl-3 col-sm-6">
                <div className="footer-widget links-widget">
                  <h5 className="widget-title">Contact Us</h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li>
                        <i className="icon fal fa-phone"></i>{' '}
                        <Link href="#">+91 458 654 528 </Link>
                      </li>
                      <li>
                        <i className="icon fal fa-envelope-open"></i>{' '}
                        <Link href="#">info@example.com </Link>
                      </li>
                      <li>
                        <i className="icon fal fa-map-marker-alt"></i>{' '}
                        <Link href="#">
                          30 Commercial Road <br />
                          Fratton, Australia{' '}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-column col-xl-3 col-sm-6">
                <div className="footer-widget links-widget">
                  <h5 className="widget-title widget-title-style-two">
                    Quick Links
                  </h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li>
                        <i className="icon fa fa-chevron-double-right"></i>{' '}
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <i className="icon fa fa-chevron-double-right"></i>{' '}
                        <Link href="/about-us">About Us</Link>
                      </li>
                      {/* <li>
                        <i className="icon fa fa-chevron-double-right"></i>{' '}
                        <Link href="#">Blog</Link>
                      </li> */}
                      <li>
                        <i className="icon fa fa-chevron-double-right"></i>{' '}
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-column col-xl-3 col-sm-6">
                <div className="footer-widget newsletter-widget">
                  <h5 className="widget-title widget-title-style-two">
                    Subscribe Now
                  </h5>
                  <div className="text">
                    We strongly support best <br />
                    practice sharing across our operations
                  </div>

                  <div className="newsletter-form">
                    <div className="form-group">
                      <div className="input-outer">
                        {' '}
                        <span className="icon fal fa-paper-plane"></span>
                        <input
                          type="newsletter"
                          name="Newsletter"
                          placeholder="Get Newsletter"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Footer Bottom */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text">
                © Copyrights reserved by encore{' '}
              </div>
              <ul className="social-icon-two">
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
