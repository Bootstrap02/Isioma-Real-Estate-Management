import React from "react";
import images from "./images";
import { Link } from "react-router-dom";

const Promo = () => {
  const promo = {
    float: "right",
    zIndex: "1000",
    position: "absolute",
    marginRight: "auto",
    margin: "1rem",
  };


  const getRandomHouses = () => {
    const randomHouses = [];
    while (randomHouses.length < 3) {
      const randomIndex = Math.floor(Math.random() * images.Card.length);
      const randomHouse = images.Card[randomIndex];
      if (!randomHouses.includes(randomHouse)) {
        randomHouses.push(randomHouse);
      }
    }
    return randomHouses;
  };

  const randomHouses = getRandomHouses();




  return (
    <div className=" justify-center items-center flex flex-col  w-[fit-content] gap-[20px] shadow-xl rounded-lg border ">
      {randomHouses.map((image, index) => {
        return (
          <Link
            key={index}
            to={`/Post/${image?.title}`}
            className="flex justify-between flex-col   bg-purple-100 shadow-xl rounded-lg border m-2"
          >
            <div>
              <div
                className="bg-blue-950 text-white px-2 py-1  rounded-lg"
                style={promo}
              >
                <p>Available</p>
              </div>
              <img
                src={image.image}
                className="rounded-xl"
                alt="Project"
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            <div className="flex items-center flex-col  p-4">
              <h2 className="font-black text-purple-950">{image.title}</h2>
              <h3 className="text-purple-400">{image.location}</h3>
              <h2 className="font-bold text-purple-950">{image.price}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Promo;
