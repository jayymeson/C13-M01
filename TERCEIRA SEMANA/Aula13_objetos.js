console.clear();
const prompt = require('prompt-sync')();

// 2 - Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. 

let quantidade = +prompt(`Quandos funcionários você quer cadastrar? `)
let listaFuncionarios = [];

for (let i = 0; i < quantidade; i++) {

    let funcionario = {
        nome: '',
        cargo: '',
        salario: ''

    }

    funcionario.nome = prompt(`Qual seu nome? `)
    funcionario.cargo = prompt(`Qual seu cargo? `)
    funcionario.salario = prompt(`Qual seu salário? `)

    listaFuncionarios.push(funcionario);

    console.log(funcionario)

}

console.log(listaFuncionarios)
