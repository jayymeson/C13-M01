const prompt = require('prompt-sync')();
console.clear();

// 1 - Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.

let nome = prompt(`Olá, qual seu nome? `)
console.log(`Olá, ${nome}! `)
let nota1 = +prompt(`Agora digite sua primeira nota: `);
let nota2 = +prompt(`${nome}, agora a segunda nota: `)

let media = (nota1*4 + nota2*6) / 10
console.log(`Sua média é: ${media}`)