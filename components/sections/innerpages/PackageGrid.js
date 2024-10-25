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
  navigation: true,
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

const Package = () => {
  return (
    <>
      <section className="packages-section pt-120 pb-120">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/background/bg-packages1.jpg)' }}
        ></div>
        <div className="auto-container">
          <div className="carousel-outer">
            <Swiper
              {...swiperOptions}
              className="packages-carousel custom-navs-two"
            >
              {/* testimonial Block */}
              <SwiperSlide>
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="#">
                          <img
                            src="/images/resource/package1-2.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="price">$50</div>
                      <br />
                      <h4 className="title">
                        <Link href="#">7 Days Charters</Link>
                      </h4>
                      <span className="location">
                        <i className="fa-solid fa-location-dot"></i> North Miami
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* testimonial Block */}
              <SwiperSlide>
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="#">
                          <img
                            src="/images/resource/package1-3.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="price">$50</div>
                      <br />
                      <h4 className="title">
                        <Link href="#">7 Days Charters</Link>
                      </h4>
                      <span className="location">
                        <i className="fa-solid fa-location-dot"></i> North Miami
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* testimonial Block */}
              <SwiperSlide>
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="#">
                          <img
                            src="/images/resource/package1-2.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="price">$50</div>
                      <br />
                      <h4 className="title">
                        <Link href="#">7 Days Charters</Link>
                      </h4>
                      <span className="location">
                        <i className="fa-solid fa-location-dot"></i> North Miami
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* testimonial Block */}
              <SwiperSlide>
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="#">
                          <img
                            src="/images/resource/package1-1.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="price">$50</div>
                      <br />
                      <h4 className="title">
                        <Link href="#">7 Days Charters</Link>
                      </h4>
                      <span className="location">
                        <i className="fa-solid fa-location-dot"></i> North Miami
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Package;
