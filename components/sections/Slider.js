import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true,
};
const Slider = () => {
  return (
    <>
      <section className="main-slider">
        <div className="outer-box">
          <Swiper {...swiperOptions}>
            <SwiperSlide className="slide-item">
              <div
                className="bg bg-image"
                style={{ backgroundImage: 'url(images/main-slider/1.jpg)' }}
              ></div>
              <span className="sub-title">Yacht</span>
              <h1 className="title">
                Luxury charter <br /> boat rental in <br />
                florida
              </h1>
              <Link
                href="page-about"
                className="theme-btn slider-btn-style-one btn-style-two"
              >
                <span className="btn-title">Explore Yacht </span>
              </Link>
            </SwiperSlide>

            <SwiperSlide className="slide-item">
              <div
                className="bg bg-image"
                style={{ backgroundImage: 'url(images/main-slider/1.jpg)' }}
              ></div>
              <span className="sub-title">Yacht</span>
              <h1 className="title">
                Luxury charter <br /> boat rental in <br />
                florida
              </h1>
              <Link
                href="page-about"
                className="theme-btn slider-btn-style-one btn-style-two"
              >
                <span className="btn-title">Explore Yacht </span>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Slider;
