const { Console } = require("console-mpds");
const console = new Console();

const FIRST_DAY_SPRING = 1;
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
let dayOfYearStartingSpring = (day + (month - 1) * 30);
dayOfYearStartingSpring = dayOfYearStartingSpring > 80 ? dayOfYearStartingSpring - 81 : dayOfYearStartingSpring + 279;
let season = (dayOfYearStartingSpring - (dayOfYearStartingSpring % 90)) / 90;
let firstDaySeason;
let msgSeason;
switch (season) {
    case 0:
        firstDaySeason = FIRST_DAY_SPRING;
        msgSeason = `primavera`;
        break;
    case 1:
        firstDaySeason = FIRST_DAY_SUMMER;
        msgSeason = `verano`;
        break;
    case 2:
        firstDaySeason = FIRST_DAY_AUTUMN;
        msgSeason = `otoño`;
        break;
    case 3:
        firstDaySeason = FIRST_DAY_WINTER;
        msgSeason = `invierno`;
        break;
}
let strecht = ((dayOfYearStartingSpring - firstDaySeason) -  (dayOfYearStartingSpring - firstDaySeason) % 30)/ 30;
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
msg += `${msgSeason}`;
console.writeln(`${msg}`);

