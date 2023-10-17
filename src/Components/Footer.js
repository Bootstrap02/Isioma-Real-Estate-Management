import React from "react";
import images from "./images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full bg-black p-8 max-lg:p-4 flex justify-between items-start max-lg:flex-col  text-white mt-4">
      <div className="flex flex-col justify-center m-4 gap-6">
        <div className="flex flex-col gap-6 ">
          <div className="text-xl">About Us</div>
          <div>
            <h3 className="w-[60%] max-lg:w-full">
            At Isioma Real-estate company, we don't just sell properties; we
            craft dreams into reality. With an unwavering commitment to
            excellence and a passion for perfection, we redefine the real estate
            experience. Established on the pillars of integrity, trust, and
            innovation, we stand as the epitome of quality in the industry.
            </h3>
          </div>
          <Link to="/About">
            <button className="bg-red-600 rounded-lg border p-2 ">
              Learn more
            </button>
          </Link>
        </div>
        <div>
          <Link className="text-xl" to="/Advertise">
            Advertise with Us
          </Link>
          <div>
            <h3 className="w-[60%] max-lg:w-full">
            Advertise/Market Your Property with us for instant deals and
            progress in sales and promotion. click the link above
            </h3>
           
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[10rem]">
        <div>
          <div className="text-center text-xl">
            <h1>Follow Us</h1>
          </div>
          <div className="flex   justify-center items-center rounded-lg m-4 px-2 gap-8 border border-[#B59410] bg-[#000000c4]">
            <a href="#">
              <img src={images.picture.twitter} width={30} height={18} loading="lazy" />
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
        </div>
        <div className="mx-8 font-bold text-lg text-white">
          Visit us @: 23 rd, Gwagwalada, Abuja, Nigeria.
        </div>
        <div className="text-semi-bold mt-auto">
          2023 © Nigeria Property Centre. All rights reserved.
        </div>
      </div>

      <div className="flex flex-col justify-center m-4 gap-6">
        <div className="text-xl">
          <h1>Directives</h1>
        </div>
        <div className="flex flex-col gap-6 ">
          <Link to="/Contact">Contact</Link>
          <Link to="/Blogs">Blog</Link>
          <Link to="/About">About</Link>
          <Link to="/Privacy Policy">Privacy Policy</Link>
          <Link to="/Terms and Conditions">Terms and Conditions</Link>
          <Link to="/FAQs">FAQs</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
