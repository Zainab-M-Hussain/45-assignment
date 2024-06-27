"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magician_name = void 0;
let magician_name = ["Merlin", "Teller", "Ricky"];
exports.magician_name = magician_name;
//  rest parameter 
let show_magicians = function (...magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
};
show_magicians("Merlin", "Teller", "Ricky");
