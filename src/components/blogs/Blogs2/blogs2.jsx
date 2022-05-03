/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Get The Latest News</h6>
              <h3>What&apos;s The Trending News!</h3>
              <p>Get all the latest and greatest tech related news here.</p>
              <Link href="/blog/blog-dark">
                <a>
                  <span>More Blog Posts</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog1.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark">
                      <a className="date">
                        <span>
                          <i>28</i> April 2022
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark">
                      <a className="tag">
                        <span>Article</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog/blog-dark">
                      <a>Elon Musk&apos;s First Tweet As New Twitter Owner.</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <img src="/img/blog2.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark">
                      <a className="date">
                        <span>
                          <i>27</i> April 2022
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark">
                      <a className="tag">
                        <span>Article</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog/blog-dark">
                      <a>10 Tips To Successful Mobile App Development.</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog3.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark">
                      <a className="date">
                        <span>
                          <i>27</i> April 2022
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark">
                      <a className="tag">
                        <span>Article</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog/blog-dark">
                      <a>
                        Even Microsoft is running an unsupported Windows 11 PC.
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
