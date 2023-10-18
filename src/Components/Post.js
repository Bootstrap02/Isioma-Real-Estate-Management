import React, { useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import images from "./images";
import {PostModals} from "../BuyNowModals";
const Nav = lazy(() => import("./Nav"));
const Footer = lazy(() => import("./Footer"));
const Promo = lazy(() => import("./Promo"));


const Post = () => {
  const { title } = useParams();

  const modalStyle = {
    zIndex: "2000",
    position: "fixed",
    top: "20%",
    left: "10%"
    
  };


  const [modals, setModals] = useState(false);


  const [successMessage, setSuccessMessage] = useState(false);


const openSuccessMessage = () => {
   setSuccessMessage("Congratulations! Your booking was successful");
};
const closeSuccessMessage = () => {
   setSuccessMessage(false)
};


  const openModals = () => {
    setModals(true);
  };
  const closeModals = () => {
    setModals(false);
  };

  const [activeImageIndex, setActiveImageIndex] = useState("film");

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  const findHouse = images.Card.find((house) => house.title === title);

  return findHouse ? (
    <div className="bg-[#0501011c]">
      <div className="m-4">
      <Suspense  fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      </div>
      <div className="flex justify-between  max-lg:flex-col mx-6 my-4 max-lg:m-0">
        <div className="bg-[#D3EFC7] shadow-lg  shadow-[#1D0F0C] rounded-lg p-4 flex flex-col gap-4">
          <div className="font-bold text-center">{findHouse.title}</div>
          <div className="w-[250px] max-lg:hidden">
            <h2>
              <strong>
                Luxurious Living Redefined: Your Dream Home Awaits!
              </strong>
            </h2>
            <h3>
              Welcome to your private oasis of elegance and comfort! Nestled in
              the heart of Abuja, this exquisite residence embodies the epitome
              of luxury living. Prepare to be enchanted by this meticulously
              designed home, where opulence meets functionality, offering you a
              lifestyle of unparalleled sophistication and ease.
            </h3>
          </div>
        </div>
        <div className="flex  justify-center flex-wrap gap-[20px] shadow-xl rounded-lg  shadow-[#837078] max-lg:m-0 m-4 p-2">
          <div className="flex justify-between flex-col my-4 mx-4  bg-purple-100 shadow-xl rounded-lg border m-2 ">
            <div className="flex flex-col gap-[10px]  bg-[#0E3980] justify-between items-center">
              <div className="h-[350px] w-[fit-content] my-1">
                <img
                  src={
                    activeImageIndex === "film"
                      ? findHouse.film
                      : findHouse.photos[activeImageIndex]
                  }
                  width={550}
                  height={250}
                  loading="lazy"
                  alt="video"
                />
              </div>

              <div className="font-montecarlo flex justify-center text-white w-full p-4 bg-black ">
                <h2>
                  <strong>Explore Our Angles to your satisfaction</strong>
                </h2>
              </div>
              <div className=" flex  gap-6   bg-[#438672] rounded-lg">
                {findHouse.photos.map((photo, index) => (
                  <div
                    key={index + 1}
                    className={`m-1 px-1 border ${
                      index === activeImageIndex
                        ? "border-green-500"
                        : "border-[#d4af37]"
                    } bg-[#780741] rounded-lg flex justify-center items-center`}
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={photo}
                      width={100}
                      height={100}
                      alt="picture"
                    />
                  </div>
                ))}
              </div>
                 <div className="flex items-center flex-col  p-4 bg-[#1D0F0C] text-white font-bold ">
              <h2 className="font-black text-white">{findHouse.title}</h2>
              <div className="flex gap-[20px]">
                <h3 className="text-purple-400">{findHouse.location}</h3>
                <h1 className="font-bold text-[#9D4E1B]">{findHouse.price}</h1>
              </div>
              <div className="flex flex-row  justify-between items-center w-full">
                <div
                  className="bg-black font-bold rounded-lg p-2"
                  style={{
                    color:
                      findHouse.availability === "Available" ? "green" : "red",
                  }}
                >
                  {findHouse.availability}
                </div>
                <div>
                  <button
                    className="p-3 rounded-xl  text-white font-bold border border-[#FFD700]  "
                    onClick={openModals}
                  >
                    <strong>Book Unit Now</strong>
                  </button>
                  <div>
                    {modals && <PostModals closeModals={closeModals} openSuccessMessage = {openSuccessMessage} />}
                    <div  style={modalStyle} className="w-[1000px] max-lg:w-[300px]" >
          {successMessage &&  <div className='container bg-black rounded-lg w-full flex flex-col justify-center items-center m-4 p-4 max-lg:p-2 max-lg:m-2 '>
          
    <div className="flex flex-col justify-center w-full gap-4 items-center rounded-lg border-2 border-[#B59410] p-8 max-lg:p-4">
    <button className="bg-white ml-auto" onClick={ closeSuccessMessage}>
      <img src= {images.picture.cancel}/>
      </button>
      <p className='text-white font-black text-center text-4xl max-lg:text-2xl'>{successMessage}</p>
      <img src= {images.picture.sent} width={100}/>
    </div>
  </div>}
        </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
                   
        </div>
        <div className="font-bold text-center flex flex-col my-6 justify-center gap-6">
          <p>
            <strong>see also...</strong>
          </p>
          <div  className="w-[250px] flex justify-center max-lg:w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <Promo />
          </Suspense>
          </div>
          
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  ) : (
    <div>
      <div className="m-4">
      <Suspense  fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      </div>
      <h2 className="text-center">Property not found</h2>
    </div>
  );
};

export default Post;
