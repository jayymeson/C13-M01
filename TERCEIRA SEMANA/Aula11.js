// FUNÇÕES!


// EXERCICIOS DE FIXAÇÃO 11A
// 1 - Faça um programa, com uma função que necessite de três argumentos: 
// dois números e um sinal de operador matemático (+, -, * ou /). 
// Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.





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

function solucao(numero, x) {
    let resto = numero % x == 0;
    if (resto == 0){
        console.log(true)
    } else {
        console.log(false)
    }
}

solucao(10, 3);