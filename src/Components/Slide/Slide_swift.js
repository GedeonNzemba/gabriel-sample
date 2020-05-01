import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image_1 from "../../_assets/image_5.png";
import image_2 from "../../_assets/image_6.png";
import image_3 from "../../_assets/image_7.png";
import image_4 from "../../_assets/image_8.png";
import image_5 from "../../_assets/image_9.png";
import "./Slide_swift.css";
import Slider from "react-slick";

export class slideswift extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,

      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="paragraph_wrap">
        <Slider {...settings}>
          <div className="paragraph_slide">
            <h3 style={{ textAlign: "left" }}>Incident Reporting</h3>
            <hr />
            <p id="paragraph_slide" style={{ textAlign: "left" }}>
              This allows us to quickly track and handle issues as they occur
            </p>
          </div>
          <div className="paragraph_slide">
            <h3 style={{ textAlign: "left" }}>Walk Me In Safely</h3>
            <hr />
            <p id="paragraph_slide" style={{ textAlign: "left" }}>
              Request security to escort to and from the promises.
            </p>
          </div>
          <div className="paragraph_slide">
            <h3 style={{ textAlign: "left" }}>SOS Button</h3>
            <hr />
            <p id="paragraph_slide" style={{ textAlign: "left" }}>
              Allows you to receive immediate help.
            </p>
          </div>
          <div className="paragraph_slide">
            <h3 style={{ textAlign: "left" }}>Message Building Management</h3>
            <hr />
            <p id="paragraph_slide" style={{ textAlign: "left" }}>
              You will have direct contact with building Management.
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}

export default slideswift;
