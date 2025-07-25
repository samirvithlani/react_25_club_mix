import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ApiDemo2 = () => {
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

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 2</h1>
      <button
        onClick={() => {
          addUser();
        }}
      >
        ADD USER
      </button>
    </div>
  );
};
