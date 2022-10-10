import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../Components/Nav";
import Home from "../AnimateRoute/Home";
import About from "../AnimateRoute/About";
import Contact from "../AnimateRoute/Contact";
import AnimationWrapper from "../Components/AnimationWrapper";

function Main() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
