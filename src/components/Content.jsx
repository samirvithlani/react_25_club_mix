import React from "react";

export default function Content() {
  var year = 2025;
  var title = "React";
  var isAvailable = false;

  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        backgroundColor: "whitesmoke",
        border: "1px solid black",
        margin: "2px",
        padding: "5px",
        
      }}
    >
      <h1>CONTENT</h1>
      <h1>HELLO</h1>
      {year}
      <h1>{year}</h1>
      <h1>YEAR = {year}</h1>
      <h1>Title = {title}</h1>
      <h2>
        isAvailable = {isAvailable == true ? "Avialable" : "Not avaialble"}
      </h2>
    </div>
  );
}
