const prompt = require('prompt-sync')();
console.clear();

// 2 - Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.

let nome = prompt(`Olá, qual seu nome? `);

let peca1 = +prompt(`${nome}, qual a quantidade de PEÇA1 que você vai querer? `);
let valorPeca1 = 7;

let peca2 = +prompt(`OK! Agora qual a quantidade de PEÇA2 que irá levar? `);
let valorPeca2 = 8;

let soma = peca1*valorPeca1 + peca2*valorPeca2;
console.log(`O valor do total é ${soma}`)
