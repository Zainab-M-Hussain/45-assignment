"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  one default country value but one is not default
function describe_city(city1, city2, city3, country1, country2 = "Saudia Arabia") {
    console.log(`${city1} city in ${country1}`);
    console.log(`${city3} city in ${country2}`);
    console.log(`${city2} not city in ${country2}`);
}
describe_city("Karachi", "Lahore", "jedda", "Pakistan");
