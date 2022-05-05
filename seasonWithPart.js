const { Console } = require("console-mpds");
const console = new Console();
let day = 0;
let month = 0;
let year = 0;
const FIRST_DAY_SEASON = 21;
do {
    day = console.readNumber(`Escriba un día (1-30):`);
} while (day < 1 || day > 30);
do {
    month = console.readNumber(`Escriba un mes (1-12):`);
} while (month < 1 || month > 12);
do {
    year = console.readNumber(`Escriba un año (1-...):`);
} while (year < 1);
let msg = `El día ${day} del ${month} de ${year} cae a `;
if ()

console.writeln(`${msg}`);

