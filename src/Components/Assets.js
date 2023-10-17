import React, { lazy, Suspense } from "react";
import images from "./images";
const Nav = lazy(() => import("./Nav"));
const Footer = lazy(() => import("./Footer"));
const Cards = lazy(() => import("./Cards"));

const Assets = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${images.picture.homepage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "10rem",
    color: "white",
  };

  return (
    <div className="bg-[#0501011c]">
      <div>
      <div className="mb-[12rem]">
      <Suspense  fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      </div>

        <div
          className="flex justify-center items-center m-8  max-lg:m-2 max-lg:text-2xl rounded-sm text-4xl font-bold"
          style={backgroundImageStyle}
        >
          <h1>Assets/Properties</h1>
        </div>
        <div className="mx-4 my-8 max-lg:m-2">
        <Suspense  fallback={<div>Loading...</div>}>
          <Cards />
        </Suspense>
        </div>
        
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Assets;
