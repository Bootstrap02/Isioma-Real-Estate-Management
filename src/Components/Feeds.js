import React from "react";
import images from "./images";
import { Link } from "react-router-dom";

const Feeds = () => {
  return (
    <div className="container flex flex-row justify-center items-center  flex-wrap gap-[20px] shadow-xl max-lg:p-2 max-lg:m-0 rounded-lg  m-4 p-8">
      {images.Feeds.map((image, index) => {
        return (
          <div className="flex gap-4 justify-start m-6 p-6 max-lg:p-2 max-lg:m-0">
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
            <div className="flex items-center flex-col max-lg:p-1 p-4">
              <p className=" text-gray-600 max-lg:text-sm">{image.date}</p>
              <h2 className="font-black text-purple-950 max-lg:text-lg">{image.title}</h2>
              <h3 className="font-semibold max-lg:text-sm text-black">{image.description}</h3>
              <Link
                key={index}
                to={`/Post/${image?.title}`}
                className="rounded-md border p-2"
              >
                <button className=" border-[#d4af37] p-2 max-lg:p-1 border-2 max-lg:text-sm rounded-md">
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
