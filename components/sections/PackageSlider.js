import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

				breakpoints:{
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
        }

        
    };
const PackageSlider = () => {
    return (
        <>
        <section className="packages-section">
          <div className="bg bg-image" style="background-image: url(./images/background/bg-packages1.jpg);"></div>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-9">
                <div className="sec-title">
                  <div className="bg bg-image-2" style="background-image: url(./images/background/bg-packages1-2.jpg);"></div>
                  <span className="sub-title">CHARTER PACKAGE</span>
                  <h2 className="words-slide-up text-split">Choose from our <br>popular packages</h2>
                </div>
              </div>
            </div>
            <div className="carousel-outer">
              <Swiper {...swiperOptions} className="packages-carousel owl-carousel owl-theme custom-navs-two">
                  {/* testimonial Block */}
                  <SwiperSlide>
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><Link href="#"><img src="/images/resource/package1-2.jpg" alt="Image"/></Link></figure>
                    </div>
                    <div className="content-box">
                      <div className="price">$50</div>
                      <br/>
                      <h4 className="title"><Link href="#">7 Days Charters</Link></h4>
                      <span className="location"><i className="fa-solid fa-location-dot"></i> North Miami</span>
                    </div>
                  </div>
                </div>
                  </SwiperSlide>
                  {/* testimonial Block */}
                  <SwiperSlide className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises  who fail their duty through weakness.</div>
                      <div className="info-box">
                        <figure className="thumb"><img src="/images/resource/testi1-2.png" alt="Image"/></figure>
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
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises  who fail their duty through weakness.</div>
                      <div className="info-box">
                        <figure className="thumb"><img src="/images/resource/testi1-3.png" alt="Image"/></figure>
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
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises  who fail their duty through weakness.</div>
                      <div className="info-box">
                        <figure className="thumb"><img src="/images/resource/testi1-1.png" alt="Image"/></figure>
                        <div className="info-box-content">
                          <h6 className="name">Alen Hispro</h6>
                          <span className="designation">CEO, Voyacht</span>
                        </div>
                      </div>
                      <div className="icon-quote"></div>
                    </div>
                  </SwiperSlide>
              </Swiper>
              <div className="packages-carousel owl-carousel owl-theme custom-navs-two"> 
                <!-- Package Block -->
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><a href="#"><img src="images/resource/package1-2.jpg" alt="Image"></a></figure>
                    </div>
                    <div className="content-box">
                      <div className="price">$50</div>
                      <br>
                      <h4 className="title"><a href="#">7 Days Charters</a></h4>
                      <span className="location"><i className="fa-solid fa-location-dot"></i> North Miami</span>
                    </div>
                  </div>
                </div>
                <!-- Package Block -->
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><a href="#"><img src="images/resource/package1-3.jpg" alt="Image"></a></figure>
                    </div>
                    <div className="content-box">
                      <div className="price">$50</div>
                      <br>
                      <h4 className="title"><a href="#">7 Days Charters</a></h4>
                      <span className="location"><i className="fa-solid fa-location-dot"></i> North Miami</span>
                    </div>
                  </div>
                </div>
                <!-- Package Block -->
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><a href="#"><img src="images/resource/package1-2.jpg" alt="Image"></a></figure>
                    </div>
                    <div className="content-box">
                      <div className="price">$50</div>
                      <br>
                      <h4 className="title"><a href="#">7 Days Charters</a></h4>
                      <span className="location"><i className="fa-solid fa-location-dot"></i> North Miami</span>
                    </div>
                  </div>
                </div>
                <!-- Package Block -->
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><a href="#"><img src="images/resource/package1-1.jpg" alt="Image"></a></figure>
                    </div>
                    <div className="content-box">
                      <div className="price">$50</div>
                      <br>
                      <h4 className="title"><a href="#">7 Days Charters</a></h4>
                      <span className="location"><i className="fa-solid fa-location-dot"></i> North Miami</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-section">
          <div className="icon-wheel-2"></div>
          <div className="icon-big-boat-2 bounce-y"></div>
          <div className="auto-container">
            <div className="sec-title text-center"> <span className="sub-title">Testimonials</span>
              <h2 className="words-slide-up text-split">From our top clients <br/>
                experience</h2>
            </div>
            <div className="carousel-outer">
            </div>
          </div>
        </section>
        </>
    );
};
export default PackageSlider
