/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogStanderd2 = ({ blogs }) => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogs.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogs.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem.id}
                >
                  <div className="img">
                    <Link
                      href={`https://medium.com/@jessicamathew07/10-tips-to-successful-mobile-app-development-313c0e9a7aa4`}
                    >
                      <a>
                        <img src={blogItem.image} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <Link
                          href={`https://medium.com/@jessicamathew07/10-tips-to-successful-mobile-app-development-313c0e9a7aa4`}
                        >
                          <a className="date">
                            <span className="num">{blogItem.date.day}</span>
                            <span>{blogItem.date.month}</span>
                          </a>
                        </Link>
                        <div className="tags">
                          {blogItem.tags.map((tag, index) => (
                            <Link key={index} href="https://medium.com/">
                              {tag}
                            </Link>
                          ))}
                        </div>
                        <h4 className="title">
                          <Link
                            href={`https://medium.com/@jessicamathew07/10-tips-to-successful-mobile-app-development-313c0e9a7aa4`}
                          >
                            {blogItem.title}
                          </Link>
                        </h4>
                        <p>{blogItem.content}</p>
                        <Link
                          href={`https://medium.com/@jessicamathew07/10-tips-to-successful-mobile-app-development-313c0e9a7aa4`}
                        >
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd2;
