import React, { useState, lazy, Suspense } from "react";
import images from "./images";
import {BuyNowModals} from "../BuyNowModals";
const Gallery = lazy(() => import("./Gallery"));
const Gallery2 = lazy(() => import("./Gallery2"));
const Nav = lazy(() => import("./Nav"));
const Footer = lazy(() => import("./Footer"));

const Firstscreen = () => {
  const [modals, setModals] = useState(false);
  const openModals = () => {
    setModals(true);
  };
  const closeModals = () => {
    setModals(false);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${images.homepage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div className="flex flex-col w-[100%]">
      <div className=" flex  flex-col" style={backgroundImageStyle}>
      <div className="mb-[12rem]">
      <Suspense  fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      </div>
        <div
          className="container flex   max-lg:flex-col padding    flex-row justify-between p-4"
          style={{ minHeight: "40vh" }}
        >
          <div className="flex  flex-col justify-center items-center max-lg:hidden rounded-lg m-4 px-2 py-4 gap-8 w-fit-content border border-[#B59410] bg-[#000000c4]">
            <a href="#">
              <img src={images.twitter} width={20} height={13} loading="lazy" />
            </a>
            <a
              href="https://instagram.com/louisjoseph7969?igshid=NzZlODBkYWE4Ng=="
              target="_blank"
            >
              <img
                src={images.instagram}
                width={20}
                height={13}
                loading="lazy"
              />
            </a>
            <a href="https://www.linkedin.com/in/louis-joseph-634558153/">
              <img
                src={images.linkedin}
                width={20}
                height={13}
                loading="lazy"
              />
            </a>
            <a href="https://m.facebook.com/profile.php/?id=100011187841047">
              <img
                src={images.facebook}
                width={20}
                height={13}
                loading="lazy"
              />
            </a>
          </div>
          <div className="flex flex-row items-start m-4  py-2  justify-center border border-[#d4af37]  bg-[#000000c4] h-[100px] rounded-lg">
            <div className="px-2">
              <img src={images.star} width={20} height={13} loading="lazy" />
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
                Welcome to Isioma Real-Estate-Management Holdings Your Oasis of
                Luxury and Comfort!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end max-lg:justify-center mx-4 pr-4 ">
            <button
              className="px-4 py-2 rounded-xl   text-slate-950 bg-[#00A4AD] border border-[#504700] "
              onClick={openModals}
            >
              <strong>Book A Unit Now</strong>
            </button>
            <div>
              {modals && <BuyNowModals closeModals={closeModals} />}
            </div>
          </div>
        </div>
        <div className="mx-8 font-bold text-lg text-white">
          Visit us @: 23 rd, Gwagwalada, Abuja, Nigeria.
        </div>
      </div>
      <div className="bg-[#F3EEFF] rounded-lg shadow-lg my-8 mx-4 flex flex-col ">
        <div
          className="text-bold text-4xl underline flex justify-center m-4 mx-8 px-4 pt-4"
          style={{ fontFamily: "youngSerif" }}
        >
          <h1>Hot Deals</h1>
        </div>
        <div className="bg-[#29231E] rounded-xl max-lg:flex-col padding  border m-4 mx-8 px-8 py-12 text-white">
          <div className="flex flex-row max-lg:flex-col ">
            <div className="text-2xl  max-lg:w-[100%] p-4 ">
              <h2>
                <strong>
                  You don't have to think twice, it's a deal of a lifetime.
                </strong>
              </h2>
            </div>
            <div className="rounded-full bg-[#DA9352] ml-auto  p-4  max-lg:items-center max-lg:ml-[none] ">
              <img
                src={images.discount}
                width={100}
                height={150}
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-row justify-between max-lg:flex-col">
            <div>
              <div className="w-[90%] p-4">
                <h5>
                  Welcome to our "Hot Deals" section, where you'll find
                  exclusive opportunities to snag incredible real estate deals.
                  Whether you're a first-time buyer, an experienced investor, or
                  someone looking for their dream home, these listings offer
                  unbeatable value in today's competitive market. Don't miss out
                  – act fast, as these deals won't last long! Indulge in our
                  thoughtfully designed rooms and suites, each adorned with
                  modern amenities and stunning views that offer a serene
                  retreat from the bustling city outside. Whether you're here to
                  relax by our rooftop pool, savor delectable cuisine at our
                  renowned restaurant, or host a successful corporate event in
                  our state-of-the-art meeting facilities, [Hotel Name] caters
                  to your every need. Immerse yourself in the cultural riches of
                  Abuja, as our prime location grants you easy access to iconic
                  landmarks, vibrant markets, and a plethora of entertainment
                  options. After a day of exploration, return to the comfort of
                  your elegantly appointed room and unwind in blissful
                  tranquility.
                </h5>
              </div>
            </div>
            <div className="w-[60%] max-lg:w-[100%] m-4">
              <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
              </Suspense>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <div className="rounded-full bg-[#DA9352] mr-auto p-4 max-lg:w-[50%] ">
              <img
                src={images.discant}
                width={100}
                height={150}
                loading="lazy"
              />
            </div>
            <div className="mr-6  max-lg:w-[50%]">
              <img src={images.wow} width={250} height={200} loading="lazy" />
            </div>
          </div>
          <div className="flex flex-row justify-between max-lg:flex-col">
            <div className="w-[60%]  mx-4 my-8 max-lg:w-[100%] ">
              <Suspense fallback={<div>Loading...</div>}>
                <Gallery2 />
              </Suspense>
            </div>
            <div className="w-[50%] mt-4 ml-4 p-4 max-lg:w-[100%]">
              <h5>
                Welcome to our "Hot Deals" section, where you'll find exclusive
                opportunities to snag incredible real estate deals. Whether
                you're a first-time buyer, an experienced investor, or someone
                looking for their dream home, these listings offer unbeatable
                value in today's competitive market. Don't miss out – act fast,
                as these deals won't last long! Indulge in our thoughtfully
                designed rooms and suites, each adorned with modern amenities
                and stunning views that offer a serene retreat from the bustling
                city outside. Whether you're here to relax by our rooftop pool,
                savor delectable cuisine at our renowned restaurant, or host a
                successful corporate event in our state-of-the-art meeting
                facilities, [Hotel Name] caters to your every need. Immerse
                yourself in the cultural riches of Abuja, as our prime location
                grants you easy access to iconic landmarks, vibrant markets, and
                a plethora of entertainment options. After a day of exploration,
                return to the comfort of your elegantly appointed room and
                unwind in blissful tranquility.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="m-6 bg-[#F3EEFD] rounded-lg shadow-lg">
        <h1
          className="text-bold text-4xl underline  flex justify-center m-4 mx-8 px-4 pt-4"
          style={{ fontFamily: "youngSerif" }}
        >
          Why work with Us
        </h1>
        <h3 className=" p-4">
          At Isioma Real-estate-Management, we understand that buying or selling
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

      <div className="bg-[#100614] rounded-lg shadow-lg flex flex-col mx-4 my-8">
        <div
          className="text-bold text-4xl underline  m-4 mx-8 flex justify-center px-4 pt-4"
          style={{ fontFamily: "youngSerif" }}
        >
          <h1 className="text-white">Testimonials</h1>
        </div>
        <div className=" m-4 flex flex-row justify-center items-center flex-wrap gap-[20px]  ">
          {images.testimonials.map((image, index) => {
            return (
              <div
                key={index + 1}
                className="flex flex-col  gap-4  p-4 mx-8 my-4 w-[fit-content] flex-wrap bg-[#A36671] shadow-lg rounded-lg"
              >
                <div className="flex flex-row gap-4 items-center  ">
                  <div>
                    <img
                      src={image.image}
                      width={250}
                      height={250}
                      loading="lazy"
                    />
                  </div>

                  <div className="w-[150px]">{image.text}</div>
                </div>
                <div className="flex flex-row gap-4 justify-center">
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

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Firstscreen;
