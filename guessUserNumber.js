const { Console } = require("console-mpds");
const console = new Console();

let minNumber = 0;
let maxNumber = 1000000;
let  possibleNumber = (minNumber + maxNumber) / 2;
do {
    let response = ``;
    do {
      response = console.readString(`El número que has pensado es igual o mayor que ${possibleNumber}? (s/n) `);
    } while (response != `s` && response != `n`);
    if (response === `s`) {
        minNumber = possibleNumber;
        possibleNumber = ~~(minNumber + (maxNumber - minNumber) / 2);
    }
    else {
        maxNumber = possibleNumber;
        possibleNumber = ~~(maxNumber - (maxNumber - minNumber) / 2);
    }
    console.writeln(`${minNumber} - ${maxNumber}`);

} while (minNumber != maxNumber);
console.writeln(`Tú número es : ${minNumber} !!!`);