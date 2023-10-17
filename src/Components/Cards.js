import React, { useState } from "react";
import images from "./images";
import { Link, NavLink } from "react-router-dom";

const Cards = () => {
  const [isHovered, setIsHovered] = useState("");

  const card = {
    float: "right",
    zIndex: "1000",
    position: "absolute",
    marginRight: "auto",
    margin: "1rem",
  };

  return (
    <div className="flex flex-row max-lg:col justify-center items-center flex-wrap gap-[20px] shadow-xl  rounded-lg max-lg:m-0 max-lg:p-2  m-4 p-8">
      {images.Card.map((image, index) => {
        return (
          <Link
            key={index}
            to={`/Post/${image?.title}`}
            className="flex justify-between flex-col max-lg:w-[100%] w-[30%]  border-[#80214C] bg-purple-100 shadow-xl rounded-lg border m-2"
          >
            <div>
              <div
                className="bg-blue-950 text-white px-2 py-1  rounded-lg"
                style={card}
              >
                {image.availability}
              </div>
              <img
                src={image.image}
                loading="lazy"
                className="rounded-xl w-[500px]"
                alt="Project"
                style={{
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                  transform:
                    isHovered === image.title ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered(image.title)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
            <div className="flex items-center flex-col  p-4">
              <h2 className="font-black text-purple-950">{image.title}</h2>
              <h3 className="font-semibold text-black">{image.description}</h3>
              <h3 className="text-purple-400">{image.location}</h3>
              <h2 className="font-bold text-purple-950">{image.price}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
