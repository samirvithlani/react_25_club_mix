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
import { PlayContent } from "./components/PlayContent";
import { PlayShow } from "./components/PlayShow";
import { InputDemo1 } from "./components/InputDemo1";
import { Employee } from "./components/Employee";
import { BookList } from "./components/BookList";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2 } from "./components/form/FormDemo2";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element ={<Home/>}></Route>
        <Route path="/home" element = {<Home/>}></Route>
        <Route path="/movies" element = {<Movies/>}></Route>
        <Route path="/shows" element = {<Shows/>}></Route>
        <Route path="/playcontent/:name" element = {<PlayContent/>}></Route>
        <Route path="/shows/playshow/:name" element ={<PlayShow/>}></Route>
        <Route path="/inputdemo1" element = {<InputDemo1/>}></Route>
        <Route path="/employee" element ={<Employee/>}></Route>
        <Route path="/*" element ={<h1>404</h1>}></Route>
        <Route path = "/books" element = {<BookList/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
