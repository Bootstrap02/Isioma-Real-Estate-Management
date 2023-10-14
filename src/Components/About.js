import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import images from "./images";

const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${images.homepage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "10rem",
    color: "white",
  };

  return (
    <div className="container">
      <div className="mb-[12rem]">
        <Nav />
      </div>
      <div
        className="flex justify-center items-center m-8 rounded-sm text-4xl font-bold"
        style={backgroundImageStyle}
      >
        <h1>About Us</h1>
      </div>

      <div className="flex gap-6 max-lg:flex-col">
        <div className="gap-6 p-6">
          <div className="text-4xl my-4">
            <span className="text-green-700">A Family :</span> Elevating Dreams
            into Realty
          </div>
          <div className="my-4">
            <img src={images.family} width={600} height={600} loading="lazy" />
          </div>
        </div>
        <div className="mx-6 w-[50%] max-lg:w-[100%] my-8">
          <strong>
            At Isioma Real-Estate Agency, we don't just sell properties;
          </strong>
          <br />
          <br />
          we craft dreams into reality. With an unwavering commitment to
          excellence and a passion for perfection, we redefine the real estate
          experience. Established on the pillars of integrity, trust, and
          innovation, we stand as the epitome of quality in the industry. At the
          heart of our business is a dedication to delivering unparalleled
          service. We understand that finding the perfect home or investment
          property is not just a transaction; it's a significant life moment.
          Our team of experienced real estate professionals is here to guide you
          through every step of the process. We listen intently to your needs,
          preferences, and dreams, ensuring that every property we offer aligns
          seamlessly with your vision. No two clients are alike, and neither are
          their real estate needs. We provide personalized, tailored solutions
          designed around your specific requirements, ensuring that you find a
          property that suits your lifestyle and aspirations. Our seasoned real
          estate experts possess an in-depth understanding of local markets.
          Whether you're a first-time buyer, a seasoned investor, or looking to
          sell your property, we offer expert guidance backed by comprehensive
          market insights. We curate a portfolio of exquisite properties
          characterized by quality, luxury, and value. Each listing undergoes
          rigorous evaluation to meet our high standards, ensuring that you
          invest in or acquire a property of enduring value and exceptional
          quality. Trust is the cornerstone of our relationships. We believe in
          transparent, honest transactions. From property evaluations to
          negotiations and paperwork, we keep you informed at every stage,
          fostering trust and confidence throughout the process. Our commitment
          doesn’t end with the sale. We provide after-sales support, helping you
          settle into your new home seamlessly. From utility connections to
          local area insights, we're here to assist you beyond the transaction.
          <br />
          <br />
          <strong> Experience the Isioma Real Estate Agency Difference:</strong>
          <br />
          <br />
          &nbsp; &nbsp; When you choose Isioma Real-Estate Agency, you're not
          just a client; you become a part of our legacy. Experience real estate
          services that are defined by passion, professionalism, and a pursuit
          of perfection. Let us be your trusted partner in your real estate
          journey, turning your dreams into addresses and aspirations into
          achievements. Welcome to a world of limitless possibilities. Welcome
          to [Your Real Estate Firm Name].
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
