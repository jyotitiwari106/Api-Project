import { Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { toast } from "react-toastify";

const SliderComponent = () => {
  return (
    <>
      <div className="slider-container px-10 bg-gray-400 p-5">
        <Slider
          autoplay
          autoplaySpeed={2000}
          speed={2000}
          slidesToShow={2}
          slidesToScroll={1}
          arrows={true}
          dots
          infinite
        >
          <div>
            <img
              src="https://source.unsplash.com/random/900x700/?fruit/1"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/900x700/?fruit/2"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/900x700/?fruit/3"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/900x700/?fruit/4"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/900x700/?fruit/5"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <Button onClick={() => toast.error("Message")}>Show Toast</Button>
      <div className="bg-gray-200 relative"></div>
    </>
  );
};

export default SliderComponent;
