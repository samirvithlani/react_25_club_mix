import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { Header } from "./components/Header";
import Content from "./components/Content";
import { Footer } from "./components/Footer";
import { MapDemo1 } from "./components/MapDemo1";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Movies } from "./components/Movies";
import { Navbar } from "./components/Navbar";
import { Shows } from "./components/Shows";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element = {<Home/>}></Route>
        <Route path="/movies" element = {<Movies/>}></Route>
        <Route path="/shows" element = {<Shows/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
