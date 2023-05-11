let stringArr = ['one', 'hey', 'racky']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['OLA', 2002, true]

stringArr[0] = 'raj' 
stringArr.push('harsh')

guitars[0] = 'golu'
guitars.unshift('Jimmy')

//stringArr = guitars --> error

guitars = stringArr
mixedData = guitars

let test = []
let bands: string[] = []

bands.push('BTS')

//Tuple

let myTuple: [string, number, boolean] = ['Racky', 21, true]

let mixed = ['Harsh', 1, false]

myTuple[1] = 22

//Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Raj',
    prop2: true
}

exampleObj.prop1 = 'Racky'

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Romy',
    active: false,
    albums: [2002, 2004]
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp))

//Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade)