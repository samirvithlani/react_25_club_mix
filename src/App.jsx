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
import { FormDemo3 } from "./components/form/FormDemo3";
import { FormDemo4 } from "./components/form/FormDemo4";
import { UseMemoDemo } from "./components/UseMemoDemo";
import { FindBobDemo1 } from "./components/FindBobDemo1";
import { ApiDemo1 } from "./components/ApiDemo1";
import { OmdbApi } from "./components/OmdbApi";
import { UseEffectDemo1 } from "./components/UseEffectDemo1";
import { ApiDemo11 } from "./components/ApiDemo11";
import { ApiDemo12 } from "./components/ApiDemo12";
import { ApiDemo2 } from "./components/ApiDemo2";
import { ToastContainer, Zoom } from "react-toastify";
import { UpdateUser } from "./components/UpdateUser";
import { User } from "./components/User";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  var theme ="dark"
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <ThemeContext.Provider value={{theme}}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/shows" element={<Shows />}></Route>
        <Route path="/playcontent/:name" element={<PlayContent />}></Route>
        <Route path="/shows/playshow/:name" element={<PlayShow />}></Route>
        <Route path="/inputdemo1" element={<InputDemo1 />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/*" element={<h1>404</h1>}></Route>
        <Route path="/books" element={<BookList />}></Route>
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formdemo3" element={<FormDemo3 />}></Route>
        <Route path="/formdemo4" element={<FormDemo4 />}></Route>
        <Route path="/usememo" element={<UseMemoDemo />}></Route>
        <Route path="/findbomb" element={<FindBobDemo1 />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
        <Route path="/apidemo11" element={<ApiDemo11 />}></Route>
        <Route path="/apidemo12" element={<ApiDemo12 />}></Route>
        <Route path="/omdbsearch" element={<OmdbApi />}></Route>
        <Route path="/useEffectdemo" element={<UseEffectDemo1 />}></Route>
        <Route path="/updateuser/:id" element = {<UpdateUser/>}></Route>
        <Route path="/user" element = {<User/>}></Route>
      </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
