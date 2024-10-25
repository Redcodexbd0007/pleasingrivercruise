import Link from 'next/link';
const Package = () => {
  const data = [
    {
      Img: 'feature2-1.jpg',
      title: 'Sirena 68',
      description:
        'With over four decades of experience providing solutions to large-scale.',
      num: '01 .',
    },
    {
      Img: 'feature2-2.jpg',
      title: 'Sea Freight',
      description:
        'With over four decades of experience providing solutions to large-scale.',
      num: '02 .',
    },
    {
      Img: 'feature2-3.jpg',
      title: 'Air Freight',
      description:
        'With over four decades of experience providing solutions to large-scale.',
      num: '03 .',
    },
    {
      Img: 'feature2-2.jpg',
      title: 'Sea Freight',
      description:
        'With over four decades of experience providing solutions to large-scale.',
      num: '04 .',
    },
    {
      Img: 'feature2-3.jpg',
      title: 'Air Freight',
      description:
        'With over four decades of experience providing solutions to large-scale.',
      num: '05 .',
    },
  ];
  return (
    <>
      <section className="packages-section-two">
        <div
          className="bg bg-image"
          style={{
            backgroundImage: 'url(images/background/bg-packages2-1.jpg)',
          }}
        ></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-title">
              <span className="sub-title">Top Rated Cruises</span>
              <h2 className="words-slide-up text-split">
                Explore all type of <br />
                luxury cruises
              </h2>
            </div>
          </div>
        </div>
        <div className="outer-box">
          {data.map((item, i) => (
            <div key={i} className="package-block-two">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <img src={`/images/resource/${item.Img}`} alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <div className="price">{item.num}</div>
                  <h4 className="title">
                    <Link href="#">{item.title}</Link>
                  </h4>
                  <div className="text location">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Package;
