import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  observeParents: true,
  observer: true,
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
const Crews = () => {
  return (
    <>
      <section className="team-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            {' '}
            <span className="sub-title">Expert Crews</span>
            <h2 className="words-slide-up text-split">Meet our top crews</h2>
          </div>
          <div className="carousel-outer">
            <Swiper {...swiperOptions} className="team-carousel">
              {/* Team Block */}
              <SwiperSlide className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <img
                      className="image-pattern"
                      src="/images/resource/team1-pattern1.png"
                      alt="Image"
                    />
                    <figure className="image">
                      <Link href="page-team-details">
                        <img src="/images/resource/team1-1.jpg" alt="Image" />
                      </Link>
                    </figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name">
                      <Link href="page-team-details">Alen Hispro</Link>
                    </h4>
                    <span className="designation">CEO, Voyacht</span>
                  </div>
                </div>
              </SwiperSlide>
              {/* Team Block */}
              <SwiperSlide className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <img
                      className="image-pattern"
                      src="/images/resource/team1-pattern1.png"
                      alt="Image"
                    />
                    <figure className="image">
                      <Link href="page-team-details">
                        <img src="/images/resource/team1-2.jpg" alt="Image" />
                      </Link>
                    </figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name">
                      <Link href="page-team-details">Alen Hispro</Link>
                    </h4>
                    <span className="designation">CEO, Voyacht</span>
                  </div>
                </div>
              </SwiperSlide>
              {/* Team Block */}
              <SwiperSlide className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <img
                      className="image-pattern"
                      src="/images/resource/team1-pattern1.png"
                      alt="Image"
                    />
                    <figure className="image">
                      <Link href="page-team-details">
                        <img src="/images/resource/team1-3.jpg" alt="Image" />
                      </Link>
                    </figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name">
                      <Link href="page-team-details">Alen Hispro</Link>
                    </h4>
                    <span className="designation">CEO, Voyacht</span>
                  </div>
                </div>
              </SwiperSlide>
              {/* Team Block */}
              <SwiperSlide className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <img
                      className="image-pattern"
                      src="/images/resource/team1-pattern1.png"
                      alt="Image"
                    />
                    <figure className="image">
                      <Link href="page-team-details">
                        <img src="/images/resource/team1-1.jpg" alt="Image" />
                      </Link>
                    </figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name">
                      <Link href="page-team-details">Alen Hispro</Link>
                    </h4>
                    <span className="designation">CEO, Voyacht</span>
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
export default Crews;
