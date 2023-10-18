import React, { useState } from "react";
import images from "./images";
import Nav from "./Nav";
import Footer from "./Footer";

const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${images.picture.homepage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "10rem",
    color: "white",
  };

  const modalStyle = {
    zIndex: "2000",
    position: "fixed",
    top: "25%",
    left: "10%",
    }

  const [successMessage, setSuccessMessage] = useState(null);


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xeqbpyny", {
        action: "https://formspree.io/f/xeqbpyny",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
        setSuccessMessage("Message sent successfully!"); // Set success message
        setFormData({ // Reset form fields
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });

      } else {
        console.error("Form submission failed.");
        // Handle error (show an error message to the user, etc.)
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      // Handle error (show an error message to the user, etc.)
    }
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
        <h1>Contact Us</h1>
      </div>
      <div>
        <h1 className="text-4xl max-lg:2xl:">
          <strong>Get in touch with us</strong>
        </h1>
        <p>
          There are so many ways to reach out to us. You can contact us via
          phone numbers and email addresses provided below or fill the simple
          form provided below.
        </p>
      </div>
      <div className="flex gap-8 justify-center max-lg:flex-col">
        <div>
          <form
            onSubmit={handleFormSubmit}
            className="input border m-6 max-lg:m-4 "
          >
            <div className="my-2 border">
              <label className="text-white" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="w-full py-2 px-4 my-2 rounded-lg"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>
            <div className="my-2 border">
              <label className="text-white" htmlFor="email">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email Address"
                className="w-full py-2 px-4 my-2 rounded-lg"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="my-2 border">
              <label className="text-white" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
                className="w-full py-2 rounded-lg px-4 my-2"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
              />
            </div>
            <div className="my-2 border">
              <label className="text-white" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message"
                className="w-full py-2 rounded-lg px-4 my-2"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg font-semibold my-2 bg-[#D88538]"
            >
              Submit
            </button>
          </form>
        </div>
        <div  style={modalStyle} className="w-[1000px] max-lg:w-[300px]" >
          {successMessage &&  <div className='container bg-black rounded-lg w-full flex flex-col justify-center items-center m-4 p-4 max-lg:p-2 max-lg:m-2 '>
          
    <div className="flex flex-col justify-center w-full gap-4 items-center rounded-lg border-2 border-[#B59410] p-8 max-lg:p-4">
    <button className="bg-white ml-auto" onClick={() => setSuccessMessage(null)}>
      <img src= {images.picture.cancel}/>
      </button>
      <p className='text-white font-black text-center text-4xl max-lg:text-2xl'>{successMessage}</p>
      <img src= {images.picture.sent} width={200}/>
    </div>
  </div>}
        </div>
        <div className="border m-6 max-lg:m-4">
          <div>
            <h1 className="text-2xl">
              <strong>Contact Info</strong>
            </h1>
            <p>Visit us @: 23 rd, Gwagwalada, Abuja, Nigeria.</p>
            <p>Tel: +234-816-491-0957, +234-704-238-0116, +234-906-941-2463</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};


export default Contact;
