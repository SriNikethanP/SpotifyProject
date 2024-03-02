// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// let tesla = cars[1]
// let honda = cars[0]
// var teslaTopColour = tesla.coloursByPopularity[0]
// var hondaTopColour = honda.coloursByPopularity[0]
// var teslaTopSpeed = tesla.speedStats["topSpeed"]
// var hondaTopSpeed = honda.speedStats["topSpeed"]

const [honda, tesla] = cars
// console.log(honda)
const {  coloursByPopularity: [hondaTopColour], speedStats: { topSpeed: hondaTopSpeed } } = honda
const {  coloursByPopularity: [teslaTopColour], speedStats: { topSpeed: teslaTopSpeed } } = tesla
// console.log(hondaTopSpeed)

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
