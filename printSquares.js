const { Console } = require("console-mpds");
const console = new Console();
const SIZE_OF_SIDE = 5;
const rows = console.readNumber("Escribe el número de filas: ");
const columns = console.readNumber("Escribe el número de columnas: ");
let isTopOrBottomRow;
let isBorderPosition;
for (let i = 0; i < rows * SIZE_OF_SIDE; i++) {
    isTopOrBottomRow = i % SIZE_OF_SIDE === 0 || i % SIZE_OF_SIDE === SIZE_OF_SIDE - 1;
    for (let j = 0; j < columns * SIZE_OF_SIDE; j++) {
        if (isTopOrBottomRow) {
            console.write(` * `);
        }
        else{
            isBorderPosition =  isTopOrBottomRow || j % SIZE_OF_SIDE === 0 || j % SIZE_OF_SIDE === SIZE_OF_SIDE - 1;
            console.write(`${isBorderPosition ? ` * ` : ` · `}`);
        }
    }
    console.writeln();
}
