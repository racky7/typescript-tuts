"use strict";
let stringArr = ['one', 'hey', 'racky'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['OLA', 2002, true];
stringArr[0] = 'raj';
stringArr.push('harsh');
guitars[0] = 'golu';
guitars.unshift('Jimmy');
//stringArr = guitars --> error
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('BTS');
//Tuple
let myTuple = ['Racky', 21, true];
let mixed = ['Harsh', 1, false];
myTuple[1] = 22;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Raj',
    prop2: true
};
exampleObj.prop1 = 'Racky';
let evh = {
    name: 'Romy',
    active: false,
    albums: [2002, 2004]
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade);
