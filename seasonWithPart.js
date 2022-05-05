const { Console } = require("console-mpds");
const console = new Console();
let day = 0;
let month = 0;
let year = 0;
// primero de primavera
const FIRST_DAY_SPRING = 3 * 30 + 21;
// primero de invierno
const FIRST_DAY_SUMMER = 6 * 30 + 21;
// primero de otoño
const FIRST_DAY_AUTUMN = 9 * 30 + 21;
// primero de invierno
const FIRST_DAY_WINTER = 11 * 30 + 21;

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
let msgSeason = ``;
let dayOfYear = day + (month - 1) * 30;
console.writeln(dayOfYear);
if (dayOfYear < FIRST_DAY_SPRING || dayOfYear >= FIRST_DAY_WINTER) {
    msgSeason += `invierno`;
}
else {
    if (dayOfYear < FIRST_DAY_SUMMER) {
        msgSeason += `primavera`;
    }
    else {
        if (dayOfYear < FIRST_DAY_AUTUMN) {
            msgSeason += `verano`;
        }
        else {
            msgSeason += `otoño`;
        }
    }
}
msg += msgSeason;

console.writeln(`${msg}`);

