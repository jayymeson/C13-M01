const prompt = require('prompt-sync')();
console.clear();

// Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.

let nome = prompt(`Olá, qual seu nome? `);

let ano = prompt(`${nome}, quantos anos você tem? `)
let meses = prompt(`${nome}, quantos meses você tem? `)
let dia = prompt(`${nome}, quantos dias você tem? `)

let calculo = ano * 365 + meses * 30 + dia;
console.log(`${calculo}`)

