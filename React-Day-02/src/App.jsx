import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Blank from "./Pages/Blank";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />
        <Route element={<Blank />} path="*" />
      </Routes>
    </>
  );
};

export default App;
