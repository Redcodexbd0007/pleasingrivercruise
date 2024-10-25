import Link from 'next/link';

const News1 = () => {
  const data = [
    {
      img: 'blog1-1.jpg',
      title: 'Exploring Paradise in The Maldives',
      authorTitle: 'Thomas Walkar',
    },
    {
      img: 'blog1-2.jpg',
      title: 'Exploring Paradise in The Maldives',
      authorTitle: 'Joseph',
    },
    {
      img: 'blog1-3.jpg',
      title: 'Exploring Paradise in The Maldives',
      authorTitle: 'Admin',
    },
  ];
  return (
    <>
      <section className="blog-section">
        <div className="icon-plane-4 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Latest Blog</span>
            <h2 className="words-slide-up text-split">Latest News & updates</h2>
          </div>
          <div className="row">
            {data.map((item, i) => (
              <div
                key={i}
                className="blog-block col-lg-4 col-md-6 wow fadeInUp"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="news-details">
                        <img src={`/images/resource/${item.img}`} alt="Image" />
                        <img src={`/images/resource/${item.img}`} alt="Image" />
                      </Link>
                    </figure>
                    <span className="date">
                      {' '}
                      <strong>
                        25 <span>Jun</span>{' '}
                      </strong>{' '}
                    </span>
                  </div>
                  <div className="content-box">
                    <ul className="post-meta">
                      <li>
                        <i className="fal fa-user"></i>
                        {item.authorTitle}
                      </li>
                      <li>
                        <i className="fas fa-comments"></i>0 Comments
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="news-details">{item.title}</Link>
                    </h4>
                    <Link className="read-more" href="news-details">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News1;
