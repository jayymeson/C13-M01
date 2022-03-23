const prompt = require('prompt-sync')();

// EXERCICIOS DE FIXAÇÃO 11A
// 1 - Faça um programa, com uma função que necessite de três argumentos: 
// dois números e um sinal de operador matemático (+, -, * ou /). 
// Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.

    // let calculoSoma = numA + numB;
    // let calculoSub = numA - numB;
    // let calculoMult = numA * numB;
    // let calculoDiv = numA / numB;
    
function calculadora(num1, num2, operador) {
    if (num1 =="+" ) {
        return `${num2} + ${operador} = ${num2+operador}`
    }


    
}

let num1 = +prompt(`Por favor, digite um número: `)
let num2 = +prompt(`Agora digite o segundo número: `)
let operador = prompt(`Digite um operador: `)




