class Coder {

    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Python'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const Raj = new Coder('Raj', 'Hindi', 21)
console.log(Raj.getAge())
// console.log(Raj.lang)
// console.log(Raj.age)

class webDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
        ) {
            super(name, music, age)
            this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Harsh = new webDev('Mac', 'Harsh', 'Lofi', 18)

console.log(Harsh.getLang())
// console.log(Harsh.age)
// console.log(Harsh.lang)

////////////////////////////
interface Musician {
    name: string,
    instument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instument}`
    }
}

const Racky = new Guitarist('Racky', 'guitar')

console.log(Racky.play('strums'))

/////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number 

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const Tanu = new Peeps('Tanu')
const Golu = new Peeps('Golu')
const Lelu = new Peeps('Lelu')

console.log(Tanu.id)
console.log(Golu.id)
console.log(Lelu.id)

console.log(Peeps.count)

/////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not array of strings')
    }
}

const myBands = new Bands()
myBands.data = ['Raczz', 'Cols Neil']
console.log(myBands.data)
myBands.data = [...myBands.data, 'ZZ Top']
console.log(myBands.data)
myBands.data = ['Lepozz']