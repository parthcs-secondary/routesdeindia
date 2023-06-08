import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blogs from "../pages/blogs/Blogs";
import Trips from "../pages/trips/Trips";
import TripPage from "../pages/tripPage/TripPage";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/:trips" element={<Trips />} />
      <Route path="/trips/:id" element={<TripPage />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

export default Routers;
