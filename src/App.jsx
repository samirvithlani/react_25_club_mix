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

function App() {
  return (
    <div>
      <Header></Header>
      {/* <UseStateDemo1></UseStateDemo1> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      <UseStateDemo3></UseStateDemo3>
      {/* <MapDemo1/> */}
      {/* <Content></Content>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
