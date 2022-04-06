const prompt = require('prompt-sync')();
console.clear();

// 4 - Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

let anosUser = +prompt(`Digite a quantidade de dias que você já viveu: `)

let meses = anosUser % 365;
let dias = meses % 30;

console.log(`Você já viveu ${Math.floor(anosUser / 365)} anos, ${Math.floor(meses / 30)} meses e ${dias} dias! `)