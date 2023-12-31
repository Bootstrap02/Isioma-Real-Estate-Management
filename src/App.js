import React, { lazy, Suspense } from "react";
import Lazyloading from "./Components/Lazyloading";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
const Firstscreen = lazy(() => import("./Components/Firstscreen"));
const Assets = lazy(() => import("./Components/Assets"));
const CheapPost = lazy(() => import("./Components/CheapPost"));
const CheapPost2 = lazy(() => import("./Components/CheapPost2"));
const Post = lazy(() => import("./Components/Post"));
const Blogs = lazy(() => import("./Components/Blogs"));


function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div className="w-[100%]"><Lazyloading/></div>}>
              <Firstscreen />
            </Suspense>
          }
        />
        <Route
          path="/Assets"
          element={
            <Suspense fallback={<div><Lazyloading/></div>}>
              <Assets />
            </Suspense>
          }
        />
        <Route
          path="/Post/:title"
          element={
            <Suspense fallback={<div><Lazyloading/></div>}>
              <Post />
            </Suspense>
          }
        />
        <Route
          path="/CheapPost/:title"
          element={
            <Suspense fallback={<div><Lazyloading/></div>}>
              <CheapPost />
            </Suspense>
          }
        />
        <Route
          path="/CheapPost2/:title"
          element={
            <Suspense fallback={<div><Lazyloading/></div>}>
              <CheapPost2 />
            </Suspense>
          }
        />
        <Route path="/About" element={<About />} />
        // <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Blogs"
          element={
            <Suspense fallback={<div><Lazyloading/></div>}>
              <Blogs />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
