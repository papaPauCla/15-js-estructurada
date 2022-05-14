const { Console } = require("console-mpds");
const console = new Console();

let minNumber = 0;
let maxNumber = 1000000;
let  userNumber;
let response;
do {
    userNumber = ((minNumber + maxNumber) - ((minNumber + maxNumber) % 2)) / 2;
    do {
      response = console.readString(`El número que has pensado es mayor (+), igual (*) o menor (-) que ${userNumber}? `);
    } while (response != `+` && response != `-` && response != `*`);
    if (response === `+`) {
        minNumber = userNumber + 1;
    }
    else {
        if (response === `-`) {
            maxNumber = userNumber - 1;
        }
    }
    if (minNumber === maxNumber) {
        response = `*`;
        userNumber = minNumber;
    }
} while (response != `*` && minNumber != maxNumber);
console.writeln(`Tú número es ${userNumber} !!!`);