import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
import Services3 from "../../components/Services3/services3";
import WorksStyle4 from "../../components/Works-style4/works-style4";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import Video2 from "../../components/Video2/video2";
import CallToAction from "../../components/Call-to-action/call-to-action";

const Homepage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
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
      <Navbar nr={navbarRef} lr={logoRef} />
      <FreelancreIntro />
      <Services3 />
      <Video2 />
      <WorksStyle4 />
      <CallToAction />
      <Blogs2 />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage;
