/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
                My Recent Web Design & <br /> Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".graphic">Creative</span>
              {/* <span data-filter=".brand">Branding</span> */}
              <span data-filter=".web">Web development</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative for ACTAD</h6>
                  <p>Graphic design</p>
                </div>
                <Link href={`/showcase3/showcase3-dark/`}>
                  <a className="rota">
                    <img src="/img/works1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Social</Link>
                  </span>
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Fit With Kedar</h6>
                  <p>Website</p>
                </div>
                <Link href={`/showcase3/showcase3-dark/`}>
                  <a className="rota">
                    <img src="/img/works2.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Website</Link>
                  </span>
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Fitnes</Link>
                  </span>
                  <span>
                    <Link href="/showcase3/showcase3-dark/">
                      Web Development
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Weather App</h6>
                  <p>Website</p>
                </div>
                <Link href={`/showcase3/showcase3-dark/`}>
                  <a className="rota">
                    <img src="/img/works3.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Website</Link>
                  </span>
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Personal</Link>
                  </span>
                  <span>
                    <Link href="/showcase3/showcase3-dark/">
                      Web Development
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative for ACTAD</h6>
                  <p>Graphic design</p>
                </div>
                <Link href={`/showcase3/showcase3-dark/`}>
                  <a className="rota">
                    <img src="/img/works4.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Social</Link>
                  </span>
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            {/* <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>5</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/5.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/showcase3/showcase3-dark/">App</Link>
                  </span>
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Fitnes</Link>
                  </span>
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Creative</Link>
                  </span>
                </div>
              </div>
            </div> */}

            {/* <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>6</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/showcase3/showcase3-dark/">App</Link>
                  </span>
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Fitnes</Link>
                  </span>
                  <span>
                    <Link href="/showcase3/showcase3-dark/">Creative</Link>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
