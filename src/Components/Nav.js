import React, { useState, lazy, Suspense } from "react";
import images from "./images";
import { Link, NavLink } from "react-router-dom";
const Navmodal = lazy(() => import("./Navmodal"));

const Nav = () => {
  const [modals, setModals] = useState(false);
  const openModals = () => {
    setModals(true);
  };
  const closeModals = () => {
    setModals(false);
  };

  return (
    <div className="m-4  flex justify-between gap-[16rem] max-lg:p-4">
      <div>
        <a href="#">
          <img src={images.picture.logo} width={200} height={150} loading="lazy" />
        </a>
      </div>
      <nav className=" flex max-lg:hidden px-8 p-4 mr-auto   rounded-lg border-b border-gray-300 row justify-between shadow-xl bg-purple-100">
        <ul className="flex row align-items-center justify-between gap-12  text-slate-950">
          <li className="font-lg text-black font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-lg text-black font-bold">
            <Link to="/Assets">Assets</Link>
          </li>
          <li className="font-lg text-black font-bold">
            <Link to="/Blogs">Blog</Link>
          </li>
          <li className="font-lg text-black font-bold">
            <Link to="/About">About</Link>
          </li>
          <li className="font-lg text-black font-bold">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden  max-lg:block  mr-6" onClick={openModals}>
        <img src={images.picture.menu} />
        <Suspense fallback={<div>Loading...</div>}>
          {modals && <Navmodal closeModals={closeModals} />}
        </Suspense>
      </div>
    </div>
  );
};

export default Nav;
