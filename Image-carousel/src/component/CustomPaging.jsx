import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from '../assets/images/image-1.jpg';
import Image2 from '../assets/images/image-2.jpg';
import Image3 from '../assets/images/image-3.jpg';
import Image4 from '../assets/images/image-4.jpg';
import Image5 from '../assets/images/image-5.jpg';
import Image6 from '../assets/images/image-6.jpg';

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

function CustomPaging() {
  const settings = {
    customPaging: function (i) {
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <img
            src={images[i]}
            alt={`Thumbnail ${i + 1}`}
            style={{ width: "100%"}}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomPaging;
