import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <>
      <div className="w-3/4 bg-sky-400 mx-auto mt-24">
      <Slider {...settings}>
        <div className="bg-rc-yellow text-black text-center h-96">
          <h1>1</h1>
        </div>
        <div className="bg-rc-red text-black text-center h-96">
          <h1>2</h1>
        </div>
        <div className="bg-rc-blue text-black text-center h-96">
          <h1>3</h1>
        </div>
        <div className="bg-rc-yellow text-black text-center h-96">
          <h1>4</h1>
        </div>
        </Slider>
      </div>
    </>
  );
}
