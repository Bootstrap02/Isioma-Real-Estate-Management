import React, { useState } from "react";
import images from "./Components/images";

const BuyNowModals = ({ closeModals }) => {
  const modalStyle = {
    zIndex: "2000",
    position: "absolute",
    top: "20%",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    paymentMethod: "cash",
    preferredProperty: "house1",
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
        closeModals(); // Close the modal after form submission
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
    <div
      className="bg-black py-4 px-4 m-4 input max-lg:absolute top-0 left-0 modal"
      style={modalStyle}
    >
      <div className="flex flex-row py2  text-white ">
        <div>
          <h2>Please register your interest</h2>
        </div>
        <div className="ml-auto">
          <button className="bg-white" onClick={closeModals}>
            <img src={images.cancel} />
          </button>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="my-2">
          <label className=" text-white" htmlFor="fullName">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="email">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="phoneNumber">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="paymentMethod">
            Preferred Payment Method
          </label>
          <select
            id="paymentMethod"
            className="w-full rounded-lg py-2 px-4 my-2"
            value={formData.paymentMethod}
            onChange={(e) =>
              setFormData({ ...formData, paymentMethod: e.target.value })
            }
          >
            <option value="cash">Cash</option>
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <div className="my-2">
          <label className=" text-white" htmlFor="preferredProperty">
            Preferred Property
          </label>
          <select
            id="preferredProperty"
            className="w-full py-2 rounded-lg px-4 my-2"
            value={formData.preferredProperty}
            onChange={(e) =>
              setFormData({ ...formData, preferredProperty: e.target.value })
            }
            required
          >
            <option value="house1">Property 1</option>
            <option value="house2">Property 2</option>
            <option value="house3">Property 3</option>
            <option value="house4">Property 4</option>
            <option value="house5">Property 5</option>
            <option value="house6">Property 6</option>
            <option value="house7">Property 7</option>
            <option value="house8">Property 8</option>
            <option value="house9">Property 9</option>
            <option value="house10">Property 10</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg font-semibold my-2 bg-[#D88538]"
        >
          Book a Unit
        </button>
      </form>
    </div>
  );
};


const CheapModals = ({ closeModals }) => {
  const modalStyle = {
    zIndex: "2000",
    position: "absolute",
    top: "20%",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    paymentMethod: "cash",
    preferredProperty: images.Houses.title
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
        closeModals(); // Close the modal after form submission
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
    <div
      className="bg-black py-4 px-4 m-4 input max-lg:absolute top-0 left-0 modal"
      style={modalStyle}
    >
      <div className="flex flex-row py2  text-white ">
        <div>
          <h2>Please register your interest</h2>
        </div>
        <div className="ml-auto">
          <button className="bg-white" onClick={closeModals}>
            <img src={images.cancel} />
          </button>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="my-2">
          <label className=" text-white" htmlFor="fullName">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="email">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="phoneNumber">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="paymentMethod">
            Preferred Payment Method
          </label>
          <select
            id="paymentMethod"
            className="w-full rounded-lg py-2 px-4 my-2"
            value={formData.paymentMethod}
            onChange={(e) =>
              setFormData({ ...formData, paymentMethod: e.target.value })
            }
          >
            <option value="cash">Cash</option>
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <div className="my-2">
          <label className=" text-white" htmlFor="preferredProperty">
            Property
          </label>
          <input
            type="text"
            id="preferredProperty"
            className="w-full py-2 rounded-lg px-4 my-2"
            value={formData.preferredProperty}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg font-semibold my-2 bg-[#D88538]"
        >
          Book a Unit
        </button>
      </form>
    </div>
  );
};


const CheapPostModals = ({ closeModals }) => {
  const modalStyle = {
    zIndex: "2000",
    position: "absolute",
    top: "20%",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    paymentMethod: "cash",
    preferredProperty: images.Lands.title,
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
        closeModals(); // Close the modal after form submission
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
    <div
      className="bg-black py-4 px-4 m-4 input max-lg:absolute top-0 left-0 modal"
      style={modalStyle}
    >
      <div className="flex flex-row py2  text-white ">
        <div>
          <h2>Please register your interest</h2>
        </div>
        <div className="ml-auto">
          <button className="bg-white" onClick={closeModals}>
            <img src={images.cancel} />
          </button>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="my-2">
          <label className=" text-white" htmlFor="fullName">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="email">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="phoneNumber">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="paymentMethod">
            Preferred Payment Method
          </label>
          <select
            id="paymentMethod"
            className="w-full rounded-lg py-2 px-4 my-2"
            value={formData.paymentMethod}
            onChange={(e) =>
              setFormData({ ...formData, paymentMethod: e.target.value })
            }
          >
            <option value="cash">Cash</option>
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <div className="my-2">
          <label className=" text-white" htmlFor="preferredProperty">
            Property
          </label>
          <input
            type="text"
            id="preferredProperty"
            className="w-full py-2 rounded-lg px-4 my-2"
            value={formData.preferredProperty}
            />
            </div>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg font-semibold my-2 bg-[#D88538]"
        >
          Book a Unit
        </button>
      </form>
    </div>
  );
};


const PostModals = ({ closeModals }) => {
  const modalStyle = {
    zIndex: "2000",
    position: "absolute",
    top: "20%",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    paymentMethod: "cash",
    preferredProperty: images.Card.title
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
        closeModals(); // Close the modal after form submission
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
    <div
      className="bg-black py-4 px-4 m-4 input max-lg:absolute top-0 left-0 modal"
      style={modalStyle}
    >
      <div className="flex flex-row py2  text-white ">
        <div>
          <h2>Please register your interest</h2>
        </div>
        <div className="ml-auto">
          <button className="bg-white" onClick={closeModals}>
            <img src={images.cancel} />
          </button>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="my-2">
          <label className=" text-white" htmlFor="fullName">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="email">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="phoneNumber">
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
        <div className="my-2">
          <label className=" text-white" htmlFor="paymentMethod">
            Preferred Payment Method
          </label>
          <select
            id="paymentMethod"
            className="w-full rounded-lg py-2 px-4 my-2"
            value={formData.paymentMethod}
            onChange={(e) =>
              setFormData({ ...formData, paymentMethod: e.target.value })
            }
          >
            <option value="cash">Cash</option>
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <div className="my-2">
          <label className=" text-white" htmlFor="preferredProperty">
            Property
          </label>
          <input
            type="text"
            id="preferredProperty"
            className="w-full py-2 rounded-lg px-4 my-2"
            value={formData.preferredProperty}
            />
            </div>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg font-semibold my-2 bg-[#D88538]"
        >
          Book a Unit
        </button>
      </form>
    </div>
  );
};

export  { BuyNowModals, CheapModals, CheapPostModals, PostModals };
