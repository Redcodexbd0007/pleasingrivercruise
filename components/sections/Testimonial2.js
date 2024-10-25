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
    clickable: true,
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
const Testimonial2 = () => {
  return (
    <>
      <section className="testimonial-section-two">
        <div className="outer-box">
          <div className="sec-title text-center">
            {' '}
            <span className="sub-title">Testimonials</span>
            <h2 className="words-slide-up text-split">
              From our top clients <br />
              experience
            </h2>
          </div>
          <div className="carousel-outer">
            <Swiper {...swiperOptions} className="testimonial-carousel-two">
              {/* testimonial Block */}
              <SwiperSlide className="testimonial-block-two">
                <div className="inner-box">
                  <div className="text">
                    With over four decades of experience providing solutions to
                    l <br />
                    arge-scale enterprises who fail their duty through weakness.
                    natoque <br />
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Etiar <br />
                    mrhoncustema ecenas tempus, tellus eget...
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
              {/* testimonial Block */}
              <SwiperSlide className="testimonial-block-two">
                <div className="inner-box">
                  <div className="text">
                    With over four decades of experience providing solutions to
                    l <br />
                    arge-scale enterprises who fail their duty through weakness.
                    natoque <br />
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Etiar <br />
                    mrhoncustema ecenas tempus, tellus eget...
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
              <SwiperSlide className="testimonial-block-two">
                <div className="inner-box">
                  <div className="text">
                    With over four decades of experience providing solutions to
                    l <br />
                    arge-scale enterprises who fail their duty through weakness.
                    natoque <br />
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Etiar <br />
                    mrhoncustema ecenas tempus, tellus eget...
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
              <SwiperSlide className="testimonial-block-two">
                <div className="inner-box">
                  <div className="text">
                    With over four decades of experience providing solutions to
                    l <br />
                    arge-scale enterprises who fail their duty through weakness.
                    natoque <br />
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Etiar <br />
                    mrhoncustema ecenas tempus, tellus eget...
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
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial2;
