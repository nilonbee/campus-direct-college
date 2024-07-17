/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { rootImagePath } from "@/utils/rootImagePath";

export const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="slider-container w-full">
      <Slider {...settings} className="w-full object-cover overflow-hidden">
        <div>
          <img
            src={rootImagePath("Slider/slider01.jpg?tr=w-1800")}
            alt="banner1"
            className="w-full"
          />
        </div>
        <div>
          <img
            src={rootImagePath("Slider/slider02.jpg?tr=w-1800")}
            alt="banner2"
            className="w-full"
          />
        </div>
        <div>
          <img
            src={rootImagePath("Slider/slider03.jpg?tr=w-1800")}
            alt="banner3"
            className="w-full"
          />
        </div>
        <div>
          <img
            src={rootImagePath("Slider/slider04.jpg?tr=w-1800")}
            alt="banner4"
            className="w-full"
          />
        </div>
        <div>
          <img
            src={rootImagePath("Slider/slider05.jpg?tr=w-1800")}
            alt="banner5"
            className="w-full"
          />
        </div>
      </Slider>
    </div>
  );
};
