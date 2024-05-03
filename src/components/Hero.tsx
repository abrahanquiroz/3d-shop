"use client";

// Desc: Home page hero section
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
        id: 0,
        img: "/banner.jpg",
        title: "Trending Item",
        mainTitle: "3D Printed T-Shirt",
        price: "20$",
    },
    {
        id: 1,
        img: "/banner2.png",
        title: "Trending Accessories",
        mainTitle: "3D SUNGLASSES",
        price: "30$",
    },
    {
        id: 2,
        img: "/banner3.png",
        title: "Offer of the Day",
        mainTitle: "3D SUMMER SALE",
        price: "15$",
    }
  ]

  return <div>
    <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
            {slideData.map((item) => (
            <Slide 
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
            />
        ))}
        </Slider>
    </div>
  </div>;
};

export default Hero;
