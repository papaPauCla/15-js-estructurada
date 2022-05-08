const { Console } = require("console-mpds");
const console = new Console();

const phrase = console.readString("Escribe una frase: ");
let phraseWithOutSpaces = '';
let lengthWithOutSpaces = 0;
let index = 0;
let character;
do {
    character = phrase[index];
    if (character != undefined) {
        if (character != ` `) {
            phraseWithOutSpaces += character;
            lengthWithOutSpaces++;
        }
    }
    index++;
} while (character != undefined)
index = 0;
let isPalindrome;
do {
    isPalindrome = phraseWithOutSpaces[index] === phraseWithOutSpaces[lengthWithOutSpaces - 1 - index];
    index++;

} while (isPalindrome && index < lengthWithOutSpaces / 2);
console.writeln(`La frase ${phrase} ${isPalindrome ? `es palíndromo` : `no es palíndromo`}`);