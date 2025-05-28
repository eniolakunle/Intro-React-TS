let isDone: boolean = false;

let age: number = 22;

let color: string = "blue";

let list: number[] =[1, 2];

let list2: Array<string> = ["hello", "bye"];

let x: [string, number] = ["say", 2];

enum Color {
    Red,
    Green,
    Yellow
}

let c: Color = Color.Red;

let notSure: any = 32;

let weDontKnow: unknown = "bye" 
//helpful with try catch
try {
    //stuff ;
} catch (error: unknown) {
    if (error instanceof Error){
        console.log("HELP!");
    }
}

// let hello: string = c;

function ting(): void {
    console.log("hell0")
}

let u: undefined = undefined;
let n: null = null;

function greet(name?: string) {
    console.log(name);
}

greet(undefined);

function loop(): never {
    while(true){

    }
}

interface User {
    name: string;
    phone: number;
}

const kunle: User = {
    name: "Kunle",
    phone: 2024365115,
}

type SSN = string | number;

const ssn: SSN = 577012049;
