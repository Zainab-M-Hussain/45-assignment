"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = Array(3);
greet.fill("greet");
const m_names = ["Merlin", "Teller", "Ricky"];
function show_magicians() {
    const addtwo = m_names.map((value, index) => (`${value}  ${greet[index]}  `));
    return addtwo;
}
console.log(show_magicians());
