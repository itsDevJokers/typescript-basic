// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, i'm only ${age}`;

// array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// object
let wizard: object = {
    a: 'John'
}

// null & undefined
let meh: undefined = undefined;
let noo: null = null;

// tuple
let basket: [string, number];
basket = ['basketball', 5];

// enum
enum Size { Small = 1, Medium = 2, Large = 3};
let sizeName: number = Size.Small;

// any - BE CAREFUL!!!!
let whatever: any = 'aghhhhhhh nooooo!!';
whatever = true;

// void
let sing = (): void => {
    console.log('lalalala')
};

// never
let error = (): never => {
    throw Error('oopps');
}

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT!')
}
fightRobotArmy({count: 1, type: 'dragon'})
let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT!')
}

// type assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy
dog.count

// function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('FIGHT!')
}
let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
    console.log('FIGHT!')
    return 5
}

// class
class Animal {
    public sing: string = 'lalala'
    constructor(sound: string) {
        this.sing = sound;
    }

    greet(): string{
        return `Hello ${this.sing}`
    }
}

let lion = new Animal("RAAAWWRR")
lion.sing

// union
let confused: string | number = 'hello';
confused = 10

let x: number = 4