const { Console } = require("console-mpds");
const console = new Console();

const FIRST_DAY_SUMMER = 91;
const FIRST_DAY_AUTUMN = 181;
const FIRST_DAY_WINTER = 271;
let day = 0;
let month = 0;
do {
    day = console.readNumber(`Escriba un día (1-30):`);
} while (day < 1 || day > 30);
do {
    month = console.readNumber(`Escriba un mes (1-12):`);
} while (month < 1 || month > 12);
let msg = `El día ${day} del ${month} cae a `;
month--;
let myDayOfYear = (day + month * 30);
myDayOfYear = myDayOfYear > 80 ? myDayOfYear - 80 : myDayOfYear + 280;
let season;
let firstDaySeason;
if (myDayOfYear >= FIRST_DAY_WINTER) {
    season = 'invierno';
    firstDaySeason = FIRST_DAY_WINTER;
}
else{
    if (myDayOfYear >= FIRST_DAY_AUTUMN) {
        season = 'otoño';
        firstDaySeason = FIRST_DAY_AUTUMN;
    }
    else{
        if (myDayOfYear >= FIRST_DAY_SUMMER) {
            season = 'verano';
            firstDaySeason = FIRST_DAY_SUMMER;
        }
        else{
            season = 'primavera';
            firstDaySeason = 1;
        }
    }
}
let strecht = ((myDayOfYear - firstDaySeason) -  (myDayOfYear - firstDaySeason) % 30)/ 30;
switch(strecht){
    case 0:
        msg += `primeros de `;
        break;
    case 1:
        msg += `mediados de `;
        break;
    case 2:
        msg += `últimos de `;
        break;
}
msg += `${season}`;
console.writeln(`${msg}`);

