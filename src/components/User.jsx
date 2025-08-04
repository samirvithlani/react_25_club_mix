import React from "react";
import { UserList } from "./UserList";
import { UserContext } from "./UserContext";

export const User = () => {
  var myName = "amit";
  var color = "red"
  const callMe = ()=>{
    alert("call me !!")
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User</h1>
      <UserContext.Provider value={{ myName,color,callMe }}>
        <UserList></UserList>
      </UserContext.Provider>
      
    </div>
  );
};
