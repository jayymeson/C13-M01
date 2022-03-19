const prompt = require('prompt-sync')();

// Exercicios de fixação. 

// 1 - Faça um Programa que leia 20 números inteiros e armazene-os num array. 
//Armazene os números pares no array PAR e os números 
//IMPARES no array IMPAR. Imprima os três vetores.

/*let lista = [];
let pares = [];
let impares = [];
let numero = 0;

while (lista.length < 20){
    numero = +prompt('Digite um número: ');
    // if (lista.includes(numero)) {
    //     console.log('Repetido!!');
    //     continue;
    // }

    lista.push(numero);

    if (numero % 2 == 0){
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}

console.log(lista);
console.log('Pares: ');
console.log(pares);
console.log('Impares: ');
console.log(impares);

console.log();*/

// 2 - Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. 
// Imprima a média de idade e de altura.

/*let alturaPedido = +prompt('Digite a quantidade de altura que você colher: ')
let idadePedido = +prompt('Digite a quantidade de idade que você colher: ')

let alturaArray = [];
let idadeArray = [];

for (let i = 0; i < alturaPedido; i++) {
    alturaNovo = +prompt(`Digite sua altura: `)
    alturaArray.push(alturaNovo)
}

for (let i = 0; i < idadePedido; i++) {
    idadeNova = +prompt(`Digite sua idade: `)
    idadeArray.push(idadeNova)
}

console.log();

console.log(alturaArray)
console.log(idadeArray)*/

// 3 - Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e 
// peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final 
// imprima o nome e a nota 
// correspondente de cada aluno, e a média total da notas.

let solicitacao = +prompt('Digite a quantidade de alunos que você quer cadastrar?  ')

let alunos = []
let notas = []


for (let i = 0; i < solicitacao; i++ ) {
    resposta = prompt(`Qual seu nome? `);
    alunos.push(resposta)
    resposta = +prompt(`Qual sua nota? `);
    notas.push(resposta)
}
console.log(alunos);
console.log(notas);

console.log(`${alunos[0]}, sua nota é: ${notas[0]}`);
console.log(`${alunos[1]}, sua nota é: ${notas[1]}`);

let media = (notas / alunos.length)
console.log(`A média de todas as notas são: ${media}`)