import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};
const News2 = () => {
  return (
    <>
      <section className="blog-section-two">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/icons/icon-plane-12.png)' }}
        ></div>
        <div className="auto-container">
          <div className="row">
            <div className="title-column col-xl-4">
              <div className="inner-column">
                <div className="sec-title text-left">
                  {' '}
                  <span className="sub-title">Latest Blog</span>
                  <h2 className="words-slide-up text-split">
                    Latest News & updates
                  </h2>
                  <div className="text">
                    With the largest fleet of luxury sailing and motor yachts in
                    Santorini we the ultimate sailing experience!
                  </div>
                </div>
              </div>
            </div>

            <div className="content-column col-xl-8">
              <div className="inner-column">
                <div className="carousel-outer">
                  <Swiper
                    {...swiperOptions}
                    className="testimonial-carousel owl-carousel owl-theme default-dots"
                  >
                    {/* testimonial Block */}
                    <SwiperSlide className="blog-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="news-details">
                              <img
                                src="images/resource/blog1-1.jpg"
                                alt="Image"
                              />
                              <img
                                src="images/resource/blog1-1.jpg"
                                alt="Image"
                              />
                            </Link>
                          </figure>
                          <span className="date">
                            {' '}
                            <strong>
                              25 <span>Jun</span>{' '}
                            </strong>{' '}
                          </span>
                        </div>
                        <div className="content-box">
                          <ul className="post-meta">
                            <li>
                              <i className="fal fa-user"></i>Admin
                            </li>
                            <li>
                              <i className="fas fa-comments"></i>0 Comments
                            </li>
                          </ul>
                          <h4 className="title">
                            <Link href="news-details">
                              Exploring Paradise <br />
                              in The Maldives
                            </Link>
                          </h4>
                          <Link className="read-more" href="news-details">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* testimonial Block */}
                    <SwiperSlide className="blog-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="news-details">
                              <img
                                src="/images/resource/blog1-3.jpg"
                                alt="Image"
                              />
                              <img
                                src="/images/resource/blog1-3.jpg"
                                alt="Image"
                              />
                            </Link>
                          </figure>
                          <span className="date">
                            {' '}
                            <strong>
                              25 <span>Jun</span>{' '}
                            </strong>{' '}
                          </span>
                        </div>
                        <div className="content-box">
                          <ul className="post-meta">
                            <li>
                              <i className="fal fa-user"></i>Admin
                            </li>
                            <li>
                              <i className="fas fa-comments"></i>0 Comments
                            </li>
                          </ul>
                          <h4 className="title">
                            <a href="news-details.html">
                              Exploring Paradise <br />
                              in The Maldives
                            </a>
                          </h4>
                          <Link className="read-more" href="news-details">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* testimonial Block */}
                    <SwiperSlide className="blog-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="news-details">
                              <img
                                src="/images/resource/blog1-1.jpg"
                                alt="Image"
                              />
                              <img
                                src="/images/resource/blog1-1.jpg"
                                alt="Image"
                              />
                            </Link>
                          </figure>
                          <span className="date">
                            {' '}
                            <strong>
                              25 <span>Jun</span>{' '}
                            </strong>{' '}
                          </span>
                        </div>
                        <div className="content-box">
                          <ul className="post-meta">
                            <li>
                              <i className="fal fa-user"></i>Admin
                            </li>
                            <li>
                              <i className="fas fa-comments"></i>0 Comments
                            </li>
                          </ul>
                          <h4 className="title">
                            <a href="news-details.html">
                              Exploring Paradise <br />
                              in The Maldives
                            </a>
                          </h4>
                          <Link className="read-more" href="news-details">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* testimonial Block */}
                    <SwiperSlide className="blog-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="news-details">
                              <img
                                src="/images/resource/blog1-2.jpg"
                                alt="Image"
                              />
                              <img
                                src="/images/resource/blog1-2.jpg"
                                alt="Image"
                              />
                            </Link>
                          </figure>
                          <span className="date">
                            {' '}
                            <strong>
                              25 <span>Jun</span>{' '}
                            </strong>{' '}
                          </span>
                        </div>
                        <div className="content-box">
                          <ul className="post-meta">
                            <li>
                              <i className="fal fa-user"></i>Admin
                            </li>
                            <li>
                              <i className="fas fa-comments"></i>0 Comments
                            </li>
                          </ul>
                          <h4 className="title">
                            <Link href="news-details">
                              Exploring Paradise <br />
                              in The Maldives
                            </Link>
                          </h4>
                          <Link className="read-more" href="news-details">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default News2;
