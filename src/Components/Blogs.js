import React, { lazy, Suspense } from "react";
import images from "./images";
const Nav = lazy(() => import  ("./Nav"));
const Footer =  lazy(() => import ("./Footer"));
const Feeds = lazy(() => import("./Feeds"));

const Blogs = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${images.picture.homepage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "10rem",
        color: 'white'
      };

  return (
    <div className='bg-[#0501011c]'>
       <div>
       <div className="mb-[12rem]">
      <Suspense  fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      </div>
       
       <div className='flex justify-center items-center m-8 rounded-sm text-4xl font-bold' style={backgroundImageStyle}><h1>Welcome to our Blog</h1></div>
    <div className="mx-4 my-8">
    <Suspense  fallback = {<div>Loading...</div>}>
        <Feeds/>
          </Suspense>

    </div>
       
       </div>

       <Suspense fallback = {<div>Loading...</div>}>
      <Footer/>
      </Suspense>

    </div>
  )
}

export default Blogs