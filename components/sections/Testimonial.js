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
  pagination: {
    clickable: 2500,
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
const Testimonial = () => {
  return (
    <>
      <section className="testimonial-section">
        <div className="icon-wheel-2"></div>
        <div className="icon-big-boat-2 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            {' '}
            <span className="sub-title">Testimonials</span>
            <h2 className="words-slide-up text-split">
              From our top clients <br />
              experience
            </h2>
          </div>
          <div className="carousel-outer">
            <Swiper {...swiperOptions} className="testimonial-carousel">
              {/* testimonial Block */}
              <SwiperSlide className="testimonial-block">
                <div className="inner-box">
                  <div className="text">
                    With over four decades of experience providing solutions to
                    large-scale enterprises who fail their duty through
                    weakness.
                  </div>
                  <div className="info-box">
                    <figure className="thumb">
                      <img src="/images/resource/testi1-2.png" alt="Image" />
                    </figure>
                    <div className="info-box-content">
                      <h6 className="name">Alen Hispro</h6>
                      <span className="designation">CEO, Voyacht</span>
                    </div>
                  </div>
                  <div className="icon-quote"></div>
                </div>
              </SwiperSlide>
              {/* testimonial Block */}
              <SwiperSlide className="testimonial-block">
                <div className="inner-box">
                  <div className="text">
                    With over four decades of experience providing solutions to
                    large-scale enterprises who fail their duty through
                    weakness.
                  </div>
                  <div className="info-box">
                    <figure className="thumb">
                      <img src="/images/resource/testi1-2.png" alt="Image" />
                    </figure>
                    <div className="info-box-content">
                      <h6 className="name">Alen Hispro</h6>
                      <span className="designation">CEO, Voyacht</span>
                    </div>
                  </div>
                  <div className="icon-quote"></div>
                </div>
              </SwiperSlide>
              {/* testimonial Block */}
              <SwiperSlide className="testimonial-block">
                <div className="inner-box">
                  <div className="text">
                    With over four decades of experience providing solutions to
                    large-scale enterprises who fail their duty through
                    weakness.
                  </div>
                  <div className="info-box">
                    <figure className="thumb">
                      <img src="/images/resource/testi1-3.png" alt="Image" />
                    </figure>
                    <div className="info-box-content">
                      <h6 className="name">Alen Hispro</h6>
                      <span className="designation">CEO, Voyacht</span>
                    </div>
                  </div>
                  <div className="icon-quote"></div>
                </div>
              </SwiperSlide>
              {/* testimonial Block */}
              <SwiperSlide className="testimonial-block">
                <div className="inner-box">
                  <div className="text">
                    With over four decades of experience providing solutions to
                    large-scale enterprises who fail their duty through
                    weakness.
                  </div>
                  <div className="info-box">
                    <figure className="thumb">
                      <img src="/images/resource/testi1-1.png" alt="Image" />
                    </figure>
                    <div className="info-box-content">
                      <h6 className="name">Alen Hispro</h6>
                      <span className="designation">CEO, Voyacht</span>
                    </div>
                  </div>
                  <div className="icon-quote"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;