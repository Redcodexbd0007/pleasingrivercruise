import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <section className="contact-section-three">
        <div
          className="bg bg-image"
          style={{
            backgroundImage: 'url(images/background/bg-contact3-1.jpg)',
          }}
        ></div>
        <div
          className="bg bg-image-2"
          style={{
            backgroundImage: 'url(images/background/bg-contact1-2.jpg)',
          }}
        ></div>
        <div className="icon-sailboat-line-4 bounce-y"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              {/*  Form Column  */}
              <div className="form-column col-lg-8 offset-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/*  Contact Form  */}
                  <div className="contact-form-three wow fadeInLeft">
                    <div className="icon-wheel-5"></div>
                    <div className="sec-title">
                      {' '}
                      <span className="sub-title">Contact Us</span>
                      <h2 className="words-slide-up text-split">
                        Get in Touch
                      </h2>
                    </div>
                    {/* Contact Form */}
                    <form
                      id="contact_form"
                      name="contact_form"
                      action="#"
                      method="post"
                    >
                      <div className="row">
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            type="text"
                            name="form_name"
                            placeholder="NAME"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            className="required"
                            type="email"
                            name="form_email"
                            placeholder="YOUR MAIL"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            type="tel"
                            name="form_phone"
                            placeholder="PHONE"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            className="required"
                            type="text"
                            name="form_subject"
                            placeholder="SUBJECT"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-12">
                          <textarea
                            className="required"
                            name="form_message"
                            placeholder="MESSAGE"
                            rows="2"
                          ></textarea>
                        </div>
                        <div className="form-group col-lg-12">
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
                            <span className="btn-title">Message</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* End Contact Form  */}
                  <div className="contact-block-three">
                    <div className="inner-box">
                      <div className="content-box">
                        {' '}
                        <i className="icon flaticon-yacht flaticon-customer-service"></i>{' '}
                        <span className="text">Call us for any inquiry</span>{' '}
                        <a className="text-two" href="#/">
                          (010) 612 45 741
                        </a>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
