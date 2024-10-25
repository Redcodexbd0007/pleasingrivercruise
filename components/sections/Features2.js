const Features2 = () => {
  const data = [
    {
      icon: 'icon flaticon-yacht flaticon-sailing-boat',
      title: 'Luxury Cruises',
      description: 'With the largest fleet of luxury catamarans.',
    },
    {
      icon: 'icon flaticon-yacht flaticon-anchor',
      title: 'Sea Freight',
      description:
        'We strongly support best practice sharing across our operations around',
    },
    {
      icon: 'icon flaticon-yacht flaticon-lifebuoy',
      title: 'Air Freight',
      description:
        'We strongly support best practice sharing across our operations around',
    },
  ];
  return (
    <>
      <section className="features-section-two">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/icons/bg-pattern-1.png)' }}
        ></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              {data.map((item, i) => (
                <div key={i} className="feature-block-two col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className={item.icon}></i>
                    </div>
                    <div className="content-box">
                      <h4 className="title">{item.title}</h4>
                      <div className="text">{item.description}</div>
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
export default Features2;
