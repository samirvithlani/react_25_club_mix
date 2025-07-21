import React, { useMemo, useState } from "react";

export const UseMemoDemo = () => {
  //var number = Math.floor(Math.random() * 7)
  //()=>{} function
  //[] array
  
  const [flag, setflag] = useState(false)
  const [load, setload] = useState(false)


  var number = useMemo(()=>{
    return Math.floor(Math.random()*7)
  },[load])
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>USE MEMO</h1>
      {number}
      <button
        onClick={() => {
          setflag(!flag);
        }}
      >
        change
        
      </button>
      {flag == true ?"True" :"False"}

       <button
        onClick={() => {
          setload(!load);
        }}
      >
        load
        
      </button>
      {load == true ?"True" :"False"}
    </div>
  );
};
