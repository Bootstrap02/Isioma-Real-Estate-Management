import React, { useState, lazy, Suspense } from "react";
import images from "./images";
import {BuyNowModals} from "../BuyNowModals";
const Gallery = lazy(() => import("./Gallery"));
const Gallery2 = lazy(() => import("./Gallery2"));
const Nav = lazy(() => import("./Nav"));
const Footer = lazy(() => import("./Footer"));

const Firstscreen = () => {
  const [modals, setModals] = useState(false);

  const modalStyle = {
    zIndex: "2000",
    position: "fixed",
    top: "20%",
    left: "10%"
    
  };



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

  const backgroundImageStyle = {
    backgroundImage: `url(${images.picture.homepage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="  w-[100%] justify-center items-center flex flex-col ">
      <div className=" flex   w-[100%] flex-col" style={backgroundImageStyle}>
      <div className="mb-[12rem]">
      <Suspense  fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      </div>
        <div
          className=" flex   max-lg:flex-col    flex-row justify-between p-4"
          style={{ minHeight: "40vh" }}
        >
          <div className="  flex  flex-col justify-center items-center max-lg:hidden rounded-lg m-4 px-2 py-4 gap-8 w-fit-content border border-[#B59410] bg-[#000000c4]">
            <a href="#">
              <img src={images.picture.twitter} width={20} height={13} loading="lazy" />
            </a>
            <a
              href="https://instagram.com/louisjoseph7969?igshid=NzZlODBkYWE4Ng=="
              target="_blank"
            >
              <img
                src={images.picture.instagram}
                width={20}
                height={13}
                loading="lazy"
              />
            </a>
            <a href="https://www.linkedin.com/in/louis-joseph-634558153/">
              <img
                src={images.picture.linkedin}
                width={20}
                height={13}
                loading="lazy"
              />
            </a>
            <a href="https://m.facebook.com/profile.php/?id=100011187841047">
              <img
                src={images.picture.facebook}
                width={20}
                height={13}
                loading="lazy"
              />
            </a>
          </div>
          <div className=" flex flex-row items-start m-4  py-2  justify-center border border-[#d4af37]  bg-[#000000c4]  rounded-lg">
            <div className="px-2">
              <img src={images.picture.star} width={20} height={13} loading="lazy" />
            </div>
            <div
              className="flex justify-center items-center flex-wrap"
              style={{
                fontSize: "28px",
                fontWeight: "600",
                color: "white",
              }}
            >
              <p className="w-[80%]  flex flex-wrap wordwrap">
                Welcome to CCHomes Holdings Your Oasis of
                Luxury and Comfort!
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-end max-lg:justify-center mx-4 pr-4 ">
            <button
              className="px-4 py-2 rounded-xl   text-slate-950 bg-[#00A4AD] border border-[#504700] "
              onClick={openModals}
            >
              <strong>Book A Unit Now</strong>
            </button>
            <div>
              {modals && <BuyNowModals closeModals={closeModals} openSuccessMessage = {openSuccessMessage} />}
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
        <div className="mx-8 font-bold text-lg text-white text-center rounded-lg bg-[#000000c4]">
          Visit us @: 23 rd, Gwagwalada, Abuja, Nigeria.
        </div>
      </div>
      <div className= "w-[100%] bg-[#F3EEFF]  rounded-lg shadow-lg m-8 max=lg:m-0 flex flex-col justify-center items-center">
        <div
          className="text-bold text-4xl underline flex justify-center max-lg:m-0 m-4 mx-8 px-4 pt-4"
          style={{ fontFamily: "youngSerif" }}
        >
          <h1>Hot Deals</h1>
        </div>
        <div className="w-full bg-[#29231E] rounded-xl max-lg:flex-col p-4 m-8  border   text-white">
          <div className="flex flex-row max-lg:flex-col ">
            <div className="text-2xl  max-lg:w-[100%] p-4 ">
              <h2>
                <strong>
                Discover Exclusive Hot Deals with CCHomes.
                </strong>
              </h2>
            </div>
            <div className="rounded-full bg-[#DA9352] ml-auto m-2  p-4  max-lg:items-center max-lg:ml-[none] ">
              <img
                src={images.picture.discount}
                width={100}
                height={150}

              />
            </div>
          </div>

          <div className="flex justify-between items-center max-lg:flex-col  ">
            <div>
    
                <h5 className="w-[80%] max-lg:w-full">
                At CCHomes, we understand that everyone desires to make a smart investment in real estate. That's why we've carefully selected a range of properties that come with a fantastic 10% discount. These properties are ideal for savvy buyers who want to save while securing the home of their dreams. Whether you're looking for a cozy apartment, a spacious family home, or an investment property, our 10% discount section has something for everyone.
                <br/><br/>
                Browse through our listings and explore a variety of properties that boast excellent locations, modern amenities, and exceptional value. Don't miss out on this limited-time opportunity to make your homeownership dreams a reality.
                <br/><br/>
                Don't wait; these hot deals won't be around forever. Contact us today to schedule a viewing or get more information on our 10% and 25% discount sections. Your dream property is just a click or a call away with CCHomes.
                </h5>
      
            </div>
            
              <div className="w-[60%] p-4 max-lg:w-[100%] m-4 max-lg:m-1">
              <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
              </Suspense>
            
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <div className="rounded-full bg-[#DA9352] mr-auto  m-2 p-4max-lg:items-center max-lg:mr-[none]  ">
              <img
                src={images.picture.discant}
                width={100}
                height={150}
                loading="lazy"
              />
            </div>
            <div className="mr-6  max-lg:w-[50%]">
              <img src={images.picture.wow} width={250} height={200} />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center max-lg:flex-col">
            <div className="w-[60%] p-4 mx-4 my-8 max-lg:w-[100%] max-lg:m-1 ">
              <Suspense fallback={<div>Loading...</div>}>
                <Gallery2 />
              </Suspense>
            </div>
            <div className="w-[50%]  p-4 max=lg:p-1 max-lg:w-full">
              <h5>
              For those seeking an extraordinary bargain, CCHomes offers a once-in-a-lifetime opportunity in our 25% discount section. These properties represent unparalleled value and are perfect for investors or homebuyers looking for an incredible deal. With a quarter off the original price, you can make significant savings while acquiring a remarkable piece of real estate.
              <br/><br/>
              Our 25% discount section includes an array of properties, from luxurious villas to high-rise condos, all with substantial discounts. These listings won't last long, so act swiftly to secure your dream property at an unbelievable price.
              <br/><br/>
              At CCHomes, we're dedicated to helping you find the perfect property that suits your needs and budget. Our Hot Deals section is designed to provide you with outstanding opportunities in the real estate market, and our experienced team is ready to guide you through the buying process.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-4 max-lg:m-2 bg-[#F3EEFD] rounded-lg shadow-lg">
        <h1
          className="text-bold text-4xl underline  flex justify-center m-4 mx-8 px-4 pt-4"
          style={{ fontFamily: "youngSerif" }}
        >
          Why work with Us
        </h1>
        <h3 className=" p-4">
          At CCHomes, we understand that buying or selling
          a property is one of the most significant financial decisions you'll
          make in your lifetime. That's why we're committed to making this
          journey as seamless and rewarding as possible. With over 4 years of
          experience in the real estate industry, our team of seasoned
          professionals brings a wealth of knowledge to the table. We have
          successfully navigated through diverse market conditions, ensuring
          that you benefit from our deep industry insights. Our agents are
          experts in the local markets we serve. We have an in-depth
          understanding of neighborhood trends, property values, and market
          dynamics. This local knowledge allows us to provide you with the most
          accurate and up-to-date information.
        </h3>
      </div>

      <div className="container bg-[#100614] rounded-lg shadow-lg flex flex-col mx-4 my-8">
        <div
          className="text-bold text-4xl underline  m-4 mx-8 flex justify-center px-4 pt-4"
          style={{ fontFamily: "youngSerif" }}
        >
          <h1 className="text-white">Testimonials</h1>
        </div>
        <div className=" m-4 flex flex-row justify-between flex-wrap gap-[20px] max-lg:m-1 ">
          {images.testimonials.map((image, index) => {
            return (
              <div
                key={index + 1}
                className="flex flex-col  gap-4  p-4 m-6 w-[40%] max-lg:w-[100%] flex-wrap max:lg-m-0 max-lg:p-2 bg-[#A36671] shadow-lg rounded-lg"
              >
                <div className="flex flex-row justify-between items-center  ">
                  <div className="w-[50%]">
                    <img
                      src={image.image}
                      
                    />
                  </div>

                  <div className="text-center w-[45%] max-lg:w-full"><h6 className="">{image.text}</h6></div>
                </div>
                <div className="flex flex-row gap-8 justify-center">
                  <h3>
                    <strong>{image.name}</strong>
                  </h3>
                  <h4>
                    <strong>{image.title}</strong>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

     <div className="w-full">
     <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
     </div>
    </div>
  );
};

export default Firstscreen;
