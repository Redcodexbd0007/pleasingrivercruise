import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 25000,
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
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};
const product = () => {
  return (
    <>
      <section className="product-section pb-100">
        <div
          className="bg bg-image"
          style={{
            backgroundImage: 'url(images/background/bg-product1-1.jpg)',
          }}
        ></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            {' '}
            <span className="sub-title">Featured Sell</span>
            <h2 className="words-slide-up text-split">Listed yacht for sale</h2>
          </div>
          <div className="carousel-outer">
            <Swiper {...swiperOptions} className="team-carousel">
              {/* product Block */}
              <SwiperSlide className="product-block wow fadeInUp">
                <div className="inner-box text-start">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="page-yacht-details">
                        <img
                          src="/images/resource/product1-1.jpg"
                          alt="Image"
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="page-yacht-details.html">Acciaio 123</Link>
                    </h4>
                    <span className="product-name">Yacht</span>
                    <ul className="list-style">
                      <li>
                        Length <span>18 m</span>
                      </li>
                      <li>
                        Capacity <span>100</span>
                      </li>
                      <li>
                        Category <span>Motor</span>
                      </li>
                      <li>
                        Price <span>$3400</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              {/* product Block */}
              <SwiperSlide className="product-block wow fadeInUp">
                <div className="inner-box text-start">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="page-yacht-details">
                        <img
                          src="/images/resource/product1-2.jpg"
                          alt="Image"
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="page-yacht-details.html">GTT 546</Link>
                    </h4>
                    <span className="product-name">Boat</span>
                    <ul className="list-style">
                      <li>
                        Length <span>18 m</span>
                      </li>
                      <li>
                        Capacity <span>100</span>
                      </li>
                      <li>
                        Category <span>Motor</span>
                      </li>
                      <li>
                        Price <span>$3400</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              {/* product Block */}
              <SwiperSlide className="product-block wow fadeInUp">
                <div className="inner-box text-start">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="page-yacht-details">
                        <img
                          src="/images/resource/product1-3.jpg"
                          alt="Image"
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="page-yacht-details.html">Valirie Yacht</Link>
                    </h4>
                    <span className="product-name">Boat</span>
                    <ul className="list-style">
                      <li>
                        Length <span>18 m</span>
                      </li>
                      <li>
                        Capacity <span>100</span>
                      </li>
                      <li>
                        Category <span>Motor</span>
                      </li>
                      <li>
                        Price <span>$3400</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-block wow fadeInUp">
                <div className="inner-box text-start">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="page-yacht-details">
                        <img
                          src="/images/resource/product1-3.jpg"
                          alt="Image"
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="page-yacht-details.html">Valirie Yacht</Link>
                    </h4>
                    <span className="product-name">Boat</span>
                    <ul className="list-style">
                      <li>
                        Length <span>18 m</span>
                      </li>
                      <li>
                        Capacity <span>100</span>
                      </li>
                      <li>
                        Category <span>Motor</span>
                      </li>
                      <li>
                        Price <span>$3400</span>
                      </li>
                    </ul>
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
export default product;
