// FUNÇÕES!

const prompt = require('prompt-sync')();


// EXERCICIOS EXTRAS 11B
// 1. Exercício – Treino: Crie uma função que dado dois valores (passados como parâmetros) 
// mostre no console a soma, subtração, multiplicação e divisão desses valores.

/*
function calculo(valor, quantidade) {
    let soma = valor + quantidade
    let sub = valor - quantidade
    let mult = valor * quantidade
    let div = valor / quantidade
    console.log(`${soma}`)
    console.log(`${sub}`)
    console.log(`${mult}`)
    console.log(`${div}`)
}

calculo(12, 12);*/

// 2. Exercício – Treino:  Crie uma função que verifica se um 
// número inteiro passado como parâmetro é divisível por 3 e retorne true ou false

/*
function solucao(numero, x) {
    let resto = numero % x;
    if (resto == 0){
        console.log(true)
    } else {
        console.log(false)
    }
}

solucao(9, 3);*/

// 3 - Exercício – Treino: Faça um programa que tenha uma função chamada area(), 
// que receba as dimensões de um terreno retangular 
// (largura e comprimento) e mostre a área do terreno.


function area(largura, comprimento) {
    let tamanho = largura * comprimento
    console.log(tamanho)
    return tamanho
}

let lar = prompt(`Qual a largura do terreno? `)
let comp = prompt(`Qual o comprimento do terreno? `)

area(lar, comp);

/* 4. Crie uma função que calcula a quantidade mínima de passos que o/a Master Bluemer precisa dar para atravessar uma rua qualquer, de acordo com os seguintes requisitos:
O/A Master Bluemer (MB) deseja atravessar uma rua qualquer. Inicialmente, MB está localizado em uma posição X, e deseja chegar a uma posição maior ou igual a Y. A cada passo que MB dá, ele percorre uma distância fixa Z. Nossa função deve:
Contar a quantidade mínima de passos que MB precisa dar para atravessar a rua, ou seja, sair da posição X e chegar ou ultrapassar à posição Y;
Possuir 3 parâmetros (3 números inteiros X, Y e Z);
Retornar um número mínimo de passos que inicie da posição X e vá para uma posição maior ou igual a Y.
Exemplo de saída do programa
Dando como exemplo os números de entrada:
X = 5;
Y = 40;
D = 1.
Ao dar um passo, deve ser somada a distância inicial + a distância do passo dado, ou seja:
Ao dar um passo = 5 + 1;
Dois passos: 5 + 1 + 1.
E assim, sucessivamente, até chegar ou passar à distância final de 40. */



