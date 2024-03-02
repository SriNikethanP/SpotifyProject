import React, { useState } from "react";

export default function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#fd1234");

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function generateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
      hexColor += hex[randomColor(hex.length)];
    }

    setColor(hexColor);
  }

  function generateRandomRgbColor() {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
              display: "flex",
              justifyContent: "center",
        flexDirection : "column",

        backgroundColor: color,
      }}
    >
          <div style={{
              display: 'flex',
              justifyContent: 'center',
      }}>
        <button style={{width: "180px",height: "30px",backgroundColor: "white", border: "solid 2px black ", borderRadius: "8px"}} onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button style={{width: "180px",height: "30px",backgroundColor: "white", border: "solid 2px black ", borderRadius: "8px"}} onClick={() => setTypeOfColor("rgb")}>Create Rgb Color</button>
        <button
          style={{width: "180px",height: "30px",backgroundColor: "white", border: "solid 2px black ", borderRadius: "8px"}} onClick={
            typeOfColor === "hex"
              ? generateRandomHexColor
              : generateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          fontSize: "80px",
        }}
      >
        <h3>{typeOfColor === "hex" ? "Hex Color" : "Rgb Color"}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
