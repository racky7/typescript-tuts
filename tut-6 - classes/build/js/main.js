"use strict";
class Coder {
    constructor(name, music, age, lang = 'Python') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Raj = new Coder('Raj', 'Hindi', 21);
console.log(Raj.getAge());
// console.log(Raj.lang)
// console.log(Raj.age)
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Harsh = new webDev('Mac', 'Harsh', 'Lofi', 18);
console.log(Harsh.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instument}`;
    }
}
const Racky = new Guitarist('Racky', 'guitar');
console.log(Racky.play('strums'));
/////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Tanu = new Peeps('Tanu');
const Golu = new Peeps('Golu');
const Lelu = new Peeps('Lelu');
console.log(Tanu.id);
console.log(Golu.id);
console.log(Lelu.id);
console.log(Peeps.count);
/////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['Raczz', 'Cols Neil'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'ZZ Top'];
console.log(myBands.data);
myBands.data = ['Lepozz'];
