/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogStanderd = ({ blogs }) => {
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
                      href={`https://in.mashable.com/tech/30770/elon-musk-first-tweet-as-new-twitter-owner-reveals-his-plan-for-the-platform-will-he-able-to-do-it-t`}
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
                          href={`https://in.mashable.com/tech/30770/elon-musk-first-tweet-as-new-twitter-owner-reveals-his-plan-for-the-platform-will-he-able-to-do-it-t`}
                        >
                          <a className="date">
                            <span className="num">{blogItem.date.day}</span>
                            <span>{blogItem.date.month}</span>
                          </a>
                        </Link>
                        <div className="tags">
                          {blogItem.tags.map((tag, index) => (
                            <Link key={index} href="https://in.mashable.com/">
                              {tag}
                            </Link>
                          ))}
                        </div>
                        <h4 className="title">
                          <Link
                            href={`https://in.mashable.com/tech/30770/elon-musk-first-tweet-as-new-twitter-owner-reveals-his-plan-for-the-platform-will-he-able-to-do-it-t`}
                          >
                            {blogItem.title}
                          </Link>
                        </h4>
                        <p>{blogItem.content}</p>
                        <Link
                          href={`https://in.mashable.com/tech/30770/elon-musk-first-tweet-as-new-twitter-owner-reveals-his-plan-for-the-platform-will-he-able-to-do-it-t`}
                        >
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="pagination">
                <span className="active">
                  <Link href={`/blog/blog-dark`}>1</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>2</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>
                    <a>
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </Link>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
