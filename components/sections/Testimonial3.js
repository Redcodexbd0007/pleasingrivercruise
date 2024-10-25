import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
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
  },
};
const Testimonial = () => {
  return (
    <>
      <section className="testimonial-section-three">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/icons/icon-plane-13.png)' }}
        ></div>
        <div className="icon-big-boat-5 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            {' '}
            <span className="sub-title">Testimonials</span>
            <h2 className="words-slide-up text-split">
              From our top clients <br />
              experience
            </h2>
          </div>
          <div className="row">
            <div className="carousel-outer col-xl-12 offset-xl-1">
              <Swiper {...swiperOptions} className="testimonial-carousel-three">
                {/* testimonial Block */}
                <SwiperSlide className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="thumb overlay-anim">
                        <img src="/images/resource/testi3-1.jpg" alt="Image" />
                      </figure>
                    </div>
                    <div className="info-box">
                      <div className="info-box-content">
                        <div className="icon-wheel-compass-2"></div>
                        <div className="icon-quote"></div>
                        <div className="text">
                          With over four decades of experience providing
                          solutions to l arge-scale enterprises who fail their
                          duty through weakness. natoque penatibus et magnis dis
                          parturient montes,{' '}
                        </div>
                        <h6 className="name">Alen Hispro</h6>
                        <span className="designation">CEO, Voyacht</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* testimonial Block */}
                <SwiperSlide className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="thumb overlay-anim">
                        <img src="/images/resource/testi3-1.jpg" alt="Image" />
                      </figure>
                    </div>
                    <div className="info-box">
                      <div className="info-box-content">
                        <div className="icon-wheel-compass-2"></div>
                        <div className="icon-quote"></div>
                        <div className="text">
                          With over four decades of experience providing
                          solutions to l arge-scale enterprises who fail their
                          duty through weakness. natoque penatibus et magnis dis
                          parturient montes,{' '}
                        </div>
                        <h6 className="name">Alen Hispro</h6>
                        <span className="designation">CEO, Voyacht</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* testimonial Block */}
                <SwiperSlide className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="thumb overlay-anim">
                        <img src="/images/resource/testi3-1.jpg" alt="Image" />
                      </figure>
                    </div>
                    <div className="info-box">
                      <div className="info-box-content">
                        <div className="icon-wheel-compass-2"></div>
                        <div className="icon-quote"></div>
                        <div className="text">
                          With over four decades of experience providing
                          solutions to l arge-scale enterprises who fail their
                          duty through weakness. natoque penatibus et magnis dis
                          parturient montes,{' '}
                        </div>
                        <h6 className="name">Alen Hispro</h6>
                        <span className="designation">CEO, Voyacht</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
