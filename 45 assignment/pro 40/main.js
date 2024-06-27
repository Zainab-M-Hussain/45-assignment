"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  object creation 
let album1 = {
    artist_name: "SHARUKH KHAN",
    album_title: "DDLJ"
};
let album2 = {
    artist_name: "SHARUKH KHAN ",
    album_title: "JAWAN ",
};
function make_album(obj, track_number) {
    track(track_number);
    return `${obj.artist_name}\t${obj.album_title}`;
}
// another function 
function track(n) {
    console.log(`number of tracks ${n}`);
}
console.log(make_album(album1, 5));
console.log(make_album(album2, 7));
