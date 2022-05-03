import React from "react";
import blog1Data from "../../data/blog1.json";
import blog2Data from "../../data/blog2.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogStanderd from "../../components/Blog-standerd/blog-standerd";
import BlogStanderd2 from "../../components/Blog-standerd2/blog-standerd2";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";

const BlogDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="My News."
        paragraph="All the most current news and events from the web."
      />
      <BlogStanderd blogs={blog1Data} />
      <BlogStanderd2 blogs={blog2Data} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogDark;
