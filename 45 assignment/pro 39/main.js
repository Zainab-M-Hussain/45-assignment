"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city1, city2, city3, country1) {
    return `${city1} ${country1}`;
}
//  first call 
const citynames = city_country("Lahore", "Sahiwal", "Karachi", "Pakistan");
console.log(citynames);
//  second call 
console.log(city_country("Jeddah", "Madina", "Taif", "Saudia Arabia"));
