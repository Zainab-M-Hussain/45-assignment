"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = ["apple", "orange", "banana"];
let favorite_fruits2 = ["pongrate", "peer", "grapes"];
console.log(favorite_fruits);
if (favorite_fruits[0] === "peer") {
    console.log(`You dont like ${favorite_fruits[0]}`);
}
else if (favorite_fruits[1] === "grapes") {
    console.log(`You dont like ${favorite_fruits[1]}`);
}
else if (favorite_fruits[2] === "banana") {
    console.log(`You like this ${favorite_fruits[2]}`);
}
else {
    console.log(`You dont like any fruits`);
}
