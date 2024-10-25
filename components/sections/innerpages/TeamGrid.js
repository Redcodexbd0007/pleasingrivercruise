import Link from 'next/link';

const TeamGrid = () => {
  return (
    <>
      <section className="team-section pt-120 pb-80">
        <div className="auto-container">
          <div className="row">
            {/* Team block */}
            <div className="team-block col-lg-4 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <img
                    className="image-pattern"
                    src="/images/resource/team1-pattern1.png"
                    alt="Image"
                  />
                  <figure className="image">
                    <Link href="page-team-details">
                      <img src="/images/resource/team1-1.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="page-team-details">Alen Hispro</Link>
                  </h4>
                  <span className="designation">CEO, Voyacht</span>
                </div>
              </div>
            </div>
            {/* Team block */}
            <div className="team-block col-lg-4 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <img
                    className="image-pattern"
                    src="/images/resource/team1-pattern1.png"
                    alt="Image"
                  />
                  <figure className="image">
                    <Link href="page-team-details">
                      <img src="/images/resource/team1-2.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="page-team-details">Alen Hispro</Link>
                  </h4>
                  <span className="designation">CEO, Voyacht</span>
                </div>
              </div>
            </div>
            {/* Team block */}
            <div className="team-block col-lg-4 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <img
                    className="image-pattern"
                    src="/images/resource/team1-pattern1.png"
                    alt="Image"
                  />
                  <figure className="image">
                    <Link href="page-team-details">
                      <img src="/images/resource/team1-3.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="page-team-details">Alen Hispro</Link>
                  </h4>
                  <span className="designation">CEO, Voyacht</span>
                </div>
              </div>
            </div>
            {/* Team block */}
            <div className="team-block col-lg-4 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <img
                    className="image-pattern"
                    src="/images/resource/team1-pattern1.png"
                    alt="Image"
                  />
                  <figure className="image">
                    <Link href="page-team-details">
                      <img src="/images/resource/team1-2.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="page-team-details">Alen Hispro</Link>
                  </h4>
                  <span className="designation">CEO, Voyacht</span>
                </div>
              </div>
            </div>
            {/* Team block */}
            <div className="team-block col-lg-4 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <img
                    className="image-pattern"
                    src="/images/resource/team1-pattern1.png"
                    alt="Image"
                  />
                  <figure className="image">
                    <Link href="page-team-details">
                      <img src="/images/resource/team1-3.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="page-team-details">Alen Hispro</Link>
                  </h4>
                  <span className="designation">CEO, Voyacht</span>
                </div>
              </div>
            </div>
            {/* Team block */}
            <div className="team-block col-lg-4 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <img
                    className="image-pattern"
                    src="/images/resource/team1-pattern1.png"
                    alt="Image"
                  />
                  <figure className="image">
                    <Link href="page-team-details">
                      <img src="/images/resource/team1-1.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="page-team-details">Alen Hispro</Link>
                  </h4>
                  <span className="designation">CEO, Voyacht</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TeamGrid;
