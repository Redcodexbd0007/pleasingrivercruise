import Link from 'next/link';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const YachtDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 product-details rd-page">
              <div className="bxslider">
                <div className="slider-content">
                  <Swiper
                    spaceBetween={10}
                    navigation={false}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img src="/images/resource/yacht-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/resource/yacht-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/resource/yacht-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/resource/yacht-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/resource/yacht-1.jpg" />
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src="/images/resource/yacht-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/resource/yacht-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/resource/yacht-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/resource/yacht-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/resource/yacht-1.jpg" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              <div className="room-details__left">
                <div className="wrapper">
                  <h3>Description of Yacht 97</h3>
                  <p className="text">
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Aliquam tellus nulla, sollicitudin at euismod nec, feugiat
                    at nisi. Quisque vitae odio nec lacus interdum tempus.
                    Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                    pellentesque vitae et nunc. Sed vitae leo vitae nisl
                    pellentesque semper.
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-xl-12">
                      <div className="room-details__content-right mb-40 mt-20">
                        <div className="room-details__details-box">
                          <div className="row">
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">Yacht measures:</h6>
                              <p className="text mb-0">97ft / 29.6m</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">Beam & Draft:</h6>
                              <p className="text mb-0">23.17 & 5.8ft</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">Max Crew:</h6>
                              <p className="text mb-0">6</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">Crew Cabins:</h6>
                              <p className="text mb-0">Yes</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">Max Guests:</h6>
                              <p className="text mb-0">12</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">Staterooms:</h6>
                              <p className="text mb-0">5</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">Engines:</h6>
                              <p className="text mb-0">2,400 hp</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">Cruising Speed:</h6>
                              <p className="text mb-0">24 knots</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">WC / Showers:</h6>
                              <p className="text mb-0">4</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">Single cabins:</h6>
                              <p className="text mb-0">4</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between mb-20 mb-sm-30">
                              <h6 className="mb-0">Double cabins:</h6>
                              <p className="text mb-0">8</p>
                            </div>
                            <div className="col-6 d-sm-flex justify-content-sm-between">
                              <h6 className="mb-0">Berths:</h6>
                              <p className="text mb-0">2</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text">
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Aliquam tellus nulla, sollicitudin at euismod nec, feugiat
                    at nisi. Quisque vitae odio nec lacus interdum tempus.
                    Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                    pellentesque vitae et nunc. Sed vitae leo vitae nisl
                    pellentesque semper.
                  </p>
                </div>
                <div className="mt-40">
                  <h4>Requirements for this Booking</h4>
                  <ul className="list-style mb-50">
                    <li>
                      <i className="icon flaticon-yacht flaticon-anchor-1"></i>{' '}
                      We specialise in yachts from 25m upwards
                    </li>
                    <li>
                      <i className="icon flaticon-yacht flaticon-anchor-1"></i>{' '}
                      Covering everything from a day boat
                    </li>
                    <li>
                      <i className="icon flaticon-yacht flaticon-anchor-1"></i>{' '}
                      Unique client experience division
                    </li>
                    <li>
                      <i className="icon flaticon-yacht flaticon-anchor-1"></i>{' '}
                      Covering everything from a day boat
                    </li>
                    <li>
                      <i className="icon flaticon-yacht flaticon-anchor-1"></i>{' '}
                      We specialise in yachts from 25m upwards
                    </li>
                  </ul>
                </div>
                <div className="d-sm-flex align-items-sm-center justify-content-sm-between pt-40 pb-40 border-top">
                  <h6 className="my-sm-0">Share Details</h6>
                  <div className="blog-details__social-list">
                    {' '}
                    <Link href="news-details.html">
                      <i className="fab fa-twitter"></i>
                    </Link>{' '}
                    <Link href="news-details.html">
                      <i className="fab fa-facebook"></i>
                    </Link>{' '}
                    <Link href="news-details.html">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>{' '}
                    <Link href="news-details.html">
                      <i className="fab fa-instagram"></i>
                    </Link>{' '}
                  </div>
                </div>
                <div className="p-4 p-lg-5 bg-light">
                  <h4 className="mt-0 mb-30">Send Us Your Question</h4>
                  <form
                    id="contact_form"
                    name="contact_form"
                    className=""
                    action="#"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-xl-4">
                        <div className="mb-3">
                          <input
                            name="form_name"
                            className="form-control bg-white"
                            type="text"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="mb-3">
                          <input
                            name="form_email"
                            className="form-control bg-white required email"
                            type="email"
                            placeholder="Enter Email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="mb-3">
                          <input
                            name="form_phone"
                            className="form-control bg-white required phone"
                            type="number"
                            placeholder="Enter Phone"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="form_message"
                        className="form-control bg-white required"
                        rows="5"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                    <div className="mb-0">
                      <input
                        name="form_botcheck"
                        className="form-control"
                        type="hidden"
                        value=""
                      />
                      <button
                        type="submit"
                        className="theme-btn btn-style-one"
                        data-loading-text="Please wait..."
                      >
                        <span className="btn-title">Submit Comment</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div className="sidebar__post mb-30">
                  <form
                    id="contact_form2"
                    name="contact_form"
                    className=""
                    action="includes/sendmail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">Booking Date</label>
                          <input
                            name="form_name"
                            className="form-control bg-white"
                            type="text"
                            placeholder="Booking Date"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">Departure Date</label>
                          <input
                            name="form_name"
                            className="form-control bg-white"
                            type="text"
                            placeholder="Departure Date"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">Guests</label>
                          <select className="form-select form-control bg-white">
                            <option disabled>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>More</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        name="form_botcheck"
                        className="form-control"
                        type="hidden"
                        value=""
                      />
                      <button
                        type="submit"
                        className="theme-btn btn-style-one w-100"
                        data-loading-text="Please wait..."
                      >
                        <span className="btn-title">Book Now</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Compare Room</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image">
                        {' '}
                        <img src="/images/resource/blog1-1.jpg" alt="" />{' '}
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="far fa-door-open"></i>Economy Room
                          </span>{' '}
                          <Link href="">$175/Day</Link>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        {' '}
                        <img src="/images/resource/blog1-2.jpg" alt="" />{' '}
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="far fa-door-open"></i>Deluxe Room
                          </span>{' '}
                          <Link href="">$250/Day</Link>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        {' '}
                        <img src="/images/resource/blog1-3.jpg" alt="" />{' '}
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="far fa-door-open"></i>Super Deluxe
                            Room
                          </span>{' '}
                          <Link href="">$320/Day</Link>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default YachtDetails;
