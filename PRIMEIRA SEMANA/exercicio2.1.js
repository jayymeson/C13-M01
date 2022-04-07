const prompt = require('prompt-sync')();
console.clear();

// 1 - Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

let num1 = +prompt(`Digite um número: `);
let num2 = +prompt(`Digite outro número: `);

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`);
} else if (num1 < num2) {
    console.log(`${num2} é maior que ${num1}`);
} else {
    console.log(`Os números são iguais`);
}