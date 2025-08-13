import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

export const Navbar = () => {
  var {theme,settheme} = useContext(ThemeContext)
  const chanegTheme = ()=>{
    console.log(theme)
      if(theme=="dark"){
        settheme("light")
      }
      else{
        //theme ="dark"
        settheme("dark")
      }
      
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button onClick={()=>{chanegTheme()}}>{theme}</button>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              {/* <a class="nav-link" href="/home">
                Home 
              </a> */}
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/movies">
                Movies
              </Link>
            </li>{" "}
            {/* <li class="nav-item">
              <Link class="nav-link" to="/shows">
                Shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/inputdemo1">
                inputdemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/employee">
                employee
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                form demo 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                form demo 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                form demo 3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">
                form demo 4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usememo">
                usememo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/findbomb">
                FIND BOMB
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo11">
                apidemo11
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
                apidemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo12">
                apidemo12
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/omdbsearch">
                omdbapi
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/useEffectdemo">
                useEffectdemo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/user">
                user
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/tech">
                tech
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/storageDemo1">
                storage Demo
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/animationdemo1">
                animation demo1
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/deboucesearch">
                deboucesearch
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
};
