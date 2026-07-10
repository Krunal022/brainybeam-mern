import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Blank from "./Pages/Blank";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AxiosDemo from "./Pages/AxiosDemo";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Shop />} path="/shop" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<AxiosDemo />} path="/axiosdemo" />
        <Route element={<Blank />} path="*" />
      </Routes>
    </>
  );
};

export default App;
