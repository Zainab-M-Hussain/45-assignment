"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let friend_new = ["Mohsin", "Bilal", "Ali"];
//  first index add
//  exercise 15 array 
console.log(friend_new);
friend_new.splice(0, 0, "nazir");
friend_new.splice(2, 0, "rizwan");
friend_new.push("imran");
for (let i = 0; i < friend_new.length; i++) {
    console.log(`i invited to ${friend_new[i]} dinner `);
}
console.log("Biger Dinner Table total people \t" + friend_new.length);
