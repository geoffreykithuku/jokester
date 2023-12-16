import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import Jokes from "./components/Jokes";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[#EEE2DE] min-h-screen px-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/random" element={<Jokes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
