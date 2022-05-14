const { Console } = require("console-mpds");
const console = new Console();

let a = 13;
let b = 5;
let rem = a%b;
let quo = (a-rem)/b;
console.writeln(rem);
console.writeln(quo);
console.writeln(a/b);
console.writeln(parseInt(a/b));