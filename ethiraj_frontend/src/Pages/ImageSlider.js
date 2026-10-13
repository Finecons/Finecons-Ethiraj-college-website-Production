import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,          // show dots below
    infinite: true,      // loop infinitely
    speed: 500,          // animation speed
    slidesToShow: 1,     // show 1 image at a time
    slidesToScroll: 1,   // scroll 1 image per swipe/click
    autoplay: true,      // auto slide
    autoplaySpeed: 2000, // 2 sec delay
    arrows: true         // show prev/next arrows
  };

  return (
    <div style={{ width: "800px", margin: "50px auto" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
