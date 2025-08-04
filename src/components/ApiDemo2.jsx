import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ThemeContext } from "./ThemeContext";

export const ApiDemo2 = () => {
  const {theme} = useContext(ThemeContext)
  const navigate = useNavigate();

  // //https://node5.onrender.com/user/user
  // const addUser = async()=>{
  //     const userObj = {
  //         name:"deep",
  //         age:20,
  //         email:"deep@gmail.com",
  //         isActive:"true",
  //         password:"deep"
  //     }

  //     const res = await axios.post("https://node5.onrender.com/user/user",userObj)
  //     console.log(res)
  //     if(res.status==201){
  //         //alert("user addedd...")
  //         toast.success("user added successfully")
  //         //redirecation...
  //         navigate("/apidemo11")
  //     }

  // }

  //https://node5.onrender.com/user/user
  const addUser = async () => {
    const userObj = {
      name: "deep",
      age: 20,
      email: "deep@gmail.com",
      isActive: "ok",
      password: "deep",
    };

    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user",
        userObj
      );
      console.log(res);
      if (res.status == 201) {
        //alert("user addedd...")
        toast.success("user added successfully");
        //redirecation...
        navigate("/apidemo11");
      }
    } catch (err) {
        console.log(err)
        toast.error("error while adding user...")
    }
  };

  const addProducts  = async()=>{

    const data = [
      {
        name:"abc",
        price:1200,
        unit:100,
        desciption:"anb",
        colors:["red","blue","green"],
        isAvailable:true
      },
      {
        name:"pqr",
        price:200,
        unit:100,
        desciption:"anb",
        colors:["red","blue","green"],
        isAvailable:false
      }
    ]

    const res = await axios.post("http://node5.onrender.com/product/addproducts",data)
    console.log(res)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 2 {theme}</h1>
      <button
        onClick={() => {
          addProducts();
        }}
      >
        ADD USER
      </button>
    </div>
  );
};
