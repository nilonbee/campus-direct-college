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
            src={rootImagePath(
              "campus-direct-college/banner-images/banner-1?tr=w-1800",
            )}
            alt="banner1"
            className="w-full"
          />
        </div>
        <div>
          <img
            src={rootImagePath(
              "campus-direct-college/banner-images/banner-2?tr=w-1800",
            )}
            alt="banner2"
            className="w-full"
          />
        </div>
        <div>
          <img
            src={rootImagePath(
              "campus-direct-college/banner-images/banner-3?tr=w-1800",
            )}
            alt="banner4"
            className="w-full"
          />
        </div>
        <div>
          <img
            src={rootImagePath(
              "campus-direct-college/banner-images/banner-4?tr=w-1800",
            )}
            alt="banner5"
            className="w-full"
          />
        </div>
      </Slider>
    </div>
  );
};
