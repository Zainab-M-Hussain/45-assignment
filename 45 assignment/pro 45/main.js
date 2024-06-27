"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car_object = {
    car_name: "Cultus",
    car_number: 1685
};
function greetin(car_object) {
    return `Hello   ${car_object.color} \t ${car_object.brand}`;
}
console.log(`${car_object.car_name} \t ${car_object.car_number}`);
console.log(greetin({ color: "white", brand: "Honda" }));
