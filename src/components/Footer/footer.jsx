/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Me</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <a
                    href="https://goo.gl/maps/gKG8EUwQMZCKDjqD8"
                    target="blank_"
                  >
                    <div className="cont">
                      <h6>Address</h6>
                      <p>Carter Road - 3, Borivali East, Mumbai.</p>
                    </div>
                  </a>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <a href="mailto:dhruvpandya1401@gmail.com?subject=HI, I Saw your Website">
                    <div className="cont">
                      <h6>Email</h6>
                      <p>dhruvpandya1401@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <a href="tel:7021206529">
                    <div className="cont">
                      <h6>Call</h6>
                      <p>+91 70212-06529</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog/blog-dark">
                      <a>
                        <img src="/img/blog1.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <a>
                        <p>
                          Elon Musk&apos;s First Tweet As New Twitter Owner.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">28 Apr 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog/blog-dark">
                      <a>
                        <img src="/img/blog3.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <a>
                        <p>
                          Even Microsoft is running an unsupported Windows 11
                          PC.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">27 Apr 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a
                  href="https://www.facebook.com/dhruv.pandya.902"
                  target="blank_"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=917021206529&text=Hi%2C%20I%20saw%20your%20website%F0%9F%98%84"
                  target="blank_"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="https://www.instagram.com/dhruvvvvvvvv._/"
                  target="blank_"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/dhruvpandya1401/"
                  target="blank_"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Made with passion by :
                  <Link href="#0">
                    <a> Dhruv Pandya </a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
