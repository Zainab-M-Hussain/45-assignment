"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sandwitch = ["egg sandwitch", "chicken sandwitch", "seafood sandwitch"];
const sandwitchlist = function (...list) {
    return list.sort();
};
console.log(`${sandwitchlist(...sandwitch)}`);
console.log(sandwitchlist("seafood sandwitch", "roast beef sandwitch", "ham sandwitch"));
console.log(sandwitchlist("Nutella Sandwich", "Grilled Chicken Sandwich"));
