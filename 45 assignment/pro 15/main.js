"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
let friend_guest = ["Mohsin", "Bilal", "Ali"];
for (let i = 0; i < friend_guest.length; i++) {
    if (friend_guest[i] == 'Ali') {
        console.log("Ali not invited to dinner");
        //  replacing new frined invite list 
        //  splice first index show 
        // splice second 1 delete if 0 then no delete 
        friend_guest.splice(3, 0, "Nazir");
    }
    else {
        console.log(`i invited to ${friend_guest[i]} dinner `);
    }
}
console.log(friend_guest);
