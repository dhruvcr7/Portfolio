import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Video2 = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section
      className="video bg-img parallaxie"
      style={{ backgroundImage: "url(/img/about.png)" }}
    >
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="custom"
          autoplay
          isOpen={isOpen}
          url="/img/Dhruv-intro.mp4"
          onClose={() => setOpen(false)}
        />
      )}
      <a
        className="vid valign"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      </a>
      <div className="container">
        <div className="stauts">
          {/* <div className="item">
            <h4>
              3<span>K</span> +
            </h4>
            <h6>Happy Clients</h6>
          </div> */}
          <div className="item">
            <h4>
              25<span>+</span>
            </h4>
            <h6>Success Projects</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video2;
