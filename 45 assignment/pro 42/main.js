"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magician(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
let magician_name = ["sara", "maria", "georgie", "john"];
magician_name = make_great(magician_name);
show_magician(magician_name);
