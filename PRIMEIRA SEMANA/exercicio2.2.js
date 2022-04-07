const prompt = require('prompt-sync')();
console.clear();

/* 2 - Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
- A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
- A mensagem "Em recuperação", se a média for entre cinco e sete;
- A mensagem "Reprovado", se a média for menor que cinco. */

let nome = prompt(`Olá, Aluno! Digite seu nome: `)

let nota1 = parseFloat(prompt(`Olá, ${nome}! Digite sua primeira nota: `));
let nota2 = parseFloat(prompt(`Digite sua segunda nota: `));
let nota3 = parseFloat(prompt(`Digite sua terceira nota: `));
let nota4 = parseFloat(prompt(`Digite sua quarta nota: `));


let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(`Sua média é: ${media}`)

if (media >= 7) {
    console.log(`${nome}, você está aprovado! `);
} else if (media >= 5) {
    console.log(`${nome}, você está em recuperação! `);
} else if (media < 5) {
    console.log(`Infelizmente está reprovado! `);
}