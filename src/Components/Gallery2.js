import React from "react";
import images from "./images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Gallery2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Add this line
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="border-[#d4af37] border-4">
      <Slider {...settings}>
        {images.Lands.map((image, index) => (
          <Link to={`/CheapPost2/${image?.title}`}  key={index + 1} className="m-8 px-4">
            <h3 className="text-center">{image.title}</h3>
            <img
              src={image.image}
              width={500}
              height={650}
              loading="lazy"
              alt={image.title}
            />
            <div className="text-center flex flex-col gap-4">
           <h2 className="text-bold text-2xl text-green-700">{image.price}</h2>
            <h3>{image.description}</h3>
            <h4 className="text-semibold text-xl text-green-500">{image.location}</h4>
           </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery2;
