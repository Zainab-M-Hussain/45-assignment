"use strict";
//  name cases
Object.defineProperty(exports, "__esModule", { value: true });
let userName = "Zainab Hussain";
// for lower case
console.log("lowerCase:", userName.toLocaleLowerCase());
// for upper case
console.log("upperCase:", userName.toUpperCase());
// for title case
console.log("titleCase:", userName.replace(/\b\w/g, c => c.toUpperCase()));
