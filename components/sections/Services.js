import Link from 'next/link';
const Services = () => {
  const data = [
    {
      Img: 'service1-1.jpg',
      title: 'Semi private cruise',
      description:
        'With over four decades of experience providing solutions to large-scale.',
      Cabins: '5',
      Format: 'Overmarine',
    },
    {
      Img: 'service1-2.jpg',
      title: 'Private Cruise',
      description:
        'With over four decades of experience providing solutions to large-scale.',
      Cabins: '7',
      Format: 'Wider Yachts',
    },
    {
      Img: 'service1-3.jpg',
      title: 'Full private trip',
      description:
        'With over four decades of experience providing solutions to large-scale.',
      Cabins: '9',
      Format: 'Gianetti',
    },
  ];
  return (
    <>
      <section className="services-section">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/icons/pattern1-3.png)' }}
        ></div>
        <div className="auto-container">
          <div className="outer-box">
            <div
              className="bg-two bg-image"
              style={{ backgroundImage: 'url(images/icons/pattern1-4.png)' }}
            ></div>
            <div className="sec-title">
              {' '}
              <span className="sub-title mt-0">Top Rated Cruises</span>
              <h2 className="words-slide-up text-split">
                Explore all type of <br className="d-none d-xl-block" /> luxury
                cruises
              </h2>
            </div>
            <div className="row services-content">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="service-block col-lg-4 col-md-6 wow fadeInUp"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="page-yacht-details">
                          <img
                            src={`/images/resource/${item.Img}`}
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="info-box">
                        <h5 className="title">
                          <Link href="page-yacht-details">{item.title}</Link>
                        </h5>
                        <div className="text">{item.description}</div>
                      </div>
                      <ul className="service-list">
                        <li>
                          <i className="icon flaticon-yacht flaticon-sailing-boat"></i>{' '}
                          {item.Cabins} Cabins
                        </li>
                        <li>
                          <i className="icon flaticon-yacht flaticon-anchor"></i>{' '}
                          {item.Format}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
