import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import React, { useState } from 'react';

export const CardWrapper = ({
  title,
  paragraph,
  cabin,
  marin,
  price,
  imagesrc,
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <>
      <div
        className={`package-block-three ${hovered ? 'active' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <img src={imagesrc} alt="Image" />
            </figure>
          </div>
          <div className="content-box-hover">
            <div className="image-box-hover">
              <figure className="image">
                <img src={imagesrc} alt="Image" />
              </figure>
            </div>
            <div className="content-box">
              <div className="inner-content-box">
                <div className="price">{price}</div>
                <br />
                <h4 className="title">
                  <Link href="#">{title}</Link>
                </h4>
                <div className="text">{paragraph}</div>
                <ul className="list-style">
                  <li>
                    <i className="icon flaticon-yacht flaticon-sailing-boat"></i>
                    {cabin}
                  </li>
                  <li>
                    <i className="icon flaticon-yacht flaticon-anchor"></i>
                    {marin}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Package = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <>
      <section className="packages-section-three pull-down">
        <div
          className="bg bg-image"
          style={{
            backgroundImage: 'url(images/background/bg-packages3-1.jpg)',
          }}
        ></div>
        <div className="auto-container">
          <div className="carousel-outer">
            <Swiper
              spaceBetween={0}
              slidesPerView={'auto'}
              modules={[Pagination]}
              className="packages-carousel-three default-dots"
            >
              {/* Package Block */}
              <SwiperSlide>
                <div className="outer-box">
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-1.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-2.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-3.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* Package Block */}
                <div className="outer-box">
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-1.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-2.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-3.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* Package Block */}
                <div className="outer-box">
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-1.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-2.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-3.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                </div>
              </SwiperSlide>
              {/* Package Block */}
              <SwiperSlide>
                <div className="outer-box">
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-1.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-2.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
                  <CardWrapper
                    title="Dynamiq charter"
                    imagesrc="/images/resource/package3-3.jpg"
                    price="$45"
                    cabin="5 Cabins"
                    marin="Overmarine"
                    paragraph="With over four decades of experience providing solutions to large-scale"
                  />
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
