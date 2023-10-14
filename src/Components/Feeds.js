import React from "react";
import images from "./images";
import { Link } from "react-router-dom";

const Feeds = () => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-[20px] shadow-xl  rounded-lg  m-4 p-8">
      {images.Feeds.map((image, index) => {
        return (
          <div className="flex gap-4 justify-start mx-8 8y-4 p-6">
            <div>
              <img
                src={image.image}
                width={500}
                height={500}
                loading="lazy"
                className="rounded-xl w-[500px]"
                alt="Project"
              />
            </div>
            <div className="flex items-center flex-col  p-4">
              <p className=" text-gray-600">{image.date}</p>
              <h2 className="font-black text-purple-950">{image.title}</h2>
              <h3 className="font-semibold text-black">{image.description}</h3>
              <Link
                key={index}
                to={`/Post/${image?.title}`}
                className="rounded-md border p-2"
              >
                <button className="bg-blue-600  border-[#d4af37] p-2 border-2 rounded-md">
                  Read More...
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;
