const os = require("os");
const path = require("path");
const math = require("./math");

console.log("|||=======================================================|||");
console.log("Sistema Operativo: ", os.type());
console.log("Sistema Operativo versão: ", os.version());
console.log("Sistema Operativo diretorio:", os.homedir());
console.log("|||=======================================================|||");
console.log("Path do diretorio: " + __dirname);
console.log("Nome do ficheiro: " + __filename);
console.log("|||=======================================================|||");
console.log("Path do diretorio: " + path.dirname(__filename));
console.log("Nome do ficheiro: " + path.basename(__filename));
console.log("Extensão do ficheiro: " + path.extname(__filename));
console.log("Toda a informação do ficheiro: " + path.parse(__filename));
console.log("|||=======================================================|||");
console.log("Soma: ", math.add(1, 2));
console.log("Subtração: ", math.subtract(1, 2));
console.log("Multiplicação: ", math.multiply(1, 2));
console.log("Divisão: ", math.divide(1, 2));
console.log("|||=======================================================|||");
