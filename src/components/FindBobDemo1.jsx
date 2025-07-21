import React, { useState } from "react";

export const FindBobDemo1 = () => {
  var gridSize = 5;
  var totalTiles = gridSize * gridSize;
  const [clickedTiles, setclickedTiles] = useState([])

  const clickHandler =(index)=>{
    setclickedTiles([...clickedTiles,index])
    //bombpos == index
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 60px)`,
          gap: "10px",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        {Array.from({ length: totalTiles }).map((_, index) => {
          return (
            <div
            onClick={()=>{clickHandler(index)}}
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #ccc",
              //  backgroundColor:"#fff",
                backgroundColor: clickedTiles.includes(index)
                  ? "#e0e0e0"
                  : "#fff",
                cursor: "pointer",
                fontSize: "18px",
                borderRadius: "4px",
                transition: "background-color 0.3s, border-color 0.3s",
              }}
            >{index+1}</div>
          );
        })}
      </div>
    </div>
  );
};
