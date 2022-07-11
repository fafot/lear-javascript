"use strict";
// Block root
const city = "New York"; // city (br)

// Block Age
if (true) {
  let city = "Kiev"; // city (ba) "Kiev"
  // Block Kiev
  if (city === "Kiev") {
    city = "Moscow";
    console.log(city); // city "Moscow" (ba)
  }
  // Block London
  if (city === "Moscow") {
    //city (root)
    let city = "London";
    if (city === "London") {
      city = "Dubai";
      console.log(city); // Dubai
    }
  }
  console.log(city); //Moscow
}
// Block Moscow
if (city === "New York") {
  city = "Paris";
}

console.log(city); //New York